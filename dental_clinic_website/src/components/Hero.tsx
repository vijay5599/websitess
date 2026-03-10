'use client';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-blue-400">SmileCare</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Your destination for professional dental care in Whitefield, Bangalore. Our expert dentists provide comprehensive dental treatments with the latest technology and highest standards of care.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⏰</span>
                <span className="text-slate-100">Open 9 AM - 8 PM Daily</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span className="text-slate-100">Whitefield, Bangalore</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <span className="text-slate-100">+91 9876543210</span>
              </div>
            </div>

            <button
              onClick={onBookClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition"
            >
              Schedule Your Appointment
            </button>
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-8xl">🦷</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
