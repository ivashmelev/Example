import { ClientListGetPort } from '../../domain/ports/ClientListGetPort';
import { ClientListGetCommand } from '../../domain/commands/ClientListGetCommand';
import { Either } from '../../domain/types/Either';
import { List } from '../../domain/utils/List';
import { Client } from '../../domain/entities/Client';
import { api } from '../../domain/utils/api';
import { clientListSchema } from '../schemas/clientListSchema';
import { makeLeft, makeRight } from '../../domain/utils/either';
import { clientListMapper } from '../mappers/clientListMapper';

export class ClientListGetAdapter implements ClientListGetPort {
  async get(
    command: ClientListGetCommand,
  ): Promise<Either<string, List<Client>>> {
    const response = await api();

    try {
      const values = await clientListSchema.validate(response, {
        abortEarly: false,
      });

      return makeRight(clientListMapper(values));
    } catch (error) {
      console.warn(error.errors);
      return makeLeft('Error');
    }
  }
}
