export const hexToUrl = (data) => {
  let byteArray;

  if (Array.isArray(data)) {
    // Si es array de arrays: [[255, 216], [255, 224], ...]
    if (Array.isArray(data[0])) {
      // Aplanar el array: [[a,b], [c,d]] → [a,b,c,d]
      const flattenedArray = data.flat();
      byteArray = new Uint8Array(flattenedArray);
    }
    // Si es array plano: [255, 216, 255, ...]
    else {
      byteArray = new Uint8Array(data);
    }
  }
  // Comportamiento original para strings hexadecimales
  else {
    const cleanHex = data.replace("0x", "");
    byteArray = new Uint8Array(
      cleanHex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );
  }

  const blob = new Blob([byteArray], { type: "image/jpeg" });
  return URL.createObjectURL(blob);
};
