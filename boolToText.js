function boolToText(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      result.push("Yes");
    } else if (arr[i] === false) {
      result.push("No");
    }
  }

  console.log(result);
}

boolToText([true, false, false, true]);