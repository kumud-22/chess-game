// Teacher 5.0 v2 — randomized exhibition edition
// Every round selects 5 different questions from a large bank.
// No API key required, so it is safe to publish on GitHub Pages.

const questionBank = [
{q:"Pick your classroom superpower.",o:[["🦅","Detect whispering from 50 metres away"],["👁️","Spot unfinished homework instantly"],["🧠","Remember every student's name"],["⏰","Freeze time during exams"]]},
{q:"A student says: “I forgot my homework.” Your instinct is…",o:[["😐","The legendary silent stare"],["📋","Write it down immediately"],["😂","Give them one more chance"],["🤨","Ask 17 follow-up questions"]]},
{q:"Choose your ideal classroom.",o:[["🤫","Perfect silence"],["🎉","Controlled chaos"],["💡","Creative and interactive"],["☕","Anything that survives Monday morning"]]},
{q:"Choose your teacher power-up.",o:[["📚","Infinite knowledge"],["⚡","Unlimited energy"],["🎤","Instant attention"],["🕵️","Homework detective mode"]]},
{q:"Pick your most likely classroom catchphrase.",o:[["👀","“Interesting. Very interesting.”"],["📝","“Take out a sheet of paper.”"],["🔔","“We have exactly five minutes.”"],["😎","“Okay, let's make this interesting.”"]]},
{q:"The projector suddenly stops working. You…",o:[["🧘","Stay calm and continue"],["🔧","Become the IT department"],["😂","Turn it into a teaching moment"],["📖","Return to the textbook"]]},
{q:"Pick a classroom sidekick.",o:[["🤖","A helpful robot"],["☕","An infinite coffee machine"],["📚","A flying bookshelf"],["🦉","A very wise owl"]]},
{q:"What should every lesson have?",o:[["🧠","A challenge"],["😂","A joke"],["🎨","Something creative"],["🏆","A dramatic ending"]]},
{q:"A student asks, “Is this going to be in the exam?”",o:[["😏","Maybe…"],["📚","Absolutely"],["😂","You tell me"],["👀","Next question."]]},
{q:"Choose a school-day soundtrack.",o:[["🎹","Calm piano"],["🎸","Rock"],["🎮","Game soundtrack"],["🥁","Pure classroom chaos"]]},
{q:"Pick a futuristic classroom gadget.",o:[["🥽","AR glasses"],["🧑‍🚀","Hologram teacher"],["🤖","AI teaching robot"],["🪄","Instant whiteboard"]]},
{q:"A student gives an extremely creative excuse. Your reaction?",o:[["😂","Respect the creativity"],["🕵️","Investigate"],["🤨","Ask for evidence"],["👏","Give bonus points for effort"]]},
{q:"Your ideal school trip is…",o:[["🏛️","Museum"],["🌲","Nature adventure"],["🚀","Space centre"],["🎢","Theme park"]]},
{q:"Choose a teacher desk essential.",o:[["☕","Coffee"],["🖊️","Pens"],["💻","Laptop"],["🍫","Emergency chocolate"]]},
{q:"What should AI do in your classroom?",o:[["🧑‍🏫","Explain difficult topics"],["🎨","Create projects"],["🧪","Run experiments"],["😂","Make lessons more fun"]]},
{q:"The class is unusually quiet. You think…",o:[["🤔","Something is definitely happening"],["😌","Finally, peace"],["🕵️","Time to investigate"],["😂","Enjoy it while it lasts"]]},
{q:"Pick a teaching style.",o:[["🎯","Focused and structured"],["🎨","Creative"],["🗣️","Discussion-based"],["🧪","Experiment-based"]]},
{q:"Your classroom robot's first job should be…",o:[["📝","Collect homework"],["🧹","Clean the classroom"],["🤖","Answer questions"],["🍕","Deliver snacks"]]},
{q:"Pick a teacher achievement badge.",o:[["🏆","Never misses a deadline"],["🦸","Survived exam season"],["🧠","Explained it three different ways"],["😂","Made the whole class laugh"]]},
{q:"Choose a magical classroom ability.",o:[["⏳","Pause time"],["📖","Instantly read any book"],["🧠","Remember everything"],["✨","Make every student curious"]]},
{q:"A student says, “But another teacher said…”",o:[["😎","Interesting argument."],["📚","Let's check the facts."],["😂","Here we go…"],["🧠","Let's compare both explanations."]]},
{q:"Pick a teacher mode for Monday morning.",o:[["☕","Caffeine powered"],["🧘","Zen mode"],["⚡","Maximum energy"],["🫠","Please reboot"]]},
{q:"What should students remember most?",o:[["📚","The knowledge"],["💡","How to think"],["❤️","How to work together"],["🚀","How to keep learning"]]},
{q:"Pick your classroom warning sound.",o:[["🔔","Bell"],["🚨","Alarm"],["👀","Silent stare"],["🎵","Dramatic music"]]},
{q:"Choose your ideal whiteboard upgrade.",o:[["🧠","Auto-organizing notes"],["🎨","3D drawings"],["🌍","Instant world maps"],["🤖","AI suggestions"]]},
{q:"A student asks a question you don't know. You…",o:[["🔎","Look it up together"],["🧠","Think it through"],["🤝","Ask the class"],["🤖","Ask AI and verify it"]]},
{q:"Pick a classroom motto.",o:[["🚀","Keep learning."],["🧠","Question everything."],["🎨","Create something."],["😂","Survive and submit."]]},
{q:"What should your classroom robot NOT be allowed to do?",o:[["📢","Give surprise tests"],["😈","Assign extra homework"],["🔔","Ring the bell early"],["🍕","Eat the teacher's lunch"]]},
{q:"Choose your exam superpower.",o:[["⏰","Add extra time"],["🧠","Spot common mistakes"],["📚","Remember every formula"],["😎","Stay completely calm"]]},
{q:"Pick a future school subject.",o:[["🤖","Robot Engineering"],["🌌","Space Science"],["🧠","AI Ethics"],["🎮","Game Design"]]},
{q:"Your classroom needs a mascot. Choose one.",o:[["🦉","Owl"],["🐯","Tiger"],["🤖","Robot"],["🐧","Penguin"]]},
{q:"Which student moment makes teaching rewarding?",o:[["💡","When they finally understand"],["😂","When everyone laughs"],["🎯","When they solve it independently"],["🌱","When they become more confident"]]},
{q:"Choose a teacher vehicle.",o:[["🚀","Rocket"],["🛸","Flying saucer"],["🚲","Smart bicycle"],["🚗","Self-driving car"]]},
{q:"Your ideal lesson ending is…",o:[["🎯","One final challenge"],["💡","A surprising fact"],["😂","A joke"],["🚀","A question for next time"]]}
];
const profiles = [
{e:"🕵️",t:"The Homework Detective",s:"No assignment left behind.",style:"Calm, observant and mysteriously aware of exactly who did—and did not—finish the work.",power:"Can identify a missing assignment before the register is opened.",weak:"The phrase “I left it at home.”",status:"INVESTIGATION: ALWAYS ACTIVE",quote:"“I have one question… where is your homework?”",labels:["Homework radar","Detective mode","Patience","Evidence collection"]},
{e:"🎨",t:"The Creative Professor",s:"Learning, but make it interesting.",style:"Turns ordinary lessons into experiments, stories, debates and unexpected questions.",power:"Can turn a boring topic into something students actually want to discuss.",weak:"A classroom completely silent for more than 12 seconds.",status:"CREATIVITY: OVERCLOCKED",quote:"“Okay, let's make this interesting.”",labels:["Creativity","Student engagement","Curiosity","Chaos tolerance"]},
{e:"😂",t:"The Chaos Coordinator",s:"Order is optional. Learning is not.",style:"Keeps the room moving, adapts quickly and somehow makes controlled chaos look like a lesson plan.",power:"Can regain classroom attention at exactly the right moment.",weak:"Monday mornings.",status:"CLASSROOM BALANCE: STABLE-ISH",quote:"“We have exactly five minutes. Let's do this.”",labels:["Adaptability","Energy","Chaos tolerance","Timing"]},
{e:"☕",t:"The Caffeine Commander",s:"Powered by knowledge and suspicious amounts of tea.",style:"Fast, focused and somehow operational before everyone else has found a chair.",power:"Can start a full lesson before the first sip is finished.",weak:"An empty cup.",status:"BATTERY: RECHARGING",quote:"“One second. Let me get my coffee.”",labels:["Energy","Focus","Morning survival","Lesson speed"]},
{e:"🧠",t:"The Human Encyclopedia",s:"Ask a question. Prepare for an answer.",style:"Knowledge-packed, curious and always ready with one more interesting fact.",power:"Can connect almost any topic to something unexpectedly useful.",weak:"The words “I have a quick question.”",status:"DATABASE: EXTENSIVE",quote:"“Actually, that reminds me of something…”",labels:["Knowledge","Memory","Curiosity","Explaining"]},
{e:"🦅",t:"The Legendary Commander",s:"The classroom has been notified.",style:"High awareness, quick reactions and absolutely no tolerance for mysterious whispering.",power:"Can detect suspicious conversations from an impressive distance.",weak:"Students who suddenly become extremely quiet.",status:"AUTHORITY LEVEL: MAXIMUM",quote:"“Interesting. Very interesting.”",labels:["Awareness","Authority","Homework radar","Reaction speed"]},
{e:"🧪",t:"The Mad Scientist",s:"Every lesson is an experiment.",style:"Turns questions into investigations and ordinary classrooms into miniature laboratories.",power:"Can make even a textbook topic feel like a scientific mission.",weak:"Anything labeled “Do not touch.”",status:"EXPERIMENT: PROBABLY SAFE",quote:"“Let's find out what happens.”",labels:["Experimentation","Curiosity","Creativity","Risk tolerance"]},
{e:"🎤",t:"The Classroom Entertainer",s:"Education with excellent timing.",style:"Explains concepts with stories, dramatic pauses and suspiciously good one-liners.",power:"Can wake up an entire classroom with one sentence.",weak:"A joke that gets no reaction.",status:"AUDIENCE: ACQUIRED",quote:"“Okay, listen to this…”",labels:["Engagement","Humour","Storytelling","Energy"]},
{e:"🤖",t:"Teacher 5.0",s:"Human teaching. AI-powered imagination.",style:"Curious about technology and always looking for smarter ways to help students learn.",power:"Knows when to use AI—and when to question its answer.",weak:"A Wi-Fi outage at the worst possible moment.",status:"SYSTEM: ONLINE",quote:"“Let's ask AI… then let's check if it's right.”",labels:["AI confidence","Tech skills","Critical thinking","Adaptability"]},
{e:"🚀",t:"The Future Teacher",s:"Already teaching in 2176.",style:"Future-focused, inventive and suspiciously excited about holograms and robots.",power:"Can turn a normal lesson into a glimpse of the future.",weak:"Outdated technology.",status:"YEAR: 2176",quote:"“Imagine what this classroom could become.”",labels:["Innovation","Future thinking","Technology","Imagination"]},
{e:"🧘",t:"The Zen Teacher",s:"Calm. Patient. Almost impossible to defeat.",style:"Handles classroom surprises with remarkable calm and somehow never appears rushed.",power:"Can survive five simultaneous questions without rebooting.",weak:"A printer that refuses to cooperate.",status:"STRESS LEVEL: UNDETECTED",quote:"“Let's take this one step at a time.”",labels:["Patience","Calmness","Problem solving","Composure"]},
{e:"🏆",t:"The Motivation Machine",s:"One more try. You've got this.",style:"Turns mistakes into learning opportunities and makes students want to try again.",power:"Can turn “I can't do it” into “I'll try once more.”",weak:"Giving up without trying.",status:"MOTIVATION: 100%",quote:"“You're closer than you think.”",labels:["Motivation","Support","Persistence","Energy"]},
{e:"🗣️",t:"The Debate Master",s:"Bring evidence.",style:"Loves questions, discussions and arguments that are backed by actual facts.",power:"Can turn one sentence into a ten-minute discussion.",weak:"“Because I said so.”",status:"ARGUMENT MODE: READY",quote:"“Interesting. What's your evidence?”",labels:["Reasoning","Discussion","Logic","Curiosity"]},
{e:"🎯",t:"The Precision Professor",s:"Exactly. Precisely. Correct.",style:"Organized, focused and impressively good at turning complicated tasks into clear steps.",power:"Can find the one missing comma from across the room.",weak:"Unlabeled notebooks.",status:"ACCURACY: 99.9%",quote:"“Let's do this properly.”",labels:["Organization","Accuracy","Focus","Planning"]},
{e:"🌱",t:"The Student Champion",s:"The lesson is about the learner.",style:"Patient and supportive, with a talent for noticing when someone needs another explanation.",power:"Can explain the same idea in three completely different ways.",weak:"A student saying “I still don't understand” after giving up.",status:"SUPPORT MODE: ON",quote:"“Let's try it another way.”",labels:["Empathy","Clarity","Patience","Support"]},
{e:"🎮",t:"The Gamification Guru",s:"XP for learning.",style:"Turns lessons into challenges, missions and friendly competitions.",power:"Can make a revision session feel like a game.",weak:"A leaderboard with no entries.",status:"XP SYSTEM: ACTIVE",quote:"“You've unlocked the next level.”",labels:["Fun","Competition","Engagement","Creativity"]},
{e:"🔬",t:"The Curiosity Catalyst",s:"Why? Then why? Then what if…?",style:"Encourages students to question assumptions and investigate how things work.",power:"Can turn one “why?” into an entire project.",weak:"Questions with no follow-up.",status:"CURIOSITY: UNLIMITED",quote:"“That's a great question. Let's investigate.”",labels:["Curiosity","Research","Questions","Discovery"]},
{e:"📣",t:"The Attention Alchemist",s:"Class, eyes here.",style:"Knows exactly when to switch from quiet explanation to full classroom energy.",power:"Can restore attention with one perfectly timed sentence.",weak:"A microphone with low battery.",status:"ATTENTION: LOCKED",quote:"“Alright everyone, this part matters.”",labels:["Attention","Timing","Confidence","Communication"]},
{e:"🛠️",t:"The Problem Solver",s:"There has to be a way.",style:"Treats classroom problems as puzzles and keeps looking for workable solutions.",power:"Can improvise a lesson with almost no equipment.",weak:"A problem with absolutely no solution.",status:"SOLVING: IN PROGRESS",quote:"“Okay. Let's figure this out.”",labels:["Problem solving","Adaptability","Logic","Resourcefulness"]},
{e:"✨",t:"The Wonder Teacher",s:"Make them curious.",style:"Finds surprising connections and makes ordinary topics feel bigger than the textbook.",power:"Can turn one tiny fact into a memorable story.",weak:"A lesson with no room for questions.",status:"WONDER LEVEL: HIGH",quote:"“Here's the part nobody expects…”",labels:["Wonder","Storytelling","Creativity","Curiosity"]}
];

let current=0, answers=[], round=Number(localStorage.getItem("teacher5Round")||0)+1, selectedQuestions=[];
const $=id=>document.getElementById(id);
const questionArea=$("questionArea"),qNumber=$("qNumber"),progressBar=$("progressBar"),nextBtn=$("nextBtn"),backBtn=$("backBtn"),quiz=$("quiz"),result=$("result"),resultContent=$("resultContent");

function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function startRound(){selectedQuestions=shuffle(questionBank).slice(0,5);current=0;answers=[];$("roundNumber").textContent=round;quiz.classList.remove("hidden");result.classList.add("hidden");renderQuestion()}
function renderQuestion(){
 const item=selectedQuestions[current],options=shuffle(item.o);
 qNumber.textContent=current+1;progressBar.style.width=`${((current+1)/5)*100}%`;
 questionArea.innerHTML=`<div class="question-kicker">AI INPUT • NEW QUESTION</div><div class="question">${item.q}</div><div class="options">
 ${options.map((o,i)=>`<button class="option ${answers[current]?.text===o[1]?"selected":""}" data-text="${escapeHtml(o[1])}"><span class="letter">${String.fromCharCode(65+i)}</span>${o[0]} ${o[1]}</button>`).join("")}</div>`;
 document.querySelectorAll(".option").forEach(b=>b.onclick=()=>{answers[current]={text:b.dataset.text};renderQuestion()});
 backBtn.disabled=current===0;nextBtn.textContent=current===4?"Analyze with AI →":"Next →";
}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
nextBtn.onclick=()=>{if(!answers[current]){nextBtn.animate([{transform:"translateX(-4px)"},{transform:"translateX(4px)"},{transform:"translateX(0)"}],{duration:180});return}if(current<4){current++;renderQuestion()}else showResult()};
backBtn.onclick=()=>{if(current>0){current--;renderQuestion()}};
$("againBtn").onclick=()=>{round++;localStorage.setItem("teacher5Round",round);startRound()};
$("printBtn").onclick=()=>window.print();

function makeProfile(){
 const texts=answers.map(a=>a.text.toLowerCase()).join(" ");
 let best=profiles[Math.floor(Math.random()*profiles.length)],bestScore=-1;
 profiles.forEach((p,idx)=>{
   const words=(p.t+" "+p.s+" "+p.style+" "+p.power+" "+p.quote+" "+p.labels.join(" ")).toLowerCase().split(/\W+/);
   let score=0;words.forEach(w=>{if(w.length>4&&texts.includes(w))score++});
   score+=((answers.reduce((n,a)=>n+a.text.length,0)+idx*7+round)%9)/10;
   if(score>bestScore){bestScore=score;best=p}
 });
 const seed=answers.reduce((n,a)=>n+a.text.length,0)+round*13;
 return {...best,scores:best.labels.map((label,i)=>[label,Math.min(100,70+((seed+i*17)%31))])};
}
function showResult(){
 const p=makeProfile();
 resultContent.innerHTML=`<div class="profile-head"><div class="avatar">${p.e}</div><div><div class="type">${p.t}</div><div class="subtitle">${p.s}</div></div></div>
 <div class="grid"><div class="card"><h3>Teaching style</h3><p>${p.style}</p></div><div class="card"><h3>Special ability</h3><p>${p.power}</p></div>
 <div class="card"><h3>Weakness</h3><p>${p.weak}</p></div><div class="card"><h3>Classroom status</h3><p>${p.status}</p></div></div>
 <div class="quote">💬 ${p.quote}</div><div class="scores">${p.scores.map(s=>`<div class="score"><div class="score-row"><span>${s[0]}</span><strong>${s[1]}%</strong></div><div class="bar"><i style="width:${s[1]}%"></i></div></div>`).join("")}</div>`;
 quiz.classList.add("hidden");result.classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"});
}
startRound();
