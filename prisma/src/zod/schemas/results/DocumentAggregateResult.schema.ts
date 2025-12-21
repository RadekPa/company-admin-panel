import * as z from 'zod';
export const DocumentAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    description: z.number(),
    status: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    clientId: z.number(),
    client: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    clientId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    clientId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    clientId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    clientId: z.number().int().nullable()
  }).nullable().optional()});