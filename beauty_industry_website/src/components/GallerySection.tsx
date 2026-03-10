'use client';

export default function GallerySection() {
  return (
    <section className="py-20 px-4 bg-slate-850">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Before & After Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-6xl">
              💇‍♀️
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Hair Transformation</h3>
              <p className="text-slate-300">Beautiful color change with professional styling</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-6xl">
              👰
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Bridal Makeup</h3>
              <p className="text-slate-300">Complete bridal transformation for your special day</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-6xl">
              ✨
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Facial Treatment</h3>
              <p className="text-slate-300">Glowing skin with premium facial care</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-6xl">
              💅
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Nail Art</h3>
              <p className="text-slate-300">Creative nail designs and manicure services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
