
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color?: 'teal' | 'blue' | 'lavender' | 'green';
}

const ResourceCard = ({ title, description, icon, link, color = 'teal' }: ResourceCardProps) => {
  const colorClasses = {
    teal: 'bg-calm-teal/10 border-calm-teal/20',
    blue: 'bg-calm-blue/10 border-calm-blue/20',
    lavender: 'bg-calm-lavender/10 border-calm-lavender/20',
    green: 'bg-calm-green/10 border-calm-green/20',
  };

  const iconColorClasses = {
    teal: 'text-calm-teal',
    blue: 'text-calm-blue',
    lavender: 'text-calm-lavender',
    green: 'text-calm-green',
  };

  return (
    <Card className={`h-full border ${colorClasses[color]} hover:shadow-md transition-all`}>
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconColorClasses[color]}`}>
          {icon}
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-6 px-6">
        <Link 
          to={link}
          className={`text-sm font-medium flex items-center gap-1 ${iconColorClasses[color]} hover:gap-2 transition-all duration-300`}
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
