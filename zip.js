function cityStateAddress(city, state){
    let address = `${city}, ${state.toUpperCase()}`   // wi ->WI, instead of concatenating with plus we can use template strings
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))
let address = cityStateAddress('Seattle', 'wa')
console.log(address)


function  isMinnesotaZip(code){
    // All MN zip is between these: 55001 and 56763
    if (code >= 55001 && code <= 56763) {
        return true
    } else {
        return false
    }
}


//console.log(isMinnesotaZip('55403'))
//console.log(isMinnesotaZip('55001'))
//console.log(isMinnesotaZip('55400'))
//console.log(isMinnesotaZip('56765'))
//console.log(isMinnesotaZip('56777'))

function validGPA(gpa){
    if (gpa >= 0 && gpa <= 4) {
        return true
    }else {
        return false

    }
}
console.log(validGPA('0'))
console.log(validGPA('1'))
console.log(validGPA('4'))
console.log(validGPA('5'))
console.log(validGPA('-2'))