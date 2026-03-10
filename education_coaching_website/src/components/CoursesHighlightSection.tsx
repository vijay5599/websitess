'use client';

export default function CoursesHighlightSection() {
  const courses = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Master HTML, CSS, JavaScript, React, and Node.js',
      duration: '12 weeks',
      price: '₹12,000',
      level: 'Beginner',
    },
    {
      id: 2,
      title: 'Data Science',
      description: 'Learn Python, pandas, ML algorithms, and data visualization',
      duration: '14 weeks',
      price: '₹15,000',
      level: 'Intermediate',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Figma, design principles, prototyping, and user research',
      duration: '10 weeks',
      price: '₹10,000',
      level: 'Beginner',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'SEO, SEM, Content Strategy, Social Media, Analytics',
      duration: '8 weeks',
      price: '₹8,000',
      level: 'Beginner',
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-100 mb-12">Featured Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-6 hover:shadow-lg hover:shadow-orange-500/50 transition"
            >
              <div className="mb-4">
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
              <p className="text-orange-100 text-sm mb-4">{course.description}</p>
              <div className="border-t border-orange-500 pt-4 mt-4">
                <p className="text-orange-100 text-sm mb-2">
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p className="text-orange-100 text-sm">
                  <strong>Price:</strong> {course.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/courses"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition inline-block"
          >
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
}
