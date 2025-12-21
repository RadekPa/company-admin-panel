import * as z from 'zod';

export const ClientScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'phone', 'createdAt', 'updatedAt'])

export type ClientScalarFieldEnum = z.infer<typeof ClientScalarFieldEnumSchema>;