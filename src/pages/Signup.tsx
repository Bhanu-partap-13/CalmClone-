
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !name) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate signup process
    console.log('Signing up with:', { name, email, password });
    toast({
      title: "Success!",
      description: "Your account has been created. Welcome to Calm!",
    });
    
    // Reset form
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-calm-teal/20 via-calm-blue/10 to-calm-teal/5">
      <Header />
      
      <div className="flex-grow pt-28 pb-20 px-4 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-calm-teal hover:text-calm-teal/80 mb-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-calm-teal/10">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-medium mb-2">Create Your Account</h1>
              <p className="text-muted-foreground">
                Join millions finding peace and clarity with Calm
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="bg-white"
                />
                <p className="text-xs text-muted-foreground">
                  Password must be at least 8 characters
                </p>
              </div>
              
              <Button type="submit" className="w-full cursor-pointer">
                Create Account
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-calm-teal hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-calm-teal/10">
              <p className="text-xs text-center text-muted-foreground">
                By creating an account, you agree to our{' '}
                <a href="#" className="text-calm-teal hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-calm-teal hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Signup;
