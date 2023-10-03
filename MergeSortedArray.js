// Merge Sorted Array

/*
You are given two integer arrays nums1 and nums2, sorted in
non-decreasing order, and two integers m and n, representing
the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in 
non-decreasing order.

The final sorted array should not be returned by the function,
but instead be sorted inside the array nums1. To accomodate this,
nums1 has a length of m + n, where the first m elements denote
the elements that should be merged, and the last n elements are
set to 0 and should be ignored. nums2 has a length of n.
*/


// Inputs
const nums1A = [1,2,3,0,0,0]
const mA = 3
const nums2A = [2,5,6]
const nA = 3
// output = [1,2,2,3,5,6]

const nums1B = [1]
const mB = 1
const nums2B = []
const nB = 0
// output = [1]

const nums1C = [0]
const mC = 0
const nums2C = [1]
const nC = 1
// output = [1]


// Function
const mergeSortedArray = (nums1, m, nums2, n) => {
    // loop through the nums2 array
    for(let i = 0; i < nums2.length; i++) {
        
    }
}


// Testing
mergeSortedArray(nums1A, mA, nums2A, nA)
console.log(nums1A)
mergeSortedArray(nums1B, mB, nums2B, nB)
console.log(nums1B)
mergeSortedArray(nums1C, mC, nums2C, nC)
console.log(nums1C)