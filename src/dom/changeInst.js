function changeInst(opt) {
  const inst = document.querySelector('#instructions');
  inst.className = '';
  if (opt === 1) {
    inst.textContent = 'Attack Opponent';
  } else if (opt === 2) {
    inst.textContent = 'Place your ships';
  }
}

export default changeInst;
