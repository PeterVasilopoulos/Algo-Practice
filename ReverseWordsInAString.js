// Reverse Words in a String

/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters.
The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated
by a single space.

Note that s may contain leading or trailing spaces or multiple
spaces between two words. The returned string should only have
a single space separating the words. Do not include any extra
spaces.
*/


// Inputs
const s1 = "the sky is blue"
// output = blue is sky the

const s2 = "   hello world  "
// output = world hello

const s3 = "a good    example"
// output = example good a


// Function
const reverseWords = (s) => {
    // create an array to hold the words in the string
    let words = []

    // loop through the string and find all the words
    for(let i = 0; i < s.length; i++) {
        // search for letters
        if(s[i] !== " ") {
            // create a variable to hold the second index
            let wordEnd = i + 1

            // continue until wordEnd is on a space and still in scope
            while(s[wordEnd] !== " " && wordEnd < s.length) {
                wordEnd++
            }

            // slice word and put into array
            words.push(s.slice(i, wordEnd))

            // replace i with wordEnd value
            i = wordEnd
        }
    }

    // create a variable to hold the final string
    let result = ""

    // loop backwards through array and place words into string
    for(let i = words.length - 1; i >= 0; i--) {
        // if its on the final word, dont add a space after the word
        if(i === 0) {
            result += words[i]

        // otherwise add the word and a space to result
        } else {
            result += words[i] + " "
        }
    }

    // return result
    return result
}


const reverseWords2 = (s) => {
    // split the string into an array separated on spaces
    let words = s.split(" ")

    // reset s to hold the new string
    s = ""

    // loop through words array and put into string
    for(let i = words.length - 1; i >= 0; i--) {
        // if i is not a space or empty, add to string
        if(words[i] !== " " && words[i] !== "") {
            s += words[i] + " "
        }
    }

    // return trimmed version of string
    return s.trim()
}


// Testing
console.log(reverseWords(s1))
console.log(reverseWords(s2))
console.log(reverseWords(s3))