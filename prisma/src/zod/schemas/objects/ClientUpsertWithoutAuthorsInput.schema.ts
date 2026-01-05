import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutAuthorsInputObjectSchema as ClientUpdateWithoutAuthorsInputObjectSchema } from './ClientUpdateWithoutAuthorsInput.schema';
import { ClientUncheckedUpdateWithoutAuthorsInputObjectSchema as ClientUncheckedUpdateWithoutAuthorsInputObjectSchema } from './ClientUncheckedUpdateWithoutAuthorsInput.schema';
import { ClientCreateWithoutAuthorsInputObjectSchema as ClientCreateWithoutAuthorsInputObjectSchema } from './ClientCreateWithoutAuthorsInput.schema';
import { ClientUncheckedCreateWithoutAuthorsInputObjectSchema as ClientUncheckedCreateWithoutAuthorsInputObjectSchema } from './ClientUncheckedCreateWithoutAuthorsInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutAuthorsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutAuthorsInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutAuthorsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAuthorsInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutAuthorsInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutAuthorsInput>;
export const ClientUpsertWithoutAuthorsInputObjectZodSchema = makeSchema();
