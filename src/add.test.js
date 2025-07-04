const { add } = require("./add");
describe("String Calculator", () => {
  describe("Core functionalities", () => {
    test("returns 0 for empty string", () => {
      expect(add("")).toBe(0);
    });
    test("returns itself for single number", () => {
      expect(add("1")).toBe(1);
    });
    test("returns sum of two numbers", () => {
      expect(add("1,2")).toBe(3);
    });
    test("returns sum of 2 or more numbers", () => {
      expect(add("1,2,8,10")).toBe(21);
    });
  });
  describe("Delimiter support", () => {
    test("handles newline delimiter", () => {
      expect(add("1\n2, 5,9")).toBe(17);
    });
  });
});
