import * as z from 'zod';

export const RoleSchema = z.enum(['ADMIN', 'ADVANCED', 'USER'])

export type Role = z.infer<typeof RoleSchema>;