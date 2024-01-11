const example = [1, 2, 1, 2, 2, 1, 2, 3, 2, 1, 2];

const maxNonIntersectingPairs = (arr) => {
  const hashMap = {};
  const currentIdxs = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (hashMap[arr[i] + arr[j]]) {
        if (i > currentIdxs[arr[i] + arr[j]]) {
          hashMap[arr[i] + arr[j]]++;
          currentIdxs[arr[i] + arr[j]] = j;
        }
      } else {
        hashMap[arr[i] + arr[j]] = 1;
        currentIdxs[arr[i] + arr[j]] = j;
      }
    }
  }
  console.log(hashMap);
  return Math.max(...Object.values(hashMap));
};

console.log(maxNonIntersectingPairs(example));
