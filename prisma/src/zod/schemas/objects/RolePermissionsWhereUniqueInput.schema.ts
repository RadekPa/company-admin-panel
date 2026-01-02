import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  module: z.string().optional()
}).strict();
export const RolePermissionsWhereUniqueInputObjectSchema: z.ZodType<Prisma.RolePermissionsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RolePermissionsWhereUniqueInput>;
export const RolePermissionsWhereUniqueInputObjectZodSchema = makeSchema();
