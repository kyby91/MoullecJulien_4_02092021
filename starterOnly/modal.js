function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

const first = document.getElementById("first")
const firstError = document.getElementById("firstError")

const last = document.getElementById("last")
const lastError = document.getElementById("lastError")

const email = document.getElementById("email")
const emailError = document.getElementById("emailError")

const birthdate = document.getElementById("birthdate")
const birthdateError = document.getElementById("birthdateError")

const quantity = document.getElementById("quantity")
const quantityError = document.getElementById("quantityError")

const location1 = document.getElementById("location1")
const location2 = document.getElementById("location2")
const location3 = document.getElementById("location3")
const location4 = document.getElementById("location4")
const location5 = document.getElementById("location5")
const location6 = document.getElementById("location6")
const city = document.getElementById("city")
const cityError = document.getElementById("cityError")

const checkbox1 = document.getElementById("checkbox1")
const checkbox1Error = document.getElementById("checkbox1Error")

const validateBtn = document.getElementById("validate")
const finModal = document.getElementById("close")
const final = document.getElementById("final")

finModal.style.display = "none"
final.style.display = "none"


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// first, champ prénom
function checkFirstElementValue() {
  let regexp = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/
  if(!regexp.test(first.value)) {
    firstError.textContent = "Veuillez entrer 2 caractères minimum";
    firstError.style.color = "red";
    first.style.borderColor = "red";
    firstError.style.fontSize = "20px";
    firstError.style.display = "block";
    inputState.first = false;
    } else {
      firstError.style.display = "none";
      first.style.borderColor = "black";
      inputState.first = true;
    }
}


// last, champ nom
function checkLastElementValue() {
  let regexp = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/
  if(!regexp.test(last.value)) {
    lastError.textContent = "Veuillez entrer 2 caractères minimum";
    lastError.style.color = "red";
    last.style.borderColor = "red";
    lastError.style.fontSize = "20px";
    lastError.style.display = "block";
    inputState.last = false;
    } else {
      lastError.style.display = "none";
      last.style.borderColor = "black";
      inputState.last = true;
    }
}


// email
function checkEmail() {
  let regexp = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/
  if(regexp.test(email.value)){
    emailError.style.display = "none";
    email.style.borderColor = "black";
    inputState.mail = true;
  } else {
    emailError.textContent = "L'adresse mail n'est pas valide";
    emailError.style.color = "red";
    email.style.borderColor = "red";
    emailError.style.fontSize = "20px";
    emailError.style.display = "block";
    inputState.mail = false;
  }
}



//Birthdate
function checkBirthDate() {
  let regexp = /^((19[3-9]+[0-9]|202[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|202[0-6]))$/
  if(regexp.test(birthdate.value)){
    birthdateError.style.display = "none";
    birthdate.style.borderColor = "black";
    inputState.date = true;
  } else {
    birthdateError.textContent = "L'âge n'est pas valide";
    birthdateError.style.color = "red";
    birthdate.style.borderColor = "red";
    birthdateError.style.fontSize = "20px";
    birthdateError.style.display = "block";
    inputState.date = false;
  }
}


//quantity
function checkQuantity() {
  if(quantity.value == ''){
    quantityError.textContent = "Indiquer un nombre de participation";
    quantityError.style.color = "red";
    quantity.style.borderColor = "red";
    quantityError.style.fontSize = "20px";
    quantityError.style.display = "block";
    inputState.quantity = false;
  } else {
    quantityError.style.display = "none";
    quantity.style.borderColor = "black";
    inputState.quantity = true;
  }
}


//city
function checkCity() {
  if(!(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked)) {
    inputState.city = false;
    cityError.textContent = "Veuiller choisir une ville";
    cityError.style.color = "red";
    city.style.borderColor = "red";
    cityError.style.fontSize = "20px";
    cityError.style.display = "block";
  } else {
    inputState.city = true;
    cityError.style.display = "none";
    city.style.borderColor = "black";
  }
}



//checkbox
checkbox1Error.style.display = "none";
function checkBox() {
  if(checkbox1.checked) {
    checkbox1Error.style.display = "none";
    checkbox1.style.borderColor = "black";
    inputState.check = true;
  } else {
    checkbox1Error.textContent = "Veuillez accepter les conditions";
    checkbox1Error.style.color = "red";
    checkbox1.style.borderColor = "red";
    checkbox1Error.style.fontSize = "20px";
    checkbox1Error.style.display = "block";
    inputState.check = false;
  }
}



//validation global
//objet, propriété pour chaque champ
let inputState = { 
  first : false,
  last : false,
  mail: false,
  date : false,
  quantity : false,
  city : false,
  // true coché de base
  check : true
}

//fonction regroupant tout les champs pour valider ou non
function checkGlobalValidation(e) {
  checkFirstElementValue()
  checkLastElementValue()
  checkEmail()
  checkBirthDate()
  checkQuantity()
  checkCity()
  checkBox()
  //vérifie que toute les propriétés de l'objet soit vraie
  const hasUnvalidProperty = Object.keys(inputState).find(key => inputState[key] === false);
  // si une ou plusieurs fausse la validation n'est pas posiible
  if(hasUnvalidProperty) {
    e.preventDefault()
    // si toute vraie alors disparition des champs et apparition du text et du bouton
  } else {
    formData[0].style.display = "none";
    formData[1].style.display = "none";
    formData[2].style.display = "none";
    formData[3].style.display = "none";
    formData[4].style.display = "none";
    formData[5].style.display = "none";
    formData[6].style.display = "none";
    document.querySelector(".text-label").style.display = "none";
    validateBtn.style.display = "none";
    finModal.style.display = "block"
    final.style.display = "block"
    // Affichage des infos saisies dans le console
    info()
    e.preventDefault()
  }
}


// Récap info saisies
function info() {
  console.log("Prénom : "+ first.value)
  console.log("Nom : "+ last.value)
  console.log("E-mail : "+ email.value)
  console.log("Date de naissance : "+ birthdate.value)
  console.log("Nombre de tournois : "+ quantity.value)
  if(location1.checked){
    console.log("Ville : "+ location1.value)
  }
  if(location2.checked){
    console.log("Ville : "+ location2.value)
  }
  if(location3.checked){
    console.log("Ville : "+ location3.value)
  }
  if(location4.checked){
    console.log("Ville : "+ location4.value)
  }
  if(location5.checked){
    console.log("Ville : "+ location5.value)
  }
  if(location6.checked){
    console.log("Ville : "+ location6.value)
  }
}

//bouton confirmation formulaire
validateBtn.addEventListener("click", checkGlobalValidation)
//fermer la modal apres la validation
finModal.addEventListener("click", closeModal)

finModal.style.display = "none"
final.style.display = "none"