import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutInvoicesInputObjectSchema as ClientCreateWithoutInvoicesInputObjectSchema } from './ClientCreateWithoutInvoicesInput.schema';
import { ClientUncheckedCreateWithoutInvoicesInputObjectSchema as ClientUncheckedCreateWithoutInvoicesInputObjectSchema } from './ClientUncheckedCreateWithoutInvoicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutInvoicesInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutInvoicesInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutInvoicesInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutInvoicesInput>;
export const ClientCreateOrConnectWithoutInvoicesInputObjectZodSchema = makeSchema();
