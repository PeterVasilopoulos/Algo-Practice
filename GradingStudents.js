const grades1 = [4,73,67,38,33]

function gradingStudents(grades) {
    // create a new array to hold the rounded grades
    let rounded = []

    // loop through the grades array
    for(let i = 0; i < grades.length; i++) {
        // if grade is below 38, dont round
        if(grades[i] < 38) {
            rounded.push(grades[i])

        // check if grade needs to be rounded
        } else if(grades[i] % 5 > 2) {
            let remove = grades[i] % 5
            rounded.push(grades[i] - remove + 5)

        // otherwise push grade
        } else {
            rounded.push(grades[i])
        }
    }

    // return rounded grades array
    return rounded
}

console.log(gradingStudents(grades1))