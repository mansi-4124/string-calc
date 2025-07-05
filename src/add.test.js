const { StringCalculator } = require("./add");
const { performance } = require("perf_hooks");
const sCalc = new StringCalculator();
describe("String Calculator", () => {
  describe("Count number of times add method called", () => {
    test("returns 0 if method called first time", () => {
      expect(sCalc.getCallCount()).toBe(0);
    });
    test("returns count for add method called", () => {
      sCalc.add("1");
      sCalc.add("1, 4");
      expect(sCalc.getCallCount()).toBe(2);
    });
  });
  describe("Core functionalities", () => {
    test("returns 0 for empty string", () => {
      expect(sCalc.add("")).toBe(0);
    });
    test("returns itself for single number", () => {
      expect(sCalc.add("1")).toBe(1);
    });
    test("returns sum of two numbers", () => {
      expect(sCalc.add("1,2")).toBe(3);
    });
    test("returns sum of 2 or more numbers", () => {
      expect(sCalc.add("1,2,8,10")).toBe(21);
    });
  });
  describe("Delimiter support", () => {
    test("handles newline delimiter", () => {
      expect(sCalc.add("1\n2, 5,9")).toBe(17);
    });
    test("handles custom delimiter", () => {
      expect(sCalc.add("//!\n4!7!2")).toBe(13);
    });
    test("handles long custom delimiter", () => {
      expect(sCalc.add("//!!!\n4!!!7!!!2")).toBe(13);
    });
    test("multiple custom delimiter", () => {
      expect(sCalc.add("//[*][!]\n1*2!8!3")).toBe(14);
    });
    test("multiple long custom delimiter", () => {
      expect(sCalc.add("//[**][!!]\n1**2!!8!!3")).toBe(14);
    });
  });
  describe("handles negative number exception", () => {
    test("handle single negative number error", () => {
      expect(() => sCalc.add("-1")).toThrow("negative numbers not allowed: -1");
    });
    test("handles multiple negative numbers error", () => {
      expect(() => sCalc.add("5, -1, -7, 1")).toThrow(
        "negative numbers not allowed: -1, -7"
      );
    });
  });
  describe("handles greater than 1000 number", () => {
    test("ignore number greater than 1000", () => {
      expect(sCalc.add("1004, 1, 9, 50")).toBe(60);
    });
  });
  describe("performance test", () => {
    test("adds 1000 numbers", () => {
      let nums = "";
      const n = 1000;
      for (let i = 1; i <= n; i++) {
        nums += `${i}, `;
      }
      const startMem = process.memoryUsage().heapUsed;
      const startTime = performance.now();
      const result = sCalc.add(nums);
      const endTime = performance.now();
      const endMem = process.memoryUsage().heapUsed;
      console.log(`Time taken : ${endTime - startTime}.toFixed(2) ms`);
      console.log(`Memory used : ${endMem - startMem}.toFixed(2) KB`);
      expect(result).toBe((n * (n + 1)) / 2);
    });
  });
});
