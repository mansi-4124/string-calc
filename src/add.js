function add(nums) {
  if (nums === "") return 0;
  const defaultDelimiter = /,|\n/;
  let numArr = nums
    .split(defaultDelimiter)
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map(Number);
  return numArr.reduce((acc, n) => acc + n, 0);
}
module.exports = { add };
