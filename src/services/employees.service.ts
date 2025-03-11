'use server';

import { z } from 'zod';

import { axiosClient } from '@/lib/axios-client';

export async function retrieveAllEmployees() {
  try {
    const response = await axiosClient.get('/employees');
    return response.data;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('🚀 ~ Zod Validation Error:', error.errors);
    } else {
      console.error('🚀 ~ retrieveAllEmployees ~ error:', error);
    }
    throw error;
  }
}
