const stages = [
  {
    id: 'reciprocity',
    note: 'We begin with reciprocity. Numbers describe reach; the first exchange tells us more about the relationship underneath it.',
    question: 'Who are the people around your work, and what already moves between you?',
    hint: 'Describe who they are and where the relationship lives, then what they give, ask for or do in response — and what they receive from you.',
    placeholder: 'There is an audience of owners and senior managers around my work. Some reply with detailed questions and introduce colleagues; they receive analysis and direct access to my thinking…',
    min: 80,
    max: 1200,
  },
  {
    id: 'belonging',
    note: 'Belonging appears when people recognise a boundary and can say “we” without being told to.',
    question: 'Where, if anywhere, does a sense of “we” appear?',
    hint: 'Look for shared language, identity, boundaries, inside references or relationships between people. “I do not know yet” is useful evidence too.',
    placeholder: 'They share a professional background and recognise the same problems, but I do not know whether they see themselves as a group…',
    min: 20,
    max: 500,
  },
  {
    id: 'agency',
    note: 'Agency distinguishes participation from consumption. People have agency when they can change a decision, a priority or what happens next.',
    question: 'Can these people influence what you do or what happens around the work?',
    hint: 'Describe a real decision they shaped — or say plainly if communication still moves in one direction.',
    placeholder: 'Their questions influence what I write about, but they do not yet shape offers, formats or business decisions…',
    min: 20,
    max: 500,
  },
  {
    id: 'rhythm',
    note: 'Rhythm makes a relationship repeatable. It appears in practices and expectations that do not need to be rebuilt every time.',
    question: 'What happens again and again?',
    hint: 'Look for recurring encounters, rituals, behaviours, formats or moments when the same people reliably return.',
    placeholder: 'A core group returns to the same discussion every month, refers to earlier conversations and expects a new analysis each week…',
    min: 20,
    max: 500,
  },
  {
    id: 'dissent',
    note: 'Dissent shows whether a relationship can survive honesty rather than depend on constant agreement.',
    question: 'What happens when someone disagrees?',
    hint: 'Describe a real moment of tension, challenge or criticism — and whether the relationship continued afterwards.',
    placeholder: 'People challenge individual ideas in public, but we have not yet observed what happens after a serious disagreement…',
    min: 20,
    max: 400,
  },
  {
    id: 'mutual_value',
    note: 'Mutual value asks whether both sides would notice the relationship disappearing. Strategy then asks what this relationship should make possible next.',
    question: 'What would both sides lose if this disappeared — and what should the relationship make possible next?',
    hint: 'Name the value already at stake and the concrete change you want: a decision, clients, partners, a product, advocacy or something else.',
    placeholder: 'They would lose a trusted place for difficult questions; I would lose access to their experience. Next, I need to learn which problems could become an advisory offer…',
    min: 40,
    max: 700,
  },
];

const API_ORIGIN = window.location.hostname === 'palma-test.nabokmanberstein.workers.dev'
  || ['localhost', '127.0.0.1'].includes(window.location.hostname)
  ? ''
  : 'https://palma-test.nabokmanberstein.workers.dev';

const apiUrl = (path) => `${API_ORIGIN}${path}`;

const questions = [
  'Does it clap back?',
  'Who gets to say “we”?',
  'Can people change what happens?',
  'What happens again and again?',
  'Can disagreement survive?',
  'Would both sides miss it?',
];

const answers = {};
let stageIndex = 0;
let scanTimer;
let reading;
let readingRequestId;

const dialogBody = document.querySelector('#dialog-body');
const stepLabel = document.querySelector('#step-label');
const introView = document.querySelector('#intro-view');
const questionView = document.querySelector('#question-view');
const beginButton = document.querySelector('#begin-button');
const note = document.querySelector('#palma-note');
const question = document.querySelector('#dialog-question');
const hint = document.querySelector('#answer-hint');
const form = document.querySelector('#answer-form');
const answer = document.querySelector('#answer');
const count = document.querySelector('#answer-count');
const limit = document.querySelector('#answer-limit');
const error = document.querySelector('#inline-error');
const backButton = document.querySelector('#back-button');

function showStage(index) {
  stageIndex = index;
  const stage = stages[index];
  introView.hidden = true;
  questionView.hidden = false;
  stepLabel.textContent = `Question ${String(index + 1).padStart(2, '0')} / 06`;
  note.textContent = stage.note;
  question.textContent = stage.question;
  hint.textContent = stage.hint;
  answer.placeholder = stage.placeholder;
  answer.minLength = stage.min;
  answer.maxLength = stage.max;
  answer.value = answers[stage.id] || '';
  count.textContent = answer.value.length;
  limit.textContent = stage.max;
  error.hidden = true;
  backButton.hidden = false;
  answer.focus();
}

beginButton.addEventListener('click', () => showStage(0));

answer.addEventListener('input', () => { count.textContent = answer.value.length; });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const stage = stages[stageIndex];
  const value = answer.value.trim();
  if (value.length < stage.min) {
    error.textContent = `Please write at least ${stage.min} characters. A rough answer is completely fine.`;
    error.hidden = false;
    return;
  }
  answers[stage.id] = value;
  if (stageIndex < stages.length - 1) {
    showStage(stageIndex + 1);
    return;
  }
  requestReading();
});

backButton.addEventListener('click', () => {
  if (stageIndex > 0) {
    showStage(stageIndex - 1);
    return;
  }
  questionView.hidden = true;
  introView.hidden = false;
  stepLabel.textContent = 'Before we begin';
  backButton.hidden = true;
});

function showThinking() {
  stepLabel.textContent = 'Reading the lines';
  backButton.hidden = true;
  let index = 0;
  dialogBody.innerHTML = `
    <div class="thinking">
      <div class="scan-number" id="scan-number">01</div>
      <h2 id="scan-question">${questions[0]}</h2>
      <div class="scan-track"><i id="scan-progress"></i></div>
    </div>`;
  scanTimer = window.setInterval(() => {
    index = Math.min(index + 1, questions.length - 1);
    document.querySelector('#scan-number').textContent = String(index + 1).padStart(2, '0');
    document.querySelector('#scan-question').textContent = questions[index];
    document.querySelector('#scan-progress').style.width = `${16 + index * 16}%`;
  }, 1800);
}

async function requestReading() {
  showThinking();
  try {
    const response = await fetch(apiUrl('/analyze'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        situation: [
          `Reciprocity:\n${answers.reciprocity}`,
          `Belonging:\n${answers.belonging}`,
          `Agency:\n${answers.agency}`,
          `Rhythm:\n${answers.rhythm}`,
          `Dissent:\n${answers.dissent}`,
          `Mutual value and desired change:\n${answers.mutual_value}`,
        ].join('\n\n'),
        desired_change: answers.mutual_value,
        language: 'en',
      }),
    });
    const data = await response.json();
    if (!response.ok || !data.reading) throw new Error(data?.error?.message || 'The reading could not be completed.');
    window.clearInterval(scanTimer);
    reading = data.reading;
    readingRequestId = data.request_id;
    renderPreview();
  } catch (caught) {
    window.clearInterval(scanTimer);
    dialogBody.innerHTML = `
      <div class="thinking">
        <p class="palma-note">The lines did not resolve this time.</p>
        <h2>${escapeHtml(caught instanceof Error ? caught.message : 'The reading could not be completed.')}</h2>
        <button class="restart-button" id="retry-button" type="button">Try the reading again ↗</button>
      </div>`;
    document.querySelector('#retry-button').addEventListener('click', requestReading);
  }
}

function renderPreview() {
  stepLabel.textContent = 'Your Palma Reading';
  dialogBody.innerHTML = `
    <div class="result-view">
      <section class="result-top">
        <div class="result-kicker"><span>Relationship now</span><strong>${escapeHtml(reading.relationship_type.replace('_', ' '))}</strong></div>
        <h2>${escapeHtml(reading.reading_title)}</h2>
        <p>${escapeHtml(reading.one_sentence_reading)}</p>
      </section>
      <div class="result-preview">
        <article><small>The central tension</small><p>${escapeHtml(reading.central_tension)}</p></article>
        <article><small>Why this reading</small><p>${escapeHtml(reading.relationship_type_reason)}</p></article>
      </div>
      <section class="email-panel" id="email-panel">
        <h3>Open the six lenses, the decision and the 30-day experiment.</h3>
        <form class="email-form" id="email-form">
          <input type="email" required aria-label="Email for the complete reading" placeholder="you@company.com">
          <button type="submit">Send & open ↗</button>
          <small>We use your address only to deliver this reading. The result and address are deleted from the test database after seven days.</small>
          <p class="delivery-status" id="delivery-status" role="status" hidden></p>
        </form>
      </section>
    </div>`;
  document.querySelector('#email-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const form = event.currentTarget;
    const input = form.querySelector('input');
    const button = form.querySelector('button');
    const status = form.querySelector('#delivery-status');
    button.disabled = true;
    button.textContent = 'Sending…';
    status.hidden = true;
    try {
      const response = await fetch(apiUrl('/deliver-reading'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ request_id: readingRequestId, email: input.value.trim() }),
      });
      const data = await response.json();
      if (!response.ok || !data.delivered) throw new Error(data?.error?.message || 'The email could not be sent.');
      renderFullReading(input.value.trim(), data.preview_only === true);
    } catch (caught) {
      button.disabled = false;
      button.textContent = 'Try again ↗';
      status.textContent = caught instanceof Error ? caught.message : 'The email could not be sent.';
      status.hidden = false;
    }
  });
  dialogBody.scrollTop = 0;
}

function renderFullReading(deliveredTo, previewOnly = false) {
  const lensHtml = reading.dimensions.map((dimension, index) => `
    <article class="lens-row">
      <span class="lens-number">0${index + 1}</span>
      <div class="lens-content">
        <div class="lens-heading"><h3>${escapeHtml(dimension.question)}</h3><span class="signal">${escapeHtml(dimension.signal)}</span></div>
        <p class="lens-observation">${escapeHtml(dimension.observation)}</p>
        <div class="lens-detail">
          <div><small>Evidence in your answers</small>${dimension.evidence.length
            ? `<ul>${dimension.evidence.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
            : '<p>No direct evidence yet.</p>'}</div>
          <div><small>Still to learn</small><p>${escapeHtml(cleanMissingInformation(dimension.missing_information))}</p></div>
        </div>
      </div>
    </article>`).join('');
  const followUpHtml = reading.follow_up_questions.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const roomQuestionsHtml = reading.questions_for_the_room.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  dialogBody.innerHTML = `
    <div class="result-view full-reading">
      <p class="delivery-confirmation">${previewOnly
        ? `Local preview — the reading was not emailed to ${escapeHtml(deliveredTo)}.`
        : `The complete reading has been sent to ${escapeHtml(deliveredTo)}.`}</p>
      <section class="result-top full-result-top">
        <div class="result-kicker"><span>Your relationship now</span><strong>${escapeHtml(reading.relationship_type.replaceAll('_', ' '))}</strong></div>
        <h2>${escapeHtml(reading.reading_title)}</h2>
        <p>${escapeHtml(reading.one_sentence_reading)}</p>
      </section>
      <section class="reading-frame">
        <article><small>The central tension</small><p>${escapeHtml(reading.central_tension)}</p></article>
        <article><small>Why this reading</small><p>${escapeHtml(reading.relationship_type_reason)}</p></article>
      </section>
      <header class="reading-section-head"><span>01 / The six lenses</span><p>Each signal reflects evidence in your answers. Unknown is a finding, not a failure.</p></header>
      ${lensHtml}
      <section class="decision"><span class="result-kicker">02 / The decision</span><h3>${escapeHtml(reading.decision_to_make)}</h3></section>
      <section class="experiment">
        <small>03 / 30-day experiment</small>
        <h3>${escapeHtml(reading.thirty_day_experiment.name)}</h3>
        <div class="experiment-grid"><div><small>What to do</small><p>${escapeHtml(reading.thirty_day_experiment.action)}</p></div><div><small>Evidence to watch</small><p>${escapeHtml(reading.thirty_day_experiment.evidence_to_watch)}</p></div></div>
      </section>
      <section class="question-bank">
        <div><small>Two unknowns to resolve</small><ol>${followUpHtml}</ol></div>
        <div><small>Questions for the room</small><ol>${roomQuestionsHtml}</ol></div>
      </section>
      <section class="reading-limit"><small>Limits of this reading</small><p>${escapeHtml(reading.limits_of_this_reading)}</p></section>
      <section class="result-actions">
        <a href="mailto:nabok@palma.company?subject=${encodeURIComponent(`Palma Reading — ${reading.reading_title}`)}">Discuss this reading with Palma ↗</a>
        <button class="restart-button" id="restart-button" type="button">Read another situation ↺</button>
      </section>
    </div>`;
  document.querySelector('#restart-button').addEventListener('click', () => window.location.reload());
  dialogBody.scrollTop = 0;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function cleanMissingInformation(value) {
  const text = String(value).trim();
  if (/^[<>]?\s*\d+\s*(characters?|words?)$/i.test(text)) {
    return 'A concrete example of this behaviour is still needed.';
  }
  return text;
}

async function loadLocalResultPreview() {
  const previewId = new URLSearchParams(window.location.search).get('preview_id');
  if (!previewId || !['localhost', '127.0.0.1'].includes(window.location.hostname)) return;
  try {
    const response = await fetch(`/preview-reading?id=${encodeURIComponent(previewId)}`);
    const data = await response.json();
    if (!response.ok || !data.reading) return;
    reading = data.reading;
    readingRequestId = data.request_id;
    stepLabel.textContent = 'Your Palma Reading';
    backButton.hidden = true;
    renderFullReading('preview@palma.company', true);
  } catch {
    // The normal test remains available if a local preview has expired.
  }
}

loadLocalResultPreview();
