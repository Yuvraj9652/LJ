const { stringify } = require('querystring');

fs=require('fs');
let scores={Rohit:45,Virat:96,Gill:20,Rahul:33,Tilak:30};
fs.writeFileSync('scores.txt',JSON.stringify(scores));

let data=fs.readFileSync('scores.txt');
let data1=JSON.parse(data);
console.log(data1);

data1.Hardik=52;
let greaterThan50={};
sum=0;
maxPlayer=data1;
max=data1[0];
for(i in data1){
    sum+=data1[i];
    if(data1[i]>50){
        greaterThan50[i]=data1[i];
    }
    if(data1[i]>max){
        max=data1[i];
        maxPlayer=i;
    }
}
console.log(`Total Runs: ${sum}`);
console.log(greaterThan50);

let answer=`Scores:\n ${data1} \n Total Runs: ${sum} \n Run Rate: ${runRate} \n Players whose score is greater than 50: ${greaterThan50} \n Maximum scoring Playter: ${maxPlayer}`;
fs.writeFileSync("scores.txt",JSON.stringify(data1));
console.log(JSON.parse(fs.readFileSync("scores.txt")))