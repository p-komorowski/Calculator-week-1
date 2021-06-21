const prompt = require('prompt-sync')();

function operation(type,num1,num2){
    switch (type){
        case "add":
        operation_add(num1,num2);
        break;
        case "substract":
        operation_sub(num1,num2);
        break;
        case "multiply":
        operation_mult(num1,num2);
        break;
        case "divide":
        operation_div(num1,num2);
        break;
        case "modulo":
        operation_mod(num1,num2);
        break;
    }
}
function operation_add(plus1,plus2){
        console.log(plus1)
        console.log("+")
        console.log(plus2)
        console.log("=")
        console.log(+plus1+ +plus2);
}
function operation_sub(sub1,sub2){
        console.log(sub1)
        console.log("-")
        console.log(sub2)
        console.log("=")
        console.log(+sub1- +sub2);
}  
function operation_mult(mult1,mult2){
        console.log(mult1)
        console.log("*")
        console.log(mult2)
        console.log("=")
        console.log(+mult1 * +mult2);
}
function operation_div(div1,div2){
        console.log(div1)
        console.log("/")
        console.log(div2)
        console.log("=")
        console.log(+div1/ +div2);
}
function operation_mod(mod1,mod2){
        console.log(mod1)
        console.log("%")
        console.log(mod2)
        console.log("=")
        console.log(+mod1% +mod2);
}
console.log("Hello, welcome to my caculator. Please add operation type from list:\n1.Add\n2.Substract\n3.Multiply\n4.Divide\n5.Modulo")
while(1) {
    let type = prompt("Enter operation type or q for quit: ")
    if (type == "q"){
      break;
    } 
    let num1 = prompt("Add first number: ")
    let num2 = prompt("Add second number: ")
    operation(type, num1, num2);
}
