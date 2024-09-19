type Left<L> = {
  left: L;
  right?: never;
};

type Right<R> = {
  left?: never;
  right: R;
};

type Either<L, R> = NonNullable<Left<L> | Right<R>>;

type UnwrapEither = <L, R>(e: Either<L, R>) => NonNullable<L | R>;

export type { Either, UnwrapEither, Left, Right };
