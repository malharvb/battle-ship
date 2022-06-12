import gameboard from './gameboard';

const playerFactory = () => {
  const gb = gameboard();
  let curShip = 5;
  function attackTile(x, y, oppGb) {
    return oppGb.recieveAttack(x, y);
  }

  function placeShip(x, y, dir) {
    if (!curShip) return false;
    const success = gb.place(x, y, dir, curShip - 1);
    if (success) { curShip -= 1; }
    return success;
  }

  return {
    gb, attackTile, placeShip,
  };
};

export default playerFactory;
