import * as z from 'zod';

export const RolePermissionsScalarFieldEnumSchema = z.enum(['id', 'module', 'userAccess', 'advancedAccess', 'adminAccess', 'createdAt', 'updatedAt'])

export type RolePermissionsScalarFieldEnum = z.infer<typeof RolePermissionsScalarFieldEnumSchema>;