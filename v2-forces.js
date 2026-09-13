units.forces={
    label:"Learning area",title:"Forces & Motion",intro:"Follow the same sequence used in class: forces first, then motion, graphs, work and Newton’s laws.",
    lessons:[
      lesson("What is a force?","Forces are pushes or pulls that can change motion or shape.",[
        "A force is a push or pull and is measured in newtons (N).","Forces have both size and direction.","Contact forces need objects to touch; non-contact forces act at a distance."
      ],`<div class="lesson-grid"><section class="note-panel"><h3>Core idea</h3><p>A force is an interaction that can change an object's speed, direction or shape. We describe a force using a <strong>size</strong> and a <strong>direction</strong>.</p><ul><li><strong>Contact:</strong> friction, drag, normal/support force, tension and applied forces.</li><li><strong>Non-contact:</strong> gravity, magnetic and electrostatic forces.</li></ul><div class="callout"><strong>Unit:</strong> force is measured in newtons, symbol N.</div></section><section class="worked-panel"><h3>Think about it</h3><p>A football sitting on the ground has gravity pulling down and a support force from the ground pushing up. Forces can act even when an object is not moving.</p></section></div>`,[
        mcq("What is the SI unit of force?",["joule","newton","metre per second","kilogram"],1,"Force is measured in newtons, N."),
        mcq("Which is a non-contact force?",["friction","tension","gravity","normal force"],2,"Gravity acts without the objects touching.")
      ],null,["force","newton","contact","non-contact"]),

      lesson("Balanced and unbalanced forces","Net force tells us whether motion will change.",[
        "Balanced forces give a net force of 0 N.","Balanced forces mean no acceleration: an object can stay still or keep moving at constant velocity.","An unbalanced force causes acceleration in the direction of the net force."
      ],`<div class="lesson-grid"><section class="note-panel"><h3>Finding the net force</h3><ul><li>Forces in the same direction add.</li><li>Forces in opposite directions subtract.</li><li>Always state the direction of a non-zero net force.</li></ul></section><section class="worked-panel"><h3>Worked example</h3><div class="formula">120 N right − 75 N left = 45 N right</div><p>The forces are unbalanced, so the object accelerates to the right.</p></section></div>`,[
        mcq("A box has 60 N left and 60 N right. The net force is…",["120 N right","60 N left","0 N","1 N"],2,"Equal opposite forces cancel."),
        mcq("A 30 N force acts right and a 10 N force acts left. What is the result?",["20 N right","20 N left","40 N right","0 N"],0,"Subtract opposing forces and keep the direction of the larger force.")
      ],1,["balanced","unbalanced","net force","resultant"]),

      lesson("Free-body diagrams","Free-body diagrams show all external forces acting on one object.",[
        "Represent the object simply and draw force arrows from it.","Arrow direction shows force direction and arrow length can represent force size.","Label every force; do not draw forces that act on another object."
      ],`<div class="lesson-grid"><section class="note-panel"><h3>How to draw one</h3><ol class="worked-steps"><li>Choose the object you are analysing.</li><li>Represent it with a dot or simple box.</li><li>Add one arrow for each external force acting on that object.</li><li>Label each arrow: weight, support, friction, push, tension and so on.</li></ol></section><section class="visual-panel"><h3>Stationary box</h3><svg class="graph-svg" viewBox="0 0 420 250" role="img" aria-label="Free body diagram of a stationary box"><defs><marker id="k-tip" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="currentColor"/></marker></defs><rect x="170" y="100" width="80" height="55" rx="7"/><line x1="210" y1="100" x2="210" y2="35" marker-end="url(#k-tip)"/><text x="225" y="45">support</text><line x1="210" y1="155" x2="210" y2="225" marker-end="url(#k-tip)"/><text x="225" y="215">weight</text></svg><p>Equal vertical arrows show balanced vertical forces.</p></section></div>`,[
        mcq("In a free-body diagram, arrows should show…",["where the object travelled","forces acting on the chosen object","only unbalanced forces","energy transfers"],1,"A free-body diagram shows external forces acting on the chosen object."),
        mcq("A stationary book on a table has weight downward. What balances it?",["friction","support/normal force","air resistance","tension"],1,"The table provides an upward support force.")
      ],0,["free-body diagram","force arrow","weight","support"]),

      lesson("Speed, distance and time","Speed tells us how much distance is covered each unit of time.",[
        "speed = distance ÷ time","distance = speed × time","time = distance ÷ speed","Common speed units are m/s and km/h."
      ],`<div class="lesson-grid"><section class="note-panel"><h3>Motion equation</h3><div class="formula">speed = distance ÷ time</div><p>Use matching units. If distance is in metres and time is in seconds, speed is in m/s.</p><div class="callout"><strong>Example:</strong> 100 m in 12.5 s → 100 ÷ 12.5 = 8 m/s.</div></section><section class="worked-panel"><h3>Speed calculator</h3><div class="motion-tool"><label>DISTANCE (m)<input id="distance-input" type="number" min="0" value="100"></label><label>TIME (s)<input id="time-input" type="number" min="0.01" step="0.01" value="12.5"></label><label>SPEED (m/s)<input id="speed-input" type="number" readonly></label><div id="motion-result" class="motion-result"></div></div></section></div>`,[
        mcq("A runner travels 150 m in 30 s. Average speed?",["4 m/s","5 m/s","30 m/s","180 m/s"],1,"150 ÷ 30 = 5 m/s."),
        mcq("Which equation finds distance?",["speed ÷ time","time ÷ speed","speed × time","distance ÷ time"],2,"Rearrange speed = distance ÷ time to distance = speed × time.")
      ],null,["speed","distance","time","m/s"]),

      lesson("Acceleration","Acceleration measures how quickly velocity changes.",[
        "acceleration = change in velocity ÷ time","Acceleration is measured in m/s².","Acceleration can be positive, zero or negative depending on how velocity changes."
      ],`<div class="lesson-grid"><section class="note-panel"><h3>Acceleration equation</h3><div class="formula">a = (final velocity − initial velocity) ÷ time</div><p>If velocity increases in the chosen positive direction, acceleration is positive. If it decreases, acceleration is negative.</p></section><section class="worked-panel"><h3>Worked example</h3><p>A cyclist goes from 4 m/s to 14 m/s in 5 s.</p><div class="formula">a = (14 − 4) ÷ 5 = 2 m/s²</div></section></div>`,[
        mcq("A car changes from 2 m/s to 12 m/s in 5 s. Acceleration?",["2 m/s²","5 m/s²","10 m/s²","50 m/s²"],0,"(12 − 2) ÷ 5 = 2 m/s²."),
        mcq("What are the units of acceleration?",["m/s","m/s²","N","J"],1,"Acceleration is velocity change per second: m/s².")
      ],null,["acceleration","velocity","m/s²"]),

      lesson("Distance–time graphs","The gradient of a distance–time graph represents speed.",[
        "A horizontal line means stationary.","A straight rising line means constant speed.","A steeper gradient means a faster speed.","A falling line means the object is returning toward the starting point."
      ],`<div class="lesson-grid"><section class="note-panel"><h3>Read the shape</h3><ul><li><strong>Horizontal:</strong> distance is unchanged.</li><li><strong>Gentle straight slope:</strong> slow constant speed.</li><li><strong>Steep straight slope:</strong> faster constant speed.</li><li><strong>Downward slope:</strong> distance from the start decreases.</li></ul></section><section class="worked-panel"><h3>Calculate gradient</h3><div class="formula">speed = change in distance ÷ change in time</div><p>From 20 m at 5 s to 80 m at 15 s: speed = 60 ÷ 10 = <strong>6 m/s</strong>.</p></section></div>`,[
        mcq("What does a horizontal section on a distance–time graph mean?",["speeding up","stationary","returning","constant acceleration"],1,"Distance is not changing, so the object is stationary."),
        mcq("What does a steeper distance–time gradient mean?",["slower speed","greater speed","less distance","zero time"],1,"Gradient represents speed.")
      ],3,["distance-time","gradient","stationary","constant speed"]),

      lesson("Speed–time graphs","The gradient of a speed–time graph represents acceleration.",[
        "A horizontal line above zero means constant speed.","An upward slope means positive acceleration.","A downward slope means speed is decreasing.","The gradient of a speed–time graph equals acceleration."
      ],`<div class="lesson-grid"><section class="note-panel"><h3>Read the shape</h3><ul><li>At 0 m/s the object is stationary.</li><li>A horizontal line above zero shows constant speed.</li><li>An upward slope shows speed increasing.</li><li>A downward slope shows speed decreasing.</li></ul></section><section class="visual-panel"><h3>Speed–time example</h3><svg class="graph-svg" viewBox="0 0 620 330"><line class="axis" x1="70" y1="280" x2="580" y2="280"/><line class="axis" x1="70" y1="280" x2="70" y2="35"/><text x="290" y="320">Time</text><text x="18" y="190" transform="rotate(-90 18 190)">Speed</text><polyline points="70,280 220,120 380,120 540,240"/><text x="110" y="190">accelerating</text><text x="270" y="105">constant</text><text x="430" y="195">slowing</text></svg></section><section class="worked-panel wide"><h3>Gradient calculation</h3><p>Speed changes from 4 m/s to 16 m/s in 6 s.</p><div class="formula">a = (16 − 4) ÷ 6 = 2 m/s²</div></section></div>`,[
        mcq("On a speed–time graph, an upward slope means…",["stationary","positive acceleration","constant speed","distance decreasing"],1,"Speed is increasing with time."),
        mcq("Speed rises from 5 to 17 m/s in 4 s. Acceleration?",["3 m/s²","4 m/s²","12 m/s²","22 m/s²"],0,"(17 − 5) ÷ 4 = 3 m/s².")
      ],null,["speed-time","gradient","acceleration"]),

      lesson("Comparing motion graphs","Distance–time and speed–time graphs describe different quantities.",[
        "Distance–time gradient gives speed.","Speed–time gradient gives acceleration.","A horizontal line means stationary on a distance–time graph but constant speed on a speed–time graph."
      ],`<div class="lesson-grid"><section class="note-panel"><h3>Do not mix them up</h3><table class="mini-table"><tr><th>FEATURE</th><th>DISTANCE–TIME</th><th>SPEED–TIME</th></tr><tr><td>Gradient</td><td>Speed</td><td>Acceleration</td></tr><tr><td>Horizontal above zero</td><td>Stationary</td><td>Constant speed</td></tr><tr><td>Upward slope</td><td>Moving away</td><td>Speed increasing</td></tr></table></section><section class="key-panel"><h3>Exam trap</h3><p>Always read the axis labels before interpreting a graph. The same-looking line can mean different motion on different graph types.</p></section></div>`,[
        mcq("A horizontal line above zero on a speed–time graph means…",["stationary","constant speed","returning to start","negative distance"],1,"The speed value stays constant."),
        mcq("The gradient of a distance–time graph gives…",["acceleration","force","speed","work"],2,"Distance divided by time is speed.")
      ],null,["compare graphs","gradient","axes"]),

      lesson("Work in physics","Work is done when a force moves an object through a distance.",[
        "work = force × distance","Work is measured in joules (J).","If the object does not move in the direction of the force, no mechanical work is done by that force."
      ],`<div class="lesson-grid"><section class="note-panel"><h3>Work and energy</h3><div class="formula">W = F × d</div><p>Doing work transfers energy. Use force in newtons and distance in metres.</p></section><section class="worked-panel"><h3>Worked example</h3><p>A student pushes a trolley with 40 N for 6 m.</p><div class="formula">W = 40 × 6 = 240 J</div></section></div>`,[
        mcq("A 25 N force moves a box 4 m. Work done?",["6.25 J","21 J","29 J","100 J"],3,"25 × 4 = 100 J."),
        mcq("Work is measured in…",["newtons","joules","watts per second","kilograms"],1,"The unit of work/energy is the joule.")
      ],4,["work","force","distance","joule"]),

      lesson("Newton’s First Law","Objects keep their state of motion unless a net force acts.",[
        "An object stays at rest or moves at constant velocity when net force is zero.","Inertia is resistance to a change in motion.","More mass means more inertia."
      ],`<div class="lesson-grid"><section class="note-panel"><h3>Inertia</h3><p>A moving object does not need a forward net force to keep moving at constant velocity. A net force is needed to <strong>change</strong> velocity.</p><ul><li>Seatbelts stop passengers continuing forward when a car stops.</li><li>A ball keeps rolling until friction and drag change its motion.</li></ul></section><section class="key-panel"><h3>Common misconception</h3><p>Balanced forces do not mean “no forces”. They mean the forces add to a net force of zero.</p></section></div>`,[
        mcq("Newton’s First Law is mainly about…",["inertia","energy conservation","density","pressure"],0,"The first law describes inertia and motion when net force is zero."),
        mcq("If net force is zero, a moving object…",["must stop","can continue at constant velocity","must speed up","must change direction"],1,"Zero net force means zero acceleration.")
      ],null,["Newton first law","inertia","constant velocity"]),

      lesson("Newton’s Second Law","Net force, mass and acceleration are connected by F = ma.",[
        "net force = mass × acceleration","For the same mass, more net force gives more acceleration.","For the same force, more mass gives less acceleration."
      ],`<div class="lesson-grid"><section class="note-panel"><h3>Equation</h3><div class="formula">F = m × a</div><p>Force is in N, mass in kg and acceleration in m/s².</p></section><section class="worked-panel"><h3>Worked example</h3><p>A 5 kg trolley accelerates at 3 m/s².</p><div class="formula">F = 5 × 3 = 15 N</div></section></div>`,[
        mcq("A 3 kg object accelerates at 4 m/s². Net force?",["0.75 N","7 N","12 N","24 N"],2,"F = ma = 3 × 4 = 12 N."),
        mcq("If force stays the same but mass doubles, acceleration…",["doubles","halves","stays the same","becomes zero"],1,"a = F ÷ m, so doubling mass halves acceleration.")
      ],5,["Newton second law","F = ma","mass","acceleration"]),

      lesson("Newton’s Third Law","Forces come in equal-and-opposite pairs acting on different objects.",[
        "When object A pushes object B, object B pushes object A with an equal force in the opposite direction.","Third-law force pairs act on different objects.","Third-law pairs are not the same as balanced forces on one object."
      ],`<div class="lesson-grid"><section class="note-panel"><h3>Force pairs</h3><p>When your foot pushes backward on the ground, the ground pushes forward on your foot. Those two forces are equal in size and opposite in direction.</p></section><section class="key-panel"><h3>Balanced vs force pair</h3><p><strong>Balanced forces:</strong> multiple forces on the same object add to zero.<br><strong>Third-law pair:</strong> two forces from one interaction act on two different objects.</p></section></div>`,[
        mcq("Which is a Newton’s Third Law pair?",["weight and support on one book","foot pushes ground; ground pushes foot","drag and engine force on one car","two equal teams pulling one rope"],1,"The forces are equal/opposite and act on different objects."),
        mcq("Third-law forces act on…",["the same object","different objects","only moving objects","only large objects"],1,"Each object in the interaction experiences one force.")
      ],null,["Newton third law","force pair","action reaction"]),

      lesson("Motion calculations","Choose the correct equation, substitute values and include units.",[
        "Use speed = distance ÷ time for constant/average speed questions.","Use acceleration = change in velocity ÷ time for velocity-change questions.","Use work = force × distance for mechanical work.","Use F = ma for force, mass and acceleration questions."
      ],`<div class="lesson-grid"><section class="note-panel"><h3>Four equations to know</h3><div class="formula">v = d ÷ t</div><div class="formula">a = (v − u) ÷ t</div><div class="formula">W = F × d</div><div class="formula">F = m × a</div></section><section class="worked-panel"><h3>Calculation routine</h3><ol class="worked-steps"><li>Write the equation.</li><li>Substitute the values with units.</li><li>Calculate carefully.</li><li>State the answer with the correct unit.</li><li>Check whether the answer is reasonable.</li></ol></section></div>`,[
        mcq("Which equation would you use for a 60 N push over 5 m?",["F = ma","W = Fd","v = d/t","a = Δv/t"],1,"Work is force multiplied by distance."),
        mcq("A 10 kg object has a net force of 50 N. Acceleration?",["5 m/s²","40 m/s²","60 m/s²","500 m/s²"],0,"a = F ÷ m = 50 ÷ 10 = 5 m/s².")
      ],2,["calculations","equations","units"])
    ]
 };