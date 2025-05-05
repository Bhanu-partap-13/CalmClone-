
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  image?: string;
}

const TestimonialCard = ({ quote, author, image }: TestimonialCardProps) => {
  return (
    <Card className="h-full bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <CardContent className="p-6 flex flex-col h-full">
        {image && (
          <div className="mx-auto mb-4 w-16 h-16 rounded-full overflow-hidden">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="text-center mb-4">
          <svg className="h-8 w-8 text-calm-lavender/50 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="italic text-foreground">{quote}</p>
        </div>
        <div className="mt-auto text-center">
          <p className="font-medium text-sm">{author}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
