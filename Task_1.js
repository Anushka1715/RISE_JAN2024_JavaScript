//a)
console.log("The first test case:");
let MarkHeight = 1.69;
let MarkWeight = 78;
let JohnHeight = 1.95;
let JohnWeight = 92;
//d)
displayHigherBMI();

console.log("The second test case:");
MarkHeight = 1.88;
MarkWeight = 95;
JohnHeight =1.76;
JohnWeight=85;
//d)
displayHigherBMI();

//b)
const BMI = (height,weight) => {
    return weight/height**2;
}

function displayHigherBMI(){
    //c)
    const markHigherBMI = BMI(MarkHeight,MarkWeight) > BMI(JohnHeight,JohnWeight);
    //d)
    console.log(`Value of the boolean variable markHigherBMI:${markHigherBMI}`)
    if(markHigherBMI){
        console.log(`Mark has higher BMI than John which is ${BMI(MarkHeight,MarkWeight)}`)
    }
    else{
        console.log(`John has higher BMI than Mark which is ${BMI(JohnHeight,JohnWeight)}`)
    
    }
}







