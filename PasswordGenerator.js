//generate random password and create list of variables


function generatepwd() {
    var charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charLowercase = "abcdefghijklmnopqrstuvwxyz";
    var numberBox ="1234567890";
    var symBox = "!@#$%^&*_+";
    var pwdBank = "";
    var pwd = "";
    
// use console.log to test to make sure function works
    console.log("in method");

// create an if to capture user input from checkboxes

    if (document.getElementById("uppercase")) {
        pwdBank += charUppercase;
        
        console.log("in if statement");
    }

    if (document.getElementById("lowercase")) {
        pwdBank += charLowercase;
        console.log("in if statement");
    }

    if (document.getElementById("num")) {
        pwdBank += numberBox;
        console.log("in if statement");
    }

    if (document.getElementById("symbol")) {
        pwdBank += symBox;
        console.log("in if statement");
    }
    
// create a for loop that will take a char at random and add to pwd

    console.log(pwdBank);

    for(var i =0; i<10; i++) {
        pwd += pwdBank[Math.floor(Math.random() * pwdBank.length)];
        console.log("in for loop");
    }

// create a consol.log to check random password is generated

    console.log(pwd);

    document.getElementById("main").value=pwd;

   

    return pwd;
} 
