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

const birthdate = document.getElementById("birthdate")

const quantity = document.getElementById("quantity")

const location1 = document.getElementById("location1")
const location2 = document.getElementById("location2")
const location3 = document.getElementById("location3")
const location4 = document.getElementById("location4")
const location5 = document.getElementById("location5")
const location6 = document.getElementById("location6")
const city = document.getElementById("city")

const checkbox1 = document.getElementById("checkbox1")


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
    return false
    } else {
      firstError.style.display = "none";
      first.style.borderColor = "black";
      return true
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
      return true
    }
}

last.addEventListener("input", checkLastElementValue)

// email
function checkEmail() {
  let regexp = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/
  if(regexp.test(email.value)){
    console.log("ok")
    return true
  } else {
    console.log("pas ok")
    return false
  }
}
email.addEventListener("input", checkEmail)


//Birthdate
function checkBirthDate() {
  let regexp = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
  if(regexp.test(birthdate.value)){
    console.log("nice")
    return true
  } else {
    console.log("why")
    return false
  }
}
birthdate.addEventListener("input", checkBirthDate)


//quantity
function checkQuantity() {
  if(quantity.value == ''){
    console.log("mop")
    return false
  } else {
    console.log("ok")
    return true
  }
}
quantity.addEventListener("input", checkQuantity)

//city
function checkCity() {
  if(!(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked)) {
    console.log("ok")
    return false
  } else {
    console.log("ono")
    return true
  }
}

city.addEventListener("input", checkCity)


//checkbox

function checkBox() {
  if(checkbox1.checked) {
    console.log("ik")
    return true
  } else {
    console.log("pm")
    return false
  }
}

checkbox1.addEventListener("input", checkBox)
