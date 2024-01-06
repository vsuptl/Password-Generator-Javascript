let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()';

let password = '';
const min = 0; 
const max = 71;

const generateButton = document.getElementById("genButton");
const copyButton = document.getElementById("copyButton");
const textbox = document.getElementById("textbox");
const copytButton = document.getElementById("copyButton")
generateButton.onclick = function(){
    
    for(let i = 0; i < 12; i++){
        randomNum = Math.floor(Math.random() * max);
        password = password.concat(letters[randomNum]);
    }
    textbox.value = password;
    password = '';
}

copyButton.onclick = function(){
    textbox.select();
    document.execCommand("copy");
}

