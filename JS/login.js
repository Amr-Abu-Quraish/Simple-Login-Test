let btnLogIn = document.getElementById("log-in");

let btnSignUp = document.getElementById("sign-up");

let allRequired = document.getElementById("required");

let incorrect = document.getElementById("incorrect");

let userName = document.getElementById("user-name");

let please = document.getElementById("please-signup")

let inputUserEmail = document.getElementById("user-email");

let inputUserPassword = document.getElementById("user-password");


inputUserEmail.addEventListener("input" , function(e){


 if(e.data=== null){

  incorrect.classList.add("d-none")
  please.classList.add("d-none")

 }

} )

inputUserPassword.addEventListener("input" , function(e){


 if(e.data=== null){

  incorrect.classList.add("d-none")
  please.classList.add("d-none")

 }

} )



btnLogIn.addEventListener("click", function () {
  
  login();
});

btnSignUp.addEventListener("click", function () {
  window.location = "./signup.html";
});


let userLists = [];

if (localStorage.getItem("usersContainer") !== null) {
  userLists = JSON.parse(localStorage.getItem("usersContainer"));
}


let nameUser;

nameUser = localStorage.getItem("sessionUserName");


function emptyInput() {
  if (inputUserEmail.value == "" || inputUserPassword.value == "") {
    return false;
  }
}


function localNull(){
  if(localStorage .getItem("usersContainer")== null){

    return false
  }
}




function login() {


  if (emptyInput() == false) {


    allRequired.classList.remove("d-none");

    return false;

  } 
  
  else {
    allRequired.classList.add("d-none");
  }


  if(localNull()==false){

    please.classList.remove("d-none")


  }


  let check = {
    useremail: inputUserEmail.value,
    userpassword: inputUserPassword.value,
  };

  for (let i = 0; i < userLists.length; i++) {
    if (
      userLists[i].email == check.useremail &&
      userLists[i].password == check.userpassword)
    
    {
      
      localStorage.setItem("sessionUserName", userLists[i].name);

      window.location = "./home.html";
    
  }
    else if(!localStorage .getItem("usersContainer").includes(check.useremail) &&
            !localStorage .getItem("usersContainer").includes( check.userpassword)){
    
      please.classList.remove("d-none")
    }

    else{
      incorrect.classList.remove("d-none")
    }

  }
}
