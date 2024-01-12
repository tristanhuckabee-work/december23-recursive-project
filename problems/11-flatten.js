/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  if (!arr.length) return [];
  
  let res = [];

  if (Array.isArray(arr[0])) {
    res.push( ...flatten(arr.shift()) );
  } else {
    res.push( arr.shift() );
  }

  res.push( ...flatten(arr) );

  return res;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
