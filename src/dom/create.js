const create = (() => {
  function gameboard() {
    const playerGb = document.querySelector('#playerGb');
    const aiGb = document.querySelector('#aiGb');

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const tile = document.createElement('div');
        tile.classList.add('ptile');
        tile.classList.add(`p${i}x`);
        tile.classList.add(`p${j}y`);
        playerGb.append(tile);
      }
    }

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const tile = document.createElement('div');
        tile.classList.add('aitile');
        tile.classList.add(`a${i}x`);
        tile.classList.add(`a${j}y`);
        aiGb.append(tile);
      }
    }
  }

  return { gameboard };
})();

export default create;
