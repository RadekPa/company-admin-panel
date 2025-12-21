import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentCreateWithoutClientInputObjectSchema as DocumentCreateWithoutClientInputObjectSchema } from './DocumentCreateWithoutClientInput.schema';
import { DocumentUncheckedCreateWithoutClientInputObjectSchema as DocumentUncheckedCreateWithoutClientInputObjectSchema } from './DocumentUncheckedCreateWithoutClientInput.schema';
import { DocumentCreateOrConnectWithoutClientInputObjectSchema as DocumentCreateOrConnectWithoutClientInputObjectSchema } from './DocumentCreateOrConnectWithoutClientInput.schema';
import { DocumentUpsertWithWhereUniqueWithoutClientInputObjectSchema as DocumentUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './DocumentUpsertWithWhereUniqueWithoutClientInput.schema';
import { DocumentCreateManyClientInputEnvelopeObjectSchema as DocumentCreateManyClientInputEnvelopeObjectSchema } from './DocumentCreateManyClientInputEnvelope.schema';
import { DocumentWhereUniqueInputObjectSchema as DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema';
import { DocumentUpdateWithWhereUniqueWithoutClientInputObjectSchema as DocumentUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './DocumentUpdateWithWhereUniqueWithoutClientInput.schema';
import { DocumentUpdateManyWithWhereWithoutClientInputObjectSchema as DocumentUpdateManyWithWhereWithoutClientInputObjectSchema } from './DocumentUpdateManyWithWhereWithoutClientInput.schema';
import { DocumentScalarWhereInputObjectSchema as DocumentScalarWhereInputObjectSchema } from './DocumentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DocumentCreateWithoutClientInputObjectSchema), z.lazy(() => DocumentCreateWithoutClientInputObjectSchema).array(), z.lazy(() => DocumentUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => DocumentUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DocumentCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => DocumentCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DocumentUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => DocumentUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DocumentCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DocumentUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => DocumentUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DocumentUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => DocumentUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DocumentScalarWhereInputObjectSchema), z.lazy(() => DocumentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DocumentUncheckedUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.DocumentUncheckedUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentUncheckedUpdateManyWithoutClientNestedInput>;
export const DocumentUncheckedUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
