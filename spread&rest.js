
//Spread operator (...) Merged arrays
let a=[1,2,3]
let b=[4,5,6]
let merge=[...a,...b];
console.log("Merged array",merge);

//Spread as a parameter

function add(x,y,z){
    return x+y+z;
}
let nums=[5,10,15];
console.log("Sum : ",add(...nums));

//Spread -Copying elements in another element
let original=[10,20,30]
let copy=[...original];
copy.push(40);
console.log("Original : ",original);
console.log("Copy : ",copy);

//Rest operators are passed as argument in functions
function sum(...numbers){
    let total=0;
    for(let n of numbers){
        total+=n;
    }
    return total;
}
console.log("Total : ",sum(1,2,3,4,5));

display(1,2,3,4,5);
function display(first,second, ...restArguments){
    console.log(first);
    console.log(second);
    console.log(restArguments);
}