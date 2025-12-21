import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutDocumentsInputObjectSchema as ClientUpdateWithoutDocumentsInputObjectSchema } from './ClientUpdateWithoutDocumentsInput.schema';
import { ClientUncheckedUpdateWithoutDocumentsInputObjectSchema as ClientUncheckedUpdateWithoutDocumentsInputObjectSchema } from './ClientUncheckedUpdateWithoutDocumentsInput.schema';
import { ClientCreateWithoutDocumentsInputObjectSchema as ClientCreateWithoutDocumentsInputObjectSchema } from './ClientCreateWithoutDocumentsInput.schema';
import { ClientUncheckedCreateWithoutDocumentsInputObjectSchema as ClientUncheckedCreateWithoutDocumentsInputObjectSchema } from './ClientUncheckedCreateWithoutDocumentsInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutDocumentsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutDocumentsInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutDocumentsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutDocumentsInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutDocumentsInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutDocumentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutDocumentsInput>;
export const ClientUpsertWithoutDocumentsInputObjectZodSchema = makeSchema();
