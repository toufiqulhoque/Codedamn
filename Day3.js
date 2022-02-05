const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here

    return num.toString().split("").reverse().join("")
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)

const value = 1002;

function reverseInteger(value) {
    return value.toString().split("").reverse().join("")
}
console.log(reverseInteger(value));