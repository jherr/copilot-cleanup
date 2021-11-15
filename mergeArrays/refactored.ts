const mergeArrays = <DataType>(
  key: keyof DataType,
  ...arrays: DataType[][]
): DataType[] =>
  Object.values(
    arrays.flat().reduce(
      (acc, item) => ({
        ...acc,
        [item[key] as any]: item,
      }),
      {}
    )
  );

const assert = (val: boolean) => {
  if (!val) {
    throw new Error("Assertion failed");
  }
};

const merged = mergeArrays<{
  id: number;
  name: string;
}>(
  "id",
  [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 3, name: "d" },
  ],
  [{ id: 1, name: "c" }]
);

assert(merged.length === 3);
assert(merged[0].id === 1);
assert(merged[0].name === "c");
assert(merged[1].id === 2);
assert(merged[1].name === "b");
