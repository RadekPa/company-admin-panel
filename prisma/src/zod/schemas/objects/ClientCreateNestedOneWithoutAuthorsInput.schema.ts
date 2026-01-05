import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutAuthorsInputObjectSchema as ClientCreateWithoutAuthorsInputObjectSchema } from './ClientCreateWithoutAuthorsInput.schema';
import { ClientUncheckedCreateWithoutAuthorsInputObjectSchema as ClientUncheckedCreateWithoutAuthorsInputObjectSchema } from './ClientUncheckedCreateWithoutAuthorsInput.schema';
import { ClientCreateOrConnectWithoutAuthorsInputObjectSchema as ClientCreateOrConnectWithoutAuthorsInputObjectSchema } from './ClientCreateOrConnectWithoutAuthorsInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutAuthorsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutAuthorsInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutAuthorsInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutAuthorsInput>;
export const ClientCreateNestedOneWithoutAuthorsInputObjectZodSchema = makeSchema();
