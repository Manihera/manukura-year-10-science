(() => {
  const page = document.querySelector('[data-page="exam"]');
  if (!page) return;

  page.innerHTML = `
    <section class="exam-v3-hero">
      <div class="exam-v3-copy">
        <p class="eyebrow">WHAKARITE • END-OF-YEAR</p>
        <h1>Build confidence.<br><span>Then prove it.</span></h1>
        <p>A guided preparation pathway across Forces &amp; Motion, Chemistry, Body Systems and Science in Practice. The secure examination is not published here.</p>
        <button class="primary-button" type="button" data-v3-jump="v3-plan">Begin the pathway</button>
      </div>
      <div class="exam-v3-stats" aria-label="Practice structure">
        <div><strong>100</strong><span>question bank</span></div>
        <div><strong>6</strong><span>written responses</span></div>
        <div><strong>24</strong><span>questions per attempt</span></div>
      </div>
    </section>

    <nav class="exam-v3-nav" aria-label="Preparation steps">
      <button type="button" data-v3-jump="v3-plan"><b>01</b><span>Plan</span></button>
      <button type="button" data-v3-jump="v3-sharpen"><b>02</b><span>Sharpen</span></button>
      <button type="button" data-v3-jump="v3-practice"><b>03</b><span>Full practice</span></button>
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
          <div><p class="eyebrow">BUILD YOUR CONFIDENCE</p><h2>Use the words, pictures and formulas</h2><p>Start with the support. Then try the full practice without notes.</p></div>
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
            <div class="v3-tool-title"><span>WORD HELP</span><h3>What the question is asking</h3></div>
            <div class="v3-command-list">
              <button data-v3-command="describe"><b>Describe</b><span>State the pattern or observation.</span></button>
              <button data-v3-command="explain"><b>Explain</b><span>Give the science reason and connect it.</span></button>
              <button data-v3-command="calculate"><b>Calculate</b><span>Equation, substitution, answer, unit.</span></button>
              <button data-v3-command="evaluate"><b>Improve</b><span>Say what to change and how it helps.</span></button>
            </div>
            <div class="v3-command-example" id="v3-command-example"><strong>Tap a command word</strong><p>See what a strong response must contain.</p></div>
          </article>
        </div>
        <div class="v3-visual-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:20px">
          <article style="background:#fff;border-radius:18px;padding:18px"><strong><u>Net force</u></strong><svg viewBox="0 0 280 110" role="img" aria-label="Opposite force arrows on a box" style="display:block;width:100%;height:auto;margin-top:8px"><defs><marker id="v3arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#d82432"/></marker></defs><rect x="108" y="34" width="64" height="44" rx="8" fill="#153a4a"/><line x1="106" y1="56" x2="28" y2="56" stroke="#d82432" stroke-width="6" marker-end="url(#v3arrow)"/><line x1="174" y1="56" x2="256" y2="56" stroke="#d82432" stroke-width="9" marker-end="url(#v3arrow)"/><text x="30" y="30" font-size="15">40 N</text><text x="218" y="30" font-size="15">70 N</text></svg><p><b>Opposite directions?</b> Subtract. The answer points toward the bigger force.</p></article>
          <article style="background:#fff;border-radius:18px;padding:18px"><strong><u>pH reminder</u></strong><div aria-label="pH scale from acid to alkali" style="height:28px;border-radius:8px;margin:18px 0 6px;background:linear-gradient(90deg,#d82432,#ff8b32,#ffd84d,#48a85b,#38a8c9,#465ac5,#7b3c91)"></div><div style="display:flex;justify-content:space-between;font-weight:800"><span>0<br><em>acid</em></span><span style="text-align:center">7<br><em>neutral</em></span><span style="text-align:right">14<br><em>alkali</em></span></div></article>
          <article style="background:#fff;border-radius:18px;padding:18px"><strong><u>Breathing pathway</u></strong><p style="font-size:1.05rem;line-height:1.8"><b>Exercise</b> → muscles need more <b><i>oxygen</i></b> → <b><i>breathing rate</i></b> rises → during recovery it falls toward resting rate.</p><p>In graphs, quote <b>two values</b> when you describe the change.</p></article>
        </div>
      </section>

      <section class="v3-step v3-practice" id="v3-practice">
        <div class="v3-practice-copy">
          <span class="v3-step-no">03</span>
          <p class="eyebrow dark">THE MAIN PRACTICE</p>
          <h2>24 marked questions.<br>Then six written responses.</h2>
          <p>Each set has six questions from every learning area. Read one question at a time and choose the best answer. Questions are held back between attempts so you practise the whole bank before it resets.</p>
          <div class="v3-test-spec"><span><b>6</b> Forces</span><span><b>6</b> Chemistry</span><span><b>6</b> Body</span><span><b>6</b> Practice</span></div>
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

    </div>`;

  document.querySelectorAll('[data-v3-jump]').forEach(button=>button.addEventListener('click',()=>{
    document.querySelector(`#${button.dataset.v3Jump}`)?.scrollIntoView({behavior:'smooth',block:'start'});
  }));

  const planItems = [
    ['Forces & motion','Force arrows, motion graphs and the four equations.'],
    ['Atoms & particles','Particle models, atomic structure and electron shells.'],
    ['Chemistry in action','pH, the hydrogen test, filtration, evaporation and magnetism.'],
    ['Bones & movement','Long-bone structure, joints and antagonistic muscles.'],
    ['Breathing & exchange','Inhalation, diffusion and alveolus adaptations.'],
    ['Science in Practice','Read tables and graphs, use pH results, choose separation methods and explain recovery.'],
    ['Mixed practice','Complete one 24-question session in Test mode without notes.']
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
  const formatPrompt=text=>text
    .replace(/\b(calculate|state|explain|describe|name|write|choose|use|give|compare)\b/gi,'<strong><u>$1</u></strong>')
    .replace(/\b(net force|average speed|acceleration|work done|universal indicator|breathing rate|oxygen|carbon dioxide|acid|neutral|alkali|filtration|evaporation|hydrogen|mean|reliable)\b/gi,'<strong><em>$1</em></strong>');
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
    describe:['Describe','Say what happened. Use two numbers if a table or graph is given: “Breathing rate fell from 36 to 18 breaths per minute.”'],
    explain:['Explain','Give the science reason: “Breathing stayed high because the body still needed oxygen for recovery.”'],
    calculate:['Calculate','Write the formula, put in the numbers, solve it, and include the unit.'],
    evaluate:['Improve','Say what to change and how it helps: “Repeat each test and calculate a mean so one unusual result has less effect.”']
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

  const extraForces=[
    mcq('25 N left and 25 N right gives a net force of…',['0 N','25 N left','25 N right','50 N'],0,'Equal opposite forces are balanced, so the net force is 0 N.'),
    mcq('The unit used for force is…',['joule','newton','metre per second','kilogram'],1,'Force is measured in newtons (N).'),
    mcq('On a free-body diagram, weight points…',['upward','downward','in the direction of motion','toward the largest arrow'],1,'Weight is the gravitational force and acts downward.'),
    mcq('A table supporting a book exerts a force…',['upward on the book','downward on the book','only sideways','only if the book moves'],0,'The normal/support force acts upward on the book.'),
    mcq('A steeper distance–time graph represents…',['a slower speed','a faster speed','zero distance','less mass'],1,'Distance–time gradient represents speed; steeper means faster.'),
    mcq('A line returning toward zero distance shows an object…',['moving back toward the start','speeding up in one direction','remaining stationary','gaining mass'],0,'A decreasing distance from the start means the object is returning.'),
    mcq('A horizontal line above zero on a speed–time graph means…',['stationary','constant speed','constant acceleration','returning to the start'],1,'The speed is unchanged, so it is moving at constant speed.'),
    mcq('A downward slope on a speed–time graph means…',['acceleration in the positive direction','deceleration','constant speed','zero time'],1,'Speed is decreasing with time.'),
    mcq('An object travels at 12 m/s for 3 s. Distance travelled?',['4 m','15 m','36 m','48 m'],2,'distance = speed × time = 12 × 3 = 36 m.'),
    mcq('A runner covers 60 m at 5 m/s. Time taken?',['12 s','55 s','65 s','300 s'],0,'time = distance ÷ speed = 60 ÷ 5 = 12 s.'),
    mcq('Velocity changes from 10 m/s to 22 m/s in 4 s. Acceleration?',['3 m/s²','8 m/s²','12 m/s²','32 m/s²'],0,'a = (22−10) ÷ 4 = 3 m/s².'),
    mcq('A 5 kg object has a net force of 8 N. Its acceleration is…',['0.625 m/s²','1.6 m/s²','13 m/s²','40 m/s²'],1,'a = F ÷ m = 8 ÷ 5 = 1.6 m/s².'),
    mcq('20 J of work moves an object 4 m. The force is…',['5 N','16 N','24 N','80 N'],0,'F = W ÷ d = 20 ÷ 4 = 5 N.')
  ];
  const extraChemistry=[
    mcq('An element contains…',['one type of atom','two substances mixed','only molecules','a fixed pH'],0,'An element is made from one type of atom.'),
    mcq('Air is best classified as a…',['single element','compound','mixture','pure metal'],2,'Air contains several gases that are not chemically bonded together.'),
    mcq('A compound contains elements that are…',['chemically bonded in a fixed ratio','mixed in any ratio','always metals','separated by filtration'],0,'Compounds contain different elements chemically bonded in fixed proportions.'),
    mcq('The charge of a proton is…',['−1','0','+1','+2'],2,'A proton has a +1 charge.'),
    mcq('The charge of a neutron is…',['−1','0','+1','variable'],1,'A neutron has no electrical charge.'),
    mcq('Which particles are found in the nucleus?',['electrons only','protons and neutrons','protons and electrons','neutrons and shells'],1,'The nucleus contains protons and neutrons.'),
    mcq('A neutral sodium atom has electron arrangement…',['2,8,1','2,7,2','8,2,1','2,8,8'],0,'Sodium has 11 electrons arranged 2,8,1.'),
    mcq('Atomic number 8 identifies…',['carbon','nitrogen','oxygen','neon'],2,'Oxygen has 8 protons, so its atomic number is 8.'),
    mcq('A horizontal row in the periodic table is a…',['group','period','shell','mixture'],1,'Horizontal rows are periods.'),
    mcq('A solution with pH 7 is…',['strongly acidic','neutral','alkaline','a metal'],1,'pH 7 is neutral.'),
    mcq('A solution with pH 11 is…',['acidic','neutral','alkaline','always colourless'],2,'Values above pH 7 are alkaline.'),
    mcq('To recover dissolved salt while losing the water, use…',['filtration','evaporation','magnetism','sieving'],1,'Evaporation removes the water and leaves the dissolved solid.'),
    mcq('A mixture contains iron filings and sand. What is the best separation method?',['evaporation','filtration','magnetic separation','pH testing'],2,'A magnet attracts the iron but not the sand.')
  ];
  const extraBody=[
    mcq('The muscle type attached to bones is…',['cardiac','smooth','skeletal','involuntary only'],2,'Skeletal muscles pull on bones to create movement.'),
    mcq('Smooth muscle is found mainly in…',['the heart only','walls of internal organs','tendons','bone marrow'],1,'Smooth muscle occurs in structures such as the gut and blood vessels.'),
    mcq('A tendon connects…',['bone to bone','muscle to bone','muscle to muscle','cartilage to blood'],1,'Tendons transfer the pull of a muscle to a bone.'),
    mcq('The tough outer membrane of a long bone is the…',['marrow','periosteum','cartilage','alveolus'],1,'The periosteum covers the outside of bone and supports repair and blood supply.'),
    mcq('Compact bone mainly provides…',['dense strength','gas exchange','joint lubrication','muscle contraction'],0,'Compact bone is dense and gives strength.'),
    mcq('Spongy bone is best described as…',['a light internal lattice','the smooth joint covering','a muscle attachment','the lung lining'],0,'Spongy bone has a strong, lightweight lattice structure.'),
    mcq('During elbow flexion, the biceps…',['contracts','relaxes','becomes a ligament','pushes the bone'],0,'The biceps contracts and shortens during flexion.'),
    mcq('During elbow flexion, the triceps…',['contracts','relaxes','becomes cartilage','produces blood cells'],1,'The triceps relaxes while the biceps contracts.'),
    mcq('Ligaments help a joint by…',['connecting bone to bone','connecting muscle to bone','making red blood cells','moving oxygen'],0,'Ligaments connect bones and help stabilise joints.'),
    mcq('During inhalation, pressure inside the chest…',['increases above outside pressure','decreases so air moves in','stays identical at all times','forces carbon dioxide into blood'],1,'Increased chest volume lowers pressure, so air moves into the lungs.'),
    mcq('During exhalation, the diaphragm usually…',['contracts and flattens','relaxes and domes upward','moves oxygen into blood','stays permanently flat'],1,'The diaphragm relaxes and returns to a dome shape.'),
    mcq('A large alveolar surface area allows…',['more diffusion at once','less blood flow','thicker walls','air to become solid'],0,'A larger surface provides more space for gas exchange.'),
    mcq('A rich capillary supply around alveoli helps by…',['maintaining concentration gradients','stopping diffusion','drying the surface','reducing surface area'],0,'Blood flow carries gases away and toward the alveoli, maintaining diffusion gradients.')
  ];
  const extraSkills=[
    {q:'A student changes ramp height and measures travel time. What is the independent variable?',o:['Travel time','Ramp height','Trolley mass recorded afterward','The conclusion'],a:1,e:'The independent variable is the factor deliberately changed.'},
    {q:'In the ramp investigation, what is the dependent variable?',o:['Ramp height','Travel time','Ramp material kept the same','Release point'],a:1,e:'The dependent variable is the measured outcome.'},
    {q:'Which is a suitable control variable in a ramp test?',o:['Use the same trolley','Change the trolley each trial','Change height and surface together','Measure no time'],a:0,e:'Keeping the trolley the same helps make it a fair test.'},
    {q:'Why calculate a mean from repeated measurements?',o:['To reduce the effect of random variation','To change the independent variable','To remove every error','To avoid recording units'],a:0,e:'A mean from repeats gives a more reliable estimate.'},
    {q:'A result far away from the others is called…',o:['a control','an anomaly','a unit','a hypothesis'],a:1,e:'An anomalous result does not fit the overall pattern.'},
    {q:'The dependent variable normally belongs on the…',o:['x-axis','y-axis','graph title only','equipment list'],a:1,e:'The measured dependent variable is plotted on the y-axis.'},
    {q:'What must appear beside numerical column headings?',o:['A prediction','Units','A risk only','The student name'],a:1,e:'Units make measurements interpretable.'},
    {q:'Which graph is usually best for continuous numerical data?',o:['Line or scatter graph','Pictogram only','Unlabelled pie chart','No graph'],a:0,e:'Continuous variables are usually displayed on axes with plotted points.'},
    {q:'Which graph is usually best for separate categories?',o:['Bar graph','Continuous line with no gaps','Distance–time graph only','No table'],a:0,e:'Bars suit distinct categories.'},
    {q:'A strong graph title should identify…',o:['the relationship being investigated','only the student name','the expected answer','the safety equipment'],a:0,e:'The title should state what the graph shows.'},
    {q:'A conclusion should be based mainly on…',o:['the collected evidence','what the student hoped for','one preferred result','a different experiment'],a:0,e:'Scientific conclusions must match the results.'},
    {q:'Which evaluation is most useful?',o:['Timing by hand may add reaction-time error; use light gates','The experiment was bad','Do it better','Change every variable'],a:0,e:'A useful evaluation links a specific limitation to a matching improvement.'},
    {q:'Which tool would improve accuracy when measuring 8.4 mL?',o:['A measuring cylinder with fine divisions','An unmarked cup','A dinner plate','A stopwatch'],a:0,e:'Fine scale divisions allow a more precise volume reading.'},
    {q:'A hazard is…',o:['something with the potential to cause harm','the chance of a correct answer','the final graph','a controlled variable'],a:0,e:'A hazard is a source of possible harm.'},
    {q:'A risk describes…',o:['the chance and seriousness of harm','the independent variable','the mean result','the equipment brand'],a:0,e:'Risk considers how likely harm is and how serious it could be.'},
    {q:'Which is a testable hypothesis?',o:['Increasing ramp height will decrease travel time','Science is interesting','The trolley is nice','Results are results'],a:0,e:'A testable hypothesis predicts a relationship between measurable variables.'},
    {q:'Why keep the release method the same in every ramp trial?',o:['To control an extra variable','To change acceleration randomly','To avoid repeats','To create an anomaly'],a:0,e:'A consistent release makes comparisons between ramp heights fair.'}
  ];

  const alignedForces=[
    mcq('A distance-time graph is flat from 8 s to 12 s. The object is…',['moving at constant speed','stationary','accelerating','returning'],1,'A flat distance-time line means the distance does not change.'),
    mcq('A distance-time line slopes downward toward zero. The object is…',['moving back toward its start','stationary','gaining mass','moving farther away'],0,'Its distance from the start is decreasing.'),
    mcq('A 9 N force moves a box 7 m. The work done is…',['16 J','63 J','1.3 J','72 J'],1,'work = force × distance = 9 × 7 = 63 J.'),
    mcq('A 96 N push east and 41 N friction west produce…',['55 N east','55 N west','137 N east','0 N'],0,'Opposite forces subtract: 96 − 41 = 55 N east.')
  ];
  const alignedChemistry=[
    mcq('A gas gives a squeaky pop with a lit splint. It is…',['oxygen','carbon dioxide','hydrogen','nitrogen'],2,'Hydrogen gives a squeaky pop with a lit splint.'),
    mcq('Why can filtration not remove dissolved salt from water?',['The dissolved salt passes through the filter paper with the water','Salt is magnetic','Water is a solid','Filter paper changes the pH'],0,'Dissolved salt particles pass through the filter paper with the water.'),
    mcq('A calcium atom has electron arrangement 2,8,8,2. It normally forms…',['Ca²⁺','Ca²⁻','Ca⁺','Ca⁴⁺'],0,'Calcium loses two outer electrons to form Ca²⁺.'),
    mcq('Group 18 elements are very unreactive because they have…',['a full outer electron shell','no protons','only one shell','a pH of 18'],0,'A full outer shell makes Group 18 elements stable.')
  ];
  const alignedBody=[
    mcq('Articular cartilage at the end of a bone mainly…',['reduces friction and absorbs shock','connects muscle to bone','produces movement','carries air'],0,'Cartilage gives a smooth, cushioning joint surface.'),
    mcq('During knee flexion, the hamstrings…',['contract while the quadriceps relax','relax while the quadriceps contract','both become ligaments','do not change'],0,'The hamstrings contract to bend the knee while the quadriceps relax.'),
    mcq('During inhalation, lower pressure inside the chest causes air to…',['move into the lungs','move out of the lungs','enter the blood directly','stop moving'],0,'Air moves from higher outside pressure to lower pressure in the lungs.')
  ];
  const alignedSkills=[
    {q:'Three acceleration trials are 2.1, 2.4 and 2.1 m/s². What is the mean?',o:['2.0 m/s²','2.2 m/s²','2.4 m/s²','6.6 m/s²'],a:1,e:'(2.1 + 2.4 + 2.1) ÷ 3 = 2.2 m/s².'},
    {q:'A student changes added mass on the same trolley. Which pair should be controlled?',o:['Ramp angle and release point','Added mass and acceleration','Mean and conclusion','Both graph axes'],a:0,e:'Ramp angle and release point must stay the same for a fair comparison.'},
    {q:'Mass increases while acceleration falls. Which conclusion is supported?',o:['Increasing mass decreased acceleration in this investigation','Mass never affects motion','Acceleration caused mass','The results prove every trolley behaves identically'],a:0,e:'A sound conclusion stays within the relationship shown by the data.'},
    {q:'Which change most directly improves the reliability of a mean?',o:['Complete more trials at each mass','Remove the units','Use one result only','Change the ramp each time'],a:0,e:'More repeated trials reduce the influence of random variation.'}
  ];

  const scienceInPractice=[
    mcq('A trolley travels 2.0 m in 4.0 s. What is its average speed?',['0.5 m/s','2.0 m/s','6.0 m/s','8.0 m/s'],0,'speed = distance ÷ time = 2.0 ÷ 4.0 = 0.5 m/s.'),
    mcq('Ramp height rises from 5 cm to 20 cm. Travel time falls from 5.2 s to 2.8 s. Which statement describes the pattern?',['Higher ramps gave shorter travel times','Higher ramps gave longer travel times','Travel time stayed the same','There is no pattern'],0,'Use both values: as ramp height increased, travel time decreased.'),
    mcq('The times are 3.2 s, 3.4 s and 3.3 s. What is the mean?',['3.0 s','3.3 s','3.4 s','9.9 s'],1,'Add the three times and divide by 3: 9.9 ÷ 3 = 3.3 s.'),
    mcq('A student times a trolley three times at each height. Why?',['To make the result more reliable','To change the height','To increase the distance','To remove the unit'],0,'Repeats let the student compare results and calculate a mean.'),
    mcq('One trolley time is very different from the other repeats. What should the student do first?',['Check and repeat that trial','Hide the result','Change every variable','Use only that result'],0,'Check an unusual result and repeat the measurement before deciding what to do with it.'),
    mcq('A sample has pH 3. It is…',['acid','neutral','alkali','a metal'],0,'A pH below 7 is acidic.'),
    mcq('A sample has pH 7. It is…',['acid','neutral','alkali','magnetic'],1,'pH 7 is neutral.'),
    mcq('A sample has pH 11. It is…',['acid','neutral','alkali','insoluble'],2,'A pH above 7 is alkaline.'),
    mcq('Universal indicator is green. Which pH is the best match?',['2','5','7','13'],2,'Green universal indicator shows a neutral solution near pH 7.'),
    mcq('Which method separates chalk powder from water?',['filtration','evaporation','magnetism','a pH test'],0,'Filter paper traps insoluble chalk while the water passes through.'),
    mcq('Which method recovers salt from salt water?',['evaporation','filtration only','magnetism','a lit splint'],0,'Evaporation removes the water and leaves the dissolved salt.'),
    mcq('Which method separates iron filings from sand?',['magnetic separation','filtration','evaporation','universal indicator'],0,'A magnet attracts iron but does not attract sand.'),
    mcq('Why can filter paper not remove dissolved salt from water?',['The dissolved salt passes through with the water','Salt is a gas','The filter changes salt into water','Salt is magnetic'],0,'Dissolved salt particles are small enough to pass through the filter paper with the water.'),
    mcq('A gas makes a squeaky pop with a lit splint. The gas is…',['hydrogen','oxygen','carbon dioxide','nitrogen'],0,'Hydrogen gives a squeaky pop with a lit splint.'),
    mcq('Breathing rate is 38 breaths/min straight after exercise and 20 breaths/min after 4 minutes. What happened?',['It decreased by 18 breaths/min','It increased by 18 breaths/min','It stayed the same','It decreased by 58 breaths/min'],0,'38 − 20 = 18, so breathing rate decreased by 18 breaths per minute.'),
    mcq('Why is breathing rate high straight after exercise?',['Muscles need more oxygen and make more carbon dioxide','Bones need to evaporate water','The lungs become solid','The pH scale gets longer'],0,'Working muscles need oxygen for respiration and carbon dioxide must be removed.'),
    mcq('During recovery, breathing rate usually…',['falls toward the resting rate','keeps rising forever','becomes zero at once','changes into speed'],0,'As the body recovers, breathing rate moves back toward the resting value.'),
    mcq('A graph shows breathing rate falling from 40 to 18 breaths/min. Which answer uses evidence?',['It fell from 40 to 18 breaths/min','It changed a bit','The graph looks good','Exercise is hard'],0,'A strong description states the change and quotes two values.'),
    mcq('A pulling force stays the same. Trolley mass increases and acceleration decreases. Which statement matches the results?',['More mass gave less acceleration','More mass gave more acceleration','Mass had no effect','Acceleration caused mass'],0,'For the same force, increasing mass lowers acceleration.'),
    mcq('Which answer best improves a hand-timed trolley test?',['Repeat each time and calculate a mean','Use a different trolley every time','Change the distance each time','Record no units'],0,'Repeats and a mean make the timing result more reliable.'),
    mcq('A table heading says “Time”. What else should it show?',['The unit, such as s','The expected answer','A student name only','The conclusion'],0,'Every numerical heading needs its unit.'),
    mcq('Which answer is a clear description?',['As ramp height increased, time decreased','The trolley sped up because gravity pulled it','The method was fair','I liked the result'],0,'Describe tells what happened. It does not need the science reason.'),
    mcq('Which answer is a clear explanation?',['Breathing rose because working muscles needed more oxygen','Breathing rose from 15 to 35 breaths/min','The line went up','The result was 35'],0,'Explain gives the science reason and links it to the result.'),
    mcq('Which calculation answer is complete?',['0.8 m/s with working shown','0.8','speedy','2.4 ÷ 3 with no answer'],0,'A complete calculation shows working, the answer and the correct unit.'),
    mcq('A group tested each pH sample once. What is the best improvement?',['Repeat each test and compare the colours','Add more unknown liquids','Use a different indicator each time','Remove the pH scale'],0,'Repeating under the same conditions makes the classification more reliable.')
  ];

  const omit=(pool,questions)=>pool.filter(item=>!questions.includes(item.q));

  const examBank={
    forces:[...omit([...revision.forces.quiz,...extraForces],[
      'Speed–time gradient gives…','If net force is zero, a moving object can…',
      'A horizontal line above zero on a speed–time graph means…','A downward slope on a speed–time graph means…'
    ]),...alignedForces],
    chemistry:[...omit([...revision.chemistry.quiz,...extraChemistry],[
      'Sherbet fizz gas?','Recover salt from salt water using…',
      'To recover dissolved salt while losing the water, use…','Which method separates iron filings from sand?'
    ]),...alignedChemistry],
    body:[...omit([...revision.body.quiz,...extraBody],[
      'Blood cells are produced in…','Shoulder joint type?','During exhalation, the diaphragm usually…'
    ]),...alignedBody],
    skills:scienceInPractice
  };
  Object.entries(examBank).forEach(([unit,pool])=>{
    if(pool.length!==25) throw new Error(`${unit} exam bank must contain 25 questions; found ${pool.length}`);
  });
  const bankKey='y10-exam-bank-history-v7';
  function drawQuestions(pool,count,unit){
    const history=JSON.parse(localStorage.getItem(bankKey)||'{}');
    let used=Array.isArray(history[unit])?history[unit]:[];
    let available=pool.filter(item=>!used.includes(item.q));
    if(available.length<count){used=[];available=[...pool]}
    const selected=mix(available).slice(0,count);
    history[unit]=[...used,...selected.map(item=>item.q)];
    localStorage.setItem(bankKey,JSON.stringify(history));
    return selected;
  }

  let mode='practice',items=[],index=0,score=0,answers=[];
  const bestKey='y10-full-exam-practice-v3';
  function renderBest(){const best=JSON.parse(localStorage.getItem(bestKey)||'null');document.querySelector('#v3-best').textContent=best?`Your best: ${best.score}/24 (${best.percent}%)`:'No attempt saved yet.'}
  document.querySelector('#v3-test-modes').onclick=e=>{const b=e.target.closest('[data-v3-mode]');if(!b)return;mode=b.dataset.v3Mode;document.querySelectorAll('[data-v3-mode]').forEach(x=>x.classList.toggle('active',x===b))};
  document.querySelector('#v3-start-test').onclick=startTest;
  function startTest(){
    items=[
      ...drawQuestions(examBank.forces,6,'forces').map(x=>({...x,unit:'Forces & Motion'})),
      ...drawQuestions(examBank.chemistry,6,'chemistry').map(x=>({...x,unit:'Chemistry'})),
      ...drawQuestions(examBank.body,6,'body').map(x=>({...x,unit:'Body Systems'})),
      ...drawQuestions(examBank.skills,6,'skills').map(x=>({...x,unit:'Science in Practice'}))
    ];index=0;score=0;answers=[];renderQuestion();
  }
  function renderQuestion(){
    if(index>=items.length){renderResults();return}
    const item=items[index],stage=document.querySelector('#v3-test-stage');
    stage.innerHTML=`<div class="v3-running"><div class="v3-running-head"><span>${item.unit}</span><strong>Question ${index+1} of 24</strong></div><div class="v3-progress"><i style="width:${index/24*100}%"></i></div><h3>${formatPrompt(item.q)}</h3><div class="v3-options">${item.o.map((x,i)=>`<button data-v3-answer="${i}"><b>${String.fromCharCode(65+i)}</b><span>${x}</span></button>`).join('')}</div><p class="v3-feedback" aria-live="polite"></p><button class="primary-button v3-next" hidden>${index===23?'Finish marked section':'Next question'}</button></div>`;
    const opts=[...stage.querySelectorAll('[data-v3-answer]')],feed=stage.querySelector('.v3-feedback'),next=stage.querySelector('.v3-next');
    opts.forEach(b=>b.onclick=()=>{if(opts.some(x=>x.disabled))return;const chosen=+b.dataset.v3Answer,ok=chosen===item.a;opts.forEach((x,i)=>{x.disabled=true;if(mode==='practice'&&i===item.a)x.classList.add('correct-choice')});b.classList.add(ok?'selected-correct':'selected-wrong');if(ok)score++;answers.push({item,chosen,correct:ok});feed.textContent=mode==='practice'?(ok?'Correct. ':'Not yet. ')+item.e:'Answer recorded. Feedback will appear at the end.';feed.dataset.state=mode==='practice'?(ok?'correct':'retry'):'neutral';next.hidden=false});
    next.onclick=()=>{index++;renderQuestion()};document.querySelector('#v3-practice').scrollIntoView({behavior:'smooth',block:'start'});
  }
  function renderResults(){
    const pct=Math.round(score/24*100),old=JSON.parse(localStorage.getItem(bestKey)||'null');if(!old||score>old.score)localStorage.setItem(bestKey,JSON.stringify({score,percent:pct,date:new Date().toISOString()}));
    const units=['Forces & Motion','Chemistry','Body Systems','Science in Practice'];const breakdown=units.map(unit=>{const rows=answers.filter(x=>x.item.unit===unit);return{unit,score:rows.filter(x=>x.correct).length,total:rows.length}});const missed=answers.filter(x=>!x.correct);
    document.querySelector('#v3-test-stage').innerHTML=`<div class="v3-results"><p class="eyebrow dark">MARKED SECTION COMPLETE</p><div class="v3-result-hero"><strong>${score}<span>/24</span></strong><div><h3>${pct>=84?'Strong and exam ready':pct>=67?'A solid base — now close the gaps':'Use the breakdown to target revision'}</h3><p>Your best attempt stays on this device.</p></div></div><div class="v3-breakdown">${breakdown.map(x=>`<div><strong>${x.score}/${x.total}</strong><span>${x.unit}</span></div>`).join('')}</div><details class="v3-review"><summary>Review ${missed.length} missed question${missed.length===1?'':'s'}</summary>${missed.length?missed.map(x=>`<article><b>${x.item.unit}</b><p>${x.item.q}</p><small>${x.item.e}</small></article>`).join(''):'<p>Nothing missed — excellent retrieval.</p>'}</details><div class="v3-written-launch"><div><p class="eyebrow dark">NEXT: SIX WRITTEN RESPONSES</p><h3>Turn knowledge into full-mark explanations</h3><p>Write first, reveal the model, then self-assess.</p></div><button class="primary-button" id="v3-start-written">Begin written section</button></div><button class="v3-ghost" id="v3-retry">Try a fresh 24-question set</button></div>`;
    document.querySelector('#v3-start-written').onclick=()=>renderWritten(0,[]);document.querySelector('#v3-retry').onclick=startTest;
  }
  function renderWritten(i,ratings){
    const stage=document.querySelector('#v3-test-stage');
    if(i>=writtenPractice.length){const secure=ratings.filter(x=>x==='secure').length;stage.innerHTML=`<div class="v3-finish"><p class="eyebrow dark">PATHWAY COMPLETE</p><strong>${secure}/6</strong><h3>written responses self-rated secure</h3><p>Rework any “nearly” or “not yet” response, then return for a fresh 24-question set. The bank holds back recently used questions.</p><button class="primary-button" id="v3-finish-retry" type="button">Start a fresh set</button></div>`;document.querySelector('#v3-finish-retry').onclick=startTest;return}
    const item=writtenPractice[i];stage.innerHTML=`<div class="v3-written"><div class="v3-running-head"><span>${item.unit}</span><strong>Written response ${i+1} of 6</strong></div><div class="v3-progress"><i style="width:${i/6*100}%"></i></div><h3>${formatPrompt(item.q)}</h3><label>Write before revealing the model<textarea rows="7" placeholder="Use the key words shown in the question. Short, clear sentences are okay."></textarea></label><button class="primary-button" id="v3-show-model">Reveal model answer</button><div class="v3-model" id="v3-model" hidden><span>MODEL ANSWER</span><p>${item.a}</p><strong>How close was your response?</strong><div><button data-v3-rating="not-yet">Not yet</button><button data-v3-rating="nearly">Nearly</button><button data-v3-rating="secure">Secure</button></div></div></div>`;
    document.querySelector('#v3-show-model').onclick=e=>{document.querySelector('#v3-model').hidden=false;e.currentTarget.hidden=true};document.querySelector('#v3-model').onclick=e=>{if(!e.target.dataset.v3Rating)return;renderWritten(i+1,[...ratings,e.target.dataset.v3Rating])};document.querySelector('#v3-practice').scrollIntoView({behavior:'smooth',block:'start'});
  }
  renderBest();
})();

