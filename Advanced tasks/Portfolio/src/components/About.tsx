import { Calendar, MapPin, Award, Code, Database, Wrench } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Bridgit Assistive Technologies",
      period: "2025",
      achievements: [
        "Developed a web extension for deaf users to ",
        "Implemented responsive UI components using React.js",
        "Collaborated with UX team to enhance user experience"
      ]
    },
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      period: "2024",
      achievements: [
        "Contributed to multiple open-source projects",
        "Mentored junior developers in coding best practices",
        "Implemented bug fixes and feature enhancements"
      ]
    },
    {
      title: "Technical Team Co-ordinator",
      company: "Amity Coding Club",
      period: "2023 - Present",
      achievements: [
        "Led technical workshops and coding bootcamps",
        "Organized hackathons with 200+ participants",
        "Built club's official website and management system"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "Amity University, Noida",
      period: "2022 - 2026",
      location: "India"
    },
    {
      degree: "CS50x - Introduction to Computer Science",
      institution: "Harvard University",
      period: "2023",
      location: "Online"
    },
    {
      degree: "Vidh Diploma in Music",
      institution: "Raja Mansingh Tomar Music and Arts University",
      period: "2021",
      location: "India"
    }
  ];

  const skills = {
    languages: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
    frameworks: ["React.js", "Next.js", "Node.js", "Flask", "Express.js"],
    tools: ["GitHub", "AWS", "Linux", "Docker", "MongoDB", "MySQL"]
  };

  const awards = [
    "🏆 1st Place - EPITOME 25 Hackathon",
    "🥈 2nd Place - Samadhan Hackathon",
    "📜 Google Developer Certification",
    "📜 Meta Frontend Developer Certificate",
    "📜 PepsiCo Technology Certification"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science student with a love for building innovative web applications 
            and exploring cybersecurity. When I'm not coding, you'll find me contributing to open source 
            or playing music.
          </p>
          
          <div className="section-divider"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Experience & Education */}
          <div className="space-y-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center">
                <Calendar className="mr-3 text-accent" size={24} />
                Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-accent/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                    
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-primary">
                        {exp.title}
                      </h4>
                      <p className="text-accent font-medium">
                        {exp.company} • {exp.period}
                      </p>
                      
                      <ul className="text-muted-foreground space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-accent">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center">
                <MapPin className="mr-3 text-accent" size={24} />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="project-card">
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-accent font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {edu.period} • {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Awards */}
          <div className="space-y-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center">
                <Code className="mr-3 text-accent" size={24} />
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-primary mb-3 flex items-center">
                    <Code className="mr-2 text-accent" size={18} />
                    Languages
                  </h4>
                  <div className="flex flex-wrap">
                    {skills.languages.map((skill) => (
                      <span key={skill} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-primary mb-3 flex items-center">
                    <Database className="mr-2 text-accent" size={18} />
                    Frameworks
                  </h4>
                  <div className="flex flex-wrap">
                    {skills.frameworks.map((skill) => (
                      <span key={skill} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-primary mb-3 flex items-center">
                    <Wrench className="mr-2 text-accent" size={18} />
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap">
                    {skills.tools.map((skill) => (
                      <span key={skill} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Awards & Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center">
                <Award className="mr-3 text-accent" size={24} />
                Awards & Certifications
              </h3>
              
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-none border border-primary/20">
                    <span className="text-lg">{award.split(' ')[0]}</span>
                    <span className="text-primary font-medium">
                      {award.substring(award.indexOf(' ') + 1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;