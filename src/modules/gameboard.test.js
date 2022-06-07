import gameboard from './gameboard';
import ship from './ship';

const gb = gameboard();

// test('place boat at a location check(does not fit inside board)', () => {
//   expect(gb.place(2, 6, 1, 4)).toBe(false);
// });

test('place boat at a location check(inside)', () => {
  expect(gb.place(2, 2, 1, ship(2))).toBe(true);
});

// test('place boat at a location check(outside)', () => {
//   expect(gb.place(10, 10, 1, 2)).toBe(false);
// });

test('is the current prediction a hit', () => {
  expect(gb.recieveAttack(2, 2)).toStrictEqual([2, 2]);
});
test('attack on previously attacked position', () => {
  expect(gb.recieveAttack(2, 2)).toStrictEqual(null);
});
test('is the current prediction not a hit', () => {
  expect(gb.recieveAttack(2, 5)).toBe(false);
});

test('all ships have sunken', () => {
  expect(gb.haveAllSunk([true, true, true, true, true])).toBe(true);
});

test('some ships remain standing', () => {
  expect(gb.haveAllSunk([true, true, false, true, true])).toBe(false);
});
