import './style.css';
import './components/SiteHeader.js';
import './components/SiteFooter.js';

// 1. Grab all Markdown files
const modules = import.meta.glob('./content/*.md', { eager: true });

// 2. Format the data for easy use
const posts = Object.entries(modules).map(([path, module]) => {
  return {
    slug: path.split('/').pop().replace('.md', ''),
    ...module.attributes,
    html: module.html
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

const container = document.querySelector('#notes-content');

// 3. Simple Router Logic
const urlParams = new URLSearchParams(window.location.search);
const currentId = urlParams.get('id');

if (currentId) {
  // VIEW: SINGLE POST
  const post = posts.find(p => p.slug === currentId);
  
  if (post) {
    document.title = `${post.title} | Lab Notes`;
    container.innerHTML = `
      <div class="mb-12">
        <a href="/notes.html" class="text-orange-500 font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
          ← Back to All Notes
        </a>
      </div>
      <article class="prose prose-invert lg:prose-xl max-w-none">
        <header class="mb-10 border-b border-zinc-800 pb-10">
          <span class="text-zinc-500 font-mono text-sm uppercase tracking-widest">${post.date}</span>
          <h1 class="text-5xl font-black text-white mt-4 leading-tight">${post.title}</h1>
        </header>
        <div class="text-zinc-300">
          ${post.html}
        </div>
      </article>
    `;
  } else {
    container.innerHTML = `<p class="text-zinc-500">Revision not found. <a href="/notes.html" class="text-orange-500">Return to index.</a></p>`;
  }
} else {
  // VIEW: LIST OF ALL POSTS
  container.innerHTML = `
    <h1 class="text-5xl font-black mb-16 tracking-tighter">LAB NOTES</h1>
    <div class="grid gap-16">
      ${posts.map(post => `
        <article class="group">
          
            <span class="text-zinc-500 font-mono text-sm">
            ${new Date(post.date).toLocaleDateString('en-CA', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            })}
            </span>

          <h2 class="text-3xl font-bold mt-2">
            <a href="/notes.html?id=${post.slug}" class="text-white hover:text-orange-500 transition-colors">
              ${post.title}
            </a>
          </h2>
          <p class="text-zinc-400 mt-4 text-lg leading-relaxed line-clamp-2">
            ${post.description || 'View technical details for this revision.'}
          </p>
          <a href="/notes.html?id=${post.slug}" class="inline-block mt-6 text-orange-500 font-bold text-sm uppercase tracking-wider border-b border-orange-500/0 hover:border-orange-500 transition-all">
            Read Full Note →
          </a>
        </article>
      `).join('')}
    </div>
  `;
}