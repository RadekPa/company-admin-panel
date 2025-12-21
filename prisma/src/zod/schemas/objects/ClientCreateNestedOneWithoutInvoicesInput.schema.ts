import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutInvoicesInputObjectSchema as ClientCreateWithoutInvoicesInputObjectSchema } from './ClientCreateWithoutInvoicesInput.schema';
import { ClientUncheckedCreateWithoutInvoicesInputObjectSchema as ClientUncheckedCreateWithoutInvoicesInputObjectSchema } from './ClientUncheckedCreateWithoutInvoicesInput.schema';
import { ClientCreateOrConnectWithoutInvoicesInputObjectSchema as ClientCreateOrConnectWithoutInvoicesInputObjectSchema } from './ClientCreateOrConnectWithoutInvoicesInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutInvoicesInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutInvoicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutInvoicesInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutInvoicesInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutInvoicesInput>;
export const ClientCreateNestedOneWithoutInvoicesInputObjectZodSchema = makeSchema();
