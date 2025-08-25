import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Twitter, 
  Github,
  MessageSquare,
  Users,
  Headphones
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactsSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
    setIsSubmitting(false);
    
    // Show success message (you can implement this with a toast library)
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@fin-simply.com',
      subtitle: 'We respond within 24 hours',
      action: 'mailto:hello@fin-simply.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri, 9AM-6PM EST',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Financial District',
      subtitle: 'New York, NY 10004',
      action: 'https://maps.google.com'
    }
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant answers to your questions',
      available: 'Available 24/7'
    },
    {
      icon: Users,
      title: 'Schedule Demo',
      description: 'Book a personalized product demonstration',
      available: 'Choose your time'
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description: 'Technical assistance and troubleshooting',
      available: 'Mon-Fri, 9AM-6PM'
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to streamline your financial news consumption? We're here to help you get started.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-green-500 focus:border-green-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-green-500 focus:border-green-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="focus:ring-green-500 focus:border-green-500"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="focus:ring-green-500 focus:border-green-500"
                      placeholder="Tell us about your needs, questions, or how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Support */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-start space-x-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                      <info.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-700 font-medium">{info.content}</p>
                      <p className="text-gray-500 text-sm">{info.subtitle}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Support Options */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Support Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportOptions.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <option.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {option.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                      <p className="text-green-600 text-xs font-medium">{option.available}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-to-r from-green-600 to-green-700 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-green-600"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-green-600"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-green-600"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FS</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Fin-Simply</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Aggregating, filtering, and summarizing financial news from trusted sources 
                to keep you informed without the information overload.
              </p>
              <p className="text-sm text-gray-500">
                © 2024 Fin-Simply. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#about" className="hover:text-green-600 transition-colors duration-300">About Us</a></li>
                <li><a href="#team" className="hover:text-green-600 transition-colors duration-300">Our Team</a></li>
                <li><a href="#mission-vision" className="hover:text-green-600 transition-colors duration-300">Mission & Vision</a></li>
                <li><a href="#customers" className="hover:text-green-600 transition-colors duration-300">Customers</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-green-600 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors duration-300">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors duration-300">Security</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactsSection;
