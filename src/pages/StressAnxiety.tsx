
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreathingExercise from '@/components/BreathingExercise';
import StressChecklistCard from '@/components/StressChecklistCard';

const StressAnxiety = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      id: 1,
      title: "5-Minute Anxiety Reset",
      category: "Quick Relief",
      description: "A brief guided practice to quickly reduce anxiety symptoms",
      image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Stress Reduction Program",
      category: "Course",
      description: "A 7-day program to build resilience against daily stressors",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Understanding Panic Attacks",
      category: "Education",
      description: "Learn about panic attacks and how to manage them effectively",
      image: "https://images.unsplash.com/photo-1560333470-c56299189e4b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Sleep & Anxiety Connection",
      category: "Education",
      description: "Discover how improving sleep can reduce anxiety levels",
      image: "https://images.unsplash.com/photo-1455642305367-68834a9d4339?auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-calm-teal/5">
      <Header />
      
      <main className="flex-grow pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-calm-teal hover:text-calm-teal/80 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-medium mb-4">Stress & Anxiety Resources</h1>
            <p className="text-muted-foreground max-w-2xl">
              Tools, exercises, and educational content to help you understand and manage stress and anxiety in your daily life.
            </p>
          </div>
          
          {/* Interactive Tools Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">Interactive Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BreathingExercise />
              <StressChecklistCard />
            </div>
          </div>
          
          {/* Resources Grid */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <div 
                  key={resource.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex cursor-pointer group"
                >
                  <div className="w-1/3 overflow-hidden">
                    <img 
                      src={resource.image} 
                      alt={resource.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="w-2/3 p-5">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-calm-teal/20 text-calm-teal mb-3 inline-block">
                      {resource.category}
                    </span>
                    <h3 className="font-medium text-lg mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                    <Button variant="ghost" size="sm" className="text-calm-teal hover:text-calm-teal/80 hover:bg-calm-teal/10 p-0 h-auto">
                      Explore Resource
                      <ArrowLeft className="h-3.5 w-3.5 ml-1 rotate-180" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Emergency Support Section */}
          <div className="bg-white rounded-xl p-8 mb-16 border border-calm-teal/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-calm-teal/10 rounded-full p-4 flex-shrink-0">
                <Heart className="h-8 w-8 text-calm-teal" />
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-2">Need urgent support?</h2>
                <p className="text-muted-foreground mb-4">
                  If you're experiencing severe anxiety or a crisis, please reach out to one of these resources for immediate help.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-calm-teal/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-1">Crisis Text Line</h3>
                    <p className="text-sm text-muted-foreground">Text HOME to 741741</p>
                  </div>
                  <div className="bg-calm-teal/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-1">National Suicide Prevention Lifeline</h3>
                    <p className="text-sm text-muted-foreground">1-800-273-8255</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Timer section for meditation */}
          <div className="bg-calm-teal/10 rounded-xl p-8 mb-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Meditation Timer</h2>
              <p className="text-muted-foreground mb-6">
                Set a custom timer for your meditation practice. Choose a duration that works for you and enjoy a gentle bell at the end of your session.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {[5, 10, 15, 20, 30].map(minutes => (
                  <button 
                    key={minutes}
                    className="px-4 py-2 rounded-full bg-white hover:bg-calm-teal hover:text-white transition-colors cursor-pointer"
                  >
                    {minutes} min
                  </button>
                ))}
                <button className="px-4 py-2 rounded-full bg-white hover:bg-calm-teal hover:text-white transition-colors cursor-pointer">
                  Custom
                </button>
              </div>
              <Button className="bg-calm-teal hover:bg-calm-teal/90 cursor-pointer">
                Start Meditation
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StressAnxiety;
