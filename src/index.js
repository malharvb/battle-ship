import player from './modules/player';
import ai from './modules/ai';
import create from './dom/create';
import inputController from './dom/getCoordsAndAxis';
import drawShip from './dom/drawShip';

create.gameboard();

function playerClick(e) {
  const coords = inputController.getCoords(e);
  const dir = inputController.determineAxis();
  const lenOfCurShip = player.placeShip(coords[0], coords[1], dir);
  if (lenOfCurShip) drawShip(coords[0], coords[1], dir, lenOfCurShip);
}

const ptiles = document.querySelectorAll('.ptile');
ptiles.forEach((ptile) => ptile.addEventListener('click', playerClick));

const axisBtn = document.querySelector('#axisBtn');
axisBtn.addEventListener('click', inputController.changeAxisBtn);
