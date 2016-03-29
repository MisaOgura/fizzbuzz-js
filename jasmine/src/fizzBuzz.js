function FizzBuzz() {
}

  FizzBuzz.prototype.play = function(number) {
    if((number % 15 === 0)){
      return 'fizzbuzz';
    }
    else if(number % 5 === 0){
      return 'buzz';
    }
    else if(number % 3 === 0){
      return 'fizz';
    }
    else {
      return number
    };
  };

var fizzBuzz = new FizzBuzz();

for(i=1; i<101; i += 1){
  console.log(fizzBuzz.play(i));
};
