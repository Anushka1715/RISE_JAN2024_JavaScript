let bills=[125,555,44];
let tips = [];
let total = [];


function CalculateBillWithTip(billAmount){
    return tip = billAmount >=50 && billAmount <=300 ? billAmount*0.15:billAmount*0.20;    
} 



for (let i = 0; i < bills.length; i++) {
    tips.push(CalculateBillWithTip(bills[i]));
    total.push(bills[i] + tips[i]);

    console.log(`For the bill:${bills[i]} with tip:${tips[i]} and total amount is :${total[i]}`)
}

