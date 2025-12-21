import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { InvoiceUpdateManyWithoutClientNestedInputObjectSchema as InvoiceUpdateManyWithoutClientNestedInputObjectSchema } from './InvoiceUpdateManyWithoutClientNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  invoices: z.lazy(() => InvoiceUpdateManyWithoutClientNestedInputObjectSchema).optional()
}).strict();
export const ClientUpdateWithoutDocumentsInputObjectSchema: z.ZodType<Prisma.ClientUpdateWithoutDocumentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateWithoutDocumentsInput>;
export const ClientUpdateWithoutDocumentsInputObjectZodSchema = makeSchema();
