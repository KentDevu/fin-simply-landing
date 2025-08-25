import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  initials: string;
  rating: number;
  content: string;
  highlight: string;
}

interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
}

const CustomersSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Jennifer Walsh',
      role: 'Portfolio Manager',
      company: 'Global Investment Partners',
      avatar: '/api/placeholder/80/80',
      initials: 'JW',
      rating: 5,
      content: 'Fin-Simply has transformed how our team stays informed. Instead of checking dozens of news sources, we get everything summarized in one place. The trusted source filtering is incredible.',
      highlight: 'Saves 3+ hours daily'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Chief Investment Officer',
      company: 'Wealth Management Solutions',
      avatar: '/api/placeholder/80/80',
      initials: 'MC',
      rating: 5,
      content: 'The news aggregation and summarization is fantastic. We never miss important financial news anymore, and the platform filters out unreliable sources automatically.',
      highlight: 'Never miss important news'
    },
    {
      id: '3',
      name: 'Sarah Thompson',
      role: 'Senior Analyst',
      company: 'FinTech Innovations',
      avatar: '/api/placeholder/80/80',
      initials: 'ST',
      rating: 5,
      content: 'Outstanding news platform! Having all financial news aggregated, filtered, and summarized in one place makes staying informed so much easier. The interface is clean and intuitive.',
      highlight: 'One-stop news destination'
    }
  ];

  const partners: Partner[] = [
    { id: '1', name: 'Goldman Sachs', logo: '/api/placeholder/120/60', category: 'Investment Banking' },
    { id: '2', name: 'BlackRock', logo: '/api/placeholder/120/60', category: 'Asset Management' },
    { id: '3', name: 'JPMorgan Chase', logo: '/api/placeholder/120/60', category: 'Financial Services' },
    { id: '4', name: 'Morgan Stanley', logo: '/api/placeholder/120/60', category: 'Investment Banking' },
    { id: '5', name: 'Vanguard', logo: '/api/placeholder/120/60', category: 'Asset Management' },
    { id: '6', name: 'Fidelity', logo: '/api/placeholder/120/60', category: 'Financial Services' }
  ];

  const nextTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number): React.ReactNode => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="customers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of financial professionals who rely on Fin-Simply for their daily news consumption.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">5000+</div>
            <div className="text-gray-600 font-medium">Active Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">News Sources</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">10K+</div>
            <div className="text-gray-600 font-medium">Articles Daily</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Live Updates</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            What Our Customers Say
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-50 to-white border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <Quote className="h-12 w-12 text-green-600/30" />
                  <div className="flex space-x-1">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
                      <AvatarFallback className="bg-green-600 text-white text-lg font-semibold">
                        {testimonials[currentTestimonial].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                      <div className="text-green-600 font-semibold">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>

                  <div className="hidden md:block bg-green-100 px-4 py-2 rounded-lg">
                    <div className="text-sm font-semibold text-green-800">
                      {testimonials[currentTestimonial].highlight}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-green-300 hover:bg-green-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {/* Dots Indicator */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-green-600 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-green-300 hover:bg-green-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Trusted by Leading Financial Institutions
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
              >
                <div className="text-center">
                  <div className="w-24 h-12 bg-gray-300 rounded-md flex items-center justify-center mb-2 group-hover:bg-gray-400 transition-colors duration-300">
                    <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-700">
                      {partner.name}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">{partner.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Them?</h3>
            <p className="text-green-100 mb-6">
              Start your free trial today and see why financial professionals choose Fin-Simply for their news.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-green-600 border-white hover:bg-green-50 px-8 py-3"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
