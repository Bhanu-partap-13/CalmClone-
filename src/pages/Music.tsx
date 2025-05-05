
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Music as MusicIcon, Volume2, List, Clock, X, Play, Pause } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';

const Music = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showTimer, setShowTimer] = useState(false);
  const [timerDuration, setTimerDuration] = useState(10);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(10 * 60); // in seconds
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

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
            toast.success("Meditation complete!", {
              description: "Your meditation session has ended."
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (remainingTime === 0 && isTimerRunning) {
      // Timer finished
      setIsTimerRunning(false);
      toast.success("Meditation complete!");
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, remainingTime]);

  const musicTracks = [
    {
      id: 1,
      title: "Forest Meditation",
      artist: "Nature Sounds",
      duration: "30 min",
      category: "Focus",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Ocean Waves",
      artist: "Calm Waters",
      duration: "45 min",
      category: "Relax",
      image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Gentle Piano",
      artist: "Peaceful Melodies",
      duration: "60 min",
      category: "Sleep",
      image: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Mountain Air",
      artist: "Ambient Soundscapes",
      duration: "40 min",
      category: "Focus",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Rainfall",
      artist: "Nature Sounds",
      duration: "50 min",
      category: "Relax",
      image: "https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Deep Meditation",
      artist: "Zen Masters",
      duration: "30 min",
      category: "Meditate",
      image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=800&q=80"
    },
  ];

  const filteredTracks = selectedCategory === "All" 
    ? musicTracks 
    : musicTracks.filter(track => track.category === selectedCategory);

  const playlists = [
    { id: 1, title: "Focus", count: 18 },
    { id: 2, title: "Relax", count: 24 },
    { id: 3, title: "Sleep", count: 15 },
    { id: 4, title: "Meditate", count: 12 }
  ];

  const playTrack = (track: typeof musicTracks[0]) => {
    setSelectedTrack(track.title);
    toast.success(`Playing ${track.title}`, {
      description: `By ${track.artist}`
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
            <h1 className="text-3xl md:text-4xl font-medium mb-4">Calm Music</h1>
            <p className="text-muted-foreground max-w-2xl">
              Discover our curated collection of music designed to help you focus, relax, or sleep better. From ambient soundscapes to gentle melodies, find the perfect audio companion for your day.
            </p>
          </div>
          
          <div className="mb-6">
            <Button onClick={() => setShowTimer(true)} className="bg-calm-teal hover:bg-calm-teal/90 cursor-pointer">
              <Clock className="mr-2 h-4 w-4" />
              Open Meditation Timer
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-32">
                <h2 className="text-xl font-medium mb-4 flex items-center">
                  <List className="h-5 w-5 mr-2 text-calm-teal" />
                  Playlists
                </h2>
                <div className="space-y-3">
                  <div 
                    className={`flex items-center justify-between py-2 px-3 rounded-lg hover:bg-calm-teal/10 cursor-pointer transition-colors ${selectedCategory === "All" ? "bg-calm-teal/10" : ""}`}
                    onClick={() => setSelectedCategory("All")}
                  >
                    <span className="font-medium">All Music</span>
                    <span className="text-sm text-muted-foreground">{musicTracks.length} tracks</span>
                  </div>
                  {playlists.map(playlist => (
                    <div 
                      key={playlist.id} 
                      className={`flex items-center justify-between py-2 px-3 rounded-lg hover:bg-calm-teal/10 cursor-pointer transition-colors ${selectedCategory === playlist.title ? "bg-calm-teal/10" : ""}`}
                      onClick={() => setSelectedCategory(playlist.title)}
                    >
                      <span className="font-medium">{playlist.title}</span>
                      <span className="text-sm text-muted-foreground">{playlist.count} tracks</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">My Library</h3>
                  <div className="space-y-3">
                    <div className="flex items-center py-2 px-3 rounded-lg hover:bg-calm-teal/10 cursor-pointer transition-colors">
                      <span className="font-medium">Favorites</span>
                    </div>
                    <div className="flex items-center py-2 px-3 rounded-lg hover:bg-calm-teal/10 cursor-pointer transition-colors">
                      <span className="font-medium">Recently Played</span>
                    </div>
                    <div className="flex items-center py-2 px-3 rounded-lg hover:bg-calm-teal/10 cursor-pointer transition-colors">
                      <span className="font-medium">Custom Mixes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-medium mb-6 flex items-center">
                <MusicIcon className="h-6 w-6 mr-2 text-calm-teal" />
                {selectedCategory === "All" ? "Featured Tracks" : `${selectedCategory} Tracks`}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTracks.map((track) => (
                  <div 
                    key={track.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={track.image} 
                        alt={track.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button 
                          className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                          onClick={() => playTrack(track)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-calm-teal"
                          >
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{track.title}</h3>
                          <p className="text-sm text-muted-foreground">{track.artist}</p>
                        </div>
                        <span className="text-xs px-2 py-1 bg-calm-teal/10 text-calm-teal rounded-full">
                          {track.category}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          {track.duration}
                        </span>
                        <button 
                          className="p-1.5 rounded-full hover:bg-calm-teal/10 transition-colors"
                          onClick={() => playTrack(track)}
                        >
                          <Volume2 className="h-4 w-4 text-calm-teal" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                <h3 className="text-sm font-medium mb-3 text-muted-foreground">Background Music</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Ocean Waves", "Rainfall", "Forest Sounds", "Light Piano"].map(sound => (
                    <Button 
                      key={sound}
                      variant="outline" 
                      size="sm" 
                      className="gap-2 cursor-pointer"
                      onClick={() => toast.info(`Playing ${sound} in background`)}
                    >
                      <Volume2 className="h-4 w-4" />
                      {sound}
                    </Button>
                  ))}
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

export default Music;
