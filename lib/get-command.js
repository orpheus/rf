module.exports = () => {
  const path = process.argv[1].split('/');
  return path[path.length -1];
};
