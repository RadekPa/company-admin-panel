import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.number().int(),
    name: z.string().optional().nullable(),
    email: z.string(),
    passwordHash: z.string(),
    role: RoleSchema,
    permissions: z.unknown().optional().nullable(),
    locale: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
