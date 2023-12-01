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

processLogs(logs1, threshold1)