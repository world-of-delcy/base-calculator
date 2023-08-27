import Decimal from "./Decimal";
import Binary from "./Binary";
import HexaDecimal from "./HexaDecimal";
import Octal from "./Octal";

function isNumber(value) {
  const isNum =
    value === "0" ||
    value === "1" ||
    value === "2" ||
    value === "3" ||
    value === "4" ||
    value === "5" ||
    value === "6" ||
    value === "7" ||
    value === "8" ||
    value === "9" ||
    value === "A" ||
    value === "B" ||
    value === "C" ||
    value === "D" ||
    value === "E" ||
    value === "F" ||
    value === "a" ||
    value === "b" ||
    value === "c" ||
    value === "d" ||
    value === "e" ||
    value === "f";
  return isNum;
}
function isOperator(value) {
  const isNum =
    value === "+" ||
    value === "-" ||
    value === "*" ||
    value === "/" ||
    value === "%" ||
    value === "&" ||
    value === "|" ||
    value === "^";
  return isNum;
}
function convertToDecimal(array, mode) {
  if (mode === "dec") {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      array[i] = Number.parseInt(element);
    }
  }
  if (mode === "bin") {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      array[i] = Binary.toDecimal(element);
    }
  }
  if (mode === "hex") {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      array[i] = HexaDecimal.toDecimal(element);
    }
  }
  if (mode === "oct") {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      array[i] = Octal.toDecimal(element);
    }
  }
  return array;
}
function convertToMode(num, mode) {
  if (mode === "bin") {
    return Decimal.toBinary(num);
  }
  if (mode === "hex") {
    return Decimal.toHexaDecimal(num);
  }
  if (mode === "oct") {
    return Decimal.toOctal(num);
  }
  if (mode === "dec") {
    return num;
  }
}
function solve(a, b, operand) {
  switch (operand) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    case "&":
    case "|":
    case "^":
      a = Decimal.toBinary(a);
      b = Decimal.toBinary(b);
      if (a.length !== b.length) {
        while (a.length > b.length) {
          b = "0" + b;
        }
        while (a.length < b.length) {
          a = "0" + a;
        }
      }
      let result = "";
      for (let i = 0; i < a.length; i++) {
        result += computeGATE(a.charAt(i), b.charAt(i), operand);
      }
      result = Binary.toDecimal(result);
      return result;
    default:
      break;
  }
}
function computeGATE(a, b, operand) {
  switch (operand) {
    case "&":
      if (a === "1" && b === "1") return "1";
      return "0";
    case "|":
      if (a === "1" || b === "1") return "1";
      return "0";
    case "^":
      if (a === b) return "0";
      return "1";
    default:
      break;
  }
}

export function evaluate(input, mode) {
  let num = [];
  const op = [];
  let val = "";
  const { length } = input;
  for (let i = length - 1; i >= 0; i--) {
    const x = input.charAt(i);
    if (x === " ") {
      continue;
    }
    if (isNumber(x)) {
      val = x + val;
    }
    if (isOperator(x)) {
      op.push(x);
      num.push(val);
      val = "";
    }
  }
  if (val) {
    num.push(val);
  }
  num = convertToDecimal(num, mode);
  while (op.length > 0) {
    const answer = solve(num.pop(), num.pop(), op.pop());
    num.push(answer);
  }
  const result = num.pop();
  return convertToMode(result, mode);
}
