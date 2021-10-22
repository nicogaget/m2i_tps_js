function addition(tmp1, tmp2) {
  return parseInt(tmp1) + parseInt(tmp2);
}

function soustraction(ntmp1, tmp2br) {
  return parseInt(tmp1) - parseInt(tmp2);
}

function multiplication(tmp1, tmp2) {
  return parseInt(tmp1) * parseInt(tmp2);
}

function division(tmp1, tmp2) {
  if (parseInt(tmp1.value == 0)) {
    alert("Division par 0 impossible");
  } else {
    parseInt(tmp1) / parseInt(tmp2);
  }
}
function edit(int) {
  number = document.querySelector("#saisie");
  number.placeholder = parseInt(number.placeholder + int);

  console.log(number.placeholder);
}

let ope = "";
let tmp1 = "";
let tmp2 = "";
function resultat() {
  saisie = document.querySelector("#saisie");
  tmp2 = saisie.placeholder;
  operation = document.querySelector("#ope");
  ope = operation.placeholder;
  console.log(tmp1, ope, tmp2);
  resultat = document.querySelector("#resultat");

  switch (ope) {
    case "+":
      resultat.placeholder = addition(tmp1, tmp2);
      break;
    case "-":
      resultat.placeholder = soustraction(tmp1, tmp2);
      break;
    case "/":
      resultat.placeholder = division(tmp1, tmp2);
      break;
    case "*":
      resultat.placeholder = multiplication(tmp1, tmp2);
      break;
  }
  operation.placeholder = "";
  saisie.placeholder = "";
}

function operande(ope) {
  console.log(ope);
  saisie = document.querySelector("#saisie");
  tmp1 = saisie.placeholder;
  ope = ope;
  operation = document.querySelector("#ope");
  operation.placeholder = ope;
  ope = operation.placeholder;

  number.placeholder = "";
}
function reset() {
  saisie = document.querySelector("#saisie");
  operation = document.querySelector("#ope");
  resultat = document.querySelector("#resultat");
  operation.placeholder = "";
  saisie.placeholder = "";
  resultat.placeholder = "";
  tmp1 = "";
  tmp2 = "";
  ope = "";
}
