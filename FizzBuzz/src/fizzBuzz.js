class Fizzbuzz {
  
  _isDivisibleBy(divisor, number) {
    return number % divisor === 0;
  }

  play(number) {
    if (this._isDivisibleBy(15, number)) {
      return 'FizzBuzz';
      }
    if (this._isDivisibleBy(3, number)) {
      return 'Fizz';
      }
    if (this._isDivisibleBy(5, number)) {
      return 'Buzz';
    }
    else {
      return number;
   }
  }
}