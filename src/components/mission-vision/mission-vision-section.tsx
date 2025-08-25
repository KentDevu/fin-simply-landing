import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

const MissionVisionSection: React.FC = () => {
  return (
    <section id="mission-vision" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Mission & Vision
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving the future of financial intelligence through innovation, accessibility, and trust.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission Card */}
          <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-green-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  <p className="text-green-600 font-semibold">What drives us every day</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To democratize access to reliable financial news by aggregating trusted sources, 
                filtering out noise, and delivering clear summaries that keep everyone informed 
                without information overload.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Make reliable financial news accessible to everyone</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Eliminate information overload and fake news</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Provide one trusted platform for all financial news</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  <p className="text-blue-600 font-semibold">Where we're heading</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To become the global standard for financial news consumption, creating a world where 
                everyone has access to trustworthy, summarized financial information in one place.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Lead the financial news aggregation space</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Create seamless news consumption experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Foster well-informed global financial community</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide our decisions and shape our culture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Innovation */}
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <Lightbulb className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">
                Continuously pushing boundaries to deliver cutting-edge financial intelligence solutions.
              </p>
            </CardContent>
          </Card>

          {/* Transparency */}
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h4>
              <p className="text-gray-600 text-sm">
                Providing clear, honest insights with full visibility into our methodologies and processes.
              </p>
            </CardContent>
          </Card>

          {/* Reliability */}
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Reliability</h4>
              <p className="text-gray-600 text-sm">
                Delivering consistent, accurate results that our users can depend on for critical decisions.
              </p>
            </CardContent>
          </Card>

          {/* Empathy */}
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Empathy</h4>
              <p className="text-gray-600 text-sm">
                Understanding our users' challenges and designing solutions that truly serve their needs.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Mission</h3>
            <p className="text-green-100 mb-6 text-lg">
              Be part of the financial intelligence revolution. Together, we can make financial markets more accessible and transparent for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
