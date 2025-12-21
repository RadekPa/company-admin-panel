import * as z from 'zod';

export const DocumentScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'status', 'createdAt', 'updatedAt', 'clientId'])

export type DocumentScalarFieldEnum = z.infer<typeof DocumentScalarFieldEnumSchema>;