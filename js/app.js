function init(){
    let button = document.getElementById("submit");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    button.onclick = function (){
        console.log("email = " + email.value + " & password = " + password.value);
    }
}
init();