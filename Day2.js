const str = "Peter Parker is Spiderman"

function reverseAString(str) {
    // write your solution here

    return str.split("").reverse().join("")
}

console.log(`Reversed string is: ${reverseAString(str)}`)


const s = "codedamn"

function reverse(s) {
    return s.split("").reverse().join("")
}
console.log(`Reverse value ${reverse(s)}`);

const r = "Javascript is awesome"

function reverseChange(r) {
    return r.split("").reverse().join("")
}
console.log(reverseChange(r));