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

let validations = [];

const validateBtn = document.querySelector(".button")


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

// first
function checkFirstElementValue() {
  if(first.value.length < 2) {
    firstError.textContent = "Veuillez entrer 2 caractères minimum";
    firstError.style.color = "red";
    first.style.borderColor = "red";
    firstError.style.fontSize = "20px";
    firstError.style.display = "block";
    console.log("ok")
    } else {
      firstError.style.display = "none";
      first.style.borderColor = "black";
      validations.push("true");
      verif1 = true;
      console.log(verif1)
    }
}
first.addEventListener("input", checkFirstElementValue)

// last
function checkLastElementValue() {
  if(last.value.length < 2) {
    lastError.textContent = "Veuillez entrer 2 caractères minimum";
    lastError.style.color = "red";
    last.style.borderColor = "red";
    lastError.style.fontSize = "20px";
    lastError.style.display = "block";
    return false
    } else {
      lastError.style.display = "none";
      last.style.borderColor = "black";
      validations.push(true)
      return true
    }
}
last.addEventListener("input", checkLastElementValue)

// email
function checkEmail() {
  let regexp = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/
  if(regexp.test(email.value)){
    emailError.style.display = "none";
    email.style.borderColor = "black";
    return true
  } else {
    emailError.textContent = "L'adresse mail n'est pas valide";
    emailError.style.color = "red";
    email.style.borderColor = "red";
    emailError.style.fontSize = "20px";
    emailError.style.display = "block";
    return false
  }
}
email.addEventListener("input", checkEmail)


//Birthdate
function checkBirthDate() {
  let regexp = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/
  if(regexp.test(birthdate.value)){
    console.log("nice")
    return true
  } else {
    console.log("why")
    return false
  }
}
birthdate.addEventListener("input", checkBirthDate)
console.log(birthdate.value)

//quantity
function checkQuantity() {
  if(quantity.value == ''){
    quantityError.textContent = "Indiquer un nombre de participation";
    quantityError.style.color = "red";
    quantity.style.borderColor = "red";
    quantityError.style.fontSize = "20px";
    quantityError.style.display = "block";
    return false
  } else {
    quantityError.style.display = "none";
    quantity.style.borderColor = "black";
    return true
  }
}
quantity.addEventListener("input", checkQuantity)

//city
function checkCity() {
  if(!(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked)) {
    cityError.textContent = "Indiquer un nombre de participation";
    cityError.style.color = "red";
    city.style.borderColor = "red";
    cityError.style.fontSize = "20px";
    cityError.style.display = "block";
    return false
  } else {
    cityError.style.display = "none";
    city.style.borderColor = "black";
    return true
  }
}
city.addEventListener("input", checkCity)


//checkbox

function checkBox() {
  if(checkbox1.checked) {
    checkbox1Error.style.display = "none";
    checkbox1.style.borderColor = "black";
    return true
  } else {
    checkbox1Error.textContent = "Veuillez accepter les conditions";
    checkbox1Error.style.color = "red";
    checkbox1.style.borderColor = "red";
    checkbox1Error.style.fontSize = "20px";
    checkbox1Error.style.display = "block";
    return false
  }
}
checkbox1.addEventListener("input", checkBox)


//validation global

function checkGlobalValidation() {

}


let inputState = { 
  birthdate : false
}