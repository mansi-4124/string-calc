function add(nums) {
  if (nums === "") return 0;
  let delimiter = /,|\n/;
  let numString = nums;

  if (nums.startsWith("//")) {
    const parts = nums.split("\n");
    const delimiterDefinition = parts[0].substring(2);
    delimiter = new RegExp(delimiterDefinition);
    numString = parts[1];
  }

  const numArr = numString
    .split(delimiter)
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map(Number);

  const negatives = numArr.filter((n) => n < 0);
  if (negatives.length > 0)
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  return numArr.reduce((acc, n) => acc + n, 0);
}
module.exports = { add };
