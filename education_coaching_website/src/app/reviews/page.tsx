'use client';

import Navbar from '@/src/components/Navbar';
import Chatbot from '@/src/components/Chatbot';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Amit Patel',
      course: 'Web Development Bootcamp',
      rating: 5,
      review:
        'Excellent course! The instructors were very knowledgeable and supportive. I landed a job as a junior developer within 3 months of completion.',
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Sneha Verma',
      course: 'Data Science',
      rating: 5,
      review:
        'The curriculum is comprehensive and up-to-date. Hands-on projects helped me understand concepts deeply. Highly recommended!',
      image: '👩‍💼',
    },
    {
      id: 3,
      name: 'Rohit Sharma',
      course: 'UI/UX Design Masterclass',
      rating: 5,
      review:
        'Great design course with practical projects. My portfolio improved significantly and I successfully transitioned to UX design.',
      image: '👨‍🎨',
    },
    {
      id: 4,
      name: 'Anjali Desai',
      course: 'Digital Marketing Pro',
      rating: 5,
      review:
        'Really helpful course. I implemented what I learned and increased my company website traffic by 250%. Great value for money!',
      image: '👩‍💼',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      course: 'Web Development Bootcamp',
      rating: 5,
      review:
        'Outstanding instructors with real-world experience. The community support is amazing. Best learning investment ever!',
      image: '👨‍💻',
    },
    {
      id: 6,
      name: 'Priya Kapoor',
      course: 'Data Science',
      rating: 5,
      review:
        'Structured learning path, great mentors, and practical assignments. I now work as a Data Analyst at a leading tech company.',
      image: '👩‍💻',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-950 via-orange-900 to-slate-950 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-orange-100 mb-6">Student Reviews</h1>
          <p className="text-xl text-orange-50">
            See what thousands of successful students have to say about BrightPath Academy
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-8 hover:shadow-lg hover:shadow-orange-500/50 transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{review.image}</div>
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-orange-200 text-sm">{review.course}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-orange-400">
                      ⭐
                    </span>
                  ))}
                </div>

                <p className="text-orange-50 italic">"{review.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Chatbot />
    </main>
  );
}
