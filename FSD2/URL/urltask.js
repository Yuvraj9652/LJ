var u=require('url');
let addr='https://localhost:8080/default.html?year=2026&month=march#warUpdate';
var q=u.parse(addr,true);
console.log(q);
console.log(q.host);
console.log(q.pathname);
console.log(q.hash);
console.log(q.port);
console.log(q.query);
console.log(q.search);

process.noDeprecation = true;// to avoid deprecation warning

let data=q.query;
console.log(data);
console.log(data.year);

let thisYear=data.year;
if (thisYear%4==0) {
    if (thisYear%100==0) {
        if (thisYear%400==0) {
            console.log('leap year');
        }
        else {
            console.log('not a leap year');
        }
    }
    else {
        console.log('leap year');
    }
}
else {
    console.log('not a leap year');
}