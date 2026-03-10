'use client';

import Navbar from '@/src/components/Navbar';
import Chatbot from '@/src/components/Chatbot';

export default function Trainers() {
  const trainers = [
    {
      id: 1,
      name: 'Dr. Arun Mehta',
      specialty: 'Web Development',
      experience: '10+ years',
      bio: 'Expert in full-stack development with experience at top tech companies',
      image: '👨‍🏫',
    },
    {
      id: 2,
      name: 'Prof. Neha Sharma',
      specialty: 'Data Science & ML',
      experience: '8+ years',
      bio: 'PhD in Machine Learning, published researcher, industry mentor',
      image: '👩‍🏫',
    },
    {
      id: 3,
      name: 'Varun Desai',
      specialty: 'UI/UX Design',
      experience: '7+ years',
      bio: 'Award-winning designer, worked with startups and Fortune 500 companies',
      image: '👨‍🎨',
    },
    {
      id: 4,
      name: 'Priya Nair',
      specialty: 'Digital Marketing',
      experience: '9+ years',
      bio: 'Digital strategist with proven track record of scaling businesses',
      image: '👩‍💼',
    },
    {
      id: 5,
      name: 'Sanjay Kumar',
      specialty: 'Cloud & DevOps',
      experience: '12+ years',
      bio: 'AWS Certified, expertise in infrastructure scaling and deployment',
      image: '👨‍💻',
    },
    {
      id: 6,
      name: 'Divya Singh',
      specialty: 'Mobile Development',
      experience: '8+ years',
      bio: 'App developer with 50M+ downloads, expert in React Native and Flutter',
      image: '👩‍💻',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-950 via-orange-900 to-slate-950 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-orange-100 mb-6">Meet Our Expert Trainers</h1>
          <p className="text-xl text-orange-50">
            Learn from industry professionals with decades of combined experience
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-8 text-center hover:shadow-lg hover:shadow-orange-500/50 transition"
              >
                <div className="text-6xl mb-4">{trainer.image}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-orange-100 font-bold mb-2">{trainer.specialty}</p>
                <p className="text-orange-200 text-sm mb-4">{trainer.experience}</p>
                <p className="text-orange-50">{trainer.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Chatbot />
    </main>
  );
}
