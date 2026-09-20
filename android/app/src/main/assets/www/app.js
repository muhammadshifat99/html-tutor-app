const lessons = [
  {id:1,title:'Lesson 1 — HTML Basics',file:'../../../../lessons/01-html-basics.md'},
  {id:2,title:'Lesson 2 — Text & Inline',file:'../../../../lessons/02-text-inline.md'},
  {id:3,title:'Lesson 3 — Links & Images',file:'../../../../lessons/03-links-images.md'},
  {id:4,title:'Lesson 4 — Lists & Tables',file:'../../../../lessons/04-lists-tables.md'},
  {id:5,title:'Lesson 5 — Forms & Inputs',file:'../../../../lessons/05-forms-inputs.md'},
  {id:6,title:'Lesson 6 — Semantic & ARIA',file:'../../../../lessons/06-semantic-aria.md'},
  {id:7,title:'Lesson 7 — Media',file:'../../../../lessons/07-media.md'},
  {id:8,title:'Lesson 8 — DOM & APIs',file:'../../../../lessons/08-dom-apis.md'},
  {id:9,title:'Lesson 9 — CSS Basics',file:'../../../../lessons/09-css-basics.md'},
  {id:10,title:'Lesson 10 — Flexbox & Grid',file:'../../../../lessons/10-flexbox-grid.md'},
  {id:11,title:'Lesson 11 — Responsive',file:'../../../../lessons/11-responsive-design.md'},
  {id:12,title:'Lesson 12 — Accessibility',file:'../../../../lessons/12-accessibility.md'},
  {id:13,title:'Lesson 13 — SEO & Performance',file:'../../../../lessons/13-seo-performance.md'},
  {id:14,title:'Lesson 14 — Projects',file:'../../../../lessons/14-projects-portfolio.md'},
  {id:15,title:'Lesson 15 — Assessments',file:'../../../../lessons/15-assessments.md'},
  {id:16,title:'Lesson 16 — Resources',file:'../../../../lessons/16-resources.md'}
];

const container = document.getElementById('lessons');
lessons.forEach(l=>{
  const el = document.createElement('div');
  el.className='lesson';
  el.innerHTML = `<h2>${l.title}</h2><p><button data-file="${l.file}">Open</button> <button data-id="${l.id}" class="quiz">Quiz</button></p>`;
  container.appendChild(el);
});

container.addEventListener('click', async (e)=>{
  if(e.target.tagName==='BUTTON'){
    const file = e.target.getAttribute('data-file');
    if(file){
      try{
        const res = await fetch(file);
        const text = await res.text();
        openLesson(text);
      }catch(err){
        openLesson('Lesson content not available inside app; copy files to assets/www/lessons to enable.');
      }
    }
    if(e.target.classList.contains('quiz')){
      const id = e.target.getAttribute('data-id');
      startQuiz(id);
    }
  }
});

function openLesson(markdown){
  const w = window.open('','_blank');
  w.document.write(`<pre>${escapeHtml(markdown)}</pre>`);
}

function startQuiz(id){
  loadQuiz(id);
}

async function loadQuiz(id){
  try{
    const res = await fetch('../../../../quizzes.json');
    const data = await res.json();
    const quiz = data[id];
    if(!quiz) return alert('No quiz for this lesson yet.');
    showQuizUI(quiz,id);
  }catch(err){
    alert('Could not load quizzes.json');
  }
}

function showQuizUI(quiz,id){
  const w = window.open('','quiz');
  const doc = w.document;
  doc.head.innerHTML = `<meta charset="utf-8"><title>Quiz</title>`;
  const container = doc.createElement('div');
  container.innerHTML = `<h1>Quiz — Lesson ${id}</h1><div id="qwrap"></div><p><button id="submit">Submit</button></p><div id="result"></div>`;
  doc.body.appendChild(container);
  const qwrap = doc.getElementById('qwrap');
  quiz.forEach((qq,idx)=>{
    const div = doc.createElement('div');
    div.innerHTML = `<p><strong>${idx+1}. ${qq.q}</strong></p>`;
    qq.options.forEach((opt,i)=>{
      const idAttr = `o_${idx}_${i}`;
      const input = doc.createElement('input');
      input.type='radio'; input.name=`q${idx}`; input.id=idAttr; input.value=i;
      const label = doc.createElement('label'); label.htmlFor=idAttr; label.textContent = qq.options[i];
      div.appendChild(input); div.appendChild(label); div.appendChild(doc.createElement('br'));
    });
    qwrap.appendChild(div);
  });
  doc.getElementById('submit').addEventListener('click',()=>{
    let score=0;
    quiz.forEach((qq,idx)=>{
      const sel = doc.querySelector(`input[name="q${idx}"]:checked`);
      if(sel && parseInt(sel.value,10)===qq.a) score++;
    });
    const percent = Math.round((score/quiz.length)*100);
    doc.getElementById('result').innerHTML = `<p>Score: ${score}/${quiz.length} (${percent}%)</p>`;
    try{ localStorage.setItem('quiz_'+id, JSON.stringify({score, outOf:quiz.length, percent})); }catch(e){}
  });
}

function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
