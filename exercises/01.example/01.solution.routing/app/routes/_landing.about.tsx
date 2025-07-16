import { Award, Heart, Compass, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: 'Marcus Rodriguez',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Passionate about bringing premium footwear to everyone with 15+ years in fashion retail.',
    },
    {
      name: 'Elena Chen',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former Nike designer with expertise in creating comfortable and stylish footwear.',
    },
    {
      name: 'Sofia Laurent',
      role: 'Customer Experience Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dedicated to ensuring every customer finds their perfect pair of shoes.',
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We constantly seek new materials and technologies to improve comfort and style.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'Every shoe is selected with genuine care for quality and customer satisfaction.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality',
      description: 'We partner only with brands that meet our high standards for craftsmanship.',
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Purpose',
      description: 'Helping people step confidently into their daily adventures.',
    },
  ];

  return (
    <div className="bg-stone-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extralight text-gray-900 dark:text-white mb-8 tracking-tight">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Born from a passion for exceptional footwear and a vision to make premium shoes
            accessible to everyone who values quality, comfort, and style.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-extralight text-gray-900 dark:text-white mb-8 tracking-tight">
                Walking Together Since 2020
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                EpicStore was founded on the belief that everyone deserves access to premium footwear
                that doesn't compromise on comfort, style, or quality. We started as a small team of
                shoe enthusiasts who were frustrated by the lack of truly exceptional options in the market.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                What began as weekend trips to discover hidden gem shoe manufacturers has evolved
                into a curated marketplace that connects customers with the world's finest footwear
                brands, from established names to emerging designers.
              </p>
              <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed text-lg">
                Today, we're proud to serve thousands of customers who trust us to help them find
                shoes that not only look great but feel amazing and last for years to come.
              </p>
            </div>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Shoe craftsmanship"
                className="shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-32 bg-stone-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extralight text-gray-900 dark:text-white mb-6 tracking-tight">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-10 text-center hover:shadow-lg transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-amber-600 dark:text-amber-500 flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extralight text-gray-900 dark:text-white mb-6 tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              The passionate individuals who make EpicStore a destination for shoe lovers everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-8 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-2 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-amber-600 dark:text-amber-500 mb-4 font-light tracking-wide">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extralight text-white mb-8 tracking-tight">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            To provide exceptional footwear that empowers people to step confidently into their
            daily adventures, combining unmatched comfort with timeless style and sustainable practices.
          </p>
        </div>
      </div>
    </div>
  );
};