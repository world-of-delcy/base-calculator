function init(decimal) {
  if (typeof decimal === "string") {
    try {
      decimal = decimal.replaceAll(" ", "");
      decimal = Number.parseInt(decimal);
    } catch (error) {
      return null;
    }
  }
  return decimal;
}
function getWord(hex) {
  hex = Math.floor(hex);
  if (hex <= 9) return hex;
  if (hex === 10) return "A";
  if (hex === 11) return "B";
  if (hex === 12) return "C";
  if (hex === 13) return "D";
  if (hex === 14) return "E";
  if (hex === 15) return "F";
  return 0;
}

export function toBinary(decimal) {
  decimal = init(decimal);
  let result = "";
  while (decimal > 0) {
    result = (decimal % 2) + result;
    decimal = Math.floor(decimal / 2);
  }
  return result || "0";
}

export function toHexaDecimal(decimal) {
  decimal = init(decimal);
  let result = "";
  while (decimal > 0) {
    result = getWord(decimal % 16) + result;
    decimal = Math.floor(decimal / 16);
  }
  return result || "0";
}

export function toOctal(decimal) {
  decimal = init(decimal);
  let result = "";
  while (decimal > 0) {
    result = getWord(decimal % 8) + result;
    decimal = Math.floor(decimal / 8);
  }
  return result || "0";
}

const Decimal = { toBinary, toHexaDecimal, toOctal };
export default Decimal;
