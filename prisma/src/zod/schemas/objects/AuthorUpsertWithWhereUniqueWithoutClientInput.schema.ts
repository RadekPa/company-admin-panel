import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema';
import { AuthorUpdateWithoutClientInputObjectSchema as AuthorUpdateWithoutClientInputObjectSchema } from './AuthorUpdateWithoutClientInput.schema';
import { AuthorUncheckedUpdateWithoutClientInputObjectSchema as AuthorUncheckedUpdateWithoutClientInputObjectSchema } from './AuthorUncheckedUpdateWithoutClientInput.schema';
import { AuthorCreateWithoutClientInputObjectSchema as AuthorCreateWithoutClientInputObjectSchema } from './AuthorCreateWithoutClientInput.schema';
import { AuthorUncheckedCreateWithoutClientInputObjectSchema as AuthorUncheckedCreateWithoutClientInputObjectSchema } from './AuthorUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AuthorUpdateWithoutClientInputObjectSchema), z.lazy(() => AuthorUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => AuthorCreateWithoutClientInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const AuthorUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthorUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorUpsertWithWhereUniqueWithoutClientInput>;
export const AuthorUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
