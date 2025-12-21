import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentWhereUniqueInputObjectSchema as DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema';
import { DocumentUpdateWithoutClientInputObjectSchema as DocumentUpdateWithoutClientInputObjectSchema } from './DocumentUpdateWithoutClientInput.schema';
import { DocumentUncheckedUpdateWithoutClientInputObjectSchema as DocumentUncheckedUpdateWithoutClientInputObjectSchema } from './DocumentUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DocumentUpdateWithoutClientInputObjectSchema), z.lazy(() => DocumentUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const DocumentUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.DocumentUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentUpdateWithWhereUniqueWithoutClientInput>;
export const DocumentUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
