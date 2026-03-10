'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      feedback: "Amazing experience! The stylists are very professional and the ambiance is so relaxing.",
      rating: 5
    },
    {
      id: 2,
      name: "Anjali Reddy",
      feedback: "Best bridal makeup I've ever had! They made my big day so special with their expertise.",
      rating: 5
    },
    {
      id: 3,
      name: "Neha Patel",
      feedback: "Love the hair coloring work done here. The color is exactly what I wanted!",
      rating: 5
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Customer Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800 p-8 rounded-lg border-l-4 border-pink-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
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
