
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Heart, Smile, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreathingExercise from '@/components/BreathingExercise';
import StressChecklistCard from '@/components/StressChecklistCard';
import TestimonialCard from '@/components/TestimonialCard';
import ResourceCard from '@/components/ResourceCard';

const StressAnxietyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const playVideo = () => {
    console.log("Playing meditation video");
    alert("Meditation video is now playing");
  };

  return (
    <div className="min-h-screen flex flex-col bg-calm-teal/5">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-calm-teal/5 to-calm-blue/5 -z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 -z-20" />
        
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-6 animate-fade-in">Find Peace Amid Stress & Anxiety</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Discover practical tools, guided meditations, and resources to help you manage stress and reduce anxiety in your daily life.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
            <Button size="lg" className="px-6 cursor-pointer">
              Start a Guided Session
            </Button>
            <Button size="lg" variant="outline" className="px-6 cursor-pointer">
              Explore Resources
            </Button>
          </div>
        </div>
      </section>
      
      {/* Understanding Anxiety Section */}
      <section className="py-16 px-4 bg-calm-gray">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Understanding Anxiety</h2>
            <p className="text-muted-foreground">
              Anxiety is your body's natural response to stress. Learning to identify triggers and manage symptoms can help you regain control.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ResourceCard 
              title="Physical Symptoms" 
              description="Learn to recognize how anxiety manifests in your body and what you can do to address these physical responses."
              icon={<Heart className="h-6 w-6" />}
              link="/physical-symptoms"
              color="teal"
            />
            <ResourceCard 
              title="Mental Symptoms" 
              description="Understand how anxiety affects your thoughts and mental processes, and discover techniques to manage racing thoughts."
              icon={<Smile className="h-6 w-6" />}
              link="/mental-symptoms"
              color="blue"
            />
            <ResourceCard 
              title="Social Anxiety" 
              description="Explore the impact of anxiety on social interactions and learn strategies to navigate social situations with confidence."
              icon={<MessageCircle className="h-6 w-6" />}
              link="/social-anxiety"
              color="lavender"
            />
          </div>
        </div>
      </section>
      
      {/* Interactive Tools Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Interactive Tools</h2>
            <p className="text-muted-foreground">
              Practical tools and exercises you can use anytime, anywhere to manage anxiety in the moment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BreathingExercise />
            <StressChecklistCard />
          </div>
        </div>
      </section>
      
      {/* Quick Techniques Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-calm-teal/10 to-calm-blue/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Quick Relief Techniques</h2>
            <p className="text-muted-foreground">
              These simple techniques can help provide immediate relief during moments of heightened anxiety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-calm-teal/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-medium text-calm-teal">1</span>
                </div>
                <h3 className="text-lg font-medium mb-2">5-4-3-2-1 Grounding</h3>
                <p className="text-sm text-muted-foreground">
                  Identify 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-calm-blue/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-medium text-calm-blue">2</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Progressive Relaxation</h3>
                <p className="text-sm text-muted-foreground">
                  Tense and then release each muscle group in your body, starting from your toes and working up to your head.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-calm-lavender/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-medium text-calm-lavender">3</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Visualization</h3>
                <p className="text-sm text-muted-foreground">
                  Close your eyes and imagine a peaceful place or situation where you feel safe and relaxed.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-calm-green/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-medium text-calm-green">4</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Name Your Feelings</h3>
                <p className="text-sm text-muted-foreground">
                  Simply name the emotions you're experiencing. This can help create distance and reduce their intensity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-calm-teal/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-medium text-calm-teal">5</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Cold Water Technique</h3>
                <p className="text-sm text-muted-foreground">
                  Place your face in cold water or hold an ice pack to your face for 30 seconds to trigger the dive reflex and calm anxiety.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-calm-blue/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-medium text-calm-blue">6</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Mindful Walking</h3>
                <p className="text-sm text-muted-foreground">
                  Focus entirely on the sensations of walking—your feet touching the ground, the rhythm of your steps, and your breathing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Meditation Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Guided Meditations for Anxiety</h2>
              <p className="text-muted-foreground mb-6">
                Our specially crafted meditations can help you learn to recognize anxious thoughts and create a calmer mental state.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-calm-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-calm-teal" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Quick Relief (5-10 min)</h3>
                    <p className="text-sm text-muted-foreground">
                      Short meditations designed to provide immediate relief during moments of anxiety.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-calm-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-calm-teal" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Daily Practice (15-20 min)</h3>
                    <p className="text-sm text-muted-foreground">
                      Consistent daily practice to build resilience against stress and anxiety over time.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-calm-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-calm-teal" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Deep Healing (30+ min)</h3>
                    <p className="text-sm text-muted-foreground">
                      Longer sessions that address deeper patterns of anxiety and stress.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="flex items-center gap-1 group cursor-pointer" asChild>
                <Link to="/meditation-library">
                  Explore Our Meditation Library 
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80" 
                  alt="Peaceful forest with sunlight" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all cursor-pointer"
                  onClick={playVideo}
                >
                  <Play className="h-6 w-6 text-calm-teal" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-calm-gray">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Stories of Transformation</h2>
            <p className="text-muted-foreground">
              Hear from people who have found relief from anxiety and stress through Calm.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="After years of struggling with anxiety, the techniques I learned through Calm have become my daily anchor. I've reduced my anxiety by more than 60%."
              author="Sarah K."
            />
            <TestimonialCard 
              quote="The breathing exercises saved me during panic attacks. Now I use them proactively and haven't had a severe attack in months."
              author="Michael T."
            />
            <TestimonialCard 
              quote="As someone with social anxiety, I was skeptical. But the gradual approach and consistent practice made a remarkable difference in how I navigate social situations."
              author="Lena J."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-calm-teal to-calm-blue opacity-10 -z-10" />
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Start Your Journey to Calm</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step toward a more peaceful mind. Access our complete library of anxiety-reducing content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 cursor-pointer" asChild>
              <Link to="/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 cursor-pointer" asChild>
              <Link to="/premium">Explore Premium Features</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const Play = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export default StressAnxietyPage;
