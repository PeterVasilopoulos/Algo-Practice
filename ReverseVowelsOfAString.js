// Reverse Vowels of a String

/*
Given a string s, reverse only all the vowels in the
string and return it.

The vowels are a, e, i, o, and u, and they can appear
in both lower and upper cases, more than once.
*/


// Inputs
const s1 = "hello"
// output = holle

const s2 = "leetcode"
// output = leotcede


// Function
const reverseVowels = (s) => {
    // array with vowels
    const vowels = ['a','e','i','o','u']

    // create new array to hold the string characters
    let word = new Array(s.length)

    // loop through string
    for(let i = 0, k = s.length - 1; i <= k;) {
        // swap letters if i and k are vowels
        if(vowels.includes(s[i]) && vowels.includes(s[k])) {
            let temp = s[i]
            word[i] = s[k]
            word[k] = temp

            i++
            k--

        // decrement k if only i is a vowel and add k to word array
        } else if(vowels.includes(s[i])) {
            word[k] = s[k]
            k--
        
        // increment i if only k is a vowel and add i to word array
        } else if(vowels.includes(s[k])) {
            word[i] = s[i]
            i++

        // if neither are vowels, move both and add both
        } else {
            word[i] = s[i]
            i++
            word[k] = s[k]
            k--
        }
    }

    // create variable to hold new string
    let newString = ""

    // convert array to string
    for(let i = 0; i < word.length; i++) {
        newString += word[i]
    }

    // return newString
    return newString
}


// Testing
console.log(reverseVowels(s1))
console.log(reverseVowels(s2))