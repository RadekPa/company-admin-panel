import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentWhereUniqueInputObjectSchema as DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema';
import { DocumentUpdateWithoutClientInputObjectSchema as DocumentUpdateWithoutClientInputObjectSchema } from './DocumentUpdateWithoutClientInput.schema';
import { DocumentUncheckedUpdateWithoutClientInputObjectSchema as DocumentUncheckedUpdateWithoutClientInputObjectSchema } from './DocumentUncheckedUpdateWithoutClientInput.schema';
import { DocumentCreateWithoutClientInputObjectSchema as DocumentCreateWithoutClientInputObjectSchema } from './DocumentCreateWithoutClientInput.schema';
import { DocumentUncheckedCreateWithoutClientInputObjectSchema as DocumentUncheckedCreateWithoutClientInputObjectSchema } from './DocumentUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DocumentUpdateWithoutClientInputObjectSchema), z.lazy(() => DocumentUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => DocumentCreateWithoutClientInputObjectSchema), z.lazy(() => DocumentUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const DocumentUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.DocumentUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentUpsertWithWhereUniqueWithoutClientInput>;
export const DocumentUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
