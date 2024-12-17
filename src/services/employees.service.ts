'use server';

import { z } from 'zod';

import { axiosClient } from '@/lib/axios-client';

export async function retriveAllEmployees() {
  try {
    const response = await axiosClient.get('/employees');
    return response.data;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log('🚀 ~ Zod Validation Error:', error.errors);
    } else {
      console.log('🚀 ~ retriveAllEmployees ~ error:', error);
    }
    // throw new Error('Failed to retrieve employees or validation error');
    throw error;
  }
}
