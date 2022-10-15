const PVP = document.querySelector('.pvp');
const PVE = document.querySelector('.pve');

PVP.addEventListener("click", () => {
  window.location.href = './pvp/index.html';
}); 

PVE.addEventListener("click", () => {
  window.location.href = './pve/index.html';
});