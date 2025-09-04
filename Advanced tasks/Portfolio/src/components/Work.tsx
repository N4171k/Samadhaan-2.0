import { ExternalLink, Github } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: "Banjara Saathi",
      description: "AI-powered travel platform to generate personalized itineraries with integrated booking system.",
      techStack: ["Next.js", "React.js", "Node.js", "Mapbox", "AI/ML"],
      liveUrl: "https://banjarasaathi.xyz",
      githubUrl: "https://github.com/N4171k",
      featured: true
    },
    {
      title: "Amity Coding Club",
      description: "Official website for college coding club with event management and member portal.",
      techStack: ["React.js", "Next.js", "Tailwind CSS", "Firebase"],
      liveUrl: "https://amitycodingclub.social",
      githubUrl: "https://github.com/N4171k",
      featured: true
    },
    {
      title: "Steganography Tool",
      description: "Advanced steganography application for hiding data within images using cryptographic techniques.",
      techStack: ["Cryptography", "Next.js"],
      liveUrl: "https://stegno.naitiktiwari.in",
      githubUrl: "https://github.com/N4171k",
      featured: false
    },
    {
      title: "Munshi",
      description: "Financial management platform with expense tracking and budget analysis features.",
      techStack: ["Next.js", "TypeScript", "Chart.js"],
      liveUrl: "https://munshig.online",
      githubUrl: "https://github.com/N4171k",
      featured: false
    }
  ];

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've built, showcasing my skills in full-stack development, 
            AI/ML, and cyber security.
          </p>
          
          {/* Decorative line */}
          <div className="section-divider"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card ${project.featured ? 'md:col-span-1' : ''}`}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">
                  {project.title}
                </h3>
                
                <div className="flex items-center space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors wobble-hover"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors wobble-hover"
                    aria-label="GitHub repository"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-primary/80">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <div className="handwriting text-accent text-sm transform rotate-12">
                    Featured!
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/N4171k"
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-button inline-flex items-center space-x-2"
          >
            <Github size={18} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;