import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutInvoicesInputObjectSchema as ClientUpdateWithoutInvoicesInputObjectSchema } from './ClientUpdateWithoutInvoicesInput.schema';
import { ClientUncheckedUpdateWithoutInvoicesInputObjectSchema as ClientUncheckedUpdateWithoutInvoicesInputObjectSchema } from './ClientUncheckedUpdateWithoutInvoicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutInvoicesInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutInvoicesInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutInvoicesInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutInvoicesInput>;
export const ClientUpdateToOneWithWhereWithoutInvoicesInputObjectZodSchema = makeSchema();
