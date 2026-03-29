import Image from "next/image";

export default function Rooms() {
  return (
    <section className="py-24 bg-surface" id="rooms">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold text-primary mb-4">Our Accommodations</h2>
          <p className="text-on-surface-variant italic text-lg">Refined spaces designed for restful nights.</p>
          <div className="mt-4 flex justify-center items-center gap-4 text-sm font-label text-secondary">
            <span>Check-in: 12:00 PM</span>
            <span className="w-1.5 h-1.5 bg-outline-variant rounded-full"></span>
            <span>Check-out: 11:00 AM</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Deluxe Room */}
          <div className="bg-surface-container-lowest rounded overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(28,27,27,0.06)] group flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <Image 
                alt="Deluxe Room" 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtKfSHZMZOVdpWxZXZdblg01mgc58k8iyc56Hh-WE8JAmx14Lv2v_6cJngzzc5AuE_oSVfFC4S5MSO4Y6ieIk_hrplOfd16mZaFyUyD1hJgE15x3pE3axhUU7xTDB0v_bSHxb2X48ovY8mIKieebMV2r3RwLQW5Fcn-0tiZ4D3RaCuAH_iCzyq4f88wZdbZoHO1stDyxuYo1VBBBuE6aLu_Buw8upXVDkSndfm65JgosF4pyybsQWUeo27-mHc31tWJvMXyfHQW-I"
                fill
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-headline text-2xl font-bold mb-4">Deluxe Room</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6 flex-1">
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary scale-90">ac_unit</span> AC
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary scale-90">tv</span> Smart TV
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary scale-90">kitchen</span> Mini Fridge
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary scale-90">restaurant</span> Free Breakfast
                </div>
              </div>
              <button className="w-full py-3 border border-outline-variant hover:border-primary hover:text-primary transition-colors font-semibold rounded">
                View Details
              </button>
            </div>
          </div>

          {/* Super Deluxe */}
          <div className="bg-surface-container-lowest rounded overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(28,27,27,0.06)] group flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <Image 
                alt="Super Deluxe Room" 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7ntbQ8ruXy0DNog_DrZkN-Na6KCeupb15kKSa24OAX7OA-OnN0Cy_QjVwRXolT_k-dSioyeBws318EIObG51E6eRpl8b52KseEN98uNpW1ZgbOO4i0GnrjpQSptddAc4oplzFz-PZnwcgd8XPSwYe6GJaTA4AajQ6aiqn9WrP_I8-3g1C3YykUmplpxZxr4stfeSjYqf70Uj4-kbXGvHRA-A48sRcwQ3GMU2VMs8iW-X-aDHkLzMFLtb8vFZ7qXY8UFThLYHP4SQ"
                fill
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-headline text-2xl font-bold mb-4">Super Deluxe Room</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6 flex-1">
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary scale-90">ac_unit</span> AC
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary scale-90">tv</span> 4K TV
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary scale-90">checkroom</span> Wardrobe
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary scale-90">restaurant</span> Free Breakfast
                </div>
              </div>
              <button className="w-full py-3 border border-outline-variant hover:border-primary hover:text-primary transition-colors font-semibold rounded">
                View Details
              </button>
            </div>
          </div>

          {/* Executive Suite */}
          <div className="bg-surface-container-lowest rounded overflow-hidden transition-all duration-300 hover:shadow-[0_30px_60px_rgba(28,27,27,0.12)] group border-t-4 border-secondary flex flex-col md:col-span-2 lg:col-span-1">
            <div className="h-64 overflow-hidden relative">
              <span className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider z-10 rounded-sm shadow">Best Value</span>
              <Image 
                alt="Executive Suite" 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARkVJCG7GDnQwOCTmdGe2CkNde9evHQXhMhI0kO1H_tfoBFU3CvIOfxf8O8IyjIHFrSY2DADsHb6ZfidkBHTdnTl3nMjIWrYhHlaoPoKOuxg5FkWl1te4thQkej5Pitm8maJCLlnw3vZnvfCYJMu208U_0I3Uyr9B0GNaMbjdTri1oFh4EgrVHKY0Ca05OOZ07z3FYDxWY4kz8FtxJdvOwjeLXa6Gg2RFZd9Y5SEaPwYujmomgl2GkgndjwH6BQPTUv5j47yVW9ys"
                fill
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-headline text-2xl font-bold mb-4">Executive Suite</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6 flex-1">
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary scale-90">ac_unit</span> Climate Control
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary scale-90">desk</span> Work Station
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary scale-90">kitchen</span> Mini Bar
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary scale-90">restaurant</span> Hot Breakfast
                </div>
              </div>
              <button className="w-full py-3 heritage-gradient text-on-primary border-none font-semibold rounded shadow hover:opacity-90 transition-opacity">
                Book Suite Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
