import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentCreateWithoutClientInputObjectSchema as DocumentCreateWithoutClientInputObjectSchema } from './DocumentCreateWithoutClientInput.schema';
import { DocumentUncheckedCreateWithoutClientInputObjectSchema as DocumentUncheckedCreateWithoutClientInputObjectSchema } from './DocumentUncheckedCreateWithoutClientInput.schema';
import { DocumentCreateOrConnectWithoutClientInputObjectSchema as DocumentCreateOrConnectWithoutClientInputObjectSchema } from './DocumentCreateOrConnectWithoutClientInput.schema';
import { DocumentCreateManyClientInputEnvelopeObjectSchema as DocumentCreateManyClientInputEnvelopeObjectSchema } from './DocumentCreateManyClientInputEnvelope.schema';
import { DocumentWhereUniqueInputObjectSchema as DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DocumentCreateWithoutClientInputObjectSchema), z.lazy(() => DocumentCreateWithoutClientInputObjectSchema).array(), z.lazy(() => DocumentUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => DocumentUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DocumentCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => DocumentCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DocumentCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DocumentWhereUniqueInputObjectSchema), z.lazy(() => DocumentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DocumentCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.DocumentCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentCreateNestedManyWithoutClientInput>;
export const DocumentCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
