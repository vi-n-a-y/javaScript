const arr=[5,1,3,2,6];
console.log(arr);
function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
console.log(triple(4));

function binary1(x){
    return x.toString(2);
}

const output=arr.map((x)=> x.toString(2)
);
console.log(output);



const arr1=[5,3,7,1,9,2,6];
//filter all odd values;
const output1=arr1.filter((y)=>y%2!==0);
const output3=arr1.filter((y)=>y>=6);
console.log(output1);
console.log(output3);

//maximum number in the array

function red(a){
    let v=0;
    let greatestNumber=0;
    for(let i=0;i<a.length-1;i++){

   if(a[i]>greatestNumber){
        greatestNumber=a[i];
    }
}
    return greatestNumber;
}


console.log(red(arr1));
console.log(red(arr));

const output2=arr1.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0)
const arr3=[5,6,3,2,7,9];

const output4=arr3.reduce(function(init,val){
    if(val>init){
        init=val;
    }
    return val;
},0);

console.log(output2);

console.log(output4);




const users=[
    {firstName:"vinay",lastName:"malla",age:24},
    {firstName:"tiru",lastName:"kasi",age:23},
    {firstName:"krishna",lastName:"sarupu",age:26},
    {firstName:"rohit",lastName:"janu",age:26}
];

console.log(users[0].firstName);

console.log(users[2].lastName);
console.log(users[3].age);
console.log(users[0].age);
console.log(users[3].firstName);
const fullName=users.map((x)=>x.firstName+" "+x.lastName);

console.log(fullName);


// how many users have particular age;
const greaterAge=users.reduce(function(init,val){
    if(init[val.age]){
init[val.age]=++init[val.age]
// console.log(init);
    }else{
       init[val.age]=1; 
       console.log(init);
    }
    return init;
},{})
console.log(greaterAge);


const reduceAge=users.reduce(function(init,val){
    if(val.age>24){
     init.push(val.firstName);


    }
    return init;
},[]);

console.log(reduceAge);

const firstLessThirty=users.filter((x)=>x.age>24).map((x)=>x.firstName);

console.log(firstLessThirty);
