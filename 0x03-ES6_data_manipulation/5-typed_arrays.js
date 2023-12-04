export default function createInt8TypedArray(length, position, value) {
  const int8 = new DataView(new ArrayBuffer(length));
  try {
    int8.setUint8(position, value);
    return int8;
  } catch (e) {
    throw new Error('Position outside range');
  }
}
