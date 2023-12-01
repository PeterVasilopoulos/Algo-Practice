// const test = "pog "

// for(let i = 0; i < test.length +1; i++) {
//     if(test[i]) {
//         console.log("yes")
//     } else {
//         console.log("no")
//     }
// }

// let arr = [1, 2, 3]

// console.log(arr)

// arr.unshift(0)

// console.log(arr)

// let sum = 10
// sum -= 3
// console.log(sum)

// console.log(2**0)

// // variable to hold the sum, start at value of i
// let sum = i
    
// while(i !== j) {
//     // check if j is < or > i
//     if(j < i) {
//         i--
//     } else {
//         i++
//     }
    
//     // add value to sum
//     sum += i
//     console.log("I: " + i + " SUM: " + sum)
// }

// while(j !== k) {
//     // check if k is < or > j
//     if(k < j) {
//         j--
//     } else {
//         j++
//     }
    
//     // add value to sum
//     sum += j
//     console.log("I: " + i + " SUM: " + sum)
// }

// return sum

// let test = "push"
// if(test === "push") {
//     console.log("yes")
// }


// let one = 100
// let two = 12

// console.log((one/two).toFixed(2))

// let array = []

// array[0,0] = 1

// console.log(array[0,1])

// let strTest = "hi,hello,"

// for(let i = 0; i < strTest.length; i++) {
//     if(strTest[i] === ',') {
//         console.log("pog")
//     }
// }

let csv = "Electricity,120,1|Internet,60,1|Groceries,300,4"
let csv2 = "Rent,1572,1|Health Insurance,268,1|House Cleaning,197,4|Home Maintenance,168,1|Vehicle Maintenance,186,2|Concert Tickets,129,4|Streaming Services,20,1|Professional Development,671,1|Wine Club,58,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1|Vacation Savings,387,1"
let csv3 = "Internet,60,1"

let income = 2000
let income2 = 2110

function calculateDisposableIncome(csv, income) {
    // create a variable to hold total expenses
    let expenses = 0
    
    
    // loop through the csv
    for(let i = 0; i < csv.length; i++) {
        // stop until a comma is reached
        if(csv[i] === ',') {
            // loop again to find the next comma
            for(let j = i + 1; j < csv.length; j++) {
                if(csv[j] === ',') {
                    // create cost variable
                    let cost = parseInt(csv.slice(i + 1, j))
                    // create frequency variable
                    let freq = parseInt(csv.slice(j + 1, j + 2))
                    
                    // add expense to variable
                    expenses += cost * freq
                    
                    // move i to next comma
                    i = csv.indexOf(",", j)
                    
                    // break out of loop
                    break
                }
            }
        }
    }
    
    // return monthly disposable income
    return income - expenses
}

console.log(calculateDisposableIncome(csv3, income))