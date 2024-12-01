
let btnLogOut = document.getElementById("log-out");

let userName = document.getElementById("user-name")

let nameUser = localStorage.getItem("sessionUserName");


btnLogOut.addEventListener('click', function(){

  localStorage.removeItem("sessionUserName")

  window.location = './index.html'
})


  if (localStorage.getItem("sessionUserName") !== null) {

 userName.innerHTML += "welcome " + nameUser

  }



