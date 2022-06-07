import player from './player';
import gameboard from './gameboard';
import ship from './ship';
// test('player selected battleship placement', () => {
//   expect(placeShip(2, 2, 1, 5)).toBe(true);
// });

test('attack a tile', () => {
  const gb = gameboard();
  gb.place(2, 2, 1, ship(2));
  expect(player.attackTile(2, 2, gb)).toStrictEqual([2, 2]);
});
