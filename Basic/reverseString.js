function reverseString(str){
    let stringRverse ="";
    for(let i = str.length -1; i >= 0; i--){
        stringRverse += str[i];
    }
    return stringRverse;
}

console.log(reverseString("hola")); // "aloh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"