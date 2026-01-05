import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutAuthorsInputObjectSchema as ClientUpdateWithoutAuthorsInputObjectSchema } from './ClientUpdateWithoutAuthorsInput.schema';
import { ClientUncheckedUpdateWithoutAuthorsInputObjectSchema as ClientUncheckedUpdateWithoutAuthorsInputObjectSchema } from './ClientUncheckedUpdateWithoutAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutAuthorsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutAuthorsInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutAuthorsInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutAuthorsInput>;
export const ClientUpdateToOneWithWhereWithoutAuthorsInputObjectZodSchema = makeSchema();
