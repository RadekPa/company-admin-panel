import * as z from 'zod';
// prettier-ignore
export const AuthorModelSchema = z.object({
    id: z.number().int(),
    firstName: z.string(),
    middleName: z.string().nullable(),
    lastName: z.string(),
    description: z.string().nullable(),
    workEmail: z.string().nullable(),
    personalEmail: z.string().nullable(),
    photos: z.unknown().nullable(),
    clientId: z.number().int().nullable(),
    client: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AuthorPureType = z.infer<typeof AuthorModelSchema>;
