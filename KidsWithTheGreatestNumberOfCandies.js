// Kids With the Greatest Number of Candies

/*
There are 'n' kids with candies. You are given an integer
array 'candies', where each candies[i] represents the number
of candies the ith kid has, and an integer 'extraCandies',
denoting the number of extra candies that you have.

Return a boolean array result of length 'n', where result[i]
is true if, after giving the ith kid all the extraCandies, 
they will have the greatest number of candies among all the
kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.
*/


// Inputs
const candiesA = [2,3,5,1,3]
const extraCandiesA = 3
// output = [true, true, true, false, true]

const candiesB = [4,2,1,1,2]
const extraCandiesB = 1
// output = [true, false, false, false, false]

const candiesC = [12,1,12]
const extraCandiesC = 10
// output = [true, false, true]


// Function
const kidsWithCandies = (candies, extraCandies) => {
    // create a variable to hold the max number of candies in the array
    let max = 0

    // loop through the array to find the max
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] > max) {
            max = candies[i]
        }
    }

    // create an array to hold the booleans
    let result = []

    // loop through array again and add extra candies to 
    // current amount to see if it would be higher than max
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= max) {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    // return result array
    return result
}


// Testing
console.log(kidsWithCandies(candiesA, extraCandiesA))
console.log(kidsWithCandies(candiesB, extraCandiesB))
console.log(kidsWithCandies(candiesC, extraCandiesC))