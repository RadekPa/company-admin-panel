import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RolePermissionsSelectObjectSchema as RolePermissionsSelectObjectSchema } from './RolePermissionsSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RolePermissionsSelectObjectSchema).optional()
}).strict();
export const RolePermissionsArgsObjectSchema = makeSchema();
export const RolePermissionsArgsObjectZodSchema = makeSchema();
