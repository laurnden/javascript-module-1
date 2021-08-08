function greetingFcn(name, greetingStart){
    const greeting = greetingStart + name;
    console.log(greeting);
}

// def function

function greetingFcn(name, greetingStart){
    const greeting= greetingStart + ' ' + name;
    return greeting;
}

// call function

const resultGreeting = greetingFcn('Laura', 'Hello, I am ');
console.log(resultGreeting);