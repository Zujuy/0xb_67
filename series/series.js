const sliceArray = (array, number) => {
  const slices = [];
  for (let i = 0; i + number <= array.length; i++) {
    slices.push(array.slice(i, i + number));
  }
  return slices;
}

class Series {
  constructor(digits) {
    this.digits = [...digits].map(Number);
  }

  slices(number) {
    if (number > this.digits.length) throw new Error('Slice size is too big.')
    return sliceArray(this.digits, number);
  }
}

sliceArray("12345", 2)