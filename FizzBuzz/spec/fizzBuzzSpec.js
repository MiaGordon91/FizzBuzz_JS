describe("Fizzbuzz", function() {
  let fizzbuzz;
  it("should be divisible by 3 ", function() {
    fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
  });

  it("should be divisible by 5 ", function() {
    fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  });
});