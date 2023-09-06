// Increasing Triplet Subsequence

/*
Given an integer array nums, return true if there 
exists a triple of indicies (i, j, k) such that 
i < j < k and nums[i] < nums[j] < nums[k]. If no
such indicies exist, return false.
*/


// Inputs
const nums1 = [1,2,3,4,5]
// output = true

const nums2 = [5,4,3,2,1]
// output = false

const nums3 = [2,1,5,0,4,6]
// output = true

const nums4 = [1,5,0,4,1,3]
// output = true


// Function
const increasingTriplet2 = (nums) => {
    // variable to hold the min of the left side
    let min = nums[0]
    let minIdx = 0

    // variable to hold the max of the right side
    let max = 0
    let maxIdx = nums.length - 1

    // loop through the array to get min and max
    for(let i = 0, k = nums.length - 1; i <= nums.length / 2; i++, k--) {
        // set initial values for max and min
        if(i === 0) {
            min = nums[i]
            max = nums[k]
        }

        // if nums[i] is smaller than min, set new min
        if(nums[i] < min) {
            min = nums[i]
            minIdx = i
        }

        // if nums[k] is larger than max, set new max
        if(nums[k] > max) {
            max = nums[k]
            maxIdx = k
        }
    }

    // loop through again
    for(let i = minIdx; i < maxIdx; i++) {
        // check if each value is between min and max
        if(nums[i] > min && nums[i] < max) {
            // return true if found
            return true
        }
    }

    // otherwise return false
    return false
}


const increasingTriplet = (nums) => {
    // create a min and minIdx variable
    let min = nums[0]
    let minIdx = 0

    // create a max and maxIdx variable
    let max = nums[nums.length - 1]
    let maxIdx = nums.length - 1

    // loop through nums to find min
    for(let i = 1; i < nums.length; i++) {
        // if value is smaller than min, set new min
        if(nums[i] < min) {
            min = nums[i]
            minIdx = i
        }
    }

    // loop through again to find max
    for(let i = minIdx + 1; i < nums.length; i++) {
        // if value is larger than max, set new max
        if(nums[i] > max) {
            max = nums[i]
            maxIdx = i
        }
    }

    // loop through once more to check for subsequence
    for(let i = minIdx + 1; i < maxIdx; i++) {
        // if value is between min and max, return true
        if(nums[i] > min && nums[i] < max) {
            return true
        }
    }

    // if the function gets here, return false
    return false
}


// Testing
console.log(increasingTriplet(nums1))
console.log(increasingTriplet(nums2))
console.log(increasingTriplet(nums3))
console.log(increasingTriplet(nums4))