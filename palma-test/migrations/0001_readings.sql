CREATE TABLE IF NOT EXISTS readings (
  id TEXT PRIMARY KEY,
  method_version TEXT NOT NULL,
  reading_json TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  delivery_status TEXT NOT NULL DEFAULT 'ready'
    CHECK (delivery_status IN ('ready', 'sending', 'sent', 'failed')),
  delivery_started_at INTEGER,
  delivered_to TEXT,
  delivered_at INTEGER,
  delivery_error_code TEXT
);

CREATE INDEX IF NOT EXISTS idx_readings_expires_at ON readings(expires_at);
CREATE INDEX IF NOT EXISTS idx_readings_delivery_status ON readings(delivery_status);
