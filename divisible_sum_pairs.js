/*
HACKERRANK PROBLEM
Given an array of integers and a positive integer , determine the number of (i,j) pairs where i < j and arr[i] + arr[j] is divisible by k.

Example
ar= [1,2,3,4,5,6]
k = 5

Three pairs meet the criteria: [1.4], [2,3] and [4,6].

Function Description

Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):

int n: the length of array
int ar[n]: an array of integers
int k: the integer divisor
Returns
- int: the number of pairs

Input Format

The first line contains  space-separated integers,  and .
The second line contains  space-separated integers, each a value of .

Constraints

Sample Input

STDIN           Function
-----           --------
6 3             n = 6, k = 3
1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]
Sample Output

 5
*/

function divisibleSumPairs(n, k, arr) {
  let res = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let pos1 = arr[i];
      let pos2 = arr[j];
      let sum = pos1 + pos2;
      if ((pos1 < pos2 && k % sum === 0) || sum % k === 0) {
        res++;
      }
    }
  }
  console.log(res);
  return res;
}

// Sample Input
const n = 6;
const k = 3;
const arr = [1, 3, 2, 6, 1, 2];

// Function Call
const result = divisibleSumPairs(n, k, arr);

// Output
console.log(result); // Output: 5
