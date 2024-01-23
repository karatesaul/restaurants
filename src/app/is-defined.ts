export function isDefined<T>(value: T | undefined): value is T {
  return !!value;
}

export function isEachItemDefined<T>(values: Array<T | undefined>): values is Array<T> {
  return values.every(isDefined);
}
