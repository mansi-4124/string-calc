class StringCalculator {
  constructor() {
    this.callCount = 0;
  }
  add(nums) {
    this.callCount++;
    if (nums === "") return 0;
    let delimiter = /,|\n/;
    let numString = nums;

    if (nums.startsWith("//")) {
      const parts = nums.split("\n");
      const delimiterDefinition = parts[0].substring(2);
      delimiter = new RegExp(delimiterDefinition);
      numString = parts[1];

      const delimiters = [];
      const delimiterPattern = /\[(.*?)\]/g;
      let match;
      while ((match = delimiterPattern.exec(delimiterDefinition)) !== null) {
        delimiters.push(match[1]);
      }
      if (delimiters.length > 0) {
        const escaped = delimiters.map((d) =>
          d.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        );
        delimiter = new RegExp(escaped.join("|"));
      } else {
        delimiter = new RegExp(delimiterDefinition);
      }
    }

    const numArr = numString
      .split(delimiter)
      .map((s) => s.trim())
      .filter((s) => s !== "")
      .map(Number)
      .filter((n) => n <= 1000);

    const negatives = numArr.filter((n) => n < 0);
    if (negatives.length > 0)
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    return numArr.reduce((acc, n) => acc + n, 0);
  }

  getCallCount() {
    return this.callCount;
  }
}

module.exports = { StringCalculator };
