
function classifyElements(arr) {
  let numbers = [];
  let strings = [];
  let booleans = [];

  for (let i = 0; i < arr.length; i++) {
    
    if (typeof arr[i] === "number") {
      numbers.push(arr[i]);
      
    } else if (typeof arr[i] === "string") {
      strings.push(arr[i]);
      
    } else if (typeof arr[i] === "boolean") {
      booleans.push(arr[i]);
    }
  }

  return {
    numbers,
    strings,
    booleans
  };
}

console.log(
  classifyElements([12, "Hi", true, 55, "World", false])
);