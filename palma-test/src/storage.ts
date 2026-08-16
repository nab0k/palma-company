import type { PalmaReading } from "./schema";

export interface StoredReading {
  id: string;
  method_version: string;
  reading: PalmaReading;
  expires_at: number;
  delivery_status: "ready" | "sending" | "sent" | "failed";
  delivered_to: string | null;
}

interface StoredReadingRow {
  id: string;
  method_version: string;
  reading_json: string;
  expires_at: number;
  delivery_status: StoredReading["delivery_status"];
  delivered_to: string | null;
}

export async function storeReading(
  db: D1Database,
  id: string,
  methodVersion: string,
  reading: PalmaReading,
  now: number,
  ttlDays: number,
): Promise<void> {
  const expiresAt = now + ttlDays * 24 * 60 * 60 * 1000;
  await db.prepare(
    `INSERT INTO readings
      (id, method_version, reading_json, created_at, expires_at, delivery_status)
     VALUES (?1, ?2, ?3, ?4, ?5, 'ready')`,
  ).bind(id, methodVersion, JSON.stringify(reading), now, expiresAt).run();
}

export async function getStoredReading(db: D1Database, id: string, now: number): Promise<StoredReading | null> {
  const row = await db.prepare(
    `SELECT id, method_version, reading_json, expires_at, delivery_status, delivered_to
     FROM readings WHERE id = ?1 AND expires_at > ?2`,
  ).bind(id, now).first<StoredReadingRow>();
  if (!row) return null;

  try {
    return { ...row, reading: JSON.parse(row.reading_json) as PalmaReading };
  } catch {
    return null;
  }
}

export async function claimDelivery(db: D1Database, id: string, email: string, now: number): Promise<boolean> {
  const staleBefore = now - 2 * 60 * 1000;
  const result = await db.prepare(
    `UPDATE readings
     SET delivery_status = 'sending', delivery_started_at = ?1,
         delivered_to = ?2, delivery_error_code = NULL
     WHERE id = ?3 AND expires_at > ?1
       AND (
         delivery_status IN ('ready', 'failed')
         OR (delivery_status = 'sending' AND delivery_started_at < ?4)
       )`,
  ).bind(now, email, id, staleBefore).run();
  return result.meta.changes === 1;
}

export async function markDelivered(db: D1Database, id: string, email: string, now: number): Promise<void> {
  await db.prepare(
    `UPDATE readings SET delivery_status = 'sent', delivered_to = ?1,
       delivered_at = ?2, delivery_error_code = NULL WHERE id = ?3`,
  ).bind(email, now, id).run();
}

export async function markDeliveryFailed(db: D1Database, id: string, errorCode: string): Promise<void> {
  await db.prepare(
    `UPDATE readings SET delivery_status = 'failed', delivery_error_code = ?1 WHERE id = ?2`,
  ).bind(errorCode.slice(0, 80), id).run();
}

export async function deleteExpiredReadings(db: D1Database, now: number): Promise<void> {
  await db.prepare("DELETE FROM readings WHERE expires_at <= ?1").bind(now).run();
}
