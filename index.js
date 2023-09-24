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
    if(password.length <totalChar.value){
        return getRandomData(password)
    }
    console.log(password)
}



document.getElementById("btn").addEventListener("click",()=>{
    generatePassword()
})
