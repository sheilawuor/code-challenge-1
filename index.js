
function getMarks(marks) {
    //if marks is greater than 79 return A
    if (marks > 79){
    return 'A' 
} //if marks is greater than 60 return B 
else if (marks >= 60){
    return 'B-'
} //if marks is greater than 49 return C-
else if (marks >= 49){
    return 'C-'
} //if marks is greater than 40 return D-
else if (marks >= 40){
    return 'D-'
} //if marks is less than 40 return E
else {
    return 'E'
}
}


console.log(getMarks(90));