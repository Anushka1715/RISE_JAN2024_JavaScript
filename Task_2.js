const BMI = (height,weight) => {
    return weight/height**2;
}

function displayHigherBMI(){
    const markHigherBMI = BMI(MarkHeight,MarkWeight) > BMI(JohnHeight,JohnWeight);
    if(markHigherBMI){
        //a)
        console.log("Mark's BMI is higher than John's!");
        //b)
        console.log(`Mark's BMI(${BMI(MarkHeight,MarkWeight)}) is higher than John's(${BMI(JohnHeight,JohnWeight)})!`)
    }
    else{
        //a)
        console.log("John's BMI is higher than Mark's!");

        //b)
        console.log(`John's BMI(${BMI(JohnHeight,JohnWeight)}) is higher than Mark's(${BMI(MarkHeight,MarkWeight)})!`)
    
    }
}

console.log("The first test case:");
let MarkHeight = 1.69;
let MarkWeight = 78;
let JohnHeight = 1.95;
let JohnWeight = 92;
displayHigherBMI();

console.log("The second test case:");
MarkHeight = 1.88;
MarkWeight = 95;
JohnHeight =1.76;
JohnWeight=85;
displayHigherBMI();