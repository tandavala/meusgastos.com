import { Budget } from "./budget";

describe("Budget unit tests", () => {
  it("should throw error when Id is empty", () => {
    expect(() => {
      const budget = Budget.create("", "123", 200);
    }).toThrowError("Id is required");
  });

  it("should throw error when ower is empty", () => {
    expect(() => {
      const budget = Budget.create("123", "", 200);
    }).toThrowError("Owner is required");
  });

  it("should throw error when budget value is 0", () => {
    expect(() => {
      const budget = Budget.create("123", "123", 0);
    }).toThrowError("Value is required");
  });

  it("should throw error when budget is null", () => {
    expect(() => {
      const budget = Budget.create("123", "123", null);
    }).toThrowError("Value is required");
  });
});
