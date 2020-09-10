module.exports = function reverse (n) {
  n=String(n).split('');
  if (n[0] === '-') {
      n.splice(0,1);
  }
  return n.reverse().join('');
}
