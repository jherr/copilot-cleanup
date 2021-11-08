# Directions

```ts
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
```

# Copilot initial implementation

```ts
function maxChar(str: string) {
  let cache = {} as Record<string, number>
  const arr = str.split('')
  for (const c of arr) {
    if (cache[c]) {
      cache[c]++
    } else {
      cache[c] = 1
    }
  }
  for (const key in cache) {
    if (cache[key] === Math.max(...Object.values<number>(cache))) {
      return key
    }
  }
}
```

# Test setup

```ts
const expect = (val: boolean) => {
  if (!val) throw new Error("Expected true");
};

expect(maxChar("abcccccccd") === "c");
expect(maxChar("apple 1231111") === "1");
```

# Alternative Implementations

Basic cleanup:

```ts
function maxChar(str: string) {
  const cache:Record<string, number> = {}
  const arr = str.split('')
  for (const c of arr) {
    if (cache[c]) {
      cache[c]++
    } else {
      cache[c] = 1
    }
  }
  const max = Math.max(...Object.values(cache))
  for (const key in cache) {
    if (cache[key] === max) {
      return key
    }
  }
}
```


JavaScript classic:

```ts
function maxChar(str: string) {
  const cache:Record<string, number> = {}
  for (const c of str.split('')) {
    cache[c] = (cache[c] ?? 0) + 1;
  }
  const max = Math.max(...Object.values(cache))
  for (const key in cache) {
    if (cache[key] === max) {
      return key
    }
  }
}
```

ES6 Basic Implementation:

```ts
function maxChar(str: string) {
  const cache = str.split('').reduce<Record<string, number>>(
    (acc, c) => ({
      ...acc,
      [c]: (acc[c] ?? 0) + 1,
    }),
    {}
  )
  const max = Math.max(...Object.values(cache))
  return Object.keys(cache).find(
    c => cache[c] === max
  ) ?? ''
}
```

O(n) pass:

```ts
const maxChar = (str: string): string =>
  str.split('').reduce<{
    lookup: Record<string, number>
    maxItem: string
    maxCount: number
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
      }
    },
    {
      lookup: <Record<string, number>>{},
      maxItem: '',
      maxCount: 0,
    }
  ).maxItem
```

Generic implementation, max TypeScript!

```ts
const maxItem = <DataType extends string | number>(str: DataType[]): DataType =>
  str.reduce<{
    lookup: Record<DataType, number>
    maxItem: DataType
    maxCount: number
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
      }
    },
    {
      lookup: <Record<DataType, number>>{},
      maxItem: undefined,
      maxCount: 0,
    }
  ).maxItem

const maxChar = (str: string): string => 
  maxItem(str.split(''))
```
