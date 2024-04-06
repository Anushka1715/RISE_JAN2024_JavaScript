function CalculateBillWithTip(billAmount){
    const tip = billAmount >=50 && billAmount <=300 ? billAmount*0.15:billAmount*0.20 
    const FinalValue = billAmount + tip;
    console.log(`The bill was ${billAmount},the tip was ${tip}, and the total value is ${FinalValue}`)
     
} 

CalculateBillWithTip(275);
CalculateBillWithTip(40);
CalculateBillWithTip(430);

