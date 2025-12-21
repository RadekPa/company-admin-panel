import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const DocumentWhereUniqueInputObjectSchema: z.ZodType<Prisma.DocumentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentWhereUniqueInput>;
export const DocumentWhereUniqueInputObjectZodSchema = makeSchema();
