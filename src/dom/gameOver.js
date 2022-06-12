const gameOver = (() => {
  function gameOverTextDisp(winner) {
    const inst = document.querySelector('#instructions');

    if (winner === 'p') {
      inst.textContent = 'You Win!!';
      inst.classList.add('green');
    } else {
      inst.textContent = 'Game Over: You Lose!!';
      inst.classList.add('red');
    }

    const resetBtn = document.createElement('div');
    resetBtn.textContent = 'Restart Game!';
    resetBtn.id = 'resetBtn';
    document.querySelector('#resetBtnCont').append(resetBtn);
  }

  return { gameOverTextDisp };
})();

export default gameOver;
