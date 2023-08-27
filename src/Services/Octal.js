import Decimal from "./Decimal";
const octalTable = [
  { bin: "000", oct: "0" },
  { bin: "001", oct: "1" },
  { bin: "010", oct: "2" },
  { bin: "011", oct: "3" },
  { bin: "100", oct: "4" },
  { bin: "101", oct: "5" },
  { bin: "110", oct: "6" },
  { bin: "111", oct: "7" },
];

export function toBinary(octal) {
  octal += "";
  octal = octal.replaceAll(" ", "");
  let result = "";
  for (let i = 0; i < octal.length; i++) {
    result += octalTable.find((h) => h.oct === octal.charAt(i)).bin;
  }
  return result;
}
export function toDecimal(octal) {
  octal += "";
  octal = octal.replaceAll(" ", "");
  let result = 0;
  for (let i = octal.length - 1; i >= 0; i--) {
    result +=
      Number.parseInt(octal.charAt(i)) * Math.pow(8, octal.length - i - 1);
  }
  return result;
}
export function toHexaDecimal(octal) {
  const dec = toDecimal(octal);
  return Decimal.toHexaDecimal(dec);
}
const Octal = { toBinary, toDecimal, toHexaDecimal };
export default Octal;
