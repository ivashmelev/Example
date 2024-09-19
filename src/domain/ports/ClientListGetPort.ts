import { Either } from '../types/Either';
import { Client } from '../entities/Client';
import { List } from '../utils/List';
import { ClientListGetCommand } from '../commands/ClientListGetCommand';

export type ClientListGetPort = {
  get(command: ClientListGetCommand): Promise<Either<string, List<Client>>>;
};
