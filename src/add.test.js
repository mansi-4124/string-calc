const { add } = require("./add");
describe("String Calculator", () => {
  describe("Core functionalities", () => {
    test("returns 0 for empty string", () => {
      expect(add("")).toBe(0);
    });
    test("returns itself for single number", () => {
      expect(add("1")).toBe(1);
    });
    test("return sum of two numbers", () => {
      expect(add("1,2")).toBe(3);
    });
  });
});
