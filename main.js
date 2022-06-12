(()=>{"use strict";const e=e=>{let t=0;return{len:e,hit:function(){return t+=1,1},isSunk:function(){return t===e}}},t=()=>{const t=e(5),n=e(4),r=e(3),o=e(3),c=[e(2),o,r,n,t],i=10,l=Array(i).fill().map((()=>Array(i).fill(0)));function s(e,t,n,r){if(n){for(let n=t;n<t+r;n++)if(l[e][n])return!1}else for(let n=e;n<e+r;n++)if(l[n][t])return!1;return!0}function a(e){return e.map((e=>e.isSunk())).every((e=>!0===e))}return{place:function(e,t,n,r){const o=c[r];if(e>9||t>9)return!1;if(1===n&&t+o.len<11){if(!s(e,t,n,o.len))return!1;for(let n=0;n<i;n++)for(let r=0;r<i;r++)n===e&&r<t+o.len&&r>=t&&(l[n][r]=o);return o.len}if(0===n&&e+o.len<11){if(!s(e,t,n,o.len))return!1;for(let n=0;n<i;n++)for(let r=0;r<i;r++)n>=e&&n<e+o.len&&r===t&&(l[n][r]=o);return o.len}return!1},recieveAttack:function(e,t){return 1===l[e][t]?null:l[e][t]?(l[e][t]=l[e][t].hit(),a(c)?[e,t,1,0]:[e,t,1]):(l[e][t]=1,[e,t,0])},haveAllSunk:a}},n=()=>{const e=t();let n=5;return{gb:e,attackTile:function(e,t,n){return n.recieveAttack(e,t)},placeShip:function(t,r,o){if(!n)return!1;const c=e.place(t,r,o,n-1);return c&&(n-=1),c}}},r=()=>{const e=t();return{gb:e,initaializeAIGb:function(){e.place(0,0,0,2),e.place(2,2,1,0),e.place(9,7,1,1),e.place(4,5,1,3),e.place(5,2,0,4)},attackTile:function e(t){const n=Math.floor(10*Math.random()),r=Math.floor(10*Math.random()),o=t.recieveAttack(n,r);return null==o?e(t):o}}},o=function(){const e=document.querySelector("#playerGb"),t=document.querySelector("#aiGb");for(;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)t.removeChild(t.firstChild);for(let t=0;t<10;t++)for(let n=0;n<10;n++){const r=document.createElement("div");r.classList.add("ptile"),r.classList.add(`p${t}x`),r.classList.add(`p${n}y`),e.append(r)}for(let e=0;e<10;e++)for(let n=0;n<10;n++){const r=document.createElement("div");r.classList.add("aitile"),r.classList.add(`a${e}x`),r.classList.add(`a${n}y`),t.append(r)}},c=function(){document.querySelectorAll(".ptile").forEach((e=>e.classList.remove("greenHover")))},i=(()=>{const e=document.querySelector("#axisBtn");return{getCoords:e=>{let t,n;return 3===e.target.classList.length&&(t=e.target.classList[1].charAt(1),n=e.target.classList[2].charAt(1),[Number(t),Number(n)])},determineAxis:()=>"X"===e.textContent?1:0,changeAxisBtn:e=>{"X"===e.target.textContent?e.target.textContent="Y":e.target.textContent="X"}}})(),l=i,s=(e,t)=>{const n=document.querySelector(`.${t}${e[0]}x.${t}${e[1]}y`);e[2]?n.classList.add("green"):n.classList.add("red")},a={gameOverTextDisp:function(e){const t=document.querySelector("#instructions");"p"===e?(t.textContent="You Win!!",t.classList.add("green")):(t.textContent="Game Over: You Lose!!",t.classList.add("red"));const n=document.createElement("div");n.textContent="Restart Game!",n.id="resetBtn",document.querySelector("#resetBtnCont").append(n)}},u=a,d=function(e){const t=document.querySelector("#instructions");t.className="",1===e?t.textContent="Attack Opponent":2===e&&(t.textContent="Place your ships")},f=(()=>{const e=[5,4,3,3,2];function t(e,t,n,r){if(n)for(let n=t;n<t+r;n++){const t=document.querySelector(`.p${e}x.p${n}y`);if(t.classList.contains("select")||t.classList.contains("greenHover"))return!1}else for(let n=e;n<e+r;n++){const e=document.querySelector(`.p${n}x.p${t}y`);if(e.classList.contains("select")||e.classList.contains("greenHover"))return!1}return!0}return{hover:function(n,r,o,c){const i=e[c];if(!(n>9||r>9)){if(1===o&&r+i<11){if(!t(n,r,o,i))return;for(let e=0;e<10;e++)for(let t=0;t<10;t++)e===n&&t<r+i&&t>=r&&document.querySelector(`.p${e}x.p${t}y`).classList.add("greenHover")}if(0===o&&n+i<11){if(!t(n,r,o,i))return;for(let e=0;e<10;e++)for(let t=0;t<10;t++)e>=n&&e<n+i&&t===r&&document.querySelector(`.p${e}x.p${t}y`).classList.add("greenHover")}}}}})();let m,p=n(),v=r(),h=0;function y(e){c();const t=l.getCoords(e),n=l.determineAxis(),r=p.placeShip(t[0],t[1],n);r&&(((e,t,n,r)=>{if(n)for(let n=t;n<t+r;n++)document.querySelector(`.ptile.p${e}x.p${n}y`).classList.add("select");else for(let n=e;n<e+r;n++)document.querySelector(`.ptile.p${n}x.p${t}y`).classList.add("select")})(t[0],t[1],n,r),h+=1),2===r&&(d(1),E.forEach((e=>e.addEventListener("click",L))))}function L(e){const t=l.getCoords(e);if(!t)return;let n=p.attackTile(t[0],t[1],v.gb);if(s(n,"a"),4===n.length)return u.gameOverTextDisp("p"),m=document.querySelector("#resetBtn"),void m.addEventListener("click",A);n=v.attackTile(p.gb),s(n,"p"),4===n.length&&(u.gameOverTextDisp("a"),m=document.querySelector("#resetBtn"),m.addEventListener("click",A))}function g(e){5===h&&(x.forEach((e=>e.removeEventListener("mouseover",g))),x.forEach((e=>e.removeEventListener("mouseleave",g))));const t=l.getCoords(e),n=l.determineAxis();c(),f.hover(t[0],t[1],n,h)}o(),v.initaializeAIGb();let x=document.querySelectorAll(".ptile");x.forEach((e=>e.addEventListener("click",y))),x.forEach((e=>e.addEventListener("mouseover",g))),x.forEach((e=>e.addEventListener("mouseleave",g)));let S=document.querySelector("#axisBtn");S.addEventListener("click",l.changeAxisBtn);let E=document.querySelectorAll(".aitile");function A(){o(),p=n(),v=r(),v.initaializeAIGb(),x=document.querySelectorAll(".ptile"),x.forEach((e=>e.addEventListener("click",y))),x.forEach((e=>e.addEventListener("mouseover",g))),x.forEach((e=>e.addEventListener("mouseleave",g))),S=document.querySelector("#axisBtn"),S.addEventListener("click",l.changeAxisBtn),h=0,E=document.querySelectorAll(".aitile"),m.remove(),d(2)}})();