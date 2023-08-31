// Greatest Common Divisor of Strings

/*
For two strings 's' and 't', we say "t divides s" if and
only if 's = t + ... + t' (ie., t is concatenated with 
itself one or more times).

Given two strings str1 and str2, return the largest string 'x'
such that 'x' divides both str1 and str2.
*/


// Inputs
const str1A = "ABCABC"
const str2A = "ABC"

const str1B = "ABABAB"
const str2B = "ABAB"

const str1C = "LEET"
const str2C = "CODE"


// Function
const gcdOfStrings = (str1, str2) => {
    // create a new variable to hold the gcd
    let result = ""

    // run through both strings and stop when we get to the end of one of them
    for(let i = 0; i < str1.length && i < str2.length; i++) {
        // check if the letters in str1 and str2 are the same
        if(str1[i] === str2[i]) {
            // add letter to result
            result += str1[i]
        } else {
            // break out of function if letters are not the same
            return result
        }
    }

    // return result
    return result
}


// Testing
console.log(gcdOfStrings(str1A, str2A))
console.log(gcdOfStrings(str1B, str2B))
console.log(gcdOfStrings(str1C, str2C))