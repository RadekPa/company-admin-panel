import * as z from 'zod';
export const AuthorAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    firstName: z.number(),
    middleName: z.number(),
    lastName: z.number(),
    description: z.number(),
    workEmail: z.number(),
    personalEmail: z.number(),
    photos: z.number(),
    clientId: z.number(),
    client: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
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
    firstName: z.string().nullable(),
    middleName: z.string().nullable(),
    lastName: z.string().nullable(),
    description: z.string().nullable(),
    workEmail: z.string().nullable(),
    personalEmail: z.string().nullable(),
    clientId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    firstName: z.string().nullable(),
    middleName: z.string().nullable(),
    lastName: z.string().nullable(),
    description: z.string().nullable(),
    workEmail: z.string().nullable(),
    personalEmail: z.string().nullable(),
    clientId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});