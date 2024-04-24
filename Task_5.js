//1)calculate avg score of the teams
const CalculateAverageScore = (s1,s2,s3) =>{
    return (s1+s2+s3)/3;
}

//2)checkWinner
const checkWinner = (AvgScoreKoalas,AvgScoreDolphins) => {
    if(AvgScoreDolphins >= 2*(AvgScoreKoalas)){
        console.log("Dolphins win!!");
    }
    else if(AvgScoreKoalas >= 2*(AvgScoreDolphins)){
        console.log("Koalas win!!");
    }
    else{
        console.log("no trophy!!")
    }
}

//data 1
let AvgScoreKoalas = CalculateAverageScore(65,54,49);
let AvgScoreDolphins = CalculateAverageScore(44,23,71);
checkWinner(AvgScoreKoalas,AvgScoreDolphins);

//date 2
AvgScoreDolphins=CalculateAverageScore(85,54,41);
AvgScoreKoalas = CalculateAverageScore(23,34,27);
checkWinner(AvgScoreKoalas,AvgScoreDolphins);