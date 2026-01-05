import * as z from 'zod';

export const AuthorScalarFieldEnumSchema = z.enum(['id', 'firstName', 'middleName', 'lastName', 'description', 'workEmail', 'personalEmail', 'photos', 'clientId', 'createdAt', 'updatedAt'])

export type AuthorScalarFieldEnum = z.infer<typeof AuthorScalarFieldEnumSchema>;