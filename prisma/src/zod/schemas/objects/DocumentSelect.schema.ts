import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  clientId: z.boolean().optional(),
  client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional()
}).strict();
export const DocumentSelectObjectSchema: z.ZodType<Prisma.DocumentSelect> = makeSchema() as unknown as z.ZodType<Prisma.DocumentSelect>;
export const DocumentSelectObjectZodSchema = makeSchema();
