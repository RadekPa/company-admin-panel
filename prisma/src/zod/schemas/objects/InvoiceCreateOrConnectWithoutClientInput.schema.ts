import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInputObjectSchema as InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceCreateWithoutClientInputObjectSchema as InvoiceCreateWithoutClientInputObjectSchema } from './InvoiceCreateWithoutClientInput.schema';
import { InvoiceUncheckedCreateWithoutClientInputObjectSchema as InvoiceUncheckedCreateWithoutClientInputObjectSchema } from './InvoiceUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InvoiceCreateWithoutClientInputObjectSchema), z.lazy(() => InvoiceUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const InvoiceCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCreateOrConnectWithoutClientInput>;
export const InvoiceCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
