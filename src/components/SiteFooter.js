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

              <a href="https://www.youtube.com/@revisionlabs3d" target="_blank" class="text-zinc-400 hover:text-white transition-colors" aria-label="YouTube Channel">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.4 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
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