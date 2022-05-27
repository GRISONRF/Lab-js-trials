'use strict';

// 1. printIndices
function printIndices(items) {
  for (const item in items) {
    console.log(items[item], item)
  }; 
}

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i])
    }
  };
  console.log(result)
}

// 3. smallestNItems
function smallestNItems(items, n) {

  // Print a list of the `n` smallest integers in `items`.
  // Order the integers in descending order.
  // You can assume that `n` will be less than the length of the list.
  // Arguments:
  //     items (list[int]): A list of integers
  //     n (int): Desired length for the resulting list
  // 
  // const sortedNItems = [];   input= [1, 30, 4, 21, 100000], 3  output => 1, 2, 21, 30 
  const sortedItems = items.sort((a,b) => a - b); //  = 1, 4, 21, 30, 100000

  console.log(sortedItems.slice(0,n));
}