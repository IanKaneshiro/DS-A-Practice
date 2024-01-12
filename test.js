// SELECT
//     department.dept_id,
//     COUNT(employee.emp_id) AS count,
//     SUM(employee.salary) AS sum_of_salary
// FROM
//     department
// JOIN
//     employee ON department.dept_id = employee.dept_id
// GROUP BY
//     department.dept_id
// ORDER BY
//     department.dept_id;
const example = "...xxx..x....xxx.";

function solution(S, B = 5) {
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    const currentValue = S[i];
    if (currentValue === "x") {
      count++;
    } else if (count && currentValue === ".") {
      if (hashMap[count]) {
        hashMap[count]++;
      } else {
        hashMap[count] = 1;
      }
      count = 0;
    }
  }
  return hashMap;
}

console.log(solution(example));

function covertToHashMap(arr) {
  const hashMap = {};
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    const currentValue = S[i];
    if (currentValue === "x") {
      count++;
    } else if (count && currentValue === ".") {
      if (hashMap[count]) {
        hashMap[count]++;
      } else {
        hashMap[count] = 1;
      }
      count = 0;
    }
  }
  return hashMap;
}
