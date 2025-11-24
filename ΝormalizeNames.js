function normalizeNames(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let name = arr[i];

    if (typeof name === "string") {
      name = name.trim();
      name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      result.push(name);
    }
  }

  console.log(result.join(", "));
}

normalizeNames(["   oSaMa  ", "aHMeD   ", "  LAILA"]);