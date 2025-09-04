import naitikSketchLight from '@/assets/naitik-sketch-light.png';
import naitikSketchDark from '@/assets/naitik-sketch-light.png';
import { useTheme } from './theme-provider';

const Hero = () => {
  const { theme } = useTheme();
  const currentImage = theme === 'dark' ? naitikSketchDark : naitikSketchLight;
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                HI, I'M{' '}
                <span className="relative">
                  NAITIK TIWARI
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4 text-accent/30"
                    viewBox="0 0 300 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 15 Q 50 5 100 12 Q 150 18 200 8 Q 250 2 295 15"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      className="sketch-line"
                    />
                  </svg>
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                I BUILD THINGS FOR THE WEB.
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Software Developer & Cyber Security Enthusiast crafting digital experiences 
                with clean code and creative solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
                className="sketch-button"
              >
                View My Work
              </button>
              
              <a
                href="mailto:tiwarinaitik9@gmail.com"
                className="sketch-button"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Content - Sketch Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative wobble-hover sketch-draw">
                <img
                  src={currentImage}
                  alt="Hand-drawn sketch of Naitik Tiwari"
                  className="w-80 h-60 object-cover border-2 border-primary/20 rounded-none sketch-frame transition-all duration-500"
                />
                
                {/* Handwritten caption */}
                <div className="absolute -bottom-8 -right-4 handwriting text-lg text-muted-foreground transform rotate-3">
                  That's me!
                  <svg
                    className="absolute -top-2 -left-8 w-16 h-8 text-accent/40"
                    viewBox="0 0 64 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20 Q 25 8 40 18 Q 50 25 60 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="sketch-line"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-accent/50 rounded-none transform rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent/20 rounded-none transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;