// @ts-nocheck
//Les variables dont on a besoins
let sp, btn_start, btn_stop, t, ms, s, mn, h;

//fonctions pour initialiser les variables quand on recharges la pages
window.onload = function () {
  sp = document.getElementsByTagName("span");
  btn_start = document.getElementById("start");
  btn_stop = document.getElementById("stop");
  t;
  ms = 0;
  s = 0;
  mn = 0;
  h = 0;
};

//mettre en place le compteur
function update_chrono() {
  ms += 1;
  if (ms === 10) {
    ms = 1;
    s += 1;
  }
  if (s === 60) {
    s = 0;
    mn += 1;
  }
  if (mn === 60) {
    mn = 0;
    h += 1;
  }
  //insertion des valeurs dans les span [0] permet de selectionner les premier span
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}

//mettre en place la fonction du bouton start

function start() {
  t = setInterval(update_chrono, 100); // execute la function  update_chrono totue les 100 ms
  btn_start.disabled = true;
}

//stoper le chronometre

function stop() {
  clearInterval(t); //suppresion de l'interval t que nosu avions cree
  btn_start.disabled = false;
}

//Initialiser les valeur du compteur

function reset() {
  clearInterval(t);
  btn_start.disabled = false;
  (ms = 0), (mn = 0), (h = 0), (s = 0);
  //Insere les nouvelle valeur dans les spans
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}
