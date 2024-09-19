import { get } from 'lodash';
import { Normalize } from '../types/Normalize';

export const normalize = <T>(list: T[], key: string): Normalize<T> => {
  const entities: Record<string, T> = {};
  const ids: Set<string> = new Set();

  list.forEach((element) => {
    const id = get(element, key);

    entities[id] = element;
    ids.add(id);
  });

  return { ids: Array.from(ids), entities };
};
