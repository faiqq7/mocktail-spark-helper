import { create } from 'zustand';

export interface FormState {
  step: number;
  category: string;
  propertyInfo: {
    address: string;
    squareFootage: string;
    listingPrice: string;
    status: string[];
  };
  services: {
    bundle: string;
    individualServices: string[];
  };
  addons: string[];
  schedule: {
    date: Date | null;
    time: string;
    photographer: string;
  };
  contact: {
    email: string;
    verificationCode: string;
  };
  payment: {
    accountType: 'self' | 'company';
    fullName: string;
    companyName: string;
    billingType: 'card' | 'company';
    cardDetails: {
      number: string;
      name: string;
      expiry: string;
      cvv: string;
    };
  };
  setStep: (step: number) => void;
  updateCategory: (category: string) => void;
  updatePropertyInfo: (info: Partial<FormState['propertyInfo']>) => void;
  updateServices: (services: Partial<FormState['services']>) => void;
  updateAddons: (addons: string[]) => void;
  updateSchedule: (schedule: Partial<FormState['schedule']>) => void;
  updateContact: (contact: Partial<FormState['contact']>) => void;
  updatePayment: (payment: Partial<FormState['payment']>) => void;
}

export const useFormStore = create<FormState>((set) => ({
  step: 1,
  category: '',
  propertyInfo: {
    address: '',
    squareFootage: '',
    listingPrice: '',
    status: [],
  },
  services: {
    bundle: '',
    individualServices: [],
  },
  addons: [],
  schedule: {
    date: null,
    time: '',
    photographer: '',
  },
  contact: {
    email: '',
    verificationCode: '',
  },
  payment: {
    accountType: 'self',
    fullName: '',
    companyName: '',
    billingType: 'card',
    cardDetails: {
      number: '',
      name: '',
      expiry: '',
      cvv: '',
    },
  },
  setStep: (step) => set({ step }),
  updateCategory: (category) => set({ category }),
  updatePropertyInfo: (info) =>
    set((state) => ({
      propertyInfo: { ...state.propertyInfo, ...info },
    })),
  updateServices: (services) =>
    set((state) => ({
      services: { ...state.services, ...services },
    })),
  updateAddons: (addons) => set({ addons }),
  updateSchedule: (schedule) =>
    set((state) => ({
      schedule: { ...state.schedule, ...schedule },
    })),
  updateContact: (contact) =>
    set((state) => ({
      contact: { ...state.contact, ...contact },
    })),
  updatePayment: (payment) =>
    set((state) => ({
      payment: { ...state.payment, ...payment },
    })),
}));