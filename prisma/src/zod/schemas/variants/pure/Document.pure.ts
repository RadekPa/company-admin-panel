import * as z from 'zod';
import { DocStatusSchema } from '../../enums/DocStatus.schema';
// prettier-ignore
export const DocumentModelSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string().nullable(),
    status: DocStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    clientId: z.number().int(),
    client: z.unknown()
}).strict();

export type DocumentPureType = z.infer<typeof DocumentModelSchema>;
