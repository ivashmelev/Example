export type Normalize<T> = {
  entities: { [key: string]: T };
  ids: string[];
};
