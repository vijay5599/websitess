'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Amit Patel",
      feedback: "Best dental clinic I've visited. Dr. Rajesh's treatment was painless and professional.",
      rating: 5
    },
    {
      name: "Sneha Gupta",
      feedback: "Amazing experience getting my teeth whitened. The results are incredible!",
      rating: 5
    },
    {
      name: "Arjun Singh",
      feedback: "Very comfortable environment and friendly staff. Highly recommended!",
      rating: 5
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-850">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Patient Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-slate-800 p-8 rounded-lg border-l-4 border-blue-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <span key={idx} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{testimonial.feedback}"</p>
              <p className="text-white font-bold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
