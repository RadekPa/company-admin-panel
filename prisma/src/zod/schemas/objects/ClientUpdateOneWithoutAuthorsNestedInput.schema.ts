import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutAuthorsInputObjectSchema as ClientCreateWithoutAuthorsInputObjectSchema } from './ClientCreateWithoutAuthorsInput.schema';
import { ClientUncheckedCreateWithoutAuthorsInputObjectSchema as ClientUncheckedCreateWithoutAuthorsInputObjectSchema } from './ClientUncheckedCreateWithoutAuthorsInput.schema';
import { ClientCreateOrConnectWithoutAuthorsInputObjectSchema as ClientCreateOrConnectWithoutAuthorsInputObjectSchema } from './ClientCreateOrConnectWithoutAuthorsInput.schema';
import { ClientUpsertWithoutAuthorsInputObjectSchema as ClientUpsertWithoutAuthorsInputObjectSchema } from './ClientUpsertWithoutAuthorsInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutAuthorsInputObjectSchema as ClientUpdateToOneWithWhereWithoutAuthorsInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutAuthorsInput.schema';
import { ClientUpdateWithoutAuthorsInputObjectSchema as ClientUpdateWithoutAuthorsInputObjectSchema } from './ClientUpdateWithoutAuthorsInput.schema';
import { ClientUncheckedUpdateWithoutAuthorsInputObjectSchema as ClientUncheckedUpdateWithoutAuthorsInputObjectSchema } from './ClientUncheckedUpdateWithoutAuthorsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutAuthorsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutAuthorsInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutAuthorsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutAuthorsInputObjectSchema), z.lazy(() => ClientUpdateWithoutAuthorsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutAuthorsInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneWithoutAuthorsNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneWithoutAuthorsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneWithoutAuthorsNestedInput>;
export const ClientUpdateOneWithoutAuthorsNestedInputObjectZodSchema = makeSchema();
