GitHub Copilot Cleanup - mergeArrays
===============================

Request

```ts
// Merge two arrays of objects together with a given key
```

```ts
// Parameters:
// arr1 - first array
// arr2 - second array
// key - key to compare
//
// Returns:
// merged array
//
// Example:
// mergeArrays([{id: 1, name: 'a'}, {id: 2, name: 'b'}], [{id: 1, name: 'c'}], 'id');
// Returns: [{id: 1, name: 'c'}, {id: 2, name: 'b'}]
//
function mergeArrays(arr1, arr2, key) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j][key] === arr2[i][key]) {
        result[j] = arr2[i];
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(arr2[i]);
    }
  }

  return result;
}
```

Tests

```ts
const assert = (val: boolean) => {
  if (!val) {
    throw new Error("Assertion failed");
  }
}

const merged = mergeArrays(
  [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
  ],
  [{ id: 1, name: "c" }],
  "id"
);

assert(merged.length === 2);
assert(merged[0].id === 1);
assert(merged[0].name === "c");
assert(merged[1].id === 2);
assert(merged[1].name === "b");
```

# Improvements
