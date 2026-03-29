export default function Testimonials() {
  const reviews = [
    {
      title: "Best in Sangrur",
      content: '"Traveling for business can be stressful, but Hotel The Classic makes it feel like home. Professional staff and very clean rooms near the bypass."',
      author: "Amandeep S.",
    },
    {
      title: "Great Rooftop",
      content: '"The rooftop experience during dinner was magical. You can see the lights of Sangrur while enjoying some of the best paneer tikka I\'ve ever had."',
      author: "Priya Sharma",
    },
    {
      title: "Wedding Specialist",
      content: '"We hosted our daughter\'s engagement here. The arrangements at The Classic Kitchen were top-notch. Truly independent and credible hospitality."',
      author: "Rajinder Gill",
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline text-4xl font-bold text-primary mb-16 text-center">Guest Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between rounded-lg transition-transform duration-300 hover:-translate-y-2 cursor-default">
              <div>
                <div className="flex text-secondary mb-6 gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface font-headline text-2xl font-bold mb-4">{review.title}</p>
                <p className="text-on-surface-variant leading-relaxed text-lg font-light italic">{review.content}</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center font-bold text-secondary uppercase">
                  {review.author.charAt(0)}
                </div>
                <p className="font-semibold text-secondary tracking-wide">{review.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
