export default function hasValuesFromArray(set, array) {
  return array.every((a) => set.has(a));
}
