import { Truck, Shield, RefreshCw, Award } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Free Shipping',
    description: 'Free shipping on orders over $75',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure Payment',
    description: '100% secure payment processing',
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Easy Returns',
    description: '30-day hassle-free returns',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Quality Guarantee',
    description: 'Premium quality assurance',
  },
];

export const FeaturesSection = () => {
  return (<div className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-amber-600 dark:text-amber-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 tracking-wide">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-light">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>);

} 