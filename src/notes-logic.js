import './style.css';
import './components/SiteHeader.js';
import './components/SiteFooter.js';

const modules = import.meta.glob('./content/*.md', { eager: true });
const posts = Object.entries(modules).map(([path, module]) => ({
  slug: path.split('/').pop().replace('.md', ''),
  ...module.attributes,
  html: module.html
})).sort((a, b) => new Date(b.date) - new Date(a.date));

const container = document.querySelector('#notes-content');
const urlParams = new URLSearchParams(window.location.search);
const postSlug = urlParams.get('id');

if (postSlug) {
  // VIEW: Individual Post
  const post = posts.find(p => p.slug === postSlug);
  if (post) {
    document.title = `${post.title} | Lab Notes`;
    container.innerHTML = `
      <a href="/notes.html" class="text-orange-500 font-bold mb-8 inline-block">← Back to Notes</a>
      <article class="prose prose-invert lg:prose-xl max-w-none">
        <span class="text-zinc-500 font-mono">${post.date}</span>
        <h1 class="text-5xl font-black mb-10">${post.title}</h1>
        ${post.html}
      </article>
    `;
  }
} else {
  // VIEW: List of all posts
  container.innerHTML = `
    <h1 class="text-5xl font-black mb-16">Lab Notes</h1>
    <div class="space-y-12">
      ${posts.map(post => `
        <div class="group border-b border-brand-border pb-8">
          <span class="text-zinc-500 font-mono text-sm">${post.date}</span>
          <h2 class="text-3xl font-bold mt-2">
            <a href="/notes.html?id=${post.slug}" class="hover:text-orange-500 transition-colors">
              ${post.title}
            </a>
          </h2>
          <p class="text-zinc-400 mt-4 line-clamp-2">${post.description || ''}</p>
        </div>
      `).join('')}
    </div>
  `;
}