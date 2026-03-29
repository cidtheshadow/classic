export default function Contact() {
  return (
    <section className="py-24 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-surface-container-lowest p-10 shadow-[0_30px_60px_rgba(28,27,27,0.08)] rounded-xl border border-outline-variant/10">
            <h2 className="font-headline text-4xl font-bold text-primary mb-2">Inquire Now</h2>
            <p className="text-on-surface-variant font-light mb-8 italic">Let us curate your perfect stay.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-label text-on-surface-variant/80 mb-2">Name</label>
                  <input 
                    className="w-full bg-surface-container-low border-b-2 border-outline-variant/20 focus:ring-0 focus:outline-none focus:border-secondary transition-all p-4 rounded-t" 
                    placeholder="Full Name" 
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-label text-on-surface-variant/80 mb-2">Phone</label>
                  <input 
                    className="w-full bg-surface-container-low border-b-2 border-outline-variant/20 focus:ring-0 focus:outline-none focus:border-secondary transition-all p-4 rounded-t" 
                    placeholder="+91" 
                    type="tel"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-label text-on-surface-variant/80 mb-2">Check-in Date</label>
                  <input 
                    className="w-full bg-surface-container-low border-b-2 border-outline-variant/20 focus:ring-0 focus:outline-none focus:border-secondary transition-all p-4 rounded-t text-on-surface-variant" 
                    type="date"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-label text-on-surface-variant/80 mb-2">Guests</label>
                  <select className="w-full bg-surface-container-low border-b-2 border-outline-variant/20 focus:ring-0 focus:outline-none focus:border-secondary transition-all p-4 rounded-t text-on-surface-variant">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3+ Guests</option>
                  </select>
                </div>
              </div>
              <div className="pt-4">
                <button className="w-full py-5 heritage-gradient text-on-primary font-bold tracking-widest uppercase text-sm shadow-[0_10px_20px_rgba(92,5,26,0.3)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all rounded">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col h-full">
            <h2 className="font-headline text-4xl font-bold text-primary mb-8 px-2">Find Us</h2>
            <div className="space-y-6 mb-10 px-2">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary scale-125">location_on</span>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Nankiana Chowk, Time Tower City,<br/>
                  Patiala Bypass, Sunami Gate,<br/>
                  Sangrur, Punjab 148001
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary scale-125">phone</span>
                <p className="text-on-surface-variant text-lg hover:text-primary transition-colors cursor-pointer">+91 1672 234XXX</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary scale-125">mail</span>
                <p className="text-on-surface-variant text-lg hover:text-primary transition-colors cursor-pointer">info@hoteltheclassic.com</p>
              </div>
            </div>
            
            <div className="w-full flex-1 min-h-[300px] rounded-xl overflow-hidden shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13735.614138148856!2d75.8362615!3d30.2486161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3916328399e525a5%3A0xc3f7a43f8e0de8b3!2sHotel%20The%20Classic!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000 contrast-125 hover:contrast-100" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
