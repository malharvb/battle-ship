const ship = (len) => {
  let numHits = 0;
  function hit() {
    numHits += 1;
    return 1;
  }

  function isSunk() {
    if (numHits === len) return true;
    return false;
  }
  return { len, hit, isSunk };
};

export default ship;
