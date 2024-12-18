//function xyz(){

//    var a=4;
//    var b=7;
//    console.log(a);
//    console.log(a+b);
//}
//console.log(a)
//console.log("something");
//const sub=(a,b)=>{
//    return a-b;
//} 
//console.log(sub(5,2));
//console.log(sub(7,3));
// // Function Declaration
// function greet(name){
//     return `Hello, ${name}!`;
// }
// console.log(greet('john'));
//console.log(greet('alice'));
//console.log(greet('micheal'));


// // Function Expression (Anonymous Function)
// const sum=function(a,b){
//     return a+b;
// }
// console.log(sum(4,8));
//console.log(sum(25,37))



// //Arrow Function

// const multiply=(a,b)=>{
//     a=b-a;
//     return a*b;
// }
// console.log(multiply(5,6));
// console.log(multiply(7,3));

// //Template Literals
// let name1="Alice";
// let greeting =`Hello, ${name1}!`;
// console.log(greeting);

// //Destructuring Assignment

// const person={name:'micheal',age:25, job:'software'};
// const {name,age,job}=person;
// console.log(name,age,job);

// // spread operator

// const arr1=[1,2,3,4];
// const arr2=[...arr1,5,6];
// console.log(arr2);
//console.log(arr1);

// // Array and array methods

// const numbers=[1,2,3,4,5,6,7];
// numbers.forEach((nums)=>console.log(nums));

// const doubled=numbers.map((nums)=>nums*2);
// console.log(doubled);

// const multiplyByTwo=numbers.filter((nums2)=>nums2%2==0);
// console.log(multiplyByTwo);

// const sumAll=numbers.reduce((acc,red)=>acc+red,0);
// console.log(sumAll);

// // objects

// const p1={
//     name:'jonathan',
//     age:30,
//     city:'alaska',
//     greet(){
//         return `Hello, ${this.name}`;
//     }
// };
// console.log(p1.age);
// console.log(p1.name);
// console.log(p1.city);
// console.log(p1.greet());

// // Asynchronous JavaScript

// console.log("I");
// console.log("eat");
// // setTimeout(()=>{
// //     console.log("ice-cream");
// // },1000);
// console.log("with");
// console.log("spoon");


//callbacks

// function step1(calling){
//     console.log("step1");
//     calling("some data");
// }

// function step2(data){
//     console.log("step2 : ",data);
// }

// step1(step2);







// const order=(stock_num,callback_fn)=>{
//     setTimeout(()=>{
//         console.log(`${stock.Fruits[stock_num]} order is received`);
//         callback_fn();
//     },2000)
    
// }

// const production =()=>{
//     setTimeout(()=>{
//         console.log("production has started");
//         setTimeout(()=>{
//             console.log("The fruits has been Chopped");
//             setTimeout(()=>{
//                 console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);
//                 setTimeout(()=>{
//                     console.log("mission has been started");

//                     setTimeout(()=>{
//                         console.log(`ice-cream was placed on${stock.holder[0]}`)
                        
//                         setTimeout(()=>{
//                             console.log(`${stock.toppings[1]} was added as toppings`);
//                         })
//                     },2000);
//                 },1000);
//             },1000);
//         },2000);
//     },0);
  
// }

// order(1,production);


let stock={
    Fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}

// promise 
let isShopOpen=true;
// let order1=((time,work)=>{
// return new Promise((resolve,reject)=>{
//     if(isShopOpen){
//         setTimeout(()=>{
//             resolve(work());
//         },time)
//     }
//     else{
//         reject(console.log("our shop is closed"));

//     }


// })
// })

// order1(2000,()=>console.log(`${stock.Fruits[0]} was ordered`))
// // if we put ';' at the end its gives you error
// .then(()=>{
//     return order1(0,()=> console.log("production has started"));
// })
// .then(()=>{
//     return order1(2000,()=>console.log("the fruits has been chopped"));
// })
// .then(()=>{
//     return order1(1000,()=>console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`));
// })
// .then(()=>{
//     return order1(1000,()=>console.log("mission has been started"));
// })
// .then(()=>{
//     return order1(2000,()=>console.log(`ice-cream was placed at top of the ${stock.holder[0]}`));
// })
// .then(()=>{
//     return order1(1000,()=>console.log(`${stock.toppings[1]} was added in toppings`));
// })
// .then(()=>order1(1000,()=>console.log("serve the ice-cream")))

// .catch(()=>console.log("customer left"))
// .finally(()=>console.log("our shop is closed"));



// async or await

// let topping_choice=()=>{

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(console.log("which toppings do you want!") );
//         },3000)
       
//     })
// }

// async function kitchen(){

//     console.log(" A ");
//     console.log(" B ");
//    await topping_choice();
//     console.log(" D ");
//     console.log(" E ");
// }
// kitchen();

// console.log("washing dishes");
// console.log("taking other orders");
// console.log("cleaning tables");



function time(ms){
    return new Promise((resolve,reject)=>{
        if(isShopOpen){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log("shop is closed"));
        }
    })
}

async function order3(){
   try{
    await time(2000);
    console.log(`${stock.Fruits[1]}`);
    await time(0);
    console.log("order was placed");
    await time(2000);
    console.log("fruits was cutted");
    await time(2000);
    console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was placed`)
    await time(1000);
    console.log("mission has started");
    await time(2000);
    cconsole.log(`ice-cream was placed at top of the ${stock.holder[0]}`);
    await time(2000);
    console.log(`${stock.toppings[1]} was added in toppings`);
    await time(1000);
console.log("ice-cream was served");
   }
   catch{
    console.log("customer left");
   }
   finally{
    console.log("end of the day shop is closed")
   }
}

order3();



