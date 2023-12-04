export default function cleanSet(set, startString) {
  const arr = [...set].filter((x) => x.startsWith(startString));
  if (startString !== undefined && startString.length) {
    return arr.map((word) => (word.slice(startString.length))).join('-');
  }
  return '';
}
