import * as yup from 'yup';
import { clientSchema } from './clientSchema';

export const clientListSchema = yup.object({
  data: yup.array().of(clientSchema).required(),
  totalItems: yup.number(),
});

export type ClientListSchemaType = yup.InferType<typeof clientListSchema>;
