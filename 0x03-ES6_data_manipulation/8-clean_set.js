export default function cleanSet(set, startString) {
  const arr = [...set].filter((x) => x.startsWith(startString));
  const len = startString.length;
  if (len) {
    return arr.map((word) => (word.slice(len))).join('-');
  }
  return '';
}
