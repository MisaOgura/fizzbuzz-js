describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("multipuls of 3", function() {
  it("Should return fizz when number is 3", function() {
    expect(fizzBuzz.play(3)).toEqual("fizz");
    });
  it("Should return fizz when number is 6", function() {
    expect(fizzBuzz.play(6)).toEqual("fizz");
    });
  });

  describe("multuples of 5", function() {
    it("should return buzz when number is 5", function(){
      expect(fizzBuzz.play(5)).toEqual('buzz');
    });
    it("should return buzz when number is 10", function(){
      expect(fizzBuzz.play(10)).toEqual('buzz');
    });
  });

  describe("multiples of 3 and 5", function(){
    it("should return fizzbuzz when number is 15", function(){
      expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
    });
  });

  describe("not divisible by 3 or 5", function(){
    it("should return number when number is 7", function(){
      expect(fizzBuzz.play(7)).toEqual(7);
    });
    it("should return number when number is 79", function(){
      expect(fizzBuzz.play(79)).toEqual(79);
    });
  });
});
