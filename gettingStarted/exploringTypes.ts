let a: number = 1

let b: number = 25

let c : string = "Hello world"
console.log(c);
let c4 :boolean[] = [true,false];
console.log(c4);

let a12 = 343;
let bhim = "gtx 1080"

let chubby = "Hello sherby "

let boolChubby = [true,false];


// you may explicityly tell the type 

//or left the job to typescript typechecker


//it is good style to let typescipt infer as many types as it can 

//keeping explcitly typed code to a minimum

//types are statically bound in typescript

let str :string = (3).toString()+ (1).toString();
console.log(str);

let str2:string = (23).toString()+[1].toString();

console.log(str2);

let ans: number = 3 + [1]; // it should throw a type error 
