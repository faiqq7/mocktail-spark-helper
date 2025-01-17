import React from 'react';
import { useFormStore } from '@/store/formStore';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CategoryStep from './steps/CategoryStep';
import PropertyStep from './steps/PropertyStep';
import ServicesStep from './steps/ServicesStep';
import CheckoutStep from './steps/CheckoutStep';

const steps = [
  { id: 1, title: 'CATEGORY', subtitle: 'CHOOSE' },
  { id: 2, title: 'PROPERTY INFO', subtitle: 'INSERT' },
  { id: 3, title: 'SERVICES', subtitle: 'SELECT' },
  { id: 4, title: 'CHECKOUT', subtitle: 'SCHEDULING &' },
];

export const BookingForm = () => {
  const { step, setStep } = useFormStore();

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <CategoryStep />;
      case 2:
        return <PropertyStep />;
      case 3:
        return <ServicesStep />;
      case 4:
        return <CheckoutStep />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-navy p-4 flex flex-col items-center justify-center">
      <Card className="w-full max-w-4xl bg-white rounded-lg overflow-hidden">
        <div className="flex justify-between border-b">
          {steps.map((s) => (
            <div
              key={s.id}
              className={`flex-1 p-4 text-center ${
                step === s.id
                  ? 'border-b-2 border-primary'
                  : step > s.id
                  ? 'text-gray-400'
                  : ''
              }`}
            >
              <div className="text-xs uppercase">{s.subtitle}</div>
              <div className="font-semibold">{s.title}</div>
            </div>
          ))}
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">
              {step === 1 && "What would you like to do today?"}
              {step === 2 && "Fill Out Property Details"}
              {step === 3 && "Select the required services"}
              {step === 4 && "Let's finalize your order"}
            </h2>
          </div>
          {renderStepContent()}
        </div>

        <div className="p-4 border-t flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={step === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous Step
          </Button>
          <Button
            onClick={handleNext}
            disabled={step === steps.length}
            className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
          >
            {step === steps.length ? 'Complete Booking' : 'Next Step'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};