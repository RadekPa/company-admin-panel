import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutDocumentsInputObjectSchema as ClientCreateWithoutDocumentsInputObjectSchema } from './ClientCreateWithoutDocumentsInput.schema';
import { ClientUncheckedCreateWithoutDocumentsInputObjectSchema as ClientUncheckedCreateWithoutDocumentsInputObjectSchema } from './ClientUncheckedCreateWithoutDocumentsInput.schema';
import { ClientCreateOrConnectWithoutDocumentsInputObjectSchema as ClientCreateOrConnectWithoutDocumentsInputObjectSchema } from './ClientCreateOrConnectWithoutDocumentsInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutDocumentsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutDocumentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutDocumentsInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutDocumentsInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutDocumentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutDocumentsInput>;
export const ClientCreateNestedOneWithoutDocumentsInputObjectZodSchema = makeSchema();
