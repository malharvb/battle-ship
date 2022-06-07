const drawShip = (x, y, dir, len) => {
  if (dir) {
    for (let i = y; i < y + len; i++) {
      const tile = document.querySelector(`.ptile.p${x}x.p${i}y`);

      tile.classList.add('select');
    }
  } else {
    for (let i = x; i < x + len; i++) {
      const tile = document.querySelector(`.ptile.p${i}x.p${y}y`);

      tile.classList.add('select');
    }
  }
};

export default drawShip;
