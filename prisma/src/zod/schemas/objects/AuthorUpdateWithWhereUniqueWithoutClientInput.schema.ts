import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema';
import { AuthorUpdateWithoutClientInputObjectSchema as AuthorUpdateWithoutClientInputObjectSchema } from './AuthorUpdateWithoutClientInput.schema';
import { AuthorUncheckedUpdateWithoutClientInputObjectSchema as AuthorUncheckedUpdateWithoutClientInputObjectSchema } from './AuthorUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AuthorUpdateWithoutClientInputObjectSchema), z.lazy(() => AuthorUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const AuthorUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthorUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorUpdateWithWhereUniqueWithoutClientInput>;
export const AuthorUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
