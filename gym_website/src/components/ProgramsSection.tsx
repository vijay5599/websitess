'use client';

export default function ProgramsSection() {
  const programs = [
    {
      name: 'Strength Training',
      description: 'Build muscle and increase your strength with our expert guidance',
      image: '/images/strength-training.svg',
    },
    {
      name: 'Fat Loss Training',
      description: 'Targeted programs designed to help you shed pounds effectively',
      image: '/images/fat-loss.svg',
    },
    {
      name: 'Cardio Programs',
      description: 'Improve your cardiovascular health and endurance',
      image: '/images/cardio.svg',
    },
    {
      name: 'Weight Training',
      description: 'Progressive weight training routines for all levels',
      image: '/images/weight-training.svg',
    },
    {
      name: 'Personal Training',
      description: 'One-on-one training sessions with certified trainers',
      image: '/images/personal-training.svg',
    },
    {
      name: 'Flexibility & Recovery',
      description: 'Yoga and stretching sessions to prevent injuries',
      image: '/images/flexibility.svg',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Our Training Programs
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Choose the perfect program for your fitness goals
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-red-600"
            >
              <img src={program.image} alt={program.name} className="w-16 h-16 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.name}</h3>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
