
// function myname(){
//     console.log( "I sakshi");
// }
// myname();

// function add(a,b){
//     console.log(a+b);
// }
// add(10,20);

// function square(num){
//     return(num*num);
// }
// console.log(square(5));

// function greet(name){
//     console.log("Hello", name);
// }
// greet("sakshi");


// function sub(a,b){
//     console.log(a-b);
// }
// sub(15,6);

// function checknum(num){
//     if(num%2 ==0){
//         return "even";
//     }else{
//         return "odd";
//     }
// } 
// console.log(checknum(8));
// console.log(checknum(3));


// function findgreater(a,b){
//     if(a>b){
//         return "a";
//     } else{
//         return "b"
//     }
// }
// console.log(findgreater(7,5));

// function average(a,b,c){
//     return((a+b+c)/3)
// }
// console.log( average(10,20,30));

// function calculatorbill(price,quantity){
//      let bill =(price*quantity);
//      console.log("original bill :" + bill);
//      if(bill>500){
//         console.log("discount :50");
//         return bill-50;
//      } else{
//         console.log("discount :0");
//         return bill;
//      }
//     }
//     console.log( "final bill :" + calculatorbill(30,4));


// function miNofthree(a,b,c){
//     if(a<b && a<c){
//         return a;
//     } else if (b<a && b<c){
//         return b;
//      } else{
//             return c;
//      }
    

// }
// console.log(miNofthree(8,5,3));


// function check(num){
//     if(num>0){
//         return "postitve";

//      } else if(num<0){
//             return "negative";
//         }
//         else{
//             return "zero";
//         }
// }

// console.log(check(0));


// function max(a,b,c,d){
//     if(a>b && a>c && a>d){
//         return a;
//     }
//     else if(b>a &&b>c && b>d){
//         return b;
//     }
//     else if(c>a && c>b && c>d){
//         return c;
//     }
//     else{
//         return d;
//     }
// }

// console.log(max(4,3,0,2))

// let Arr = [10,20,30,40,50];
// console.log(Arr);

// let arr =[5,10,15,20,25,30];
// console.log(arr.length);

// let arr = [10,20,30,40,50];
// console.log(arr[0]);
// console.log(arr[arr.length-1]);


// let arr =[20,10,30,40,50,60];
// arr[1] = 100;
// console.log(arr);

// let arr =["apple", "mango", "banana"];
// arr.push("orange");
// arr.pop();
// console.log(arr);

// let arr =[10,20,30,50,60];
// arr.unshift(65);
// console.log(arr);

// let arr= ["red","green","blue","yellow"]
// arr.shift();
// console.log(arr);

// let num = [10,12,14,16,20,22];
// num.splice(2,2);
// console.log(num);

// let arr =["mango","Apple","banana","orange"];
// let result= arr.includes("mango");
// console.log(result);


// let arr =[20,30,40,50,60];
// let result = arr.indexOf(30);
// console.log(result);

// let arr =[12,36,45,85,65];
// let ans =arr.slice(1,3);
// console.log(ans);

// let arr =[23,25,62,5,45,98,75,4];
// let neww = arr.map((num)=>{
//     return num*2;
// });
// console.log(neww);

// let arr=[1,2,3,4,5,6,7,8,8,10];
// let result = arr.filter((num)=>{
//     return num%2==0;
// });
// console.log(result);

// let arr =[20,50,40,65,58,59,65,77,40,52,31,50,58];
// let result = arr.filter((num) =>{
//     return num >=50;
// });
// console.log(result);

// let arr =[100,200,300,400,500];
// let result = arr.map((num) =>{
//     return num+10;
// });
// console.log(result);

// let marks =[25,45,30,60,75,90,40,41,39];
// let result = marks.filter((num) =>{
//     return num >=40;
// });
// console.log(result);


// let arr=[51,20,36,65,54,96,58,74,56];
// let result =arr.reduce((num,total) =>{
//     return num+total;
// });
// console.log(result);

// let mobile ={
//     brand: "samsung",
//     price: 25000,
//     color:"black",
//     model:"s24",

// }
// console.log(mobile.price);

// let student ={
//     namr: "skashi",
//     age: 20,
//     course: "btech",
//     location: "moradabad",

// }
// student.age =21;
// delete student.course;
// console.log(student);

let stud ={
    name: "sakshi",
    maths: 50,
    science:97,
    english:88,
}
stud.total=  stud.english + stud.maths + stud.science;
stud.aver= stud.total/3;

console.log("total",stud.total);
console.log("aver",stud.aver);








































// for(let i=1; i<11; i++){

//     console.log(i);
// }

// 2-REVERSE ORDER--------------

// for (let i=10; i>0; i--){
//     console.log(i);
// }

// for(let i=1; i<21; i++){
//  if(i%2 ==0)
//  console.log(i);   
// }

// var sum =0;
// for(i=1; i<=10; i++){
//     sum=sum+i;
//         console.log(sum);
// // }

// for(let i=1; i<=50; i++){
//     if(i%2 !=0){
//         console.log(i);
//     }

//  }
// console.log("Hello");

// for (let i = 1; i <= 30; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }


// var sum =0;
// for(i=1; i<=50; i++){
//     if(i%2 ==0){
// sum=sum+i;
//     }
// }
// console.log(sum);

// let fact =1;
// for(let i =1; i<=5; i++){
//     fact =fact*i;
// }
// console.log(fact);

// reverse number-------

// let num =1234;
// let revrse=0;

// while(num>0){
//     let digit = num%10;
//     revrse =revrse*10+digit;
//     num=Math.floor(num/10);
// }
// console.log(revrse);
