import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutDocumentsInputObjectSchema as ClientUpdateWithoutDocumentsInputObjectSchema } from './ClientUpdateWithoutDocumentsInput.schema';
import { ClientUncheckedUpdateWithoutDocumentsInputObjectSchema as ClientUncheckedUpdateWithoutDocumentsInputObjectSchema } from './ClientUncheckedUpdateWithoutDocumentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutDocumentsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutDocumentsInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutDocumentsInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutDocumentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutDocumentsInput>;
export const ClientUpdateToOneWithWhereWithoutDocumentsInputObjectZodSchema = makeSchema();
