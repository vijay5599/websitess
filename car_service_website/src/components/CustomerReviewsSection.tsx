'use client';

export default function CustomerReviewsSection() {
  const reviews = [
    {
      name: 'Rajesh Kumar',
      service: 'General Service',
      review: 'Excellent service! Very professional team and quick turnaround. My car runs perfectly now.',
      avatar: '👨',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      service: 'Car Detailing',
      review: 'Best detailing service in HSR Layout! My car looks like brand new. Highly recommend!',
      avatar: '👩',
      rating: 5,
    },
    {
      name: 'Vikram Patel',
      service: 'Brake Repair',
      review: 'Trusted SpeedAuto for brake repair. Honest pricing and quality work. Very satisfied!',
      avatar: '👨',
      rating: 5,
    },
  ];

  return (
    <div className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-red-500">
          Customer Reviews
        </h2>
        <p className="text-center text-gray-400 mb-12">
          What our customers say about our service
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-red-600"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{review.avatar}</div>
                <div>
                  <h3 className="font-semibold text-white">{review.name}</h3>
                  <p className="text-sm text-gray-400">{review.service}</p>
                  <div className="flex text-red-600 text-sm mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
