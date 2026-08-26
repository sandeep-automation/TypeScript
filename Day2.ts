//Type script types and annotations
//Function in typescript 
//Type inference in typescript
//enums and letersal types in typescript

//Type  : what kind of data a variable can hold
//Annotation : Mentioning the type of a variable explicitly by :
 //let name : String
 //let age : Number
 //let isStudent : Boolean
 //let nothing : null
 //let notdefined : undefined
 //let bigNumber : bigint

 //any and unknown types are not avalible in java script but they are in typescript

 let a:any = 10; // diclaration
    a = "Hello" // Reassigning the value of a to a string, this is allowed because we have declared a as any type
    console.log(a.toUpperCase());

    
//  let bz:unknown= 10; // diclaration
//     bz = "Hello" // Reassigning the value of b to a string, this is allowed because we have declared b as any type
//     console.log(bz.toUpperCase());

// Function in typescript :

  function greet(name:string): string 
  {
    return name
 }
 let result: string = greet("Alice");
 console.log(result);

 //arrow function in typescript
let display =(numd:number,nume:number)=>
{
  return numd + nume;
}
let result1:number = display(5,10);
console.log(result1);

//Optional parameters in typescript it is represented by a question mark (?) after the parameter name. It allows us to call the function without providing a value for that parameter.
let display1 =(numg:number,numeh?:number)=>
{
  console.log(numg,numeh);
}
display1(5); 
display1(5,10); 

//default parametres in typescript : it allows us to provide a default value for a parameter in case the caller does not provide one.
function greet1(name:string = "Guest"): void
{
    console.log("hello" + name);
}
greet1();
greet1("Alice");

//Multiple parameters in typescript
function negative(...numbers:number[]):number
{
    let sum = 0;
     for(let num of numbers)
     {
         sum += num;
     }
     return sum;
}console.log(negative(1, 2, 3, 4, 5));

//union types in typescript : it allows us to specify that a variable can exact values
let value: string | number; // value can be either a string or a number
value = "Hello"; // this is allowed
value = 10; // this is also allowed
console.log(value);

//literal types in typescript : it allows us to specify that a variable can only have a specific set of values
type Direction = "up" | "down" | "left" | "right"; // Direction can only be one of these four values
let move: Direction;
move = "up"; // this is allowed
move = "down"; // this is also allowed
// move = "forward"; // this is not allowed because "forward" is not one of the specified values
console.log(move);

//readonly properties : it is not limited to the class it is applicable in class propertires and interfaces,arrays , type aliases to prevent modification after intialization

class student
{
  //variables
  readonly collegename:string = "ABC";
  Studentname:string;
  //constrcutor
  constructor(name:string)
  {
    this.Studentname = name;
  }
  //method
  display()
  {
    console.log(this.Studentname);
    console.log(this.collegename);
  }
}
 let studentobj = new student("sandeep")
//  studentobj.collegename = "sasi"; if i want to change the colleg name i need to remove readonly inbulit methode then only it wil change
//  studentobj.collegename
//  studentobj.Studentname
studentobj.display()
