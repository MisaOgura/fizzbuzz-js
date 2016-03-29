describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    var fizzBuzz = new FizzBuzz();
  });

  describe("multipuls of 3", function() {
  it("Should return fizz when number is 3", function() {
    expect(fizzBuzz.play(3)).toEqual("fizz");
    });
  });

});
