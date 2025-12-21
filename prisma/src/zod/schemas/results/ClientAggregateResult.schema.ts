import * as z from 'zod';
export const ClientAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    email: z.number(),
    phone: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    documents: z.number(),
    invoices: z.number()
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
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});