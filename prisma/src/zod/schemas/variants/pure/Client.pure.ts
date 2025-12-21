import * as z from 'zod';
// prettier-ignore
export const ClientModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    documents: z.array(z.unknown()),
    invoices: z.array(z.unknown())
}).strict();

export type ClientPureType = z.infer<typeof ClientModelSchema>;
