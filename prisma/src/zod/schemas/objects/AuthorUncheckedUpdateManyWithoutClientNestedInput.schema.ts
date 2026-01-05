import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorCreateWithoutClientInputObjectSchema as AuthorCreateWithoutClientInputObjectSchema } from './AuthorCreateWithoutClientInput.schema';
import { AuthorUncheckedCreateWithoutClientInputObjectSchema as AuthorUncheckedCreateWithoutClientInputObjectSchema } from './AuthorUncheckedCreateWithoutClientInput.schema';
import { AuthorCreateOrConnectWithoutClientInputObjectSchema as AuthorCreateOrConnectWithoutClientInputObjectSchema } from './AuthorCreateOrConnectWithoutClientInput.schema';
import { AuthorUpsertWithWhereUniqueWithoutClientInputObjectSchema as AuthorUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './AuthorUpsertWithWhereUniqueWithoutClientInput.schema';
import { AuthorCreateManyClientInputEnvelopeObjectSchema as AuthorCreateManyClientInputEnvelopeObjectSchema } from './AuthorCreateManyClientInputEnvelope.schema';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema';
import { AuthorUpdateWithWhereUniqueWithoutClientInputObjectSchema as AuthorUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './AuthorUpdateWithWhereUniqueWithoutClientInput.schema';
import { AuthorUpdateManyWithWhereWithoutClientInputObjectSchema as AuthorUpdateManyWithWhereWithoutClientInputObjectSchema } from './AuthorUpdateManyWithWhereWithoutClientInput.schema';
import { AuthorScalarWhereInputObjectSchema as AuthorScalarWhereInputObjectSchema } from './AuthorScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AuthorCreateWithoutClientInputObjectSchema), z.lazy(() => AuthorCreateWithoutClientInputObjectSchema).array(), z.lazy(() => AuthorUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AuthorCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => AuthorCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AuthorUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => AuthorUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AuthorCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AuthorWhereUniqueInputObjectSchema), z.lazy(() => AuthorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AuthorWhereUniqueInputObjectSchema), z.lazy(() => AuthorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AuthorWhereUniqueInputObjectSchema), z.lazy(() => AuthorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AuthorWhereUniqueInputObjectSchema), z.lazy(() => AuthorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AuthorUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => AuthorUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AuthorUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => AuthorUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AuthorScalarWhereInputObjectSchema), z.lazy(() => AuthorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AuthorUncheckedUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.AuthorUncheckedUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorUncheckedUpdateManyWithoutClientNestedInput>;
export const AuthorUncheckedUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
