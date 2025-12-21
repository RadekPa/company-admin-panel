import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentWhereUniqueInputObjectSchema as DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema';
import { DocumentCreateWithoutClientInputObjectSchema as DocumentCreateWithoutClientInputObjectSchema } from './DocumentCreateWithoutClientInput.schema';
import { DocumentUncheckedCreateWithoutClientInputObjectSchema as DocumentUncheckedCreateWithoutClientInputObjectSchema } from './DocumentUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DocumentCreateWithoutClientInputObjectSchema), z.lazy(() => DocumentUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const DocumentCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentCreateOrConnectWithoutClientInput>;
export const DocumentCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
