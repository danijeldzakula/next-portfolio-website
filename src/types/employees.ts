import { z } from 'zod';

export const RoleSchema = z.enum(['Admin', 'Super Admin', 'User']);

export const EmployeeSchema = z.object({
  id: z.number(),
  name: z.string().min(1, 'Name is required'),
  email: z
    .string()
    .email('Invalid email address')
    .min(5, 'Email must be at least 5 characters long'),
  address: z.string().min(1, 'Address is required'),
  role: RoleSchema,
});

export type UserRole = z.infer<typeof RoleSchema>;

export type Employee = z.infer<typeof EmployeeSchema>;
