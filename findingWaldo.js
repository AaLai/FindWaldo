// The second argument/parameter is expected to be a function
var count = 0;

function findWaldo(arr, found) {
  arr.forEach((i) => {
    if (i === "Waldo" ? found() : count += 1) {
    }
  });
}

function actionWhenFound() {
  console.log("Found Waldo at index " + count);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);