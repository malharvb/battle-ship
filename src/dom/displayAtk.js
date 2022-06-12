const displayAtk = (arr, board) => {
  const atkedTile = document.querySelector(`.${board}${arr[0]}x.${board}${arr[1]}y`);

  if (arr[2]) {
    atkedTile.classList.add('green');
  } else {
    atkedTile.classList.add('red');
  }
};

export default displayAtk;
