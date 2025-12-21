import * as z from 'zod';
export const InvoiceGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  clientId: z.number().int(),
  title: z.string(),
  issueDate: z.date(),
  paymentDate: z.date(),
  net: z.number(),
  vatPerc: z.number().int(),
  vat: z.number(),
  gross: z.number(),
  status: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    clientId: z.number(),
    client: z.number(),
    title: z.number(),
    issueDate: z.number(),
    paymentDate: z.number(),
    net: z.number(),
    vatPerc: z.number(),
    vat: z.number(),
    gross: z.number(),
    status: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    clientId: z.number().nullable(),
    net: z.number().nullable(),
    vatPerc: z.number().nullable(),
    vat: z.number().nullable(),
    gross: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    clientId: z.number().nullable(),
    net: z.number().nullable(),
    vatPerc: z.number().nullable(),
    vat: z.number().nullable(),
    gross: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    title: z.string().nullable(),
    issueDate: z.date().nullable(),
    paymentDate: z.date().nullable(),
    net: z.number().nullable(),
    vatPerc: z.number().int().nullable(),
    vat: z.number().nullable(),
    gross: z.number().nullable(),
    status: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    title: z.string().nullable(),
    issueDate: z.date().nullable(),
    paymentDate: z.date().nullable(),
    net: z.number().nullable(),
    vatPerc: z.number().int().nullable(),
    vat: z.number().nullable(),
    gross: z.number().nullable(),
    status: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));