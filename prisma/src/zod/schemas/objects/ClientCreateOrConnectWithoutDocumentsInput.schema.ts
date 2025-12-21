import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutDocumentsInputObjectSchema as ClientCreateWithoutDocumentsInputObjectSchema } from './ClientCreateWithoutDocumentsInput.schema';
import { ClientUncheckedCreateWithoutDocumentsInputObjectSchema as ClientUncheckedCreateWithoutDocumentsInputObjectSchema } from './ClientUncheckedCreateWithoutDocumentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutDocumentsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutDocumentsInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutDocumentsInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutDocumentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutDocumentsInput>;
export const ClientCreateOrConnectWithoutDocumentsInputObjectZodSchema = makeSchema();
