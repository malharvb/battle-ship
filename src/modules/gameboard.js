import ship from './ship';

const gameboard = () => {
  // All ships
  // 1-Carrier-5
  // 2-Battleship-4
  // 3-Destroyer-3
  // 4-Submarine-3
  // 5-Patrol Boat-2

  const carrier = ship(5);
  const battleShip = ship(4);
  const destroyer = ship(3);
  const submarine = ship(3);
  const patrolBoat = ship(2);

  const allShips = [patrolBoat, submarine, destroyer, battleShip, carrier];

  const boardLength = 10;
  const gbGrid = Array(boardLength).fill().map(() => Array(boardLength).fill(0));

  let ctrForHover = 4;

  function isPlacmentPossible(x, y, dir, len) {
    if (dir) {
      for (let i = y; i < y + len; i += 1) {
        if (gbGrid[x][i]) {
          return false;
        }
      }
    } else {
      for (let i = x; i < x + len; i += 1) {
        if (gbGrid[i][y]) {
          return false;
        }
      }
    }
    return true;
  }

  function haveAllSunk(ships) {
    const sunkValue = ships.map((e) => e.isSunk());
    return sunkValue.every((el) => el === true);
  }
  /* for dir values
  1: horizontal
  0: vertical
  */
  function place(x, y, dir, curShipNum) {
    const curship = allShips[curShipNum];
    if (x > boardLength - 1 || y > boardLength - 1) return false;
    if (dir === 1 && (y + curship.len < boardLength + 1)) {
      if (!isPlacmentPossible(x, y, dir, curship.len)) return false;
      for (let i = 0; i < boardLength; i += 1) {
        for (let j = 0; j < boardLength; j += 1) {
          if (i === x && (j < y + curship.len && j >= y)) {
            gbGrid[i][j] = curship;
          }
        }
      }

      ctrForHover -= 1;
      return curship.len;
    } if (dir === 0 && (x + curship.len < boardLength + 1)) {
      if (!isPlacmentPossible(x, y, dir, curship.len)) return false;
      for (let i = 0; i < boardLength; i += 1) {
        for (let j = 0; j < boardLength; j += 1) {
          if ((i >= x && i < x + curship.len) && j === y) {
            gbGrid[i][j] = curship;
          }
        }
      }

      ctrForHover -= 1;
      return curship.len;
    }

    return false;
  }

  function recieveAttack(x, y) {
    if (gbGrid[x][y] === 1) return null;
    if (gbGrid[x][y]) {
      gbGrid[x][y] = gbGrid[x][y].hit();
      if (haveAllSunk(allShips)) return [x, y, 1, 0];
      return [x, y, 1];
    }
    gbGrid[x][y] = 1;
    return [x, y, 0];
  }

  function shipToHover() {
    if (ctrForHover === -1) return false;
    return allShips[ctrForHover].len;
  }

  return {
    place, recieveAttack, haveAllSunk, shipToHover,
  };
};

export default gameboard;
