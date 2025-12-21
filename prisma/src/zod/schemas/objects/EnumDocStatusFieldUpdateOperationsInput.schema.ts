import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocStatusSchema } from '../enums/DocStatus.schema'

const makeSchema = () => z.object({
  set: DocStatusSchema.optional()
}).strict();
export const EnumDocStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumDocStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumDocStatusFieldUpdateOperationsInput>;
export const EnumDocStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
