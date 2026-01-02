import * as z from 'zod';
// prettier-ignore
export const RolePermissionsModelSchema = z.object({
    id: z.number().int(),
    module: z.string(),
    userAccess: z.boolean(),
    advancedAccess: z.boolean(),
    adminAccess: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type RolePermissionsPureType = z.infer<typeof RolePermissionsModelSchema>;
