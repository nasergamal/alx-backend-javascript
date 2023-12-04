export default function cleanSet(set, startString) {
  if (startString !== undefined && startString.length) {
    const arr = [...set].filter((x) => (x === undefined ? '' : x.startsWith(startString)));
    return arr.map((word) => (word.slice(startString.length))).join('-');
  }
  return '';
}
