function add(nums) {
  if (nums === "") return 0;
  if (nums.length == 1) return parseInt(nums);
  let numArr = nums
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map(Number);
  return numArr.reduce((acc, n) => acc + n, 0);
}
module.exports = { add };
