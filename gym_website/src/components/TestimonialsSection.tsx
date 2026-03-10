'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Amit Patel',
      title: 'Member since 6 months',
      text: 'Fantastic gym with great equipment and supportive trainers. Lost 15 kg in just 6 months!',
      avatar: '👨',
      rating: 5,
    },
    {
      name: 'Deepa Singh',
      title: 'Member since 1 year',
      text: 'Best decision ever! The trainers here are very knowledgeable and the atmosphere is motivating.',
      avatar: '👩',
      rating: 5,
    },
    {
      name: 'Ravi Menon',
      title: 'Member since 3 months',
      text: 'Amazing transformation in just 3 months. The personal training sessions are worth every penny!',
      avatar: '👨',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Member Success Stories
        </h2>
        <p className="text-center text-gray-600 mb-12">
          See the transformations our members have achieved
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-red-600"
            >
              <div className="flex items-center mb-4">
                <img src="/images/testimonial.svg" alt={testimonial.name} className="w-12 h-12 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <div className="flex text-red-600 text-sm mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
