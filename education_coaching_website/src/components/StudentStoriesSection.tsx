'use client';

export default function StudentStoriesSection() {
  const stories = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Frontend Developer at TechCorp',
      image: '👩‍💼',
      review:
        'BrightPath Academy transformed my career. I went from freelancer to senior developer in just 6 months!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Data Analyst at DataFlow Inc',
      image: '👨‍💼',
      review:
        'The data science course was comprehensive and practical. I landed a job within 2 weeks of completing it.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ananya Patel',
      role: 'UX Designer at CreativeStudio',
      image: '👩‍🎨',
      review:
        'Excellent mentorship and hands-on projects. This is definitely the best design course I have taken.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Digital Marketing Manager at BrandHub',
      image: '👨‍💼',
      review:
        'I increased my company website traffic by 300% using strategies learned here. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-950 to-orange-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-100 mb-12">
          Student Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-slate-900 rounded-lg p-8 border-l-4 border-orange-500 hover:shadow-lg hover:shadow-orange-500/30 transition"
            >
              <div className="flex gap-4 mb-4">
                <div className="text-4xl">{story.image}</div>
                <div>
                  <p className="font-bold text-orange-100">{story.name}</p>
                  <p className="text-orange-200 text-sm">{story.role}</p>
                </div>
              </div>
              <p className="text-orange-50 mb-4 italic">"{story.review}"</p>
              <div className="flex gap-1">
                {[...Array(story.rating)].map((_, i) => (
                  <span key={i} className="text-orange-400 text-lg">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
