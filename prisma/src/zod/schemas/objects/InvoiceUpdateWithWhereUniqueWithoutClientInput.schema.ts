import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInputObjectSchema as InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutClientInputObjectSchema as InvoiceUpdateWithoutClientInputObjectSchema } from './InvoiceUpdateWithoutClientInput.schema';
import { InvoiceUncheckedUpdateWithoutClientInputObjectSchema as InvoiceUncheckedUpdateWithoutClientInputObjectSchema } from './InvoiceUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InvoiceUpdateWithoutClientInputObjectSchema), z.lazy(() => InvoiceUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const InvoiceUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutClientInput>;
export const InvoiceUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
