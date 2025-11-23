
  function analyzeData(arr) {
  let sum = 0;
  let texts = "";
  let booleanCount = 0;

  
  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === "number") {
      sum += arr[i];

    } else if (typeof arr[i] === "string") {
      
      if (texts !== "") {
        texts += " - ";
      }
      texts += arr[i];

    } else if (typeof arr[i] === "boolean") {
      booleanCount++;
    }
  }

  document.write(
    `Sum Of Numbers = ${sum}<br>` +
    `Texts = ${texts}<br>` +
    `Booleans Count = ${booleanCount}`
  );
}

analyzeData([12, "Hello", false, 22, "World", true, 53, "Osama", false]);

