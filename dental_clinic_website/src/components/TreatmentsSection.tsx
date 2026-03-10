'use client';

export default function TreatmentsSection() {
  const treatments = [
    { name: "Dental Cleaning", price: "₹1200", icon: "🪥" },
    { name: "Root Canal", price: "₹4500", icon: "⚕️" },
    { name: "Teeth Whitening", price: "₹3500", icon: "✨" },
  ];

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Treatment Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment, i) => (
            <div
              key={i}
              className="bg-slate-800 p-8 rounded-lg hover:shadow-xl hover:shadow-blue-500/20 transition text-center"
            >
              <div className="text-5xl mb-4">{treatment.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{treatment.name}</h3>
              <p className="text-blue-400 text-xl font-semibold">{treatment.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
