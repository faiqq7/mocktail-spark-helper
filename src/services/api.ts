import { bundles, photographers, services } from './mockData';

// These functions will be replaced with actual Airtable API calls
export const api = {
  getBundles: async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return bundles;
  },
  
  getServices: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return services;
  },
  
  getPhotographers: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return photographers;
  },
  
  submitOrder: async (orderData: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, orderId: 'ORD-' + Math.random().toString(36).substr(2, 9) };
  },
  
  verifyEmail: async (email: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true, code: '123456' };
  },
};