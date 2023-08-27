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

function FullAdder(a, b, c) {
  if (a === "0" && b === "0" && c === "0") {
    return { sum: "0", carry: "0" };
  }
  if (a === "0" && b === "0" && c === "1") {
    return { sum: "1", carry: "0" };
  }
  if (a === "0" && b === "1" && c === "0") {
    return { sum: "1", carry: "0" };
  }
  if (a === "0" && b === "1" && c === "1") {
    return { sum: "0", carry: "1" };
  }
  if (a === "1" && b === "0" && c === "0") {
    return { sum: "1", carry: "0" };
  }
  if (a === "1" && b === "0" && c === "1") {
    return { sum: "0", carry: "1" };
  }
  if (a === "1" && b === "1" && c === "0") {
    return { sum: "0", carry: "1" };
  }
  if (a === "1" && b === "1" && c === "1") {
    return { sum: "1", carry: "1" };
  }
}
function addBinary(a, b) {
  a = a + "";
  b = b + "";
  if (a.length !== b.length) {
    while (a.length > b.length) {
      b = "0" + b;
    }
    while (a.length < b.length) {
      a = "0" + a;
    }
  }
  let result = "";
  let carry = "0";
  for (let i = a.length - 1, j = b.length - 1; i >= 0 && j >= 0; i--, j--) {
    const temp = FullAdder(a.charAt(i), b.charAt(j), carry);
    carry = temp.carry;
    result = temp.sum + result;
  }
  if (carry !== "0") {
    result = carry + result;
  }
  return result;
}
export function toDecimal(binary) {
  binary += "";
  binary = binary.replaceAll(" ", "");
  let result = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    result +=
      (binary.charAt(i) === "1" ? 1 : 0) * Math.pow(2, binary.length - i - 1);
  }
  return result;
}
export function toHexaDecimal(binary) {
  let decimal = toDecimal(binary);
  let result = "";
  while (decimal > 0) {
    result = getWord(decimal % 16) + result;
    decimal = Math.floor(decimal / 16);
  }
  return result || 0;
}
export function toOctal(binary) {
  let decimal = toDecimal(binary);
  let result = "";
  while (decimal > 0) {
    result = (decimal % 8) + result;
    decimal = Math.floor(decimal / 8);
  }
  return result || 0;
}

export function one_s(binary) {
  binary += "";
  let result = "";
  binary.replaceAll(" ", "");
  for (let i = 0; i < binary.length; i++) {
    result += binary.charAt(i) === "0" ? 1 : 0;
  }
  return result || 0;
}

export function two_s(binary) {
  const one = one_s(binary);
  const result = addBinary(one, "1");
  return result || 0;
}

const Binary = { toDecimal, toHexaDecimal, toOctal, one_s, two_s };
export default Binary;
