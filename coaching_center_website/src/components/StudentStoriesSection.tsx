'use client';

export default function StudentStoriesSection() {
  const stories = [
    {
      name: 'Arjun Kumar',
      course: 'Python Programming',
      story: 'Got my first developer job just 2 months after completing the Python course! The practical training was amazing.',
      avatar: '👨‍💼',
      rating: 5,
    },
    {
      name: 'Neha Sharma',
      course: 'Full Stack Web Dev',
      story: 'Landed a Full Stack developer role with an amazing salary. The curriculum covers everything needed for real projects.',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      name: 'Vikram Patel',
      course: 'Data Science',
      story: 'Transitioned from another field to data science. The mentorship program was invaluable for my career switch!',
      avatar: '👨‍💼',
      rating: 5,
    },
  ];

  return (
    <div className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-orange-400">
          Student Success Stories
        </h2>
        <p className="text-center text-gray-400 mb-12">
          See what our graduates are achieving
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-orange-500"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{story.avatar}</div>
                <div>
                  <h3 className="font-semibold text-white">{story.name}</h3>
                  <p className="text-sm text-gray-400">{story.course}</p>
                  <div className="flex text-orange-400 text-sm mt-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{story.story}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
