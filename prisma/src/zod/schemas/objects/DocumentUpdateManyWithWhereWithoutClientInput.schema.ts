import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentScalarWhereInputObjectSchema as DocumentScalarWhereInputObjectSchema } from './DocumentScalarWhereInput.schema';
import { DocumentUpdateManyMutationInputObjectSchema as DocumentUpdateManyMutationInputObjectSchema } from './DocumentUpdateManyMutationInput.schema';
import { DocumentUncheckedUpdateManyWithoutClientInputObjectSchema as DocumentUncheckedUpdateManyWithoutClientInputObjectSchema } from './DocumentUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DocumentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DocumentUpdateManyMutationInputObjectSchema), z.lazy(() => DocumentUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const DocumentUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.DocumentUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentUpdateManyWithWhereWithoutClientInput>;
export const DocumentUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
