(() => {
  const page = document.querySelector('[data-page="exam"]');
  if (!page) return;

  page.innerHTML = `
    <section class="exam-v3-hero">
      <div class="exam-v3-copy">
        <p class="eyebrow">WHAKARITE • END-OF-YEAR</p>
        <h1>Build confidence.<br><span>Then prove it.</span></h1>
        <p>A guided preparation pathway across Forces &amp; Motion, Chemistry, Body Systems and Science Skills. The secure examination is not published here.</p>
        <a class="primary-button" href="#v3-plan">Begin the pathway</a>
      </div>
      <div class="exam-v3-stats" aria-label="Practice structure">
        <div><strong>24</strong><span>marked questions</span></div>
        <div><strong>6</strong><span>written responses</span></div>
        <div><strong>4</strong><span>learning areas</span></div>
      </div>
    </section>

    <nav class="exam-v3-nav" aria-label="Preparation steps">
      <a href="#v3-plan"><b>01</b><span>Plan</span></a>
      <a href="#v3-sharpen"><b>02</b><span>Sharpen</span></a>
      <a href="#v3-practice"><b>03</b><span>Full practice</span></a>
      <a href="#v3-print"><b>04</b><span>Print + review</span></a>
    </nav>

    <div class="exam-v3-main">
      <section class="v3-step v3-plan" id="v3-plan">
        <div class="v3-step-intro">
          <span class="v3-step-no">01</span>
          <p class="eyebrow dark">PLAN YOUR REVISION</p>
          <h2>Seven moves to exam ready</h2>
          <p>Complete these in any order. Your progress stays on this device.</p>
          <div class="v3-meter"><div><i id="v3-plan-bar"></i></div><strong id="v3-plan-label">0 of 7 complete</strong></div>
          <button class="v3-text-button" id="v3-reset-plan" type="button">Reset my plan</button>
        </div>
        <div class="v3-checklist" id="v3-checklist"></div>
      </section>

      <section class="v3-step v3-sharpen" id="v3-sharpen">
        <header class="v3-section-head">
          <span class="v3-step-no">02</span>
          <div><p class="eyebrow">SHARPEN THE SKILLS</p><h2>Fix a gap before the full practice</h2><p>Use this for a short warm-up. Step 3 is the substantial mixed test.</p></div>
        </header>
        <div class="v3-tool-grid">
          <article class="v3-calc">
            <div class="v3-tool-title"><span>CALCULATION LAB</span><h3>Fresh numbers every time</h3></div>
            <div class="v3-segments" id="v3-calc-modes"><button class="active" data-v3-calc="speed">Speed</button><button data-v3-calc="acceleration">Acceleration</button><button data-v3-calc="force">F = ma</button><button data-v3-calc="work">Work</button></div>
            <div class="v3-calc-question" id="v3-calc-question"></div>
            <label class="v3-answer">Your numerical answer<span><input id="v3-calc-answer" inputmode="decimal"><b id="v3-calc-unit"></b></span></label>
            <div class="v3-actions"><button class="primary-button" id="v3-check-calc">Check</button><button class="v3-ghost" id="v3-new-calc">New numbers</button></div>
            <p class="v3-feedback" id="v3-calc-feedback" aria-live="polite"></p>
          </article>
          <article class="v3-command">
            <div class="v3-tool-title"><span>MARK-MAKING</span><h3>What command words need</h3></div>
            <div class="v3-command-list">
              <button data-v3-command="describe"><b>Describe</b><span>State the pattern or observation.</span></button>
              <button data-v3-command="explain"><b>Explain</b><span>Give the science reason and connect it.</span></button>
              <button data-v3-command="calculate"><b>Calculate</b><span>Equation, substitution, answer, unit.</span></button>
              <button data-v3-command="evaluate"><b>Evaluate</b><span>Name a limitation and specific improvement.</span></button>
            </div>
            <div class="v3-command-example" id="v3-command-example"><strong>Tap a command word</strong><p>See what a strong response must contain.</p></div>
          </article>
        </div>
      </section>

      <section class="v3-step v3-practice" id="v3-practice">
        <div class="v3-practice-copy">
          <span class="v3-step-no">03</span>
          <p class="eyebrow dark">THE MAIN PRACTICE</p>
          <h2>24 marked questions.<br>Then six written responses.</h2>
          <p>Six questions come from each learning area. Your strongest score is saved, and missed ideas become a revision list.</p>
          <div class="v3-test-spec"><span><b>6</b> Forces</span><span><b>6</b> Chemistry</span><span><b>6</b> Body</span><span><b>6</b> Skills</span></div>
        </div>
        <div class="v3-test-stage" id="v3-test-stage">
          <div class="v3-launch">
            <p class="eyebrow dark">CHOOSE YOUR MODE</p>
            <div class="v3-mode-cards" id="v3-test-modes">
              <button class="active" data-v3-mode="practice"><strong>Practice mode</strong><span>Feedback after each answer</span></button>
              <button data-v3-mode="test"><strong>Test mode</strong><span>Feedback at the end</span></button>
            </div>
            <button class="primary-button v3-launch-button" id="v3-start-test">Start 24-question practice</button>
            <p id="v3-best" class="v3-best"></p>
          </div>
        </div>
      </section>

      <section class="v3-step v3-print" id="v3-print">
        <div><span class="v3-step-no">04</span><p class="eyebrow">PRINT + REVIEW</p><h2>Take the practice off-screen</h2><p>Paper A and Paper B are each 50 marks and 45 minutes. Sit one without notes, revise the gaps, then sit the second. Teacher schedules and the secure exam stay private.</p></div>
        <a class="v3-download" href="downloads/MANUKURA_Y10_Practice_Pack_2026.pdf" download><span>PDF • 11 PAGES</span><strong>Two physical practice papers</strong><b>Download ↓</b></a>
      </section>
    </div>`;

  const planItems = [
    ['Forces & motion','Force arrows, motion graphs and the four equations.'],
    ['Atoms & particles','Particle models, atomic structure and electron shells.'],
    ['Chemistry in action','pH, reactions and separation methods.'],
    ['Bones & movement','Long-bone structure, joints and antagonistic muscles.'],
    ['Breathing & exchange','Inhalation, diffusion and alveolus adaptations.'],
    ['Science skills','Variables, graphs, conclusions and improvements.'],
    ['Timed paper','Complete one printed practice paper without notes.']
  ];
  const planKey = 'y10-exam-plan-v3';
  let planState = JSON.parse(localStorage.getItem(planKey) || '[]');
  const plan = document.querySelector('#v3-checklist');
  function renderPlan(){
    plan.innerHTML = planItems.map((x,i)=>`<label class="v3-check ${planState[i]?'done':''}"><input type="checkbox" data-v3-plan="${i}" ${planState[i]?'checked':''}><b>${String(i+1).padStart(2,'0')}</b><span><strong>${x[0]}</strong><small>${x[1]}</small></span></label>`).join('');
    const done=planState.filter(Boolean).length;
    document.querySelector('#v3-plan-label').textContent=`${done} of 7 complete`;
    document.querySelector('#v3-plan-bar').style.width=`${done/7*100}%`;
  }
  plan.addEventListener('change',e=>{if(!e.target.dataset.v3Plan)return;planState[+e.target.dataset.v3Plan]=e.target.checked;localStorage.setItem(planKey,JSON.stringify(planState));renderPlan()});
  document.querySelector('#v3-reset-plan').onclick=()=>{planState=[];localStorage.removeItem(planKey);renderPlan()};
  renderPlan();

  const whole=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
  const mix=a=>[...a].sort(()=>Math.random()-.5);
  const calc={mode:'speed',answer:0,unit:''};
  function makeCalc(){
    let q;
    if(calc.mode==='speed'){const v=whole(3,14),t=whole(4,12);calc.answer=v;calc.unit='m/s';q=`A waka travels ${v*t} m in ${t} s. Calculate average speed.`}
    if(calc.mode==='acceleration'){const u=whole(0,5),t=whole(2,6),a=whole(2,5);calc.answer=a;calc.unit='m/s²';q=`A runner changes speed from ${u} m/s to ${u+a*t} m/s in ${t} s. Calculate acceleration.`}
    if(calc.mode==='force'){const m=whole(2,12),a=whole(2,6);calc.answer=m*a;calc.unit='N';q=`A ${m} kg object accelerates at ${a} m/s². Calculate net force.`}
    if(calc.mode==='work'){const f=whole(3,15)*5,d=whole(2,8);calc.answer=f*d;calc.unit='J';q=`A ${f} N force moves equipment ${d} m. Calculate work done.`}
    document.querySelector('#v3-calc-question').innerHTML=`<strong>${q}</strong><small>Equation → substitution → answer → unit</small>`;
    document.querySelector('#v3-calc-unit').textContent=calc.unit;document.querySelector('#v3-calc-answer').value='';const feed=document.querySelector('#v3-calc-feedback');feed.textContent='';feed.removeAttribute('data-state');
  }
  document.querySelector('#v3-calc-modes').onclick=e=>{if(!e.target.dataset.v3Calc)return;calc.mode=e.target.dataset.v3Calc;document.querySelectorAll('[data-v3-calc]').forEach(b=>b.classList.toggle('active',b===e.target));makeCalc()};
  document.querySelector('#v3-new-calc').onclick=makeCalc;
  document.querySelector('#v3-check-calc').onclick=()=>{const given=Number(document.querySelector('#v3-calc-answer').value),feed=document.querySelector('#v3-calc-feedback');if(!Number.isFinite(given)){feed.textContent='Enter a number first.';feed.dataset.state='warn';return}const ok=Math.abs(given-calc.answer)<.01;feed.textContent=ok?`Correct — ${calc.answer} ${calc.unit}. Include the formula and substitution in written working.`:`Not yet. The numerical answer is ${calc.answer} ${calc.unit}; now rebuild the working.`;feed.dataset.state=ok?'correct':'retry'};
  makeCalc();

  const commandExamples={
    describe:['Describe','“Breathing rate increased as exercise time increased.” State the visible pattern; do not explain why unless asked.'],
    explain:['Explain','“Breathing rate increased because working muscles needed more oxygen for respiration.” Link the science cause to the observed effect.'],
    calculate:['Calculate','Write the equation, substitute the values, solve, and finish with the correct unit.'],
    evaluate:['Evaluate','Name the exact weakness, explain its effect, then give a matching improvement — for example, reaction-time error → use light gates.']
  };
  document.querySelector('.v3-command-list').onclick=e=>{const button=e.target.closest('[data-v3-command]');if(!button)return;document.querySelectorAll('[data-v3-command]').forEach(b=>b.classList.toggle('active',b===button));const [title,text]=commandExamples[button.dataset.v3Command];document.querySelector('#v3-command-example').innerHTML=`<strong>${title}</strong><p>${text}</p>`};

  const skills=[
    {q:'A student changes light intensity and measures plant growth. What is the independent variable?',o:['Plant growth','Light intensity','Plant species','Number of leaves'],a:1,e:'The independent variable is deliberately changed.'},
    {q:'In the same investigation, what is the dependent variable?',o:['Plant growth','Light intensity','Pot size','Soil type'],a:0,e:'The dependent variable is measured.'},
    {q:'Which change best improves reliability?',o:['Repeat each condition and calculate a mean','Use one result only','Change two variables','Remove all controls'],a:0,e:'Repeats and a mean reduce random variation.'},
    {q:'Temperatures are 22, 23, 22 and 48 °C. What should happen first?',o:['Average all values','Check and repeat the 48 °C result','Delete 22 °C','Double every value'],a:1,e:'The anomalous result should be checked or repeated.'},
    {q:'Where should the independent variable be plotted?',o:['x-axis','y-axis','title','key only'],a:0,e:'The independent variable belongs on the x-axis.'},
    {q:'Which is the strongest conclusion?',o:['It worked','As exercise time increased, breathing rate increased','The hypothesis is always true','Everyone responds identically'],a:1,e:'A conclusion states the pattern supported by data.'},
    {q:'Which is controlled in a paper-plane distance test?',o:['Wing design tested','Distance flown','Same thrower and release point','Final conclusion'],a:2,e:'Controls stay the same so the test is fair.'},
    {q:'Why wear goggles when testing household solutions?',o:['Improve colour','Protect eyes from splashes','Increase pH','Make repeats identical'],a:1,e:'A safety answer links the hazard to protection.'}
  ];

  let mode='practice',items=[],index=0,score=0,answers=[];
  const bestKey='y10-full-exam-practice-v3';
  function renderBest(){const best=JSON.parse(localStorage.getItem(bestKey)||'null');document.querySelector('#v3-best').textContent=best?`Your best: ${best.score}/24 (${best.percent}%)`:'No attempt saved yet.'}
  document.querySelector('#v3-test-modes').onclick=e=>{const b=e.target.closest('[data-v3-mode]');if(!b)return;mode=b.dataset.v3Mode;document.querySelectorAll('[data-v3-mode]').forEach(x=>x.classList.toggle('active',x===b))};
  document.querySelector('#v3-start-test').onclick=startTest;
  function startTest(){
    items=[
      ...mix(revision.forces.quiz).slice(0,6).map(x=>({...x,unit:'Forces & Motion'})),
      ...mix(revision.chemistry.quiz).slice(0,6).map(x=>({...x,unit:'Chemistry'})),
      ...mix(revision.body.quiz).slice(0,6).map(x=>({...x,unit:'Body Systems'})),
      ...mix(skills).slice(0,6).map(x=>({...x,unit:'Science Skills'}))
    ];index=0;score=0;answers=[];renderQuestion();
  }
  function renderQuestion(){
    if(index>=items.length){renderResults();return}
    const item=items[index],stage=document.querySelector('#v3-test-stage');
    stage.innerHTML=`<div class="v3-running"><div class="v3-running-head"><span>${item.unit}</span><strong>Question ${index+1} of 24</strong></div><div class="v3-progress"><i style="width:${index/24*100}%"></i></div><h3>${item.q}</h3><div class="v3-options">${item.o.map((x,i)=>`<button data-v3-answer="${i}"><b>${String.fromCharCode(65+i)}</b><span>${x}</span></button>`).join('')}</div><p class="v3-feedback" aria-live="polite"></p><button class="primary-button v3-next" hidden>${index===23?'Finish marked section':'Next question'}</button></div>`;
    const opts=[...stage.querySelectorAll('[data-v3-answer]')],feed=stage.querySelector('.v3-feedback'),next=stage.querySelector('.v3-next');
    opts.forEach(b=>b.onclick=()=>{if(opts.some(x=>x.disabled))return;const chosen=+b.dataset.v3Answer,ok=chosen===item.a;opts.forEach((x,i)=>{x.disabled=true;if(mode==='practice'&&i===item.a)x.classList.add('correct-choice')});b.classList.add(ok?'selected-correct':'selected-wrong');if(ok)score++;answers.push({item,chosen,correct:ok});feed.textContent=mode==='practice'?(ok?'Correct. ':'Not yet. ')+item.e:'Answer recorded. Feedback will appear at the end.';feed.dataset.state=mode==='practice'?(ok?'correct':'retry'):'neutral';next.hidden=false});
    next.onclick=()=>{index++;renderQuestion()};document.querySelector('#v3-practice').scrollIntoView({behavior:'smooth',block:'start'});
  }
  function renderResults(){
    const pct=Math.round(score/24*100),old=JSON.parse(localStorage.getItem(bestKey)||'null');if(!old||score>old.score)localStorage.setItem(bestKey,JSON.stringify({score,percent:pct,date:new Date().toISOString()}));
    const units=['Forces & Motion','Chemistry','Body Systems','Science Skills'];const breakdown=units.map(unit=>{const rows=answers.filter(x=>x.item.unit===unit);return{unit,score:rows.filter(x=>x.correct).length,total:rows.length}});const missed=answers.filter(x=>!x.correct);
    document.querySelector('#v3-test-stage').innerHTML=`<div class="v3-results"><p class="eyebrow dark">MARKED SECTION COMPLETE</p><div class="v3-result-hero"><strong>${score}<span>/24</span></strong><div><h3>${pct>=84?'Strong and exam ready':pct>=67?'A solid base — now close the gaps':'Use the breakdown to target revision'}</h3><p>Your best attempt stays on this device.</p></div></div><div class="v3-breakdown">${breakdown.map(x=>`<div><strong>${x.score}/${x.total}</strong><span>${x.unit}</span></div>`).join('')}</div><details class="v3-review"><summary>Review ${missed.length} missed question${missed.length===1?'':'s'}</summary>${missed.length?missed.map(x=>`<article><b>${x.item.unit}</b><p>${x.item.q}</p><small>${x.item.e}</small></article>`).join(''):'<p>Nothing missed — excellent retrieval.</p>'}</details><div class="v3-written-launch"><div><p class="eyebrow dark">NEXT: SIX WRITTEN RESPONSES</p><h3>Turn knowledge into full-mark explanations</h3><p>Write first, reveal the model, then self-assess.</p></div><button class="primary-button" id="v3-start-written">Begin written section</button></div><button class="v3-ghost" id="v3-retry">Try a fresh 24-question set</button></div>`;
    document.querySelector('#v3-start-written').onclick=()=>renderWritten(0,[]);document.querySelector('#v3-retry').onclick=startTest;
  }
  function renderWritten(i,ratings){
    const stage=document.querySelector('#v3-test-stage');
    if(i>=writtenPractice.length){const secure=ratings.filter(x=>x==='secure').length;stage.innerHTML=`<div class="v3-finish"><p class="eyebrow dark">PATHWAY COMPLETE</p><strong>${secure}/6</strong><h3>written responses self-rated secure</h3><p>Rework any “nearly” or “not yet” answer, then use the physical papers in Step 4.</p><a class="primary-button" href="#v3-print">Go to physical papers</a></div>`;return}
    const item=writtenPractice[i];stage.innerHTML=`<div class="v3-written"><div class="v3-running-head"><span>${item.unit}</span><strong>Written response ${i+1} of 6</strong></div><div class="v3-progress"><i style="width:${i/6*100}%"></i></div><h3>${item.q}</h3><label>Write before revealing the model<textarea rows="7" placeholder="Use complete sentences and scientific vocabulary."></textarea></label><button class="primary-button" id="v3-show-model">Reveal model answer</button><div class="v3-model" id="v3-model" hidden><span>MODEL ANSWER</span><p>${item.a}</p><strong>How close was your response?</strong><div><button data-v3-rating="not-yet">Not yet</button><button data-v3-rating="nearly">Nearly</button><button data-v3-rating="secure">Secure</button></div></div></div>`;
    document.querySelector('#v3-show-model').onclick=e=>{document.querySelector('#v3-model').hidden=false;e.currentTarget.hidden=true};document.querySelector('#v3-model').onclick=e=>{if(!e.target.dataset.v3Rating)return;renderWritten(i+1,[...ratings,e.target.dataset.v3Rating])};document.querySelector('#v3-practice').scrollIntoView({behavior:'smooth',block:'start'});
  }
  renderBest();
})();
