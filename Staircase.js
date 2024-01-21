const stair1 = 4
const stair2 = 7


function staircase(n) {
    // for loop that runs until the n value is reached
    for(let i = 1; i <= n; i++) {
        // create a string to return
        let str = ""

        // for loop to add the spaces
        for(let j = n; j > i; j--) {
            str += " "
        }

        // for loop to add the #s
        for(let k = 1; k <= i; k++) {
            str += "#"
        }

        // log str
        console.log(str)
    }
}


staircase(stair1)
staircase(stair2)