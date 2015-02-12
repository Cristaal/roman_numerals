var romanNumeral = function(input) {
  var Num = [thousand, fiveHundred, hundred, fifty, ten, five, one];
  var romanNum = ["M", "D", "C", "L", "X", "V", "I"];
  var thousand = 1000;
  var fiveHundred = 500;
  var hundred = 100;
  var fifty = 50;
  var ten = 10;
  var five = 5;
  var one = 1;
  var romanThousand = "M";
  var romanFiveHundred = "D";
  var romanOneHundred = "C";
  var romanFifty = "L";
  var romanTens = "X";
  var romanFives = "V";
  var romanOnes = "I";
  var result = "";

  romanNum.forEach(function(number) {
    if (input/thousand === 1) {
       result = romanNum[0]
    } else if (fiveHundred/input === 1) {
       result = romanNum[1]
    } else if (hundred/input === 1) {
       result = romanNum[2]
    } else if (fifty/input === 1) {
      result = romanNum[3]
    } else if (ten/input === 1) {
      result = romanNum[4]
    } else if (five/input === 1) {
      result = romanNum[5]
    } else if (one/input === 1) {
      result = romanNum[6]
    }
  });
  return result
};
