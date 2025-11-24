
function cleanUserData(arr) {
  let validData = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (typeof value === "string") {
      value = value.trim();
    }

    if (
      value === 0 ||
      value === false ||
      value === "" ||
      value === null ||
      value === undefined ) {
      continue;  }

    validData.push(value);
  }0

  console.log(`Valid Data: ${validData.join(" | ")}`);
}

cleanUserData(["    Osama   ", 0, true, "  Egypt, hi bro "]);
