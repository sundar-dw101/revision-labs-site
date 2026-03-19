import logoUrl from '../assets/logo.png'; 

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="border-b border-brand-border bg-brand-dark/95 backdrop-blur-xl sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
      
      <a href="/" class="transition-transform hover:scale-[1.02]">
        <img src="${logoUrl}" alt="Revision Labs 3D" class="h-20 w-auto brightness-125 invert" style="mix-blend-mode: plus-lighter;">
      </a>
      
      <nav class="flex gap-10 text-base font-bold tracking-normal uppercase text-zinc-300">
        <a href="/blog" class="hover:text-white transition-colors underline-offset-8 hover:underline">Technical Blog</a>
        <a href="https://revisionlabs3d.etsy.com" target="_blank" class="hover:text-white transition-colors underline-offset-8 hover:underline">Etsy Shop</a>
      </nav>
      
    </div>
  </header>  

    `;
  }
}

customElements.define('site-header', SiteHeader);

