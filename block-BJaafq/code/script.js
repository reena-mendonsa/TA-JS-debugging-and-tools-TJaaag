function add(numA,numB){
    return numA+numB;
}

let result,expected;
function test(message,callback){
    try {
        callback();
        console.log(`Pass`,message);
    } catch (error) {
        console.log(`Fail`,message);
    }
}

function expect(actual){
    return{
        toEqual:function(expected){
            if(actual !==expected){
                throw new Error(`${actual}is not equal to ${expected}`);
            }
        }
    }
}
function testAdd(a,b){
    result= add(a,b);
    expected =5;
    // if(result!== expected){
    //     throw new Error(`${result}not equal to ${expected}`);
    // }

}

test("adding 2 and 4",testAdd(2,4));
test("adding 2 and 5",testAdd(2,5));