/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns an array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
function rec(i, arr, newArr) {
  if (i === arr.length) return;
  if (Array.isArray(arr[i])) {
    rec(0, arr[i], newArr);
  } else {
    newArr.push(arr[i]);
  }

  rec(i + 1, arr, newArr);
}
function flatten(arr) {
  // if (!arr.length) return [];

  // let res = [];

  // arr.forEach(el => {
  //   if (Array.isArray(el)) {
  //     res.push( ...flatten(el) );
  //   } else {
  //     res.push(el);
  //   }
  // });

  // return res;

  let newArr = [];
  rec(0, arr, newArr);
  return newArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
