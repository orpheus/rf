module.exports = (obj, currentKey) => {
  const longestKey = Object.keys(obj).reduce((total, key) => {
    if (key.length > total) return key.length;
    else return total;
  }, 0);

  const spaceCount = (longestKey + 2) - currentKey.length;
  let spaces = '';
  for (let i = 0; i < spaceCount; i++) {
    spaces += ' ';
  }
  return spaces;
};