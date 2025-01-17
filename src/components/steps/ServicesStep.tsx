import React from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const services = [
  {
    id: 1,
    title: 'Basic Cleaning',
    description: 'Dusting, vacuuming, and basic bathroom cleaning',
    price: '$50'
  },
  {
    id: 2,
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of all surfaces and areas',
    price: '$100'
  },
  {
    id: 3,
    title: 'Window Cleaning',
    description: 'Interior and exterior window cleaning',
    price: '$75'
  },
  {
    id: 4,
    title: 'Carpet Cleaning',
    description: 'Deep carpet cleaning and stain removal',
    price: '$120'
  }
];

const ServicesStep = () => {
  const [selectedServices, setSelectedServices] = React.useState<number[]>([]);

  const toggleService = (id: number) => {
    setSelectedServices(prev =>
      prev.includes(id)
        ? prev.filter(serviceId => serviceId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service) => (
        <Card
          key={service.id}
          className={`p-6 cursor-pointer transition-all ${
            selectedServices.includes(service.id)
              ? 'border-2 border-primary'
              : 'hover:border-primary/50'
          }`}
        >
          <div className="flex items-start space-x-4">
            <Checkbox
              checked={selectedServices.includes(service.id)}
              onCheckedChange={() => toggleService(service.id)}
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{service.description}</p>
              <p className="text-primary font-semibold">{service.price}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ServicesStep;