'use client';

export default function ServicePackagesSection() {
  const services = [
    {
      name: 'General Service',
      price: '₹2500',
      description: 'Complete vehicle inspection, oil change, filter replacement, and fluid top-ups',
      features: ['Oil & Filter Change', 'Fluid Top-up', 'Inspection', 'Basic Troubleshooting'],
      icon: '🔧',
    },
    {
      name: 'Oil Change Service',
      price: '₹1200',
      duration: '30 mins',
      description: 'Quick oil and filter change with quality synthetic or conventional oil',
      features: ['Premium Oil', 'New Filter', 'Disposal', 'Test Drive'],
      icon: '🛢️',
    },
    {
      name: 'Brake Repair',
      price: '₹2000',
      description: 'Brake inspection, pad replacement, and rotor servicing',
      features: ['Brake Pad Check', 'Rotor Service', 'Bleeding', 'Test Drive'],
      icon: '🛑',
    },
    {
      name: 'AC Service',
      price: '₹1800',
      description: 'AC refrigerant refill, compressor check, and filter cleaning',
      features: ['Refrigerant Refill', 'Filter Clean', 'Compressor Check', 'Vent Service'],
      icon: '❄️',
    },
    {
      name: 'Car Detailing',
      price: '₹3500',
      description: 'Complete exterior and interior detailing with wax and polish',
      features: ['Exterior Wash', 'Interior Vacuum', 'Wax Polish', 'Glass Treatment'],
      icon: '✨',
    },
    {
      name: 'Transmission Service',
      price: '₹3000',
      description: 'Transmission fluid check, filter replacement, and system flush',
      features: ['Fluid Check', 'Filter Replace', 'System Flush', 'Inspection'],
      icon: '⚙️',
    },
  ];

  return (
    <div className="bg-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-red-500">
          Our Services
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Professional car maintenance and repair services
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-red-600"
            >
              <div className="text-5xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
              <p className="text-red-500 font-bold text-xl mb-2">{service.price}</p>
              <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
              <ul className="text-gray-400 text-sm space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
