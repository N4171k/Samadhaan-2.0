import { useState } from 'react';
import { Menu, X, Github, Linkedin, ExternalLink } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: '// Work', href: '#work' },
    { label: '// About', href: '#about' },
    { label: '// Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 border-2 border-primary/80 rounded-none flex items-center justify-center font-bold text-primary wobble-hover">
              NT
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="font-medium text-primary hover:text-accent transition-colors sketch-underline"
              >
                {item.label}
              </button>
            ))}
            
            {/* Social Icons & Theme Toggle */}
            <div className="flex items-center space-x-4 ml-8 border-l border-border pl-8">
              <a
                href="https://github.com/N4171k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors wobble-hover"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/iamnaitik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors wobble-hover"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              {/* <a
                href="https://naitiktiwari.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors wobble-hover"
                aria-label="Website"
              >
                <ExternalLink size={20} />
              </a> */}
              <div className="ml-4 pl-4 border-l border-border">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary wobble-hover"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border py-6">
            <div className="container mx-auto px-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left font-medium text-primary hover:text-accent transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Social Icons */}
                <div className="flex items-center space-x-6 pt-4 border-t border-border">
                  <a
                    href="https://github.com/N4171k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/iamnaitik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://naitiktiwari.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                    aria-label="Website"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;