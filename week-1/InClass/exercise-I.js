function getAgeInMonths(age){
    return age * 12
}

function resultFunction(name, age){
    const getAgeInMonths = getAgeInMonths(age);
    const message = "Hei" + ' ' + name + ' ' + 'was born over' + ' ' + geInMonths + ' ' + 'months ago';
    return message;
}

console.log(resultFunction('Laura', 23));