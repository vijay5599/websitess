'use client';

export default function TrainersSection() {
  const trainers = [
    {
      name: 'Rahul Sharma',
      specialization: 'Strength Trainer',
      experience: '8 years',
      bio: 'Expert in muscle building and powerlifting',
      avatar: '👨‍🏫',
    },
    {
      name: 'Priya Nair',
      specialization: 'Weight Loss Coach',
      experience: '6 years',
      bio: 'Specialist in nutrition and fat loss programs',
      avatar: '👩‍🏫',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Our Expert Trainers
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Get trained by certified professionals with years of experience
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-600 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4 mb-4">
                <img src="/images/trainer.svg" alt={trainer.name} className="w-24 h-24" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{trainer.name}</h3>
                  <p className="text-red-600 font-semibold">{trainer.specialization}</p>
                  <p className="text-gray-600 text-sm">Experience: {trainer.experience}</p>
                </div>
              </div>
              <p className="text-gray-700">{trainer.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
