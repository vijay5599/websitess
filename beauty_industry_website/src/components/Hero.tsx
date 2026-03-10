'use client';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-pink-500">Glow Studio</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Experience premium beauty and hair services in Koramangala, Bangalore. Our expert stylists are ready to transform your look and boost your confidence.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⏰</span>
                <span className="text-slate-100">Open 10 AM - 9 PM Daily</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span className="text-slate-100">Koramangala, Bangalore</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <span className="text-slate-100">+91 9876543210</span>
              </div>
            </div>

            <button
              onClick={onBookClick}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition"
            >
              Book Your Appointment
            </button>
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-96 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-8xl">💅</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
