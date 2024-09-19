import { ClientSchemaType } from '../schemas/clientSchema';
import { Client } from '../../domain/entities/Client';
import { Company } from '../../domain/entities/Company';

export const clientMapper = (schema: ClientSchemaType) => {
  const company = new Company(
    schema.company_id,
    schema.company_name,
    schema.company_sector,
  );

  return new Client(schema.id, schema.first_name, schema.last_name, company);
};
