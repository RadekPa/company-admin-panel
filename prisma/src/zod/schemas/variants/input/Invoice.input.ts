import * as z from 'zod';
// prettier-ignore
export const InvoiceInputSchema = z.object({
    id: z.number().int(),
    clientId: z.number().int(),
    client: z.unknown(),
    title: z.string(),
    issueDate: z.date(),
    paymentDate: z.date(),
    net: z.number(),
    vatPerc: z.number().int(),
    vat: z.number(),
    gross: z.number(),
    status: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type InvoiceInputType = z.infer<typeof InvoiceInputSchema>;
