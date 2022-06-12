const inputController = (() => {
  const axisBtn = document.querySelector('#axisBtn');
  const getCoords = (e) => {
    let x; let y;
    if (e.target.classList.length === 3) {
      x = e.target.classList[1].charAt(1);
      y = e.target.classList[2].charAt(1);
      return [Number(x), Number(y)];
    }

    return false;
  };

  const determineAxis = () => {
    if (axisBtn.textContent === 'X') {
      return 1;
    }
    return 0;
  };

  const changeAxisBtn = (e) => {
    if (e.target.textContent === 'X') {
      e.target.textContent = 'Y';
    } else {
      e.target.textContent = 'X';
    }
  };

  return { getCoords, determineAxis, changeAxisBtn };
})();

export default inputController;
