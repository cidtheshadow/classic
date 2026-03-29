import Image from "next/image";

export default function Restaurant() {
  return (
    <section className="py-24 bg-surface" id="restaurant">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 md:h-80 w-full rounded overflow-hidden shadow-lg">
                <Image 
                  alt="The Classic Kitchen Food" 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwmZAhk0f6SdKj99b0pcKBrINsia33XasBm_6T4qLLY5KEhQbZsBxjNRDAWqzGa9GOFzf5YfA6_dszX6O0zR3DtJ6u1WTZaYTyGv4g7N-8dqvCDihIF6M90znGGjki8Z1w31nX67SrSe-JZ0TaZnaKanoU8-3FFIxt6zXjSEerwgHAjtQ7fVc8Vt_ZiJdFv0qLymTq4iX7xz4GIIrmNmRFpAiU4XhDZXlWmddWH4q-ad1pyZv72pVbLdH7i-rk0luD_SrVaWsV-WM"
                  fill
                />
              </div>
              <div className="relative h-64 md:h-80 w-full rounded overflow-hidden shadow-lg translate-y-8">
                <Image 
                  alt="Wedding Hall" 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkI4-DBlOirQ6mz0AOLigj1u6xFEm-hMMURWyv92VcpAdmxeJp9QHjIRvAYeItAfNBuVwZP_PJ6lXXamn5jzgXQkTgcg-vdeprA3W9N5L5tuYLOXvXKhkuF0tm-jQFP798C0fuLaJofTOurh3khHVxXQkzgdQhC2DrTEqvLMxAb2Rw4ejvY4eUp2CFlLt9Pe585NtseFlWa9SW5sE8GYaQ5ltE5cFxiNEdD95gujJXRVVm1Kpm-EONhoqA7pgSIDj9X26prz66c4k"
                  fill
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">The Classic Kitchen</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              Experience authentic flavors at our in-house restaurant, renowned across Sangrur for its culinary excellence. 
              From traditional North Indian delicacies to contemporary global favorites, every meal is prepared with precision.
            </p>
            <div className="bg-secondary-container/20 p-6 border-l-4 border-secondary mb-8 rounded-r-sm">
              <p className="italic text-on-surface text-lg">
                &quot;The best tandoori chicken in town, and their rooftop view is unparalleled. Our 200-guest wedding was handled flawlessly!&quot;
              </p>
              <p className="mt-4 font-bold text-secondary text-sm tracking-widest uppercase flex items-center gap-2">
                <span className="w-6 border-b border-secondary"></span> 
                Wedding Host Review
              </p>
            </div>
            <p className="text-on-surface-variant">
              Our banquet facilities specialize in hosting grand celebrations, from intimate parties to weddings of up to 200 guests with customized catering and decor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
