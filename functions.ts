export function sum(a: number,b:number){
    let resultMessage = `${a} + ${b} = ${a+b}`;
    return resultMessage;
}

export function subtract(a: number,b:number){
    let resultMessage = `${a} - ${b} = ${a-b}`;
    return resultMessage;
}

export function multily(a: number,b:number){
    let resultMessage = `${a} x ${b} = ${a*b}`;
    return resultMessage;
}

export function divide(a: number,b:number){
    let resultMessage = `${a} / ${b} = ${a/b}`;
    return resultMessage;
}

export function remainder(a: number,b:number){
    let resultMessage = `${a} % ${b} = ${a%b}`;
    return resultMessage;
}

export function power(a: number,b:number){
    let resultMessage = `${a} ^ ${b} = ${a**b}`;
    return resultMessage;
}