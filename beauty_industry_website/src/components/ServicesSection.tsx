'use client';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      name: "Haircut",
      price: "₹400",
      icon: "✂️"
    },
    {
      id: 2,
      name: "Hair Coloring",
      price: "₹2500",
      icon: "🎨"
    },
    {
      id: 3,
      name: "Facial",
      price: "₹1500",
      icon: "✨"
    },
    {
      id: 4,
      name: "Manicure",
      price: "₹600",
      icon: "💅"
    },
    {
      id: 5,
      name: "Pedicure",
      price: "₹800",
      icon: "👣"
    },
    {
      id: 6,
      name: "Bridal Makeup",
      price: "₹8000",
      icon: "👰"
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Popular Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-800 p-8 rounded-lg hover:shadow-xl hover:shadow-pink-500/20 transition text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
              <p className="text-pink-400 text-xl font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
