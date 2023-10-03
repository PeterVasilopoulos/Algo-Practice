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
    // replace 0s in nums1 with values from nums2
    for(let i = 0; i < nums1.length - m; i++) {
        nums1[i + m] = nums2[i] 
    }

    // check if num1 has more than 1 index
    if(nums1.length > 1) {
        // loop through nums1
        for(let i = 0; i < nums1.length;) {
            // check if the value to the right is smaller than current
            if(nums1[i + 1] < nums1[i]) {
                // swap values
                let temp = nums1[i]
                nums1[i] = nums1[i + 1]
                nums1[i + 1] = temp
                // decrement index by one
                i--
            } else {
                // increment index by one
                i++
            }
        }
    }
}

const mergeSortedArray2 = (nums1, m, nums2, n) => {
    // create new array to hold the values
    let newArr = []

    // loop through both arrays
    for(let i = 0, j = 0; i < m || j < n;) {
        if(i >= m) {
            // if at end of nums1, push nums2 value
            newArr.push(nums2[j])
            // increment j
            j++
        } else if(j >= n) {
            // if at end of nums2, push nums1 value
            newArr.push(nums1[i]) 
            // increment i
            i++
        } else if(nums1[i] < nums2[j]) {
            // if nums1 value is smaller, push nums1[i]
            newArr.push(nums1[i])
            // increment i
            i++
        } else if(nums2[j] < nums1[i]) {
            // if nums2 value is smaller, push nums2[j]
            newArr.push(nums2[j])
            // increment j
            j++
        } else if (nums1[i] === nums2[j]) {
            // if they are the same, push both
            newArr.push(nums1[i])
            newArr.push(nums2[j])
            // increment both values
            i++
            j++
        }
    }

    // set nums1 array equal to newArr
    nums1.splice(0, nums1.length, ...newArr)
}


// Testing
mergeSortedArray2(nums1A, mA, nums2A, nA)
console.log(nums1A)
mergeSortedArray2(nums1B, mB, nums2B, nB)
console.log(nums1B)
mergeSortedArray2(nums1C, mC, nums2C, nC)
console.log(nums1C)