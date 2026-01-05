import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  firstName: z.string(),
  middleName: z.string().optional().nullable(),
  lastName: z.string(),
  description: z.string().optional().nullable(),
  workEmail: z.string().optional().nullable(),
  personalEmail: z.string().optional().nullable(),
  photos: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  clientId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AuthorCreateManyInputObjectSchema: z.ZodType<Prisma.AuthorCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorCreateManyInput>;
export const AuthorCreateManyInputObjectZodSchema = makeSchema();
