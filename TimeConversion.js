const s1 = '12:01:00PM'
const s2 = '12:01:00AM'
const s3 = '08:51:00PM'
const s4 = '07:05:45PM'

function timeConversion(s) {
    // new string to return at the end
    let converted = ""

    
    // if time is AM
    if(s.slice(-2) == "AM") {
        // check if time starts with 12
        if(s.slice(0, 2) == '12') {
            converted = "00"
        } else {
            converted = s.slice(0, 2)
        }
    }

    // if time is PM
    if(s.slice(-2) == "PM") {
        // check if time starts with 12
        if(s.slice(0, 2) == '12') {
            converted = s.slice(0, 2)
        } else {
            converted = parseInt(s.slice(1)) + 12
        }
    }

    // add the rest of the time to the string
    converted += s.slice(2, -2)

    // return final string
    return converted
}

console.log(timeConversion(s1))
console.log(timeConversion(s2))
console.log(timeConversion(s3))
console.log(timeConversion(s4))