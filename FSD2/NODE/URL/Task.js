let addr="https://localhost:8080/test?T1=25&T2=24&T3=25&#test";
let data=new URL(addr);

console.log(data);
console.log(data.searchParams.get('T1'));
console.log(data.searchParams.get('T2'));
console.log(data.searchParams.get('T3'));
let data1=data.hash;
console.log(data1.substring(1, data1.length));