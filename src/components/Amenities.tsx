export default function Amenities() {
  const amenities = [
    { icon: "restaurant", label: "Restaurant" },
    { icon: "wine_bar", label: "Bar" },
    { icon: "deck", label: "Rooftop" },
    { icon: "local_parking", label: "Free Parking" },
    { icon: "wifi", label: "Free WiFi" },
    { icon: "concierge", label: "24-hr Front Desk" },
    { icon: "electric_bolt", label: "Power Backup" },
    { icon: "room_service", label: "Room Service" },
  ];

  return (
    <section className="py-24 bg-surface-container-low" id="amenities">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline text-4xl font-bold text-primary mb-16 text-center">Thoughtful Amenities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-y-12 gap-x-8">
          {amenities.map((item, index) => (
            <div key={index} className="text-center group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-container transition-colors duration-300 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
              </div>
              <p className="font-semibold text-on-surface text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
