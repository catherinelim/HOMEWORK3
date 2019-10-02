
// js script for password generator


function generatepwd(){

// set password length/range

let range = document.getElementById("Text").Value;

let Value="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*_+"

let password="";

for(var i=0; i<=range; i++) {
    password= password + Value.charAt (Math.floor(Math.random()*Math.floor(Value.range -1)));

}

document.getElementById("display").value="password";




}


