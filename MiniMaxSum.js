let arr1 = [1,3,5,7,9]

function miniMaxSum(arr) {
    // create arrays to hold the min and max values and indices
    // initialize values with first value in arr
    // [value, index]
    let min = [arr[0],0]
    let max = [arr[0],0]
    
    // loop through the given array to find min and max
    for(let i = 0; i < arr.length; i++) {
        // min
        if(arr[i] < min[0]) {
            min[0] = arr[i]
            min[1] = i
        }
        
        // max
        if(arr[i] > max[0]) {
            max[0] = arr[i]
            max[1] = i
        }
    }
    
    // create variables to hold the min sum and max sum
    let minSum = 0
    let maxSum = 0
    
    // loop through the given array again to find sums
    for(let i = 0; i < arr.length; i++) {
        // min
        if(i !== max[1]) {
            minSum += arr[i]
        }
        
        // max
        if(i !== min[1]) {
            maxSum += arr[i]
        }
    }
    
    // print solution
    console.log(minSum, maxSum)
}

miniMaxSum(arr1)