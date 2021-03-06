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

create.gameboard();
ai.initaializeAIGb();

function playerShipPlace(e) {
  create.playerBoard();
  const coords = inputController.getCoords(e);
  const dir = inputController.determineAxis();
  const lenOfCurShip = player.placeShip(coords[0], coords[1], dir);
  drawShip(coords[0], coords[1], dir, lenOfCurShip);
  if (lenOfCurShip === 2) {
    changeInst(1);
    aitiles.forEach((aitile) => aitile.addEventListener('click', playerAtk));
  }
}

function playerAtk(e) {
  // if (lenOfCurShip !== 2 && lenOfCurShip) return;

  const coords = inputController.getCoords(e);
  if (!coords) return;
  let result = player.attackTile(coords[0], coords[1], ai.gb);

  displayAtk(result, 'a');
  // for gameover mechanism
  if (result.length === 4) {
    gameOver.gameOverTextDisp('p');
    const resetBtn = document.querySelector('#resetBtn');
    resetBtn.addEventListener('click', resetElements);
    aitiles.forEach((aitile) => aitile.removeEventListener('click', playerAtk));
    return;
  }
  result = ai.attackTile(player.gb);
  displayAtk(result, 'p');
  // for gameover mechanism
  if (result.length === 4) {
    gameOver.gameOverTextDisp('a');
    const resetBtn = document.querySelector('#resetBtn');
    resetBtn.addEventListener('click', resetElements);
    aitiles.forEach((aitile) => aitile.removeEventListener('click', playerAtk));
  }
}

function playerShipHover(e) {
  const hoverCount = player.gb.shipToHover();
  if (!hoverCount) {
    ptiles.forEach((ptile) => ptile.removeEventListener('mouseover', playerShipHover));
    ptiles.forEach((ptile) => ptile.removeEventListener('mouseleave', playerShipHover));
  }
  const coords = inputController.getCoords(e);
  const dir = inputController.determineAxis();
  create.playerBoard();
  drawHoverShip.hover(coords[0], coords[1], dir, hoverCount);
}

let ptiles = document.querySelectorAll('.ptile');
ptiles.forEach((ptile) => ptile.addEventListener('click', playerShipPlace));
ptiles.forEach((ptile) => ptile.addEventListener('mouseover', playerShipHover));
ptiles.forEach((ptile) => ptile.addEventListener('mouseleave', playerShipHover));

let axisBtn = document.querySelector('#axisBtn');
axisBtn.addEventListener('click', inputController.changeAxisBtn);

let aitiles = document.querySelectorAll('.aitile');

function resetElements() {
  create.gameboard();
  player = playerFactory();
  ai = aiFactory();
  ai.initaializeAIGb();
  ptiles = document.querySelectorAll('.ptile');
  ptiles.forEach((ptile) => ptile.addEventListener('click', playerShipPlace));
  ptiles.forEach((ptile) => ptile.addEventListener('mouseover', playerShipHover));
  ptiles.forEach((ptile) => ptile.addEventListener('mouseleave', playerShipHover));
  axisBtn = document.querySelector('#axisBtn');
  axisBtn.addEventListener('click', inputController.changeAxisBtn);
  aitiles = document.querySelectorAll('.aitile');

  const resetBtn = document.querySelector('#resetBtn');
  resetBtn.remove();
  changeInst(2);
}
