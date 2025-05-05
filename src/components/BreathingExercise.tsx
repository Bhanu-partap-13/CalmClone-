
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'rest'>('inhale');
  const [counter, setCounter] = useState(0);
  const [clickedGradient, setClickedGradient] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setCounter((prevCounter) => {
          // We'll create a breathing pattern of 4-4-4-4
          // (inhale 4s, hold 4s, exhale 4s, rest 4s)
          if (prevCounter >= 3) {
            // Move to next phase after 4 seconds (starting from 0)
            setPhase((prevPhase) => {
              if (prevPhase === 'inhale') return 'hold';
              if (prevPhase === 'hold') return 'exhale';
              if (prevPhase === 'exhale') return 'rest';
              return 'inhale';
            });
            return 0;
          }
          return prevCounter + 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const toggleExercise = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setPhase('inhale');
      setCounter(0);
    }
  };

  const handleCircleClick = () => {
    setClickedGradient(!clickedGradient);
  };

  const getInstructions = () => {
    switch (phase) {
      case 'inhale':
        return 'Breathe in slowly';
      case 'hold':
        return 'Hold your breath';
      case 'exhale':
        return 'Breathe out slowly';
      case 'rest':
        return 'Rest';
      default:
        return '';
    }
  };

  const getCircleClassName = () => {
    let baseClass = 'w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-primary transition-all duration-1000 flex items-center justify-center cursor-pointer';
    
    // Add gradient when clicked
    if (clickedGradient) {
      baseClass += ' bg-gradient-to-r from-calm-teal to-calm-blue';
    }
    
    switch (phase) {
      case 'inhale':
        return `${baseClass} animate-breathe shadow-lg ${!clickedGradient ? 'bg-calm-teal/10' : ''}`;
      case 'hold':
        return `${baseClass} shadow-xl ${!clickedGradient ? 'bg-calm-teal/20' : ''}`;
      case 'exhale':
        return `${baseClass} shadow-md ${!clickedGradient ? 'bg-calm-teal/10' : ''}`;
      case 'rest':
        return `${baseClass} shadow-sm ${!clickedGradient ? 'bg-calm-teal/5' : ''}`;
      default:
        return baseClass;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
      <h3 className="text-xl font-medium text-center mb-6">4-4-4-4 Breathing Exercise</h3>
      
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative">
          <div 
            className={getCircleClassName()}
            onClick={handleCircleClick}  
          >
            <span className="text-xl font-medium">{getInstructions()}</span>
          </div>
        </div>
        
        <div className="mt-8">
          <Button
            onClick={toggleExercise}
            className="flex items-center gap-2"
            size="lg"
          >
            {isActive ? (
              <>
                <Pause className="h-4 w-4" /> Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4" /> Start
              </>
            )}
          </Button>
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm text-center mt-6">
        This simple breathing technique can help reduce anxiety and promote relaxation.
        Try to practice it for at least 2 minutes when feeling stressed.
      </p>
    </div>
  );
};

export default BreathingExercise;
