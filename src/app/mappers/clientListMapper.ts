import { ClientListSchemaType } from '../schemas/clientListSchema';
import { List } from '../../domain/utils/List';
import { Client } from '../../domain/entities/Client';
import { clientMapper } from './clientMapper';

export const clientListMapper = (schema: ClientListSchemaType) => {
  return new List<Client>(schema.data.map(clientMapper), 'id');
};
