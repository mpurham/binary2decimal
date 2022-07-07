/*
   name: Bin to Dec
   description: Binary to Decimal
   author: Maurice
   tags: decimal,binary,dec,bin
   version: 1.0.0
 */

function main(state) {
  var text = state.text;
  var lines = text.split(/\n/);
  var result = "";

  for (const index in lines) {
    var text = lines[index].trim();
    var decimal = parseInt(text, 2);

    if (isNaN(decimal)) {
      result += text;
    } else {
      result += decimal;
    }

    result += "\n";
  }

  state.text = result.trim();
}