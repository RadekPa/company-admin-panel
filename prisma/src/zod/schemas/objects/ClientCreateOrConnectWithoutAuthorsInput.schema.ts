import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutAuthorsInputObjectSchema as ClientCreateWithoutAuthorsInputObjectSchema } from './ClientCreateWithoutAuthorsInput.schema';
import { ClientUncheckedCreateWithoutAuthorsInputObjectSchema as ClientUncheckedCreateWithoutAuthorsInputObjectSchema } from './ClientUncheckedCreateWithoutAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutAuthorsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutAuthorsInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutAuthorsInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutAuthorsInput>;
export const ClientCreateOrConnectWithoutAuthorsInputObjectZodSchema = makeSchema();
