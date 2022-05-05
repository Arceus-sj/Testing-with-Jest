function reverseString(string) {
    
    let splitStr = string.split("");
    let reverseArr = splitStr.reverse();
    let reverseStr = reverseArr.join("");
    return reverseStr;
}

// console.log(reverseString("Hellooo"));

module.exports = reverseString;