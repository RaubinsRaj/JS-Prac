   // Function is called, return value will end up in x

// function myFunction(a, b) {
//   return a * b;              // Function returns the product of a and b
// }
// var x = myFunction(4, 3);
// console.log(x)
// console.log(c)

// var n=2

// function square(num){
//   return ans=num*num
// }

// var square2= square(n)
// var square4=square(4)
// console.log(square2)
// console.log(square4)

// getName();
// console.log(x)
// var x=7;

// function getName(){
//   console.log("raubins raj")
// }
// getName();
// console.log(x)

// var x=1;
// a();
// // b();
// console.log(x);

// function a() {
//   b();
//   var x= 10;
//   console.log(x)
// }

// function b(){
//   var x= 100;
//   console.log(x)
// }

// var a=10;
// function b(){
//   var x=1;
//   // console.log(x)
// }
// console.log(window.a);
// console.log(this.a);
// console.log(this.b.x);

// function x(){
//   var a=1;
//   function y(){
//     console.log(a)
//   }
//   y()
// }
// x()

// function x(){
//   var a=5;
//   function y(){
//     console.log(a);
//     console.log("Raubins Raj")
//   }
//   return y;
// }

// var z =x();
// console.log(z)
// z();
// 

// function x(){

//   var i=1;
//   setTimeout(function(){
//     console.log(i);
//   },3000)
//   console.log("Raubins Raj")
// }
// x();

// function z(){
//   var b= 10;
//   function x(){
//     var a=5;
//     function y(){
//       console.log(a,b);
//       console.log("Raubins Raj")
//     }
//     return y;
//   }
//   return x;
// }
// var p= z();
// var k= p()
// k();

// function x(){
//   var i=1;
//   setTimeout(function () {
//      console.log(i);
//   },3000);

//   console.log("Ankita Aswal")
// }
// x();

// function x(){
//   var i=1;
//   setTimeout( console.log(i) ,3000);

//   console.log("Ankita Aswal")
// }
// x();
//  setTimeout(function (){
//   console.log("inside settime out callback")
// }, 3000)

// function x(y){
//  console.log("x");
// //  y();
// }
// x( function y(){
//   console.log("Callback functions");
// })
// console.log("start");
// document.getElementById("btn")
// .addEventListener("click", function cb() {
//   console.log("Callback called");
// });
// setTimeout(function abc(p) {
//   console.log("inside settimeout fn callback")
// },5000);

// fetch("https://reqres.in/api/users?page=1")
// .then(function def() {
//     console.log("inside fetch fn or microtask queue");
// })
// setTimeout(function cb(){
//   console.log("Inside callback");
// },5000)

// console.log("End")
// let startDate= new Date().getTime();
// let enddate= startDate;
// while(enddate<startDate+10000){
//   enddate= new Date().getTime();
// }
// console.log("While loop expires");

// function x() {
//   console.log("x");
  
// }
// function y(x) {
//   x();
// }
// y()();

// const radius = [2,3,1,4];

// const calculateArea = function (radius) {
//   const output = [];
//   for(let i = 0;i<radius.length;i++){
//     output.push(Math.PI * radius[i] * radius[i])
//   }
//   // console.log(output);
//   return output;
  
// }
// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//   const circum = [];
//   let circ=[];
//   for(let i=0;i<radius.length;i++){
//     circum.push(2* Math.PI * radius[i]);
//     // circum.push(Math.PI * radius[i]);
//     // circum[i]*2;

//   }
//   return circum;
  
// }

// console.log(calculateCircumference(radius));

// const area= function (radius) {
//   return Math.PI *radius*radius;
  
// }

// console.log(radius.map(area));
// const arr= [2,3,4,5,6]
// map function takes function as an argument
// function double(x) {
//   return x*2; 
// }
// const output= arr.map(double);
// const output1= arr.map(function binary(x){
//   return x.toString(2)
// });
// console.log(output1,output)
// const output= arr.map( (x)=> x.toString(2))
// console.log(output)

//Filter function
// function isOdd(x){
//   // if(x%2!=0)
//     return x%2;
// }
// const output= arr.filter(isOdd);
// console.log(output)

// const users= [
//   {"firstname": "Raubins",
//    "lastname": "Raj",
//    "age":24
//   },
//   {"firstname": "Ankita",
//    "lastname":"Aswal",
//    "age": 24
//   },
//   {"firstname":"john",
//    "lastname":"Wilson",
//    "age": 31
//   },
//   {"firstname":"Judd",
//    "lastname":"Trump",
//    "age":34
//   }
// ];

// const output= users.map((x)=> x.firstname+" "+x.lastname)
// console.log(output)
// const output1= users.reduce(function (acc,curr) {
//   if(acc[curr.age]){
//      acc[curr.age]= ++acc[curr.age]
//   }
//   else { acc[curr.age]=1 }

//   return acc;
  
// },{});
// console.log(output1)
// function ageGreater(users){
//   return users.age<30;

// }
// const output2= users.filter(ageGreater).map((x)=>x.firstname);
// console.log(output2)

// let firstname="Raubins";
// let lastname= "Raj";

// let fullname= `${firstname}${lastname} `
// console.log(fullname);
// console.log(`${fullname}`.repeat(2));

// Array Destructuring******************
// let array1= ["Raubins","Raj","Ankita","Aswal"];
// let [top1,to2,top3,top4] = array1;

// console.log(to2)

// let array1= ["1","2","3","4"];
// let [t1,,,t4] = array1;
// console.log(`${t1} ${t4}`);

// let a=5;
// let b= 10;

// const obj1= 
//    {
//       Name:"Raubins",
//       Qual: "BE",
//       "Age": 23,
//       Hobby: 
//       {
//          first:"play",
//          sec: "watch"
//       }
//    }

//    let {Name,Qual,Age,Hobby} = obj1;
// console.log(`${obj1.Name}`);
// console.log(`${Qual} ${Hobby.first}`);

// const raj= (a,b) => a+b ;
// console.log(raj(2,3));

// function start(...params) {
//    var abc= console.log(params)
   
//    return abc;
// }
// start(2,4,6,7,8,"abc");

// function fun(a,b,...c) {
//    console.log(`${a} ${b}`)
//    console.log(c);
//    console.log(c[0]);
//    console.log(c.length);
//    console.log(c.indexOf("E"));
   
// }

// fun("A","B","C","D","E");

console.log([1,2] + [3,4]);













