////////////////////////////////////////////////

function xify(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        newStr = newStr + "x"
    }
    return newStr
}
console.log(xify("hello"));

/////////////////////////////////////////////

function yellingChars(str) {
    let newString1 = "";
    for (let i = 0; i < str.length; i++) {
        newString1 = newString1 + str[i] + "!"
    }
    return newString1
}

console.log(yellingChars("hello"));

////////////////////////////////////////////

function indexedChars(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        newStr = newStr + i + str[i]
    }
    return newStr
}

console.log(indexedChars("hello"));

///////////////////////////////////////

function exclaim(str) {
    let newString1 = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] === "." || str[i] === "?") {
            newString1 = newString1 + "!";
        } else {
            newString1 = newString1 + str[i]
        }
    }
    
    return newString1
}

console.log(exclaim("hello."));

///////////////////////////////////////////

