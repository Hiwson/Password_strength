let pswd = document.getElementById('pswd');
let eye = document.getElementById('eye');

eye.onclick = function() {
  if (pswd.type == "password") {
    pswd.type = "text";
    eye.src = '/passwords/eyeOpen.jpg'
  }
  else {
    pswd.type = 'password';
    eye.src = 'eyeClose.jpg';
  }
}

let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let c5 = document.getElementById('c5');

const length = 8;

function checkLength() {
  if (pswd.value.length > length) {
    c1.style.textDecoration = 'line-through'
    c1.style.color = 'green'
  } else {
    c1.style.textDecoration = 'none'
    c1.style.color = 'black'
  }
}

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();
const specialChar = "+×÷=/_<>[])(*&^%£#@!-':;,?\"";

function check() {
  const txt = pswd.value;
  if (txt.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/)) {
    c2.style.textDecoration = 'line-through'
    c2.style.color = 'green'
  } else {
    c2.style.textDecoration = 'none'
    c2.style.color = 'black'
  }
  
  if (txt.match(/[qwertyuiopasdfghjklzxcvbnm]/)) {
    c3.style.textDecoration = 'line-through'
    c3.style.color = 'green'
  } else {
    c3.style.textDecoration = 'none'
    c3.style.color = 'black'
  }
  
  if (txt.match(/[+×÷=/_<>\]\[\)\(\*&\^%£#\.@!-':;,\?"]/)) {
    c4.style.textDecoration = 'line-through'
    c4.style.color = 'green'
  } else {
    c4.style.textDecoration = 'none'
    c4.style.color = 'black'
  }
  if (txt.match(/[1234567890]/)) {
    c5.style.textDecoration = 'line-through'
    c5.style.color = 'green'
  } else {
    c5.style.textDecoration = 'none'
    c5.style.color = 'black'
  }
}