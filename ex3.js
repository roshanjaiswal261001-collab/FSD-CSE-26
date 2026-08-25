const num=[1,2,3,4,5,6,7,8,9];
const even =num.filter((i)=>(i%2)==0);
console.log("num : ",num);
console.log("even : ",even);
const sq=even.map((i)=>(i*i));
console.log("sq : ",sq);
const sum=sq.reduce((s,i)=>(s+1))
console.log("sum : ",sum)