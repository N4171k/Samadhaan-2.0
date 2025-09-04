const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t border-primary/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-8 h-8 border-2 border-primary/80 rounded-none flex items-center justify-center font-bold text-primary">
              NT
            </div>
            <span className="text-muted-foreground">
              © 2024 Naitik Tiwari. Crafted with care.
            </span>
          </div>

          {/* Right side */}
          <div className="handwriting text-muted-foreground text-lg">
            Made with ♥ and lots of coffee
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;