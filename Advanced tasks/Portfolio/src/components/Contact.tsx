import { Mail, Download, Github, Linkedin, ExternalLink, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind, 
              want to discuss technology, or just say hello, I'd love to hear from you!
            </p>
            
            <div className="section-divider"></div>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <div className="project-card text-left">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Email Me</h3>
                  <p className="text-muted-foreground">Let's start a conversation</p>
                </div>
              </div>
              
              <a
                href="mailto:tiwarinaitik9@gmail.com"
                className="text-accent hover:text-accent/80 transition-colors font-medium text-lg sketch-underline"
              >
                tiwarinaitik9@gmail.com
              </a>
            </div>

            {/* Resume Card */}
            <div className="project-card text-left">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center">
                  < Download className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">My Resume</h3>
                  <p className="text-muted-foreground">Download my latest CV</p>
                </div>
              </div>
              
              <button className="sketch-button inline-flex items-center space-x-2">
                <Download size={18} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary">
              Find Me Online
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <a
                href="https://github.com/N4171k"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card hover:border-accent group transition-all duration-300"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Github className="text-primary group-hover:text-accent transition-colors" size={24} />
                  <span className="font-medium text-primary group-hover:text-accent transition-colors">
                    GitHub
                  </span>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-accent transition-colors" size={16} />
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  Check out my repositories
                </p>
              </a>

              <a
                href="https://linkedin.com/in/iamnaitik"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card hover:border-accent group transition-all duration-300"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Linkedin className="text-primary group-hover:text-accent transition-colors" size={24} />
                  <span className="font-medium text-primary group-hover:text-accent transition-colors">
                    LinkedIn
                  </span>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-accent transition-colors" size={16} />
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  Professional network
                </p>
              </a>

              <a
                href="https://naitiktiwari.in"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card hover:border-accent group transition-all duration-300"
              >
                <div className="flex items-center justify-center space-x-3">
                  <ExternalLink className="text-primary group-hover:text-accent transition-colors" size={24} />
                  <span className="font-medium text-primary group-hover:text-accent transition-colors">
                    Website
                  </span>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-accent transition-colors" size={16} />
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  Personal website
                </p>
              </a>
            </div>
          </div>

          {/* Fun message */}
          <div className="mt-16 p-8 bg-secondary/50 border-2 border-accent/20 rounded-none relative">
            <div className="handwriting text-xl text-primary mb-2">
              Fun fact: I also play music! 🎵
            </div>
            <p className="text-muted-foreground">
              When I'm not coding, you might find me creating melodies or jamming with friends.
            </p>
            
            {/* Decorative musical notes */}
            <div className="absolute top-4 right-4 handwriting text-accent text-2xl transform rotate-12">
              ♪ ♫
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;