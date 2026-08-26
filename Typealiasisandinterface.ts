// Type aliasis : creaiing own your data type
//create your own data type
//use the datat type 

//syn : type typename = Type;

type methodloly = string;
let add:methodloly = "junnu";

console.log(add);

//untion
type methodloly2 = string|number;
let add2:methodloly2 = "sasi";
let add33:methodloly2 = "scholl12";
console.log(add2);
console.log(add33);

//object 

type student =
{
    id : string,
    name : number,
    course : string
};
let student1 : student = 
{
     id : "sandy",
    name : 900,
    course : "playwright"
};
let student2 : student
console.log(student1);

//funtions

type addfunction = (a:number, b:number) => number;
let add99 : addfunction = (x,y)=>
{
    return x+y;
};
console.log(add99(33,44));

//arrays 
type stringArray = String[];
let add98:stringArray = ["mango","banana"]
console.log(add98);

//interface : it follow the contact of properties and methods class must have

interface employee
{
    name : string;
    id : number;

    //abstract methode
    work():void;    //medthode diclaration
}

class employee99 implements employee
{
    name : string;
    id : number;

    constructor(name:string,id:number)
    {
         this.name = name;
         this.id = id;
    }
   

    work():void
    {
        console.log("employee detials");
    }
}
let empobj = new employee99("sasi",99)
empobj.work();
console.log(empobj.name);
console.log(empobj.id);


//interface for object notation

interface student23  
{
    id : number;
    name12 : string;
    course45 : string;
};
let student87 : student23 = 
{
     id : 1,
    name12 : "sasi",
    course45 : "playwright"
};
console.log(student87);
