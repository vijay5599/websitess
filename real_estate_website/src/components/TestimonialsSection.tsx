'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      title: 'Property Bought in 2 months',
      text: 'Found my dream apartment through UrbanNest! The team was incredibly helpful in guiding me through the entire process.',
      avatar: '👨',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      title: 'Villa Buyer',
      text: 'Exceptional service! They helped me find the perfect villa with all the amenities I needed in my budget.',
      avatar: '👩',
      rating: 5,
    },
    {
      name: 'Vikram Patel',
      title: 'Investment Property',
      text: 'UrbanNest provided excellent rental property options. The rental income exceeds my expectations!',
      avatar: '👨',
      rating: 5,
    },
  ];

  return (
    <div className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-teal-400">
          Client Success Stories
        </h2>
        <p className="text-center text-gray-400 mb-12">
          See what our happy clients have to say
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-teal-500"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                  <div className="flex text-teal-400 text-sm mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
