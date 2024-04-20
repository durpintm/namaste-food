import { sum } from "../components/sum";

// This function takes two arguments => string, callback function
test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(4, 5);

  // Assertion
  expect(result).toBe(9);
});
