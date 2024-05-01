export function getView<T>(data: T[], index: number, size: number) {
  if (size > data.length) {
    throw new Error(
      "Cannot function for apurture size larger than the data set"
    );
  }

  if (index >= data.length) {
    throw new Error("out of bounds index");
  }

  const res: T[] = [];

  let i;
  let s;
  for (i = index, s = 0; i < data.length && s < size; i++, s++) {
    res.push(data[i]);
  }

  if (res.length < size) {
    const pendingCount = size - res.length;
    for (i = 0; i < pendingCount; i++) {
      res.push(data[i]);
    }
  }

  return res;
}
