import Decimal from "./Decimal";

function getNumber(hex) {
  try {
    if (Number.parseInt(hex) <= 9) return Number.parseInt(hex);
    if (hex === "A" || hex === "a") return 10;
    if (hex === "B" || hex === "b") return 11;
    if (hex === "C" || hex === "c") return 12;
    if (hex === "D" || hex === "d") return 13;
    if (hex === "E" || hex === "e") return 14;
    if (hex === "F" || hex === "f") return 15;
    return 0;
  } catch (error) {
    return 0;
  }
}
const hexTable = [
  { hex: "0", bin: "0000" },
  { hex: "1", bin: "0001" },
  { hex: "2", bin: "0010" },
  { hex: "3", bin: "0011" },
  { hex: "4", bin: "0100" },
  { hex: "5", bin: "0101" },
  { hex: "6", bin: "0110" },
  { hex: "7", bin: "0111" },
  { hex: "8", bin: "1000" },
  { hex: "9", bin: "1001" },
  { hex: "A", bin: "1010" },
  { hex: "B", bin: "1011" },
  { hex: "C", bin: "1100" },
  { hex: "D", bin: "1101" },
  { hex: "E", bin: "1110" },
  { hex: "F", bin: "1111" },
  { hex: "a", bin: "1010" },
  { hex: "b", bin: "1011" },
  { hex: "c", bin: "1100" },
  { hex: "d", bin: "1101" },
  { hex: "e", bin: "1110" },
  { hex: "f", bin: "1111" },
];
export function toDecimal(hex) {
  hex += "";
  hex = hex.replaceAll(" ", "");
  let result = 0;
  for (let i = hex.length - 1; i >= 0; i--) {
    result += getNumber(hex.charAt(i)) * Math.pow(16, hex.length - i - 1);
  }
  return result;
}
export function toBinary(hex) {
  hex += "";
  hex = hex.replaceAll(" ", "");
  let result = "";
  for (let i = 0; i < hex.length; i++) {
    result += hexTable.find((h) => h.hex === hex.charAt(i)).bin;
  }
  return result;
}
export function toOctal(hex) {
  const dec = toDecimal(hex);
  return Decimal.toOctal(dec);
}

const HexaDecimal = { toBinary, toDecimal, toOctal };
export default HexaDecimal;
