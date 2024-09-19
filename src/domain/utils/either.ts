import { Either, Left, Right, UnwrapEither } from '../types/Either';

const unwrapEither: UnwrapEither = <L, R>({ left, right }: Either<L, R>) => {
  if (right !== undefined && left !== undefined) {
    throw new Error(
      `Получены правая и левая части: Left${JSON.stringify(left)}\nRight: ${JSON.stringify(right)}`,
    );
  }
  if (left) {
    return left as NonNullable<L>;
  }
  if (right) {
    return right as NonNullable<R>;
  }
  throw new Error('Нет правого или левого значения');
};

const isLeft = <L, R>(e: Either<L, R>): e is Left<L> => {
  return e.left !== undefined;
};

const isRight = <L, R>(e: Either<L, R>): e is Right<R> => {
  return e.right !== undefined;
};

const makeLeft = <L>(value: L): Left<L> => ({ left: value });

const makeRight = <R>(value: R): Right<R> => ({ right: value });

export { makeLeft, makeRight, unwrapEither, isLeft, isRight };
