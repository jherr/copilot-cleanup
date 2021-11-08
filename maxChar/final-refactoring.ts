const maxItem = <DataType extends string | number>(str: DataType[]): DataType =>
  str.reduce<{
    lookup: Record<DataType, number>;
    maxItem: DataType;
    maxCount: number;
  }>(
    (acc, c) => {
      const count = (acc.lookup[c] ?? 0) + 1;
      const isMax = count > acc.maxCount;
      return {
        lookup: {
          ...acc.lookup,
          [c]: count,
        },
        maxItem: isMax ? c : acc.maxItem,
        maxCount: isMax ? count : acc.maxCount,
      };
    },
    {
      lookup: <Record<DataType, number>>{},
      maxItem: undefined,
      maxCount: 0,
    }
  ).maxItem;

const maxChar = (str: string): string => maxItem(str.split(""));

const expect = (val: boolean) => {
  if (!val) throw new Error("Expected true");
};

expect(maxChar("abcccccccd") === "c");
expect(maxChar("apple 1231111") === "1");
expect(maxItem(["a", "b", "b"]) === "b");
expect(maxItem([1, 1, 3, 1]) === 1);
