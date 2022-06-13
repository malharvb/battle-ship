import gameboard from './gameboard';

const aiFactory = () => {
  const gb = gameboard();

  function randomizeBoat(len) {
    let dir;
    const x = Math.floor(Math.random() * (10));
    const y = Math.floor(Math.random() * (10));
    const randomFloat = Math.random();
    if (randomFloat < 0.5) { dir = 0; } else { dir = 1; }

    const result = gb.place(x, y, dir, len);

    if (!result) {
      randomizeBoat(len);
    }
  }
  function initaializeAIGb() {
    randomizeBoat(0);
    randomizeBoat(1);
    randomizeBoat(2);
    randomizeBoat(3);
    randomizeBoat(4);
  }

  function attackTile(oppGb) {
    const x = Math.floor(Math.random() * (10));
    const y = Math.floor(Math.random() * (10));

    const result = oppGb.recieveAttack(x, y);

    if (result == null) {
      return attackTile(oppGb);
    }
    return result;
  }

  return {
    gb, initaializeAIGb, attackTile,
  };
};

export default aiFactory;
