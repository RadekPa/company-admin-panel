import * as z from 'zod';

export const ClientScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'phone', 'address', 'city', 'postalCode', 'country', 'nip', 'regon', 'legalForm', 'bankAccount', 'notes', 'createdAt', 'updatedAt'])

export type ClientScalarFieldEnum = z.infer<typeof ClientScalarFieldEnumSchema>;