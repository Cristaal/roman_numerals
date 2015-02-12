describe("romanNumeral", function() {
  it("will return roman numeral M for 1000", function() {
    expect(romanNumeral(1000)).to.equal("M");
  });

  it("will return roman numeral D for 500", function() {
    expect(romanNumeral(500)).to.equal("D");
  });

  it("will return roman numeral C for 100", function() {
    expect(romanNumeral(100)).to.equal("C");
  });

  it("will return roman numeral L for 50", function() {
    expect(romanNumeral(50)).to.equal("L");
  });

  it("will return roman numeral X for 10", function() {
    expect(romanNumeral(10)).to.equal("X");
  });

  it("will return roman numeral V for 5", function() {
    expect(romanNumeral(5)).to.equal("V");
  });

  it("will return roman numeral I for 1", function() {
    expect(romanNumeral(1)).to.equal("I");
  });
});
