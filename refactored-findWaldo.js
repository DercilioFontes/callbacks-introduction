// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(item, index) {
    if (item === "Waldo") {
      found(index);
    }
  });
}

// I changed the function passing a parameter for index
function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// const arr = ['a', 'b', 'c'];

// arr.forEach(function(element) {
//     console.log(element);
// });

// SyntaxEdit

// arr.forEach(function callback(currentValue[, index[, array]]) {
//     //your iterator
// }[, thisArg]);
// Parameters

// callback
// Function to execute for each element, taking three arguments:
// currentValue
// The value of the current element being processed in the array.
// indexOptional
// The index of the current element being processed in the array.
// arrayOptional
// The array that forEach() is being applied to.
// thisArg Optional
// Value to use as this (i.e the reference Object) when executing callback.

// Return value

// undefined.

