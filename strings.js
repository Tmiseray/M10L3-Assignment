let message = "Hello, World!";

console.log(message.length);


function convertToUpperCase(text) {
    return text.toUpperCase();
}

function convertToLowerCase(text) {
    return text.toLowerCase();
}

console.log(convertToUpperCase(message));
console.log(convertToLowerCase(message));


let sentence = "The quick brown fox jumps over the lazy dog";

function grabSubstring(text) {
    return text.substring(4, 10);
}

function splitString(text) {
    return text.split(" ");
}

console.log(grabSubstring(sentence));
console.log(splitString(sentence));