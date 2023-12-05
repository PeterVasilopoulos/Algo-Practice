const candles1 = [4,4,1,3]
const candles2 = [3,2,1,3]

function birthdayCakeCandles(candles) {
    // object to hold all the candle sizes and the number of occurences
    let sizes = {}

    // variable to hold the max size
    let max = 0

    // loop through the candles array
    for(let i = 0; i < candles.length; i++) {
        // check for new max
        if(candles[i] > max) {
            max = candles[i]
        }

        // add candle size to sizes object
        if(sizes.hasOwnProperty(candles[i])) {
            // increment number
            sizes[candles[i]]++
        } else {
            // set number to 1
            sizes[candles[i]] = 1
        }
    }

    // return number of tallest candle
    return sizes[max]
}

console.log(birthdayCakeCandles(candles2))