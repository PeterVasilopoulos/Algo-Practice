function subsetA(arr) {
    // array to be returned
    let result = []
    // sum of result array
    let resultSum = 0
    // variable to hold the sum
    let sum = 0
    // variable to hold the highest value and the index
    let max = 0
    let maxIdx = 0
    
    // loop through array to get the sum and find the max
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
        
        if(i === 0) {
            max = arr[i]
            maxIdx = i
        } else if(arr[i] > max) {
            max = arr[i]
            maxIdx = i
        }
        
    }
    
    // remove max from array
    arr.splice(maxIdx, 1)
    // add current max to array
    result.push(max)
    // add max to resultSum
    resultSum += max
    // remove max from sum
    sum -= max
    // check if value of current max is greater than sum of others, return if so
    if(max > sum) {
        return result
    }
    
    // loop through array
    while(sum >= resultSum) {
        // reset max to 0
        max = 0
        maxIdx = 0
        
        for(let i = 0; i < arr.length; i++) {
            // find highest value
            if(i === 0) {
                max = arr[i]
                maxIdx = i
            } else if(arr[i] > max) {
                max = arr[i]
                maxIdx = i
            }
        }
        
        // add max to result
        result.unshift(max)
        // remove max from arr
        arr.splice(maxIdx, 1)
        // add max to resultSum
        resultSum += max
        // remove max from sum
        sum -= max
    }

    console.log("Result Sum: " + resultSum)
    console.log("Sum: " + sum)
    
    // return final array
    return result
    
}


// TESTING

n = 5
arr = [5,5,5,5,5,5,5,5,5,5]

console.log(subsetA(arr))