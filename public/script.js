'use strict';
const projects = {
  vidvertio: {
    title: 'Vidvertio', category: 'CLIENT WORK / CREATIVE AGENCY PLATFORM',
    intro: 'A video editing agency website with the application workflows a creative business needs behind the scenes.',
    challenge: 'Connect a public-facing creative agency website with separate spaces for clients, contributors, and administrators.',
    approach: 'The React application uses Firebase-backed data and role-specific routes. Dedicated workspaces organise projects, conversations, invoices, and contributor activity. Zustand stores and data-sync hooks support the application state.',
    highlights: ['Client workspace with project overviews, an inbox, invoices, and a checkout interface.', 'Administrator tools for project assignment, status filtering, deadlines, budgets, and CSV export.', 'Contributor management and dedicated data-sync hooks for each workspace.'],
    stack: ['React', 'Firebase', 'Tailwind CSS', 'Zustand', 'Vite'],
    link: 'https://vidvertio.com/', linkLabel: 'Visit website',
    gallery: [{src:'images/vidvertio-home.png',caption:'Agency homepage · Vidvertio / Advertio'}],
    note: 'Repository: Client_Service_Website. Source code is private. Screenshot supplied by the developer.'
  },
  armcqs: {
    title: 'ARMCQS', category: 'CLIENT WORK / CHEMISTRY LEARNING PLATFORM',
    intro: 'An education platform that brings chemistry resources, practice, assessments, and premium student access together.',
    challenge: 'Make a growing library of study resources easier to navigate while supporting practice, testing, results, and administration.',
    approach: 'The current codebase uses Next.js and React with Firebase-backed data. Student and administrator flows cover test attempts, answer feedback, results, revision, resource management, and premium access.',
    highlights: ['Chapter notes, practice MCQs, focused tests, and medical past-paper resources.', 'Premium registration, student access, results, and a revision centre.', 'Administrator content tools, MCQ ingestion utilities, and search and caching helpers.'],
    stack: ['Next.js', 'React', 'Firebase', 'Cloudinary'],
    link: 'https://www.armcqs.com/', linkLabel: 'Visit website',
    gallery: [{src:'images/armcqs-home.png',caption:'Chemistry learning platform · Homepage'}],
    note: 'Repository: ChemWithAamir. Source code is private. Screenshot supplied by the developer.'
  },
  likhlo: {
    title: 'Likhlo', category: 'INDEPENDENT PROJECT / FLUTTER FINANCE APP',
    intro: 'A personal finance app built around student life, everyday expenses, and simple ways to record spending.',
    challenge: 'Bring expense tracking, budgeting, shared mess accounts, and reminders into an approachable mobile experience.',
    approach: 'Flutter provides the interface, Riverpod manages state, and Hive stores data locally. A local parser extracts amounts and maps everyday English and South Asian terms to expense categories.',
    highlights: ['Expense, budget, debt, goal, recurring-bill, and mess-account modules.', 'Local expense parsing recognises terms such as chai, biryani, petrol, and easyload.', 'Receipt-scanning and notification services, with charts and finance summaries.'],
    stack: ['Flutter', 'Dart', 'Riverpod', 'Hive', 'ML Kit'],
    link: 'mailto:jawadrajper5001@gmail.com?subject=Likhlo%20project%20walkthrough', linkLabel: 'Request a walkthrough',
    gallery: [
      {src:'images/likhlo-main.jpeg',caption:'Main dashboard · Balances and smart entry'},
      {src:'images/likhlo-wallets.jpeg',caption:'Wallets · Account and balance management'},
      {src:'images/likhlo-transaction.jpeg',caption:'Transactions · Expense, income, and transfer entry'},
      {src:'images/likhlo-debt.jpeg',caption:'Udhar · Money owed and receivables'},
      {src:'images/likhlo-about.jpeg',caption:'About · App identity and developer information'}
    ],
    mobileGallery: true,
    note: 'Independent Flutter application. A project walkthrough is available on request. Actual app screenshots supplied by the developer.'
  },
  gatians: {
    title: 'Gatians Testing Agency', category: 'WEB PLATFORM / MDCAT PREPARATION',
    intro: 'A medical entrance preparation platform designed around focused tests and a clear student experience.',
    challenge: 'Give students a straightforward place to discover MDCAT tests, see announcements, review results, and access their dashboard.',
    approach: 'The application uses React and Firebase with a Vite build and Tailwind CSS. Its homepage brings tests, results, dashboard access, and GTA Pro membership information into a clear navigation structure.',
    highlights: ['MDCAT-focused test discovery and a results section.', 'Latest announcements and a dedicated student dashboard entry point.', 'GTA Pro access information with membership and payment instructions.'],
    stack: ['React', 'Firebase', 'Tailwind CSS', 'Vite'],
    gallery: [{src:'images/gatians-home.png',caption:'Gatians Testing Agency · MDCAT preparation homepage'}],
    link: 'mailto:jawadrajper5001@gmail.com?subject=Gatians%20platform%20walkthrough', linkLabel: 'Request a walkthrough',
    note: 'Repository: gta_mdcat_platfom. Source code is private. Screenshot supplied by the developer.'
  },
  agent: {
    title: 'Tool-using AI assistant', category: 'ACADEMIC PROJECT / AGENT PROTOTYPE',
    intro: 'An exploration of how a conversational assistant can choose and call useful tools instead of only generating text.',
    challenge: 'Connect natural-language requests to structured actions and external data through a small, understandable agent architecture.',
    approach: 'A Next.js and TypeScript application uses LangChain with Gemini. The agent registers eight tools with structured schemas, including calculations, live weather, currency conversion, date and time, learning-note search, and task operations.',
    highlights: ['Eight registered tools with structured inputs and tool selection through LangChain.', 'Weather and currency tools use external APIs; notes and expense examples use sample data.', 'Multiple Gemini agent candidates support model fallback in the project architecture.'],
    stack: ['Next.js', 'TypeScript', 'LangChain', 'Gemini', 'Zod'],
    link: 'https://github.com/firebeast00/semester_agent_project', linkLabel: 'View source code',
    note: 'An academic prototype, not a production service. Task storage is in memory and example expense data is static. The preview illustrates a tool call.'
  }
};
const dialog = document.getElementById('project-dialog');
const content = document.getElementById('dialog-content');
let lastTrigger;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  if (!project) return;
  lastTrigger = button;
  content.replaceChildren();
  const el = (tag, text, className) => { const n=document.createElement(tag); if(text)n.textContent=text; if(className)n.className=className; return n; };
  content.append(el('span',project.category,'dialog-category'),el('h2',project.title),el('p',project.intro,'dialog-intro'));
  content.querySelector('h2').id='dialog-title';
  if(project.gallery?.length){
    const gallery=el('section',null,'project-gallery'+(project.mobileGallery?' mobile-gallery':''));gallery.setAttribute('aria-label',project.title+' screenshot gallery');
    const stage=el('div',null,'gallery-stage');const picture=el('img');picture.decoding='async';stage.append(picture);
    const toolbar=el('div',null,'gallery-toolbar');const caption=el('p',null,'gallery-caption');caption.setAttribute('role','status');caption.setAttribute('aria-live','polite');
    const controls=el('div',null,'gallery-controls');const counter=el('span',null,'gallery-counter');
    const previous=el('button','←');previous.type='button';previous.setAttribute('aria-label','Previous screenshot');
    const next=el('button','→');next.type='button';next.setAttribute('aria-label','Next screenshot');
    const full=el('a','Open full image ↗','gallery-full');full.target='_blank';full.rel='noopener noreferrer';
    const thumbs=el('div',null,'gallery-thumbs');let current=0;const thumbButtons=[];
    const show=index=>{current=(index+project.gallery.length)%project.gallery.length;const item=project.gallery[current];picture.src=item.src;picture.alt=project.title+' — '+item.caption;caption.textContent=item.caption;counter.textContent=(current+1)+' / '+project.gallery.length;full.href=item.src;thumbButtons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===current)));};
    if(project.gallery.length>1){
      previous.addEventListener('click',()=>show(current-1));next.addEventListener('click',()=>show(current+1));controls.append(previous,counter,next);
      project.gallery.forEach((item,index)=>{const button=el('button',null,'gallery-thumb');button.type='button';button.setAttribute('aria-label','Show screenshot '+(index+1)+': '+item.caption);const img=el('img');img.src=item.src;img.alt='';img.loading='lazy';button.append(img);button.addEventListener('click',()=>show(index));thumbButtons.push(button);thumbs.append(button);});
      gallery.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();show(current+(event.key==='ArrowRight'?1:-1));}});
    }
    toolbar.append(caption,controls);gallery.append(stage,toolbar);if(thumbButtons.length)gallery.append(thumbs);gallery.append(full);content.append(gallery);show(0);
  }
  [['The problem',project.challenge],['The implementation',project.approach]].forEach(([title,text])=>{const block=el('div',null,'dialog-block');block.append(el('h3',title),el('p',text));content.append(block);});
  const block=el('div',null,'dialog-block');const list=el('ul');project.highlights.forEach(t=>list.append(el('li',t)));block.append(el('h3','Project highlights'),list);content.append(block);
  const tags=el('div',null,'tags');project.stack.forEach(t=>tags.append(el('span',t)));content.append(tags);
  const links=el('div',null,'dialog-links');const link=el('a',project.linkLabel+' ↗','button primary');link.href=project.link;if(!project.link.startsWith('mailto:')){link.target='_blank';link.rel='noopener noreferrer';}links.append(link);content.append(links,el('p',project.note,'dialog-note'));
  dialog.showModal();document.body.style.overflow='hidden';dialog.scrollTop=0;
}));
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';lastTrigger?.focus({preventScroll:true});});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.header nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);menu.querySelector('span').textContent=open?'−':'＋';});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');menu.querySelector('span').textContent='＋';}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');menu.querySelector('span').textContent='＋';menu.focus();}});
document.getElementById('copy-email').addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText('jawadrajper5001@gmail.com');status.textContent='Email copied to clipboard.';}catch{status.textContent='Email: jawadrajper5001@gmail.com';}setTimeout(()=>{status.textContent='';},5000);});
document.getElementById('year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-reveal');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.06});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
