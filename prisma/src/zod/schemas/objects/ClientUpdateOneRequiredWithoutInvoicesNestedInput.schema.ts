import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutInvoicesInputObjectSchema as ClientCreateWithoutInvoicesInputObjectSchema } from './ClientCreateWithoutInvoicesInput.schema';
import { ClientUncheckedCreateWithoutInvoicesInputObjectSchema as ClientUncheckedCreateWithoutInvoicesInputObjectSchema } from './ClientUncheckedCreateWithoutInvoicesInput.schema';
import { ClientCreateOrConnectWithoutInvoicesInputObjectSchema as ClientCreateOrConnectWithoutInvoicesInputObjectSchema } from './ClientCreateOrConnectWithoutInvoicesInput.schema';
import { ClientUpsertWithoutInvoicesInputObjectSchema as ClientUpsertWithoutInvoicesInputObjectSchema } from './ClientUpsertWithoutInvoicesInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutInvoicesInputObjectSchema as ClientUpdateToOneWithWhereWithoutInvoicesInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutInvoicesInput.schema';
import { ClientUpdateWithoutInvoicesInputObjectSchema as ClientUpdateWithoutInvoicesInputObjectSchema } from './ClientUpdateWithoutInvoicesInput.schema';
import { ClientUncheckedUpdateWithoutInvoicesInputObjectSchema as ClientUncheckedUpdateWithoutInvoicesInputObjectSchema } from './ClientUncheckedUpdateWithoutInvoicesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutInvoicesInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutInvoicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutInvoicesInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutInvoicesInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutInvoicesInputObjectSchema), z.lazy(() => ClientUpdateWithoutInvoicesInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutInvoicesInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneRequiredWithoutInvoicesNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneRequiredWithoutInvoicesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneRequiredWithoutInvoicesNestedInput>;
export const ClientUpdateOneRequiredWithoutInvoicesNestedInputObjectZodSchema = makeSchema();
