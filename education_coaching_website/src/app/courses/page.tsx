'use client';

import Navbar from '@/src/components/Navbar';
import Chatbot from '@/src/components/Chatbot';

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Master full-stack web development',
      duration: '12 weeks',
      price: '₹12,000',
      level: 'Beginner',
      modules: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Advanced Data Science',
      description: 'Machine learning and deep learning',
      duration: '14 weeks',
      price: '₹15,000',
      level: 'Intermediate',
      modules: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Statistics'],
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      description: 'Create stunning user experiences',
      duration: '10 weeks',
      price: '₹10,000',
      level: 'Beginner',
      modules: ['Figma', 'Design Thinking', 'Prototyping', 'User Research', 'Animation'],
    },
    {
      id: 4,
      title: 'Digital Marketing Pro',
      description: 'Comprehensive digital marketing strategies',
      duration: '8 weeks',
      price: '₹8,000',
      level: 'Beginner',
      modules: ['SEO', 'SEM', 'Content Marketing', 'Social Media', 'Analytics'],
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-950 via-orange-900 to-slate-950 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-orange-100 mb-6">Our Courses</h1>
          <p className="text-xl text-orange-50">
            Choose from our comprehensive range of professional development courses
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-8 hover:shadow-lg hover:shadow-orange-500/50 transition"
              >
                <div className="mb-4">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                <p className="text-orange-100 mb-4">{course.description}</p>

                <div className="border-t border-orange-500 pt-4 mt-4 mb-4">
                  <p className="text-orange-100 mb-2">
                    <strong>Duration:</strong> {course.duration}
                  </p>
                  <p className="text-orange-100 mb-4">
                    <strong>Price:</strong> {course.price}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-orange-100 font-bold mb-2">Course Modules:</p>
                  <div className="flex flex-wrap gap-2">
                    {course.modules.map((module, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-500/30 text-orange-100 text-xs px-3 py-1 rounded-full"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-white hover:bg-orange-50 text-orange-900 font-bold py-2 rounded-lg transition">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Chatbot />
    </main>
  );
}
