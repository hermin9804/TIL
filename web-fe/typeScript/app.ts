function combine(
  input1: number | string,
  input2: number | string,
  resultConbersion: "as-nuber" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConbersion === "as-nuber"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-nuber");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-nuber");
console.log(combinedAges);

const combinedName = combine("Max", "Anna", "as-text");
console.log(combinedName);
