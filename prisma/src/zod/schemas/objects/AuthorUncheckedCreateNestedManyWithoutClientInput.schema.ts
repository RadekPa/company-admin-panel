import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorCreateWithoutClientInputObjectSchema as AuthorCreateWithoutClientInputObjectSchema } from './AuthorCreateWithoutClientInput.schema';
import { AuthorUncheckedCreateWithoutClientInputObjectSchema as AuthorUncheckedCreateWithoutClientInputObjectSchema } from './AuthorUncheckedCreateWithoutClientInput.schema';
import { AuthorCreateOrConnectWithoutClientInputObjectSchema as AuthorCreateOrConnectWithoutClientInputObjectSchema } from './AuthorCreateOrConnectWithoutClientInput.schema';
import { AuthorCreateManyClientInputEnvelopeObjectSchema as AuthorCreateManyClientInputEnvelopeObjectSchema } from './AuthorCreateManyClientInputEnvelope.schema';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AuthorCreateWithoutClientInputObjectSchema), z.lazy(() => AuthorCreateWithoutClientInputObjectSchema).array(), z.lazy(() => AuthorUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AuthorCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => AuthorCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AuthorCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AuthorWhereUniqueInputObjectSchema), z.lazy(() => AuthorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AuthorUncheckedCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthorUncheckedCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorUncheckedCreateNestedManyWithoutClientInput>;
export const AuthorUncheckedCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
