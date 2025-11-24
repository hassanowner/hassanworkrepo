function summarize(arr) {
  let numbersSum = 0;
  let lettersSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let v = arr[i];

    if (typeof v === "number") {
      numbersSum += v;
    } else if (typeof v === "string") {
      lettersSum += v.length;
    }
  }

  console.log(`Numbers Sum = ${numbersSum}`);
  console.log(`Total Letters = ${lettersSum}`);
}

summarize([10, "Hello", 25, "World", 85]);