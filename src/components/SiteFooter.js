class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="border-t border-brand-border mt-32 bg-brand-dark py-16 px-6">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div class="space-y-4">
            <h4 class="text-white font-bold uppercase tracking-widest text-sm">Revision Labs 3D</h4>
            <p class="text-zinc-500 text-sm leading-relaxed max-w-xs">
              High-performance additive manufacturing and functional prototyping. Specialized in PETG, TPU, and PLA.
            </p>
          </div>

          <div class="space-y-4">
            <h4 class="text-white font-bold uppercase tracking-widest text-sm text-zinc-400">Connectivity</h4>
            <div class="flex gap-5">
              <a href="https://instagram.com/revisionlabs3d" target="_blank" class="text-zinc-500 hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              
              <a href="https://revisionlabs3d.etsy.com" target="_blank" class="text-zinc-500 hover:text-white transition-colors" aria-label="Etsy Shop">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </a>

              <a href="#" target="_blank" class="text-zinc-500 hover:text-white transition-colors" aria-label="X">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

        <div class="md:text-right space-y-2">
            <h4 class="text-zinc-400 font-mono text-xs uppercase tracking-[0.2em] font-bold">Active Hardware</h4>
            <p class="text-white text-base font-bold">Flashforge Adventurer 5M</p>
            <p class="text-zinc-400 text-sm italic">600mm/s CoreXY Architecture</p>
        </div>

        </div>

        <div class="max-w-6xl mx-auto mt-20 pt-8 border-t border-brand-border/50 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-zinc-600">
          <span>&copy; ${new Date().getFullYear()} Revision Labs 3D</span>
          <span>Ontario, Canada</span>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);