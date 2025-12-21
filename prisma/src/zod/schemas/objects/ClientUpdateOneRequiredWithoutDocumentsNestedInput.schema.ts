import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutDocumentsInputObjectSchema as ClientCreateWithoutDocumentsInputObjectSchema } from './ClientCreateWithoutDocumentsInput.schema';
import { ClientUncheckedCreateWithoutDocumentsInputObjectSchema as ClientUncheckedCreateWithoutDocumentsInputObjectSchema } from './ClientUncheckedCreateWithoutDocumentsInput.schema';
import { ClientCreateOrConnectWithoutDocumentsInputObjectSchema as ClientCreateOrConnectWithoutDocumentsInputObjectSchema } from './ClientCreateOrConnectWithoutDocumentsInput.schema';
import { ClientUpsertWithoutDocumentsInputObjectSchema as ClientUpsertWithoutDocumentsInputObjectSchema } from './ClientUpsertWithoutDocumentsInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutDocumentsInputObjectSchema as ClientUpdateToOneWithWhereWithoutDocumentsInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutDocumentsInput.schema';
import { ClientUpdateWithoutDocumentsInputObjectSchema as ClientUpdateWithoutDocumentsInputObjectSchema } from './ClientUpdateWithoutDocumentsInput.schema';
import { ClientUncheckedUpdateWithoutDocumentsInputObjectSchema as ClientUncheckedUpdateWithoutDocumentsInputObjectSchema } from './ClientUncheckedUpdateWithoutDocumentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutDocumentsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutDocumentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutDocumentsInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutDocumentsInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutDocumentsInputObjectSchema), z.lazy(() => ClientUpdateWithoutDocumentsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutDocumentsInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneRequiredWithoutDocumentsNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneRequiredWithoutDocumentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneRequiredWithoutDocumentsNestedInput>;
export const ClientUpdateOneRequiredWithoutDocumentsNestedInputObjectZodSchema = makeSchema();
