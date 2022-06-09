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
    for (let i = 0; i < str.length; i++) {
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

function truncate(str) {
    let newString1 = "";
    for (let i = 0; i < 15; i++) {
        newString1 = newString1 + str[i];
    }
    return newString1 + "..."
}

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));

/////////////////////////////////////////////

function ciEmailify(firstName, lastName) {
    let output = firstName + "." + lastName + "@codeimmersives.com"
    return output
}

console.log(ciEmailify("Abraham", "Lincoln"));

//////////////////////////////////////////////

function reverse(str) {
let newString = "";
for (let i = str.length -1; i >=0; i--) {
    newString = newString + str[i]
}
return newString
}

console.log(reverse("John"));

///////////////////////////////////////////////

function onlyVowels(str) {
    newString = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            newString = newString + str[i]
        }
}
return newString
}

console.log(onlyVowels("Abraham Lincoln"));

////////////////////////////////////////////////