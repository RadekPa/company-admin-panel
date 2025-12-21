import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentWhereInputObjectSchema as DocumentWhereInputObjectSchema } from './DocumentWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DocumentWhereInputObjectSchema).optional()
}).strict();
export const ClientCountOutputTypeCountDocumentsArgsObjectSchema = makeSchema();
export const ClientCountOutputTypeCountDocumentsArgsObjectZodSchema = makeSchema();
