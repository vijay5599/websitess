'use client';

export default function FeaturedPropertiesSection() {
  const properties = [
    {
      name: '2BHK Apartment in Indiranagar',
      price: '₹85L',
      area: '1200 sqft',
      description: 'Modern 2BHK apartment with natural light and gym facilities',
      icon: '🏠',
    },
    {
      name: '3BHK Apartment in Koramangala',
      price: '₹1.2Cr',
      area: '1800 sqft',
      description: 'Spacious 3BHK apartment with smart home features',
      icon: '🏙️',
    },
    {
      name: 'Luxury Villa in Whitefield',
      price: '₹2.5Cr',
      area: '3500 sqft',
      description: 'Stunning villa with private garden and swimming pool',
      icon: '🏡',
    },
  ];

  return (
    <div className="bg-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-teal-400">
          Featured Properties
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Discover our most popular properties
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-teal-500"
            >
              <div className="text-5xl mb-3">{property.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{property.name}</h3>
              <p className="text-teal-400 font-bold text-xl mb-2">{property.price}</p>
              <p className="text-gray-400 mb-2">{property.area}</p>
              <p className="text-gray-300">{property.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
