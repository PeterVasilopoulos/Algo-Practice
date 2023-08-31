// Merge Strings Alternatly

/*
You are given two strings. Merge the strings by adding letters 
in alternating order, starting with the first word. If a string
is longer than the other, append the aditional letters onto the 
end of the merged string.

Return the merged string.
*/


// Inputs
const word1A = "word"
const word2A = "test"

const word1B = "something"
const word2B = "cool"

const word1C = "pog"
const word2C = "champ"


// Function
const mergeAlternately = (word1, word2) => {
    // create a new variable to hold the combined string
    let newString = ""

    // use a loop to run through both the words
    for(let i = 0; i < word1.length || i < word2.length; i++) {
        // add the letter from word 1 if it exists
        if(i < word1.length) {
            newString += word1[i]
        }

        // add the letter from word 2 if it exists
        if(i < word2.length) {
            newString += word2[i]
        }
    }

    // return the new string
    return newString
}


// Testing
console.log(mergeAlternately(word1A, word2A))
console.log(mergeAlternately(word1B, word2B))
console.log(mergeAlternately(word1C, word2C))