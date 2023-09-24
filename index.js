const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

let passwordBox = document.getElementById("pass-box");
let totalChar = document.getElementById("total-char");
let upperInput = document.getElementById("upper_case");
let lowerInput = document.getElementById("lower_case");
let number = document.getElementById("numbers");
let symbol = document.getElementById("symbols")
console.log(totalChar.value)

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword =(password = "")=>{
    if(upperInput.checked){
        password +=getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet)
    }
    if(number.checked){
        password += getRandomData(numberSet)
    }
    if(symbol.checked){
        password += getRandomData(symbolSet)
    }

     if(password.length < totalChar.value){
        return generatePassword(password)
     }
    

    passwordBox.innerHTML = truncateString(password, totalChar.value);
    console.log(password)
}



document.getElementById("btn").addEventListener("click",()=>{
    generatePassword()
})



function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}