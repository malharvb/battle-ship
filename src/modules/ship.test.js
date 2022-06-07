import ship from './ship';

const s = ship(1);

test('give ship length', () => {
  expect(s.len).toBe(1);
});

test('ship hit and sink ', () => {
  s.hit();
  expect(s.isSunk()).toBe(true);
});
