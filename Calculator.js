function add(num1, num2,){
    return num1+num2;
}
function mul(num1, num2){
    return num1* num2;
}
function div(num1, num2){
    return num1/num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function pow(num1, num2){
    return num1^ num2;
}
function remainder(num1, num2){
    return num1 % num2;
}

function calculator(num1, num2, app){
    return app(num1, num2);
}

console.log(calculator(10, 2, div));
