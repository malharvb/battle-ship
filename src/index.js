import playerFactory from './modules/player';
import aiFactory from './modules/ai';
import create from './dom/create';
import inputController from './dom/getCoordsAndAxis';
import drawShip from './dom/drawShip';
import displayAtk from './dom/displayAtk';
import gameOver from './dom/gameOver';
import changeInst from './dom/changeInst';
import drawHoverShip from './dom/drawHoverShip';

let player = playerFactory();
let ai = aiFactory();
let resetBtn;
create.gameboard();
ai.initaializeAIGb();
let lenOfCurShip = 5;

function resetElements() {
  create.gameboard();
  player = playerFactory();
  ai = aiFactory();
  ai.initaializeAIGb();
  ptiles = document.querySelectorAll('.ptile');
  ptiles.forEach((ptile) => ptile.addEventListener('click', playerShipPlace));
  axisBtn = document.querySelector('#axisBtn');
  axisBtn.addEventListener('click', inputController.changeAxisBtn);
  aitiles = document.querySelectorAll('.aitile');
  aitiles.forEach((aitile) => aitile.addEventListener('click', playerAtk));
  resetBtn.remove();
  changeInst(2);
}

function playerShipPlace(e) {
  const coords = inputController.getCoords(e);
  const dir = inputController.determineAxis();
  lenOfCurShip = player.placeShip(coords[0], coords[1], dir);
  if (lenOfCurShip) drawShip(coords[0], coords[1], dir, lenOfCurShip);
  if (lenOfCurShip === 2) changeInst(1);
}

function playerAtk(e) {
  if (lenOfCurShip !== 2 && lenOfCurShip) return;

  const coords = inputController.getCoords(e);
  if (!coords) return;
  let result = player.attackTile(coords[0], coords[1], ai.gb);

  displayAtk(result, 'a');
  // for gameover mechanism
  if (result.length === 4) {
    gameOver.gameOverTextDisp('p');
    resetBtn = document.querySelector('#resetBtn');
    resetBtn.addEventListener('click', resetElements);
    return;
  }
  result = ai.attackTile(player.gb);
  displayAtk(result, 'p');
  // for gameover mechanism
  if (result.length === 4) {
    gameOver.gameOverTextDisp('a');
    resetBtn = document.querySelector('#resetBtn');
    resetBtn.addEventListener('click', resetElements);
  }
}

// function playerShipHover(e) {
//   const coords = inputController.getCoords(e);
//   const dir = inputController.determineAxis();
//   create.playerBoard();
//   setTimeout(drawHoverShip.hover(coords[0], coords[1], dir, lenOfCurShip), 1000);
// }

let ptiles = document.querySelectorAll('.ptile');
ptiles.forEach((ptile) => ptile.addEventListener('click', playerShipPlace));
// ptiles.forEach((ptile) => ptile.addEventListener('mouseenter', playerShipHover));

let axisBtn = document.querySelector('#axisBtn');
axisBtn.addEventListener('click', inputController.changeAxisBtn);

let aitiles = document.querySelectorAll('.aitile');
aitiles.forEach((aitile) => aitile.addEventListener('click', playerAtk));
