import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceCreateWithoutClientInputObjectSchema as InvoiceCreateWithoutClientInputObjectSchema } from './InvoiceCreateWithoutClientInput.schema';
import { InvoiceUncheckedCreateWithoutClientInputObjectSchema as InvoiceUncheckedCreateWithoutClientInputObjectSchema } from './InvoiceUncheckedCreateWithoutClientInput.schema';
import { InvoiceCreateOrConnectWithoutClientInputObjectSchema as InvoiceCreateOrConnectWithoutClientInputObjectSchema } from './InvoiceCreateOrConnectWithoutClientInput.schema';
import { InvoiceUpsertWithWhereUniqueWithoutClientInputObjectSchema as InvoiceUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './InvoiceUpsertWithWhereUniqueWithoutClientInput.schema';
import { InvoiceCreateManyClientInputEnvelopeObjectSchema as InvoiceCreateManyClientInputEnvelopeObjectSchema } from './InvoiceCreateManyClientInputEnvelope.schema';
import { InvoiceWhereUniqueInputObjectSchema as InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithWhereUniqueWithoutClientInputObjectSchema as InvoiceUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './InvoiceUpdateWithWhereUniqueWithoutClientInput.schema';
import { InvoiceUpdateManyWithWhereWithoutClientInputObjectSchema as InvoiceUpdateManyWithWhereWithoutClientInputObjectSchema } from './InvoiceUpdateManyWithWhereWithoutClientInput.schema';
import { InvoiceScalarWhereInputObjectSchema as InvoiceScalarWhereInputObjectSchema } from './InvoiceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InvoiceCreateWithoutClientInputObjectSchema), z.lazy(() => InvoiceCreateWithoutClientInputObjectSchema).array(), z.lazy(() => InvoiceUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => InvoiceUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InvoiceCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => InvoiceCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InvoiceCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InvoiceWhereUniqueInputObjectSchema), z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InvoiceWhereUniqueInputObjectSchema), z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InvoiceWhereUniqueInputObjectSchema), z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InvoiceWhereUniqueInputObjectSchema), z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InvoiceUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => InvoiceUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InvoiceScalarWhereInputObjectSchema), z.lazy(() => InvoiceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InvoiceUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.InvoiceUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceUpdateManyWithoutClientNestedInput>;
export const InvoiceUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
