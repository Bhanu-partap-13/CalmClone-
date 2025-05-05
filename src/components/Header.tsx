
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-medium' : 'text-foreground hover:text-primary transition-colors font-medium';
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-calm-teal/10 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://www.calm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcalm-logo.2cfd3c66.png&w=170&q=75"
                alt="Calm Logo"
                className="h-8"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={isActive('/')}>
              Home
            </Link>
            <Link to="/sleep" className={isActive('/sleep')}>
              Sleep
            </Link>
            <Link to="/meditation-library" className={isActive('/meditation-library')}>
              Meditation
            </Link>
            <Link to="/stress-anxiety" className={isActive('/stress-anxiety')}>
              Stress & Anxiety
            </Link>
            <Link to="/music" className={isActive('/music')}>
              Music
            </Link>
            <Button variant="default" className="ml-4 cursor-pointer" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t mt-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className={`py-2 ${isActive('/')} cursor-pointer`}>
                Home
              </Link>
              <Link to="/sleep" className={`py-2 ${isActive('/sleep')} cursor-pointer`}>
                Sleep
              </Link>
              <Link to="/meditation-library" className={`py-2 ${isActive('/meditation-library')} cursor-pointer`}>
                Meditation
              </Link>
              <Link to="/stress-anxiety" className={`py-2 ${isActive('/stress-anxiety')} cursor-pointer`}>
                Stress & Anxiety
              </Link>
              <Link to="/music" className={`py-2 ${isActive('/music')} cursor-pointer`}>
                Music
              </Link>
              <Button variant="default" className="w-full mt-2 cursor-pointer" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
