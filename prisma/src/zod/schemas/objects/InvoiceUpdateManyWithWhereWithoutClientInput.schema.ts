import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceScalarWhereInputObjectSchema as InvoiceScalarWhereInputObjectSchema } from './InvoiceScalarWhereInput.schema';
import { InvoiceUpdateManyMutationInputObjectSchema as InvoiceUpdateManyMutationInputObjectSchema } from './InvoiceUpdateManyMutationInput.schema';
import { InvoiceUncheckedUpdateManyWithoutClientInputObjectSchema as InvoiceUncheckedUpdateManyWithoutClientInputObjectSchema } from './InvoiceUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvoiceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InvoiceUpdateManyMutationInputObjectSchema), z.lazy(() => InvoiceUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const InvoiceUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.InvoiceUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceUpdateManyWithWhereWithoutClientInput>;
export const InvoiceUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
