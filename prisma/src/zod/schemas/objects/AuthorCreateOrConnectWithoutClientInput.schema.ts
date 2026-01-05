import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema';
import { AuthorCreateWithoutClientInputObjectSchema as AuthorCreateWithoutClientInputObjectSchema } from './AuthorCreateWithoutClientInput.schema';
import { AuthorUncheckedCreateWithoutClientInputObjectSchema as AuthorUncheckedCreateWithoutClientInputObjectSchema } from './AuthorUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AuthorCreateWithoutClientInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const AuthorCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthorCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorCreateOrConnectWithoutClientInput>;
export const AuthorCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
