import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceCreateWithoutClientInputObjectSchema as InvoiceCreateWithoutClientInputObjectSchema } from './InvoiceCreateWithoutClientInput.schema';
import { InvoiceUncheckedCreateWithoutClientInputObjectSchema as InvoiceUncheckedCreateWithoutClientInputObjectSchema } from './InvoiceUncheckedCreateWithoutClientInput.schema';
import { InvoiceCreateOrConnectWithoutClientInputObjectSchema as InvoiceCreateOrConnectWithoutClientInputObjectSchema } from './InvoiceCreateOrConnectWithoutClientInput.schema';
import { InvoiceCreateManyClientInputEnvelopeObjectSchema as InvoiceCreateManyClientInputEnvelopeObjectSchema } from './InvoiceCreateManyClientInputEnvelope.schema';
import { InvoiceWhereUniqueInputObjectSchema as InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InvoiceCreateWithoutClientInputObjectSchema), z.lazy(() => InvoiceCreateWithoutClientInputObjectSchema).array(), z.lazy(() => InvoiceUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => InvoiceUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InvoiceCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => InvoiceCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InvoiceCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InvoiceWhereUniqueInputObjectSchema), z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.InvoiceUncheckedCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceUncheckedCreateNestedManyWithoutClientInput>;
export const InvoiceUncheckedCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
