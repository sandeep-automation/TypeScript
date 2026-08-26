// let a:string = "Hello, World!"; // this was not allowed in ts
//  a = 345

let b:any = 10; // diclaration
b = "Hello" // Reassigning the value of b to a string, this is allowed because we have declared b as any type

console.log(b);

let number:number[] = [1, 2, 3, 4, 5];
console.log(number);


function add(a:number, b:number):number {
    return a + b;
}
console.log(add(5, 10));

//Type inference : based up on the value assigned to a variable, typescript can infer the type of the data type

let c = "Hello"; // typescript infers that c is of type string
// let c:String = "Hello"; 
