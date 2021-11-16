describe("Fizzbuzz", function() {
  let fizzbuzz;

  beforeEach(function () {
    fizzbuzz = new Fizzbuzz();
  });

  it("should be divisible by 3 ", function() {
    expect(fizzbuzz.play(12)).toEqual('Fizz');
  });

  it("should not be divisible by 3 ", function() {
    expect(fizzbuzz.play(16)).toEqual(16);
  });

  it("should be divisible by 5 ", function() {
    expect(fizzbuzz.play(10)).toEqual('Buzz');
  });

  it("should not be divisible by 5 ", function() {
    expect(fizzbuzz.play(8)).toEqual(8);
  });

  it("should be divisible by 15 ", function() {
    expect(fizzbuzz.play(30)).toEqual('FizzBuzz');
  });

  it("should not be divisible by 3 or 5  ", function() {
    expect(fizzbuzz.play(22)).toEqual(22);
  });
});