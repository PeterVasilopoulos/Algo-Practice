const logs1 = ["88 99 200", "88 99 300", "99 32 100", "12 12 15"]
const threshold1 = 2

function processLogs(logs, threshold) {
    // create an object to hold the id and transaction data
    const transactions = {}
    
    // loop through the array
    for(let i = 0; i < logs.length; i++) {
        // get index of first space
        let firstSpace = logs[i].indexOf(' ')
        // get the sender id
        let sender = parseInt(logs[i].slice(0, firstSpace))
        // get recipient id
        let recipient = parseInt(logs[i].slice(firstSpace + 1, logs[i].indexOf(' ', firstSpace + 1)))
        
        // increment sender id in object
        if(transactions.hasOwnProperty(sender)) {
            transactions[sender] ++
        } else {
            transactions[sender] = 1
        }
        
        // increment recipient if not the same as sender
        if(sender !== recipient) {
            if(transactions.hasOwnProperty(recipient)) {
                transactions[recipient] ++
            } else {
                transactions[recipient] = 1
            }
        }
    }
    
    // create an array to return
    let result = []
    
    // loop through all key values in transactions
    for(const id in transactions) {
        // if value is >= 2, add to result
        if(transactions[id] >= 2) {
            result.push(id)
        }
    }
    
    // sort the array
    result.sort(function(a,b){return a - b})
    
    // convert all array values to strings
    result.toString()

    console.log(result)

    // return result
    return result
}

// processLogs(logs1, threshold1)




const s1 = '|**|*|*'
const startIndices1 = [1,1]
const endIndices1 = [5,6]

function numberOfItems(s, startIndices, endIndices) {
    // create an array to hold the results
    let results = []
    
    // loop through the startIndices array
    for(let i = 0; i < startIndices.length; i++) {
        // slice the string and hold in a variable
        const subStr = s.slice(startIndices[i] - 1, endIndices[i])
        
        // slice the string again starting at first '|' and ending at last '|'
        let finalStr = ""
        if(subStr.indexOf("|") >= 0) {
            finalStr = subStr.slice(subStr.indexOf("|") + 1, subStr.lastIndexOf("|"))
        } else {
            results.push(0)
            continue
        }
        
        // create variable to hold the number of items
        let items = 0
        
        // loop through string to find the number of items
        for(let j = 0; j < finalStr.length; j++) {
            if(finalStr[j] === '*') {
                items++
            }
        }
        
        // push items to results
        results.push(items)
    }
    
    // return results
    return results
}

console.log(numberOfItems(s1, startIndices1, endIndices1))