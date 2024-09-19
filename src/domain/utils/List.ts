import { normalize } from './normalize.ts';

export class List<T> {
  readonly entities: { [p: string]: T };
  readonly ids: string[];
  readonly isEmpty: boolean;

  constructor(
    public list: T[],
    key: keyof T,
  ) {
    const normalized = normalize<T>(list, key);

    this.list = list;
    this.ids = normalized.ids;
    this.entities = normalized.entities;
    this.isEmpty = !list.length;
  }
}
