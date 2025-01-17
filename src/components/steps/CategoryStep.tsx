import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'House Cleaning',
    description: 'Regular cleaning services for your home',
    price: '$120/visit'
  },
  {
    id: 2,
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of all areas',
    price: '$200/visit'
  },
  {
    id: 3,
    title: 'Move In/Out',
    description: 'Detailed cleaning for moving',
    price: '$300/visit'
  }
];

const CategoryStep = () => {
  const [selected, setSelected] = React.useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Card
          key={category.id}
          className={`p-6 cursor-pointer transition-all ${
            selected === category.id
              ? 'border-2 border-primary'
              : 'hover:border-primary/50'
          }`}
          onClick={() => setSelected(category.id)}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold">{category.title}</h3>
            {selected === category.id && (
              <Check className="h-5 w-5 text-primary" />
            )}
          </div>
          <p className="text-sm text-gray-500 mb-4">{category.description}</p>
          <p className="text-primary font-semibold">{category.price}</p>
        </Card>
      ))}
    </div>
  );
};

export default CategoryStep;