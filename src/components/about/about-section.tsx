import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  Users,
  ArrowRight 
} from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Smart Summarization',
      description: 'AI-powered technology that distills lengthy financial reports and news articles into key points.'
    },
    {
      icon: Zap,
      title: 'Real-Time Aggregation',
      description: 'Instantly collect and organize news from thousands of sources as stories break.'
    },
    {
      icon: Shield,
      title: 'Trusted Sources',
      description: 'Curated network of reliable financial news providers, verified for accuracy and credibility.'
    },
    {
      icon: TrendingUp,
      title: 'Trend Tracking',
      description: 'Identify emerging patterns and trending topics across the financial news landscape.'
    },
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'Skip the noise and get straight to what matters with filtered, summarized content.'
    },
    {
      icon: Users,
      title: 'Centralized Platform',
      description: 'One reliable destination for all your financial news consumption needs.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Graphics/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 relative overflow-hidden">
              {/* Abstract Finance Graphic */}
              <div className="relative z-10">
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-16 rounded-lg ${
                        i % 3 === 0 
                          ? 'bg-green-500' 
                          : i % 3 === 1 
                          ? 'bg-green-400' 
                          : 'bg-green-300'
                      } opacity-80 transform transition-transform duration-300 hover:scale-105`}
                      style={{
                        animationDelay: `${i * 100}ms`,
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="h-8 w-8 text-green-700" />
                </div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Brain className="h-6 w-6 text-green-700" />
                </div>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-green-600 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-green-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built to{' '}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Simplify
              </span>{' '}
              Financial News
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              In today's information-saturated world, finding reliable financial news is overwhelming. 
              Fin-Simply aggregates trusted sources, filters out the noise, and summarizes everything 
              in one place so you can stay informed without the hassle.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Aggregate news from 1000+ trusted financial sources daily</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Filter and summarize articles to highlight key information</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Access everything through one reliable, easy-to-use platform</p>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              Learn How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Fin-Simply?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with deep financial expertise 
              to deliver unparalleled insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-green-100">News Sources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-green-100">Daily Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">5000+</div>
              <div className="text-green-100">Active Readers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-green-100">Live Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
