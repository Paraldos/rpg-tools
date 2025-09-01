export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getRandomArrayItem = <T>(arr: T[] = []): T | undefined => {
  if (!arr?.length) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
};

export const getWeightedRandomArrayItem = <T>(
  arr: T[],
  k = 6
): T | undefined => {
  if (!arr?.length) return undefined;
  let s = 0;
  for (let i = 0; i < k; i++) s += Math.random();
  const r = s / k;
  const idx = Math.min(arr.length - 1, Math.floor(r * arr.length));
  return arr[idx];
};
