
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface ChecklistItem {
  id: string;
  label: string;
}

const StressChecklistCard = () => {
  const checklistItems: ChecklistItem[] = [
    { id: 'deep-breathing', label: 'Practice deep breathing for 5 minutes' },
    { id: 'meditation', label: 'Complete a guided meditation session' },
    { id: 'nature', label: 'Spend time in nature today' },
    { id: 'gratitude', label: 'Write down 3 things you\'re grateful for' },
    { id: 'movement', label: 'Do some gentle movement or stretching' },
    { id: 'screen-break', label: 'Take a break from screens for 1 hour' },
    { id: 'hydrate', label: 'Drink a glass of water' },
    { id: 'connect', label: 'Connect with a friend or loved one' },
  ];

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (checkedCount / checklistItems.length) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-calm-teal/60 to-calm-blue/60 px-6 py-4">
        <h3 className="text-white font-medium">Daily Anxiety Relief Checklist</h3>
      </div>
      
      <div className="relative h-2 bg-gray-100">
        <div 
          className="absolute h-2 bg-gradient-to-r from-calm-teal to-calm-blue transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="p-6">
        <div className="space-y-3">
          {checklistItems.map((item) => (
            <div key={item.id} className="flex items-start space-x-3">
              <Checkbox
                id={item.id}
                checked={!!checkedItems[item.id]}
                onCheckedChange={() => toggleItem(item.id)}
                className="mt-1"
              />
              <label
                htmlFor={item.id}
                className={`text-sm leading-tight ${
                  checkedItems[item.id] ? 'text-muted-foreground line-through' : 'text-foreground'
                }`}
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {checkedCount}/{checklistItems.length} completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default StressChecklistCard;
