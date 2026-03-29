import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU43-juX2c9fAJaysgQabiDULw7a219cvGyfRz1bZFO62q6AN02kQdfVV_m4_shUt4j-gCUTikLr0Uj-cFOH_fPK8E5kMiqBs0SFfsrZ2ZbUZlrxto-lSJB32UYSRWrQe5UVolSALgIT_1DSXSevfcIZ8sbV4GJk_5-7bHM98crroqA2feltHQqTL-vdukuh1cqVsEIQ1UEjFz80e0cVnhKToy7osgOLST6JguGopydAnL2fFkbPiKgc5Lv7WrTHiTiKNgn6B2u0I" 
          alt="Hotel The Classic Exterior" 
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/30 backdrop-brightness-75"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl pt-16 mt-20 md:mt-0 md:pt-0">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-surface-container-lowest mb-6 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Hotel The Classic</h1>
        <p className="text-xl md:text-2xl text-surface-container-lowest mb-10 font-light italic opacity-95 drop-shadow-md">Comfort You Can Count On</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a className="heritage-gradient text-on-primary px-8 py-4 rounded-lg font-semibold tracking-wide transition-all hover:scale-105 active:scale-95 shadow-xl" href="#contact">Book a Room</a>
          <a className="border-2 border-secondary text-surface-container-lowest hover:bg-secondary/20 px-8 py-4 rounded-lg font-semibold tracking-wide transition-all backdrop-blur-sm" href="#amenities">Explore Amenities</a>
        </div>
      </div>
    </header>
  );
}
