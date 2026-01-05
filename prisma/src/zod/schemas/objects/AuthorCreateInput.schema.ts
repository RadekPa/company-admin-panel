import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { ClientCreateNestedOneWithoutAuthorsInputObjectSchema as ClientCreateNestedOneWithoutAuthorsInputObjectSchema } from './ClientCreateNestedOneWithoutAuthorsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  firstName: z.string(),
  middleName: z.string().optional().nullable(),
  lastName: z.string(),
  description: z.string().optional().nullable(),
  workEmail: z.string().optional().nullable(),
  personalEmail: z.string().optional().nullable(),
  photos: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  client: z.lazy(() => ClientCreateNestedOneWithoutAuthorsInputObjectSchema).optional()
}).strict();
export const AuthorCreateInputObjectSchema: z.ZodType<Prisma.AuthorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorCreateInput>;
export const AuthorCreateInputObjectZodSchema = makeSchema();
