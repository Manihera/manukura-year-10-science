(() => {
  const page = document.querySelector('[data-page="exam"]');
  if (!page) return;

  page.innerHTML = `
    <div class="page-hero exam-hero"><div><p class="eyebrow">WHAKARITE</p><h1>End-of-year</h1><p>Prepare the knowledge and skills — without previewing the secure paper.</p></div><div class="hero-index">04</div></div>
    <div class="exam-prep-shell">
      <section class="prep-intro"><div><p class="eyebrow dark">2026 PREPARATION PATHWAY</p><h2>Know it. Use it. Explain it.</h2><p>The secure examination is not on this site. These activities use different situations, values and substances while practising the same course knowledge and science skills.</p></div><div class="security-note"><strong>Student-safe revision</strong><span>Fresh contexts</span><span>Randomised calculations</span><span>No exam answers</span></div></section>

      <section class="exam-weighting" aria-label="Preparation coverage">
        <article><strong>25</strong><span>Forces &amp; Motion</span><small>forces, motion, graphs, Newton's laws</small></article>
        <article><strong>25</strong><span>Chemistry</span><small>particles, atoms, pH, reactions, separation</small></article>
        <article><strong>30</strong><span>Body Systems</span><small>bones, muscles, breathing, gas exchange</small></article>
        <article><strong>20</strong><span>Science Skills</span><small>variables, data, graphs, evaluation</small></article>
      </section>

      <section class="prep-download"><div><p class="eyebrow dark">PRINT + PRACTISE</p><h2>Two physical practice papers</h2><p>Paper A and Paper B are 50 marks and 45 minutes each. Print them, sit one without notes, revise the gaps, then sit the second. Their questions are different from the secure examination.</p></div><a class="primary-button" href="downloads/MANUKURA_Y10_Practice_Pack_2026.pdf" download>Download practice pack PDF</a></section>

      <section class="prep-grid">
        <article class="prep-card"><p class="eyebrow dark">7-DAY PLAN</p><h2>Your preparation checklist</h2><p>Saved on this device. Complete the actions in any order.</p><div id="prep-plan" class="prep-plan"></div><div class="prep-progress"><span id="prep-progress-label">0 of 7 complete</span><div><i id="prep-progress-bar"></i></div></div><button class="soft-button" id="reset-prep" type="button">Reset plan</button></article>
        <article class="prep-card generator-card"><p class="eyebrow dark">CALCULATION LAB</p><h2>Generate a fresh calculation</h2><div class="segmented" id="calc-modes" role="group" aria-label="Calculation type"><button data-calc="speed" class="active">Speed</button><button data-calc="acceleration">Acceleration</button><button data-calc="force">F = ma</button><button data-calc="work">Work</button></div><div id="calc-question" class="challenge-box"></div><label class="answer-label">Your answer <input id="calc-answer" inputmode="decimal" autocomplete="off"><span id="calc-unit"></span></label><div class="action-row"><button class="primary-button" id="check-calc" type="button">Check</button><button class="soft-button" id="new-calc" type="button">New question</button></div><p id="calc-feedback" class="live-feedback" aria-live="polite"></p></article>
      </section>

      <section class="skill-builder"><div class="section-heading"><p class="eyebrow dark">EXAM SKILL BUILDER</p><h2>Practise four ways marks are earned</h2><p>Choose a skill. Questions rotate so you can make another attempt.</p></div><div class="skill-tabs" id="skill-tabs" role="tablist"><button data-skill="recall" class="active">Recall</button><button data-skill="interpret">Interpret data</button><button data-skill="explain">Explain</button><button data-skill="evaluate">Evaluate</button></div><div id="skill-stage" class="skill-stage"></div></section>

      <section class="mixed-sprint"><div class="test-heading"><div><p class="eyebrow dark">MIXED SPRINT</p><h2>Can you secure 4 out of 5?</h2><p>Five questions are drawn from across the course. Beat your own best on this device.</p></div><button class="primary-button" id="start-sprint" type="button">Start 5-question sprint</button></div><div id="sprint-stage"></div></section>
    </div>`;

  const planItems = [
    'Review force arrows, motion graphs and the four equations.',
    'Review particle models, atoms, the periodic table and electron shells.',
    'Review pH, reactions and choosing separation methods.',
    'Review bones, joints and antagonistic muscle pairs.',
    'Review breathing, alveoli and gas exchange.',
    'Practise variables, tables, graphs, conclusions and improvements.',
    'Sit one printed practice paper under timed conditions.'
  ];
  const planKey = 'y10-exam-prep-plan-v1';
  let planState = JSON.parse(localStorage.getItem(planKey) || '[]');
  const plan = document.querySelector('#prep-plan');
  function renderPlan() {
    plan.innerHTML = planItems.map((text, i) => `<label><input type="checkbox" data-plan="${i}" ${planState[i] ? 'checked' : ''}><span><b>Day ${i + 1}</b>${text}</span></label>`).join('');
    const done = planState.filter(Boolean).length;
    document.querySelector('#prep-progress-label').textContent = `${done} of 7 complete`;
    document.querySelector('#prep-progress-bar').style.width = `${done / 7 * 100}%`;
  }
  plan.addEventListener('change', e => { if (!e.target.matches('[data-plan]')) return; planState[+e.target.dataset.plan] = e.target.checked; localStorage.setItem(planKey, JSON.stringify(planState)); renderPlan(); });
  document.querySelector('#reset-prep').addEventListener('click', () => { planState = []; localStorage.removeItem(planKey); renderPlan(); });
  renderPlan();

  const calc = { mode: 'speed', answer: 0, unit: '' };
  const whole = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  function makeCalc() {
    let q;
    if (calc.mode === 'speed') { const s = whole(3, 14), t = whole(4, 12), d = s * t; calc.answer = s; calc.unit = 'm/s'; q = `A paddler travels ${d} m in ${t} s. Calculate average speed.`; }
    if (calc.mode === 'acceleration') { const u = whole(0, 5), t = whole(2, 6), a = whole(2, 5), v = u + a * t; calc.answer = a; calc.unit = 'm/s²'; q = `A runner changes speed from ${u} m/s to ${v} m/s in ${t} s. Calculate acceleration.`; }
    if (calc.mode === 'force') { const m = whole(2, 12), a = whole(2, 6); calc.answer = m * a; calc.unit = 'N'; q = `A ${m} kg object accelerates at ${a} m/s². Calculate the net force.`; }
    if (calc.mode === 'work') { const f = whole(3, 15) * 5, d = whole(2, 8); calc.answer = f * d; calc.unit = 'J'; q = `A force of ${f} N moves equipment ${d} m. Calculate the work done.`; }
    document.querySelector('#calc-question').innerHTML = `<strong>${q}</strong><small>Write the equation, substitute, then include the unit.</small>`;
    document.querySelector('#calc-unit').textContent = calc.unit;
    document.querySelector('#calc-answer').value = '';
    document.querySelector('#calc-feedback').textContent = '';
  }
  document.querySelector('#calc-modes').addEventListener('click', e => { if (!e.target.dataset.calc) return; calc.mode = e.target.dataset.calc; document.querySelectorAll('#calc-modes button').forEach(b => b.classList.toggle('active', b === e.target)); makeCalc(); });
  document.querySelector('#new-calc').addEventListener('click', makeCalc);
  document.querySelector('#check-calc').addEventListener('click', () => { const given = Number(document.querySelector('#calc-answer').value); const f = document.querySelector('#calc-feedback'); if (!Number.isFinite(given)) { f.textContent = 'Enter a number first.'; f.dataset.state = 'warn'; return; } const ok = Math.abs(given - calc.answer) < 0.01; f.textContent = ok ? `Correct — ${calc.answer} ${calc.unit}. Equation, substitution, answer and unit earns the full method.` : `Not yet. Check the formula and operation. The correct numerical answer is ${calc.answer} ${calc.unit}; now try to reconstruct the working.`; f.dataset.state = ok ? 'correct' : 'retry'; });
  makeCalc();

  const skills = {
    recall: [
      { q:'Which structure connects muscle to bone?', choices:['Ligament','Tendon','Cartilage','Marrow'], a:1, why:'A tendon transfers the pull of a contracting muscle to a bone.' },
      { q:'Which electron arrangement belongs to magnesium?', choices:['2,8','2,8,2','2,8,8','2,7,3'], a:1, why:'Magnesium has atomic number 12, so a neutral atom has 12 electrons: 2,8,2.' },
      { q:'A horizontal section on a distance–time graph means…', choices:['fast motion','acceleration','stationary','returning'], a:2, why:'Distance is not changing while time passes, so the object is stationary.' }
    ],
    interpret: [
      { q:'Breathing rate changes from 16 to 34 breaths/min during exercise, then returns to 18. Which conclusion is supported?', choices:['Exercise lowered breathing rate','Breathing rate rose during exercise and recovered afterwards','Breathing stopped after exercise','The data prove everyone responds identically'], a:1, why:'The conclusion states the observed pattern without claiming more than the data show.' },
      { q:'A reaction gives temperatures 21, 22, 41 and 22 °C. What should happen before calculating a mean?', choices:['Use all four','Remove 41 as an anomaly with a stated reason','Remove the lowest value','Double every value'], a:1, why:'41 °C is inconsistent with the repeat pattern and should be checked or repeated as an anomalous result.' },
      { q:'As ramp height increases, travel time decreases. Which graph axes are appropriate?', choices:['x: time, y: height','x: ramp height, y: travel time','x: trial number, y: ramp height','Either variable on either axis'], a:1, why:'The independent variable goes on the x-axis; the dependent variable goes on the y-axis.' }
    ],
    explain: [
      { q:'Why does oxygen move from an alveolus into the blood?', choices:['It is pulled by the heart','It diffuses down a concentration gradient through a thin wall','It is heavier than carbon dioxide','The diaphragm pushes it through'], a:1, why:'A higher oxygen concentration in the alveolus creates a gradient; the one-cell-thick wall gives a short diffusion distance.' },
      { q:'Why does a larger force produce greater acceleration when mass stays constant?', choices:['F = ma, so a = F ÷ m','Work = force × distance','Balanced forces speed objects up','Mass disappears'], a:0, why:'Rearranging Newton’s Second Law gives a = F ÷ m. With fixed mass, increasing force increases acceleration.' },
      { q:'Why can filtration separate sand from water?', choices:['Sand evaporates first','Sand is insoluble and its particles are trapped by the filter','Water is magnetic','Sand dissolves in the filter'], a:1, why:'The liquid and dissolved substances pass through; insoluble sand particles remain as residue.' }
    ],
    evaluate: [
      { q:'A student times a fast trolley with a hand stopwatch. Best specific improvement?', choices:['Use a different colour trolley','Use light gates or video timing','Use a longer ruler only','Write results in pen'], a:1, why:'Electronic or video timing reduces human reaction-time error.' },
      { q:'Only one trial is completed at each pH. Best reliability improvement?', choices:['Change the dependent variable','Repeat each pH and calculate a mean','Use fewer pH values','Round all results'], a:1, why:'Repeats reveal variation and a mean reduces the effect of random error.' },
      { q:'In a mass–acceleration test, which variable should be controlled?', choices:['Added mass','Acceleration','The pulling force','The conclusion'], a:2, why:'To isolate the effect of mass, the pulling force and other conditions must stay the same.' }
    ]
  };
  let skillMode = 'recall';
  function renderSkill() {
    const item = skills[skillMode][whole(0, skills[skillMode].length - 1)];
    const stage = document.querySelector('#skill-stage');
    stage.innerHTML = `<p class="skill-kicker">${skillMode.toUpperCase()}</p><h3>${item.q}</h3><div class="skill-choices">${item.choices.map((c,i)=>`<button data-answer="${i}" type="button">${c}</button>`).join('')}</div><p class="live-feedback" aria-live="polite"></p><button class="soft-button next-skill" type="button">Another ${skillMode} question</button>`;
    stage.querySelector('.skill-choices').addEventListener('click', e => { if (e.target.dataset.answer === undefined) return; const chosen = +e.target.dataset.answer; stage.querySelectorAll('[data-answer]').forEach((b,i) => { b.disabled = true; b.classList.toggle('correct-choice', i === item.a); b.classList.toggle('wrong-choice', i === chosen && i !== item.a); }); const f = stage.querySelector('.live-feedback'); f.textContent = `${chosen === item.a ? 'Correct.' : 'Not yet.'} ${item.why}`; f.dataset.state = chosen === item.a ? 'correct' : 'retry'; });
    stage.querySelector('.next-skill').addEventListener('click', renderSkill);
  }
  document.querySelector('#skill-tabs').addEventListener('click', e => { if (!e.target.dataset.skill) return; skillMode = e.target.dataset.skill; document.querySelectorAll('#skill-tabs button').forEach(b=>b.classList.toggle('active', b===e.target)); renderSkill(); });
  renderSkill();

  const sprintBank = Object.values(skills).flat();
  let sprint = [], sprintIndex = 0, sprintScore = 0;
  function showSprint() {
    const stage = document.querySelector('#sprint-stage');
    if (sprintIndex >= sprint.length) { const key='y10-exam-sprint-best'; const old=+(localStorage.getItem(key)||0); const best=Math.max(old,sprintScore); localStorage.setItem(key,best); stage.innerHTML=`<div class="sprint-result"><strong>${sprintScore}/5</strong><h3>${sprintScore >= 4 ? 'Mission secured' : 'Revise the feedback, then try again'}</h3><p>Your best on this device: ${best}/5.</p><button class="primary-button" id="sprint-again" type="button">Try another set</button></div>`; stage.querySelector('#sprint-again').addEventListener('click', startSprint); return; }
    const item=sprint[sprintIndex]; stage.innerHTML=`<div class="sprint-head"><span>Question ${sprintIndex+1} of 5</span><b>${sprintScore} correct</b></div><h3>${item.q}</h3><div class="skill-choices">${item.choices.map((c,i)=>`<button data-sprint-answer="${i}" type="button">${c}</button>`).join('')}</div><p class="live-feedback" aria-live="polite"></p>`;
    stage.querySelector('.skill-choices').addEventListener('click', e => { if(e.target.dataset.sprintAnswer===undefined)return; const chosen=+e.target.dataset.sprintAnswer; if(chosen===item.a)sprintScore++; stage.querySelectorAll('[data-sprint-answer]').forEach((b,i)=>{b.disabled=true;b.classList.toggle('correct-choice',i===item.a);b.classList.toggle('wrong-choice',i===chosen&&i!==item.a)}); const f=stage.querySelector('.live-feedback'); f.textContent=`${chosen===item.a?'Correct.':'Not yet.'} ${item.why}`; f.dataset.state=chosen===item.a?'correct':'retry'; const next=document.createElement('button'); next.className='primary-button sprint-next'; next.textContent=sprintIndex===4?'See result':'Next question'; next.addEventListener('click',()=>{sprintIndex++;showSprint()}); stage.append(next); });
  }
  function startSprint(){ sprint=[...sprintBank].sort(()=>Math.random()-.5).slice(0,5); sprintIndex=0;sprintScore=0;showSprint(); }
  document.querySelector('#start-sprint').addEventListener('click',startSprint);
})();
