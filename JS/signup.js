let btnSignIn = document.getElementById("sign-in")

let inputName = document.getElementById("name")

let inputEmail = document.getElementById("email")

let inputPassword = document.getElementById("password")

let btnSingUp = document.getElementById("sign-up")

let exist = document.getElementById("exist")

let success = document.getElementById("success")

let required = document.getElementById("all-required")


btnSignIn.addEventListener('click', function(){
   
    window.location = './index.html'
})


btnSingUp.addEventListener('click', function(){
   
    signUp()
  
})


let userLists =[];

if (localStorage.getItem("usersContainer") !== null) {
    userLists = JSON.parse(localStorage.getItem("usersContainer"));

  }


  function emptyInput(){
    if(inputName.value == ""  || inputEmail.value == "" || inputPassword.value == ""){

        return false
    }
  }


    

function signUp(){

  
    if(emptyInput()== false){

    required.classList.remove("d-none")
        
    exist.classList.add("d-none")

    success.classList.add("d-none")

        return false
    }

    else{

        required.classList.add("d-none")
    }

    function existEmail() {

        for (var i = 0; i < userLists.length; i++) {

            if (userLists[i].email == inputEmail.value) {

                return false
            }
        }
    }




    let user ={
        name : inputName.value,
        email: inputEmail.value,
        password:inputPassword.value,
    }

    

    if(userLists.length == 0){

        userLists.push(user)

        localStorage.setItem("usersContainer", JSON.stringify(userLists));

        success.classList.remove("d-none")
        
        required.classList.add("d-none")
        
        return true
    }


if(existEmail()== false){

  
    exist.classList.remove("d-none")

    success.classList.add("d-none")


} else{

    userLists.push(user)

        localStorage.setItem("usersContainer", JSON.stringify(userLists));

        success.classList.remove("d-none")
        
        exist.classList.add("d-none")

}

}


   