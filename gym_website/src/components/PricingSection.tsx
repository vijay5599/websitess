'use client';

export default function PricingSection() {
  const plans = [
    {
      name: 'Monthly Plan',
      price: '₹2000',
      duration: 'per month',
      features: [
        'Access to all equipment',
        'Gym timings: 5 AM - 10 PM',
        'Use of locker facilities',
        'Monthly fitness assessment',
      ],
      icon: '📅',
      popular: false,
    },
    {
      name: 'Quarterly Plan',
      price: '₹5000',
      duration: '3 months',
      features: [
        'All features from monthly plan',
        'Priority booking for trainers',
        'Free nutrition consultation',
        'Quarterly progress report',
      ],
      icon: '🎯',
      popular: true,
    },
    {
      name: 'Personal Training',
      price: '₹6000',
      duration: 'per month',
      features: [
        'One-on-one training sessions',
        'Customized workout plan',
        'Nutrition guidance included',
        'Performance tracking',
      ],
      icon: '👤',
      popular: false,
    },
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Membership Plans
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Choose a plan that fits your budget and goals
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-red-600 to-red-700 text-white transform scale-105 shadow-2xl'
                  : 'bg-gray-800 text-gray-100 shadow-md'
              }`}
            >
              <img src="/images/pricing.svg" alt={plan.name} className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <p className="text-sm opacity-80">{plan.duration}</p>
              </div>
              {plan.popular && (
                <div className="bg-red-500 text-white py-1 px-3 rounded-full text-sm font-bold mb-4 inline-block">
                  Most Popular
                </div>
              )}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={plan.popular ? 'text-yellow-300' : 'text-red-600'}>✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-bold transition ${
                  plan.popular
                    ? 'bg-white text-red-600 hover:bg-gray-100'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
