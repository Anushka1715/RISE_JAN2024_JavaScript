function CalculateAverageScore(s1, s2, s3) {
    return (s1 + s2 + s3) / 3;
}

//a
let Dolphins = CalculateAverageScore(96, 108, 89);
console.log(`The average score of team Dolphins is ${Dolphins}`);
let Koalas = CalculateAverageScore(88, 91, 110);
console.log(`The average score of team Koalas is ${Koalas}`);

//b)
if (Dolphins > Koalas) {
    console.log(`Dolphins Win!! The average score of Dolphin is ${Dolphins}.`);
} else if (Dolphins < Koalas) {
    console.log(`Koalas Win!! The average score of Koalas is ${Koalas}.`);
} else if (Dolphins === Koalas) {
    console.log(`There's a Draw!!`);
}

//c)minimum score should be 100
//Data Bonus 1

function DecideWinner(){
    if (Dolphins > 100 && Koalas > 100) {
        if (Dolphins > Koalas) {
            console.log(`Dolphins Win!! The average score of Dolphin is ${Dolphins}.`);
        } else if (Dolphins < Koalas) {
            console.log(`Koalas Win!! The average score of Koalas is ${Koalas}.`);
        } else if (Dolphins === Koalas) {
            console.log(`${Dolphins} & ${Koalas}There's a Draw!!`);
        }
    } else {
        console.log("The average score of teams is not higher than 100.");
    }
}

Dolphins = CalculateAverageScore(97, 112, 101);
console.log(`The average score of team Dolphins is ${Dolphins}`);

Koalas = CalculateAverageScore(109, 95, 123);
console.log(`The average score of team Koalas is ${Koalas}`);


DecideWinner();

//Data Bonus 2
Dolphins = CalculateAverageScore(97, 112, 101);
console.log(`The average score of team Dolphins is ${Dolphins}`);

Koalas = CalculateAverageScore(109, 95, 106);
console.log(`The average score of team Koalas is ${Koalas}`);


DecideWinner();



