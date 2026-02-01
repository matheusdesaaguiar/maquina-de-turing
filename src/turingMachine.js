import Operations from "../src/utils/Operations.js";
import { isNumber } from "./validations/isNumber.validation.js";

function turingMachine(input) {
    const output = [];
    for(let i =0; i < input.length; i+=3){
        const array = input.slice(i, i+3);
        const [ number1, operation, number2 ] = array;

        if(!isNumber(number2) || !isNumber(number1)) return `Operando não permitido, os operandos tem que ser do tipo number`

        if (operation === "+") {
            const result = Operations.sum(number1, number2);
            output.push(result);
        } else if (operation === "-") {
            const result = Operations.subtraction(number1, number2);
            output.push(result);
        } else if (operation=== "*") {
            const result = Operations.multiply(number1,number2);
            output.push(result);
        } else if (operation === "/" && number2 !== 0) {
            const result = Operations.division(number1, number2);
            output.push(result);
        } else if( operation === "%" && number2 !== 0) {
            const result = Operations.module(number1, number2);
            output.push(result);
        } else{
            return "Há ao menos uma operação não permitida, informe somente operações válidas";
        }
    }
    return output;
}

export default turingMachine;