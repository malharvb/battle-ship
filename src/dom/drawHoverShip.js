/* This has been partially implemented */
const drawHoverShip = (() => {
  const boardLength = 10;

  function isPlacmentPossible(x, y, dir, len) {
    if (dir) {
      for (let i = y; i < y + len; i++) {
        const tile = document.querySelector(`.p${x}x.p${i}y`);
        if (tile.classList.contains('select') || tile.classList.contains('greenHover')) {
          return false;
        }
      }
    } else {
      for (let i = x; i < x + len; i++) {
        const tile = document.querySelector(`.p${i}x.p${y}y`);
        if (tile.classList.contains('select') || tile.classList.contains('greenHover')) {
          return false;
        }
      }
    }
    return true;
  }

  /* for dir values
  1: horizontal
  0: vertical
  */

  function hover(x, y, dir, len) {
    if (x > boardLength - 1 || y > boardLength - 1) return;
    if (dir === 1 && (y + len < boardLength + 1)) {
      if (!isPlacmentPossible(x, y, dir, len)) return;
      for (let i = 0; i < boardLength; i++) {
        for (let j = 0; j < boardLength; j++) {
          if (i === x && (j < y + len && j >= y)) {
            document.querySelector(`.p${i}x.p${j}y`).classList.add('greenHover');
          }
        }
      }
    } if (dir === 0 && (x + len < boardLength + 1)) {
      if (!isPlacmentPossible(x, y, dir, len)) return;
      for (let i = 0; i < boardLength; i++) {
        for (let j = 0; j < boardLength; j++) {
          if ((i >= x && i < x + len) && j === y) {
            document.querySelector(`.p${i}x.p${j}y`).classList.add('greenHover');
          }
        }
      }
    }
  }

  return { hover };
})();

export default drawHoverShip;
