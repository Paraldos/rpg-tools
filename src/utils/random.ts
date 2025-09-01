export const rollDice = (sides = 6): number => {
  return Math.floor(Math.random() * sides) + 1;
};
