'use client';

interface HeroProps {
  onEnrollClick?: () => void;
}

export default function Hero({ onEnrollClick }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-orange-900 to-slate-950 py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-orange-100 mb-6">
          Transform Your Future with Expert Education
        </h1>
        <p className="text-xl text-orange-50 mb-8">
          Learn from industry experts. Master in-demand skills. Join thousands of successful students.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={onEnrollClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition text-lg"
          >
            Start Learning Now
          </button>
          <a
            href="/courses"
            className="border-2 border-orange-500 text-orange-100 hover:bg-orange-500/10 font-bold py-3 px-8 rounded-lg transition text-lg"
          >
            Browse Courses
          </a>
        </div>
      </div>
    </section>
  );
}
