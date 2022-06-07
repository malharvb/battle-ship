import ai from './ai';
import gameboard from './gameboard';
import ship from './ship';

test('AI board initialization', () => {
  expect(ai.initaializeAIGb());
});

test('attack a tile', () => {
  const gb = gameboard();
  //   gb.place(2, 2, 1, ship(2));
  expect(ai.attackTile(gb)).toBe(false);
});
