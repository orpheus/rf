module.exports = arr => {
  const newObj = {};

  arr.forEach((key, i) => {
    if (!(i % 2)) {
      newObj[key] = arr[i + 1];
    }
  });

  return newObj;
};
