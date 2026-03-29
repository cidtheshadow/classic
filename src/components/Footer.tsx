export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-20 max-w-7xl mx-auto">
        <div className="space-y-6">
          <span className="font-headline text-2xl font-bold tracking-tight text-primary">Hotel The Classic</span>
          <p className="font-body text-base text-on-surface-variant leading-relaxed opacity-90">
            Providing reliable, high-quality hospitality at the heart of Sangrur. Your comfort is our classic commitment.
          </p>
        </div>
        <div className="space-y-6">
          <span className="font-label text-sm uppercase tracking-[0.2em] font-bold text-on-surface-variant/70">Quick Links</span>
          <div className="flex flex-col space-y-3">
            <a className="text-on-surface hover:text-secondary hover:translate-x-1 transition-all text-base w-fit" href="#about">About Us</a>
            <a className="text-on-surface hover:text-secondary hover:translate-x-1 transition-all text-base w-fit" href="#rooms">Our Rooms</a>
            <a className="text-on-surface hover:text-secondary hover:translate-x-1 transition-all text-base w-fit" href="#restaurant">Restaurant</a>
            <a className="text-on-surface hover:text-secondary hover:translate-x-1 transition-all text-base w-fit" href="#contact">Contact</a>
          </div>
        </div>
        <div className="space-y-6">
          <span className="font-label text-sm uppercase tracking-[0.2em] font-bold text-on-surface-variant/70">Follow Us</span>
          <div className="flex gap-6">
            <a className="text-secondary hover:text-primary transition-colors flex items-center gap-2 group" href="#">
              <span className="text-sm tracking-widest uppercase font-semibold group-hover:underline underline-offset-4">Facebook</span>
            </a>
            <a className="text-secondary hover:text-primary transition-colors flex items-center gap-2 group" href="#">
              <span className="text-sm tracking-widest uppercase font-semibold group-hover:underline underline-offset-4">Instagram</span>
            </a>
            <a className="text-secondary hover:text-primary transition-colors flex items-center gap-2 group" href="#">
              <span className="text-sm tracking-widest uppercase font-semibold group-hover:underline underline-offset-4">Twitter</span>
            </a>
          </div>
          <div className="pt-8 border-t border-outline-variant/20 mt-8">
            <p className="text-xs tracking-wider text-on-surface-variant/70 uppercase">
              &copy; {new Date().getFullYear()} Hotel The Classic, Nankiana Chowk, Sangrur. 
            </p>
            <p className="text-xs tracking-wider text-on-surface-variant/70 uppercase mt-2">
              Check-in: 12:00 PM | Check-out: 11:00 AM.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
