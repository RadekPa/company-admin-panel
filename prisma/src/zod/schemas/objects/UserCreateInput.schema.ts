import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  name: z.string().optional().nullable(),
  email: z.string(),
  passwordHash: z.string(),
  role: RoleSchema.optional(),
  permissions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  locale: z.string().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
