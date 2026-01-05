import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorScalarWhereInputObjectSchema as AuthorScalarWhereInputObjectSchema } from './AuthorScalarWhereInput.schema';
import { AuthorUpdateManyMutationInputObjectSchema as AuthorUpdateManyMutationInputObjectSchema } from './AuthorUpdateManyMutationInput.schema';
import { AuthorUncheckedUpdateManyWithoutClientInputObjectSchema as AuthorUncheckedUpdateManyWithoutClientInputObjectSchema } from './AuthorUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthorScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AuthorUpdateManyMutationInputObjectSchema), z.lazy(() => AuthorUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const AuthorUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthorUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorUpdateManyWithWhereWithoutClientInput>;
export const AuthorUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
