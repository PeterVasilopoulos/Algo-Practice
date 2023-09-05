// Product of Array Except Self

/*
Given an integer array nums, return an array answer
such that answer[i] is equal to the product of all the
elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed
to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and
without using the division operation.
*/


// Inputs
const nums1 = [1,2,3,4]
// output = [24,12,8,6]

const nums2 = [-1,1,0,-3,3]
// output = [0,0,9,0,0]


// Function
const productExceptSelf = (nums) => {
    // create a left array
    let leftArr = []
    // create a left multiplication value
    let leftMult = 1

    // increment through nums
    for(let i = 0; i < nums.length; i++) {
        // set leftArr[i] = leftMult
        leftArr[i] = leftMult
        // multiply leftMult by the current nums value
        leftMult *= nums[i]
    }

    // create a right array
    let rightArr = []
    // create a right multiplication value
    let rightMult = 1

    // decrement through nums
    for(let i = nums.length - 1; i >= 0; i--) {
        // set rightArr[i] = rightMult
        rightArr[i] = rightMult
        // multiply rightMult by the current nums value
        rightMult *= nums[i]
        // multiply current rightArr value by leftArr value
        rightArr[i] *= leftArr[i]
    }

    return rightArr
}


// Testing
console.log(productExceptSelf(nums1))
console.log(productExceptSelf(nums2))