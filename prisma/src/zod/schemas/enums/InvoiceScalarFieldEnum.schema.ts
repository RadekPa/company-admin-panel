import * as z from 'zod';

export const InvoiceScalarFieldEnumSchema = z.enum(['id', 'clientId', 'title', 'issueDate', 'paymentDate', 'net', 'vatPerc', 'vat', 'gross', 'status', 'createdAt', 'updatedAt'])

export type InvoiceScalarFieldEnum = z.infer<typeof InvoiceScalarFieldEnumSchema>;