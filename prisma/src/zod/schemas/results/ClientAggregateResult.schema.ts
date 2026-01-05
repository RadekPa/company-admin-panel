import * as z from 'zod';
export const ClientAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    email: z.number(),
    phone: z.number(),
    address: z.number(),
    city: z.number(),
    postalCode: z.number(),
    country: z.number(),
    nip: z.number(),
    regon: z.number(),
    legalForm: z.number(),
    bankAccount: z.number(),
    notes: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    documents: z.number(),
    invoices: z.number(),
    authors: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
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
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
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
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});