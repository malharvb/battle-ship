import gameboard from './gameboard';

const aiFactory = () => {
  const gb = gameboard();

  function initaializeAIGb() {
    gb.place(0, 0, 0, 2);
    gb.place(2, 2, 1, 0);
    gb.place(9, 7, 1, 1);
    gb.place(4, 5, 1, 3);
    gb.place(5, 2, 0, 4);
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
