

function fullName(firstName,secondName){
    
    return firstName+" "+secondName;
}


let result = fullName("Sara","John");
let expected = "Sara John";
if (result !== expected){
    throw new Error(`${result} not equal to ${expected}`);
}

result = fullName("Arya","John");
expected = "Arya John";
if (result !== expected){
    throw new Error(`${result} not equal to ${expected}`);
}

function calTotalAmt(amount,taxRate){
  return amount + (amount * taxRate);
}

let totalamt = calTotalAmt(10,2);
let expectedAmt = 30;
if (totalamt !== expectedAmt){
    throw new Error(`${totalamt} not equal to ${expectedAmt}`);
}

totalamt = calTotalAmt(10,3);
expectedAmt = 20;
if (totalamt !== expectedAmt){
    throw new Error(`${totalamt} not equal to ${expectedAmt}`);
}
