
function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    
    const lowerCaseChars = "abcdefghijklmnopqrtuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(pass length must be at least 3)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of chars must be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

/*
const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                includeLowerCase, 
                                includeUpperCase, 
                                includeNumbers, 
                                includeSymbols);

console.log(`Generated password: ${password}`);
*/

function genPass(){
    const generated = document.getElementById("generated");

    const passwordLength = document.getElementById("numChar").value;
    const includeLowerCase = document.getElementById("lowerCase");
    const includeUpperCase = document.getElementById("upperCase");
    const includeNumbers = document.getElementById("numberCase");
    const includeSymbols = document.getElementById("symbolCase");

    const rand_pass = generatePassword(passwordLength, includeLowerCase.checked, includeUpperCase.checked, includeNumbers.checked, includeSymbols.checked);

    generated.textContent = rand_pass;

}