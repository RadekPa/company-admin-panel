import * as z from 'zod';
// prettier-ignore
export const ClientInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    documents: z.array(z.unknown()),
    invoices: z.array(z.unknown())
}).strict();

export type ClientInputType = z.infer<typeof ClientInputSchema>;
