import * as z from 'zod';

export const DocStatusSchema = z.enum(['DRAFT', 'SIGNED'])

export type DocStatus = z.infer<typeof DocStatusSchema>;