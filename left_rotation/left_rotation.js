function rotLeft(a, d) {
  var arr = [];
  for (var i = 0; i < a.length; i++) {
    arr.push(a[i]);
  };
  for (var j = 1; j <= d; j++) {
    arr.shift(arr.push(arr[0]));
  }
  return arr;
}

rotLeft("56789", 4)