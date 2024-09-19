import * as yup from 'yup';

export const clientSchema = yup.object({
  id: yup.string().required(),
  last_name: yup.string().defined(),
  first_name: yup.string().defined(),
  company_id: yup.string().defined(),
  company_name: yup.string().defined(),
  company_sector: yup.string().defined(),
});

export type ClientSchemaType = yup.InferType<typeof clientSchema>;
