'use client';

export default function CoursesHighlightSection() {
  const courses = [
    {
      name: 'Python Programming',
      price: '₹12,000',
      duration: '4 weeks',
      description: 'Master Python basics, OOP, and real-world applications',
      icon: '🐍',
    },
    {
      name: 'Data Science',
      price: '₹25,000',
      duration: '8 weeks',
      description: 'Learn data analysis, visualization, and machine learning',
      icon: '📊',
    },
    {
      name: 'Full Stack Web Dev',
      price: '₹30,000',
      duration: '12 weeks',
      description: 'Complete web development with React, Node.js, and databases',
      icon: '🌐',
    },
  ];

  return (
    <div className="bg-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-orange-400">
          Featured Courses
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Start your tech career with our industry-focused courses
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-orange-500"
            >
              <div className="text-5xl mb-3">{course.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{course.name}</h3>
              <p className="text-orange-400 font-bold text-xl mb-2">{course.price}</p>
              <p className="text-gray-400 mb-2">⏱️ {course.duration}</p>
              <p className="text-gray-300">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
