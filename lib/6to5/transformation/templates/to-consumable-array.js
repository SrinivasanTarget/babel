(function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2.push(arr[i]);
    return arr2;
  } else {
    return Array.from(arr);
  }
});