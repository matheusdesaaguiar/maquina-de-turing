import Operations from "../src/utils/Operations.js";

function turingMachine(input) {
    const output = [];
    for(let i =0; i < input.length; i+=3){
        const array = input.slice(i, i+3);
        const [ number1, operation, number2 ] = array;

        if (operation === "+") {
            const result = Operations.sum(number1, number2);
            output.push(result);
        } else if (operation === "-") {
            const result = Operations.subtraction(number1, number2);
            output.push(result);
        } else if (operation=== "*") {
            const result = Operations.multiply(number1,number2);
            output.push(result);
        } else if (operation === "/") {
            const result = Operations.division(number1, number2);
            output.push(result);
        } else if( operation === "%") {
            const result = Operations.module(number1, number2);
            output.push(result);
        } else{
            return "Operação não permitida, informe uma operação válida";
        }
    }
    return output;
}

export default turingMachine;