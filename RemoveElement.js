// Remove Element

/*
Given an integer array nums and an integer val, remove all 
occurences of val in nums in-place. The order of the elements 
may be changed. Then return the number of elements in nums
which are not equal to val.
*/


// Inputs
const numsA = [3,2,2,3]
const valA = 3
// output = 2, nums = [2,2]

const numsB = [0,1,2,2,3,0,4,2]
const valB = 2
// output = 5, nums = [0,1,4,0,3]

const numsC = [1,2,3,4,4,4,4,5,6]
const valC = 4
// output = 5, nums = [1,2,3,5,6]


// Function
const removeElement = (nums, val) => {
    // loop through nums
    for(let i = 0; i < nums.length;) {
        // check if number is equal to val
        if(nums[i] === val) {
            // remove number from array
            for(let j = i; j < nums.length - 1; j++) {
                nums[j] = nums[j + 1]
            }
            nums.pop()
        } else {
            // if value is not equal, increment i
            i++
        }
    }

    // return length of nums
    return nums.length
}


// Testing
console.log(removeElement(numsA, valA))
console.log(removeElement(numsB, valB))
console.log(removeElement(numsC, valC))