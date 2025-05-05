
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, X, Volume2, Bell, Pause, Play } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';

const MeditationLibrary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showTimer, setShowTimer] = useState(false);
  const [timerDuration, setTimerDuration] = useState(10);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(10 * 60); // in seconds
  const [selectedAudio, setSelectedAudio] = useState<string | null>(null);
  const [bellEnabled, setBellEnabled] = useState(false);
  const [ambientEnabled, setAmbientEnabled] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setIsTimerRunning(true);
    setRemainingTime(timerDuration * 60);
    toast.success(`Meditation timer started for ${timerDuration} minutes`);
  };

  const pauseTimer = () => {
    setIsTimerRunning(false);
    toast.info("Meditation timer paused");
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setRemainingTime(timerDuration * 60);
    toast.info("Meditation timer reset");
  };

  useEffect(() => {
    let interval: number | undefined;
    
    if (isTimerRunning && remainingTime > 0) {
      interval = window.setInterval(() => {
        setRemainingTime(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsTimerRunning(false);
            if (bellEnabled) {
              toast.success("Meditation complete!", {
                description: "Your meditation session has ended."
              });
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (remainingTime === 0 && isTimerRunning) {
      // Timer finished
      setIsTimerRunning(false);
      toast.success("Meditation complete!", {
        description: "Your meditation session has ended."
      });
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, remainingTime, bellEnabled]);

  const meditations = [
    {
      id: 1,
      title: "Anxiety Relief",
      duration: "10 min",
      category: "Quick Relief",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Deep Relaxation",
      duration: "20 min",
      category: "Daily Practice",
      image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Calm Mind",
      duration: "15 min",
      category: "Daily Practice",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Stress Release",
      duration: "8 min",
      category: "Quick Relief",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Healing Journey",
      duration: "30 min",
      category: "Deep Healing",
      image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Inner Peace",
      duration: "25 min",
      category: "Deep Healing",
      image: "https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Morning Calm",
      duration: "10 min",
      category: "Daily Practice",
      image: "https://images.unsplash.com/photo-1500829243541-74b677fecc30?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Evening Wind Down",
      duration: "15 min",
      category: "Daily Practice",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Panic Relief",
      duration: "5 min",
      category: "Quick Relief",
      image: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=800&q=80"
    },
  ];

  const playMeditation = (meditation: typeof meditations[0]) => {
    setSelectedAudio(meditation.title);
    toast.success(`Playing ${meditation.title}`, {
      description: `Duration: ${meditation.duration}`
    });
  };

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
            <h1 className="text-3xl md:text-4xl font-medium mb-4">Meditation Library</h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore our complete collection of guided meditations designed to help with anxiety, stress relief, and finding calm in your daily life.
            </p>
          </div>
          
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <Button onClick={() => setShowTimer(true)} className="bg-calm-teal hover:bg-calm-teal/90 cursor-pointer">
              <Clock className="mr-2 h-4 w-4" />
              Open Meditation Timer
            </Button>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="cursor-pointer">All Meditations</Button>
              <Button variant="outline" className="cursor-pointer">Quick Relief</Button>
              <Button variant="outline" className="cursor-pointer">Daily Practice</Button>
              <Button variant="outline" className="cursor-pointer">Deep Healing</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meditations.map((meditation) => (
              <div key={meditation.id} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={meditation.image} 
                    alt={meditation.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-calm-teal/80 text-white mb-2 inline-block">
                        {meditation.category}
                      </span>
                      <h3 className="text-lg font-medium text-white">{meditation.title}</h3>
                    </div>
                    <span className="text-white/80 text-sm">{meditation.duration}</span>
                  </div>
                </div>
                <button 
                  className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center"
                  onClick={() => playMeditation(meditation)}
                >
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
        </div>
      </main>
      
      {/* Meditation Timer Modal */}
      {showTimer && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden">
            <div className="p-6 relative">
              <button 
                onClick={() => setShowTimer(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              
              <h2 className="text-2xl font-medium mb-6 text-center">Meditation Timer</h2>
              
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3 text-muted-foreground">Set Duration (minutes)</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {[5, 10, 15, 20, 30].map(duration => (
                    <button
                      key={duration} 
                      onClick={() => {
                        setTimerDuration(duration);
                        setRemainingTime(duration * 60);
                      }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                        timerDuration === duration 
                          ? 'bg-calm-teal text-white' 
                          : 'bg-calm-teal/10 hover:bg-calm-teal/20'
                      }`}
                    >
                      {duration}
                    </button>
                  ))}
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2 text-muted-foreground">Custom Duration</h3>
                  <Slider
                    defaultValue={[timerDuration]}
                    min={1}
                    max={60}
                    step={1}
                    className="mb-2"
                    onValueChange={(value) => {
                      setTimerDuration(value[0]);
                      setRemainingTime(value[0] * 60);
                    }}
                  />
                  <div className="text-center text-sm text-muted-foreground">{timerDuration} minutes</div>
                </div>
                
                <div className="text-center mb-8">
                  <div className="text-5xl font-light mb-2">{formatTime(remainingTime)}</div>
                  <div className="text-sm text-muted-foreground">
                    {isTimerRunning ? 'Meditation in progress' : 'Ready to start'}
                  </div>
                </div>
                
                <div className="flex justify-center gap-4">
                  {!isTimerRunning ? (
                    <Button 
                      onClick={startTimer} 
                      className="bg-calm-teal hover:bg-calm-teal/90 cursor-pointer"
                      size="lg"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Start
                    </Button>
                  ) : (
                    <Button 
                      onClick={pauseTimer} 
                      className="bg-calm-teal hover:bg-calm-teal/90 cursor-pointer"
                      size="lg"
                    >
                      <Pause className="mr-2 h-4 w-4" />
                      Pause
                    </Button>
                  )}
                  <Button 
                    onClick={resetTimer} 
                    variant="outline"
                    className="cursor-pointer"
                    size="lg"
                  >
                    Reset
                  </Button>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="text-sm font-medium mb-3 text-muted-foreground">Sound Options</h3>
                <div className="flex justify-between">
                  <Button 
                    variant={bellEnabled ? "default" : "outline"} 
                    size="sm" 
                    className={`gap-2 cursor-pointer ${bellEnabled ? "bg-calm-teal hover:bg-calm-teal/90" : ""}`}
                    onClick={() => setBellEnabled(!bellEnabled)}
                  >
                    <Bell className="h-4 w-4" />
                    Bell
                  </Button>
                  <Button 
                    variant={ambientEnabled ? "default" : "outline"} 
                    size="sm" 
                    className={`gap-2 cursor-pointer ${ambientEnabled ? "bg-calm-teal hover:bg-calm-teal/90" : ""}`}
                    onClick={() => setAmbientEnabled(!ambientEnabled)}
                  >
                    <Volume2 className="h-4 w-4" />
                    Ambient Sounds
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default MeditationLibrary;
