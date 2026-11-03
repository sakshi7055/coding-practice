// code 1---------

// const t1 = performance.now()

// for(let i=1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "this is para" +i;
//     document.body.appendChild(para);

// }

// const t2 = performance.now();
// console.log("total time by code 1: " +(t2-t1));


//  code 2-----------

// const t3 = performance.now()

// let mydiv = document.createElement('div');
// for(let i=1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "this is para" +i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// const t4 = performance.now()

// console.log("total time by code 1: " +(t3-t4));



// let fragment = document.createDocumentFragment();

// for(let i=1; i<=100; i++){
// let para = document.createElement('p');
// para.textContent = "this is para" +i +"abc";

// // there is no need for reflow and repaint for below line----

// fragment.appendChild(para);
// }
// document.body.appendChild(fragment);



// let para = document.getElementById('fpara');
// let btn = document.getElementById('btn');

// btn.addEventListener('click', function(){


// para.textContent = "welcome to javascript";
// })

// let para = document.getElementById("msg");
// let btn = document.getElementById("btn");
// btn.addEventListener('click', function(){
//     para.style.width = "300px";
// })

// let box = document.getElementById("box");
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     box.style.height = "200px";
// })



// promises--------------

// let firstpromise = new Promise((resolve, reject) =>{
//     setTimeout(function saymyname(){
//     console.log("my name is sakshi");
// } , 15000);
//     console.log("sakshi");
//     // resolve(1001);
//     reject(new Error("internal server error"));

// });


// asynch-------

// async function getdata(){
//     setTimeout(function(){
//         console.log("i am inside set timeout block")
//     }, 30000);

// }


// let output = getdata();


// async function getdata(){


//     let response = fetch('https://jsonplaceholder.typicode.com/posts/1');

//     let data = await (await response).json();
//     console.log(response);


// }
// getdata();

















