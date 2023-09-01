// Can Place Flowers

/*
You have a long flowerbed in which some of the plots
are planted, and some are not. However, flowers cannot be
planted in adjacent plots.

Given an integer array 'flowerbed' containing 0s and 1s,
where 0 means empty and 1 means not empty, and an integer n,
return true if n new flowers can be planted in the flowerbed
without violating the non-adjacent-flower rule and false
otherwise.
*/


// Inputs
const flowerbedA = [1,0,0,0,1]
const nA = 1
// output = true

const flowerbedB = [1,0,0,0,1]
const nB = 2
// output = false


// Function
const canPlaceFlowers = (flowerbed, n) => {
    // create a variable to hold the number of flowers that can be planted
    let planted = 0

    // loop through the flowerbed
    for(let i = 0; i < flowerbed.length; i++) {
        // if the value is 1, skip to the next index
        if(flowerbed[i] == 1) {
            continue
        }

        // if the index is 0, only check index after
        if(i == 0) {
            if(flowerbed[i + 1] == 1) {
                // if value after current is a 1, skip
                continue
            } else {
                // if value after current is a 0, plant
                planted++
            }
        // if index is final index in array, only check before
        } else if(i == flowerbed.length - 1) {
            if(flowerbed[i - 1] == 1) {
                continue
            } else {
                planted++
            }
        // if index is anything in the middle
        } else {
            if(flowerbed[i - 1] == 1 || flowerbed[i + 1] == 1) {
                continue
            } else {
                planted++
            }
        }
    }

    // check if planted variable if greater than or equal to n
    if(planted >= n) {
        return true
    } else {
        return false
    }
}


// Testing
console.log(canPlaceFlowers(flowerbedA, nA))
console.log(canPlaceFlowers(flowerbedB, nB))