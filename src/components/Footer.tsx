
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-calm-sand/30 py-12 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="https://www.calm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcalm-logo.2cfd3c66.png&w=170&q=75"
                alt="Calm Logo"
                className="h-8"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Find your calm. Sleep better. Reduce anxiety.
              Live a happier, healthier life with our guided meditations.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-lg">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary text-sm transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-muted-foreground hover:text-primary text-sm transition-colors">Press</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-lg">Offerings</h4>
            <ul className="space-y-2">
              <li><Link to="/meditation" className="text-muted-foreground hover:text-primary text-sm transition-colors">Meditation</Link></li>
              <li><Link to="/sleep" className="text-muted-foreground hover:text-primary text-sm transition-colors">Sleep</Link></li>
              <li><Link to="/stress-anxiety" className="text-muted-foreground hover:text-primary text-sm transition-colors">Stress & Anxiety</Link></li>
              <li><Link to="/music" className="text-muted-foreground hover:text-primary text-sm transition-colors">Music</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-lg">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-muted">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Calm. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://twitter.com/calm" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="https://instagram.com/calm" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com/calm" className="text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
