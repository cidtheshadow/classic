import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <span className="text-secondary font-label uppercase tracking-widest text-sm mb-4 block">Since 2012</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">A Legacy of Warm Punjab Hospitality</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                Located at the prestigious <span className="font-semibold text-on-surface">Nankiana Chowk</span>, 
                Hotel The Classic stands as a beacon of comfort and tradition in the heart of Sangrur. 
                Our prime location offers peaceful proximity to the historic <span className="font-semibold text-on-surface">Gurdwara Nanakiana Sahib</span>, 
                making us a preferred choice for spiritual travelers.
              </p>
              <p>
                Whether you are visiting for business at the nearby administrative hubs or seeking a warm retreat for your family, 
                our independent character ensures a stay that is both professional and deeply personal. 
                We take pride in being Sangrur&apos;s trusted host for over a decade.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] sm:h-[500px] lg:translate-x-6 order-1 lg:order-2 mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-primary/10 rounded-lg -rotate-3 transform translate-x-4 translate-y-4 shadow-xl"></div>
            <div className="relative z-10 w-full h-full rounded overflow-hidden shadow-2xl">
              <Image 
                alt="Hotel Interior" 
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG0LNfnhrZCBTD_QFuu8U6Qu4WCsrOnk-yxxFSN-nsP749t0bZQKlBRqplh78Fujs5fg4NV63Vg267MGoUeh5F12AnUSxQRy8ZBV5ZjBGYoQiNnLfaKC8OhUs010IdeaN_1WlZQJjmxsXEwSAXOj-60m8XmG7SD8anGYjhZ6X80oLIRogmwgxfpHHYarZhtns0Ey3mPzfGJ-_6JhLeBcqiTdcrMwQwRBKdW0QX7i7qZyLeoHk3IMZVzIiqWfw0pnxR5-JuT1pndp8"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
