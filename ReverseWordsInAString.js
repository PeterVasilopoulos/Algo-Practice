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
    // create a variable to hold the new string
    let result = ""

    // loop through the string
    for(let i = s.length - 1; i >= 0; i--) {
        // if character is a space
        if(s[i] == " ") {
            result = " " + result

        // if character is not a space
        } else {
            result = s[i] + result
        }

        if(s[i] !== " ") {
            result = s[i] + result
        } else {
            result = " " + result
        }
    }

    // return new string
    return result
}


// Testing
console.log(reverseWords(s1))
console.log(reverseWords(s2))
console.log(reverseWords(s3))