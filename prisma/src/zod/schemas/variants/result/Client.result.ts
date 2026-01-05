import * as z from 'zod';
// prettier-ignore
export const ClientResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    address: z.string().nullable(),
    city: z.string().nullable(),
    postalCode: z.string().nullable(),
    country: z.string().nullable(),
    nip: z.string().nullable(),
    regon: z.string().nullable(),
    legalForm: z.string().nullable(),
    bankAccount: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    documents: z.array(z.unknown()),
    invoices: z.array(z.unknown()),
    authors: z.array(z.unknown())
}).strict();

export type ClientResultType = z.infer<typeof ClientResultSchema>;
