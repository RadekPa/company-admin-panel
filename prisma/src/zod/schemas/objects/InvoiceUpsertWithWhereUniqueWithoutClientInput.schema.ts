import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInputObjectSchema as InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutClientInputObjectSchema as InvoiceUpdateWithoutClientInputObjectSchema } from './InvoiceUpdateWithoutClientInput.schema';
import { InvoiceUncheckedUpdateWithoutClientInputObjectSchema as InvoiceUncheckedUpdateWithoutClientInputObjectSchema } from './InvoiceUncheckedUpdateWithoutClientInput.schema';
import { InvoiceCreateWithoutClientInputObjectSchema as InvoiceCreateWithoutClientInputObjectSchema } from './InvoiceCreateWithoutClientInput.schema';
import { InvoiceUncheckedCreateWithoutClientInputObjectSchema as InvoiceUncheckedCreateWithoutClientInputObjectSchema } from './InvoiceUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InvoiceUpdateWithoutClientInputObjectSchema), z.lazy(() => InvoiceUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => InvoiceCreateWithoutClientInputObjectSchema), z.lazy(() => InvoiceUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const InvoiceUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutClientInput>;
export const InvoiceUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
