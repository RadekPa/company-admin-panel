import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutInvoicesInputObjectSchema as ClientUpdateWithoutInvoicesInputObjectSchema } from './ClientUpdateWithoutInvoicesInput.schema';
import { ClientUncheckedUpdateWithoutInvoicesInputObjectSchema as ClientUncheckedUpdateWithoutInvoicesInputObjectSchema } from './ClientUncheckedUpdateWithoutInvoicesInput.schema';
import { ClientCreateWithoutInvoicesInputObjectSchema as ClientCreateWithoutInvoicesInputObjectSchema } from './ClientCreateWithoutInvoicesInput.schema';
import { ClientUncheckedCreateWithoutInvoicesInputObjectSchema as ClientUncheckedCreateWithoutInvoicesInputObjectSchema } from './ClientUncheckedCreateWithoutInvoicesInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutInvoicesInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutInvoicesInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutInvoicesInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutInvoicesInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutInvoicesInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutInvoicesInput>;
export const ClientUpsertWithoutInvoicesInputObjectZodSchema = makeSchema();
