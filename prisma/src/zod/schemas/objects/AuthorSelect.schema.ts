import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  firstName: z.boolean().optional(),
  middleName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  description: z.boolean().optional(),
  workEmail: z.boolean().optional(),
  personalEmail: z.boolean().optional(),
  photos: z.boolean().optional(),
  clientId: z.boolean().optional(),
  client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const AuthorSelectObjectSchema: z.ZodType<Prisma.AuthorSelect> = makeSchema() as unknown as z.ZodType<Prisma.AuthorSelect>;
export const AuthorSelectObjectZodSchema = makeSchema();
