
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Moon, Clock, PlayCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Sleep = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sleepSounds = [
    {
      id: 1,
      title: "Night Rain",
      duration: "8 hours",
      category: "Nature",
      image: "https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Ocean Waves",
      duration: "10 hours",
      category: "Nature",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Forest Night",
      duration: "9 hours",
      category: "Nature",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "White Noise",
      duration: "12 hours",
      category: "Ambient",
      image: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Gentle Piano",
      duration: "6 hours",
      category: "Music",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Deep Sleep",
      duration: "8 hours",
      category: "Guided",
      image: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?auto=format&fit=crop&w=800&q=80"
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
            <h1 className="text-3xl md:text-4xl font-medium mb-4">Sleep Sounds & Stories</h1>
            <p className="text-muted-foreground max-w-2xl">
              Discover our collection of sleep-inducing sounds, music, and bedtime stories designed to help you fall asleep faster and stay asleep longer.
            </p>
          </div>
          
          {/* Featured Sleep Content */}
          <div className="mb-16 relative rounded-2xl overflow-hidden">
            <div className="aspect-[21/9] w-full">
              <img 
                src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1470&q=80" 
                alt="Starry night sky" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
              <div className="px-8 md:px-12 max-w-2xl">
                <h2 className="text-2xl md:text-4xl font-medium text-white mb-4">Fall Asleep Under the Stars</h2>
                <p className="text-white/80 mb-6 hidden md:block">
                  Our most popular sleep story takes you on a peaceful journey through a starry night, helping you relax your mind and drift into a deep, restful sleep.
                </p>
                <div className="flex items-center gap-4">
                  <Button className="bg-calm-teal/80 hover:bg-calm-teal cursor-pointer" size="lg">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Play Now
                  </Button>
                  <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 cursor-pointer">
                    Add to Favorites
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Sleep Sounds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sleepSounds.map((sound) => (
              <div key={sound.id} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={sound.image} 
                    alt={sound.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-calm-teal/80 text-white mb-2 inline-block">
                        {sound.category}
                      </span>
                      <h3 className="text-lg font-medium text-white">{sound.title}</h3>
                    </div>
                    <span className="text-white/80 text-sm">{sound.duration}</span>
                  </div>
                </div>
                <button className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-calm-teal"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </button>
              </div>
            ))}
          </div>
          
          {/* Sleep Tips Section */}
          <div className="bg-calm-teal/10 rounded-2xl p-8 mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="rounded-full bg-calm-teal/20 p-4 inline-flex mb-4">
                  <Moon className="h-8 w-8 text-calm-teal" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium mb-4">Tips for Better Sleep</h2>
                <p className="text-muted-foreground">
                  Improve your sleep quality with these science-backed tips for creating the perfect sleep environment and routine.
                </p>
                <Button className="mt-6 cursor-pointer">
                  View All Sleep Tips
                </Button>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <h3 className="font-medium mb-2">Keep a Consistent Schedule</h3>
                  <p className="text-sm text-muted-foreground">
                    Go to bed and wake up at the same time every day, even on weekends, to regulate your body's internal clock.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <h3 className="font-medium mb-2">Create a Restful Environment</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep your bedroom cool, quiet, and dark. Consider using earplugs, an eye mask, or a white noise machine.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <h3 className="font-medium mb-2">Limit Screen Time</h3>
                  <p className="text-sm text-muted-foreground">
                    Avoid screens (phone, tablet, computer) for at least an hour before bedtime as blue light can disrupt your circadian rhythm.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <h3 className="font-medium mb-2">Watch What You Eat and Drink</h3>
                  <p className="text-sm text-muted-foreground">
                    Avoid large meals, caffeine, and alcohol before bedtime as they can disrupt sleep patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sleep;
