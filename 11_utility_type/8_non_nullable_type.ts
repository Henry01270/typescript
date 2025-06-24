/**
 * Non Nullable Type
 */
type nonNull = NonNullable<string | number | boolean | null | undefined | object>;
// null 값이 될 수 있는 null, undefined를 제외시킨다.