import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Linkedin, Github, Mail } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  initials: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former financial journalist with 10+ years covering markets and expertise in news aggregation.',
      avatar: '/api/placeholder/150/150',
      initials: 'SC',
      linkedin: '#',
      email: 'sarah@fin-simply.com'
    },
    {
      id: '2',
      name: 'Marcus Johnson',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer specializing in content aggregation systems and AI summarization.',
      avatar: '/api/placeholder/150/150',
      initials: 'MJ',
      linkedin: '#',
      github: '#',
      email: 'marcus@fin-simply.com'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product leader focused on news platforms and user experience in media consumption.',
      avatar: '/api/placeholder/150/150',
      initials: 'ER',
      linkedin: '#',
      email: 'emily@fin-simply.com'
    },
    {
      id: '4',
      name: 'David Kim',
      role: 'Lead Content Engineer',
      bio: 'PhD in Computer Science with expertise in NLP and automated content curation.',
      avatar: '/api/placeholder/150/150',
      initials: 'DK',
      linkedin: '#',
      github: '#',
      email: 'david@fin-simply.com'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse team of journalists, engineers, and content specialists working together 
            to revolutionize how you discover and consume financial news.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="mb-6">
                  <Avatar className="w-24 h-24 mx-auto ring-4 ring-green-100 group-hover:ring-green-200 transition-all duration-300">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xl font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Name and Role */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.role}</p>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="p-2 h-auto border-gray-300 hover:border-green-500 hover:text-green-600"
                      onClick={() => window.open(member.linkedin, '_blank')}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  )}
                  {member.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="p-2 h-auto border-gray-300 hover:border-green-500 hover:text-green-600"
                      onClick={() => window.open(member.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  {member.email && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="p-2 h-auto border-gray-300 hover:border-green-500 hover:text-green-600"
                      onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Growing Team</h3>
            <p className="text-green-100 mb-6">
              We're always looking for talented individuals who share our passion for reliable news and information.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-green-600 border-white hover:bg-green-50 px-8 py-3"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
