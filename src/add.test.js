const { add } = require("./add");
describe("String Calculator", () => {
  describe("Core functionalities", () => {
    test("returns 0 for empty string", () => {
      expect(add("")).toBe(0);
    });
  });
});
