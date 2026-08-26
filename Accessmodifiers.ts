//AccessModifiers : control the visibility and accessability of class properties,methods and variables
//benfits : encapsulation , protection , Better Maintainability

//there are 3 types public and private and protected

//public accessmodifier : it will access inside and outside the class

class Employee11
{
    public empname: string = "sasi";

    display(): void
    {
        console.log(this.empname);
    }
}
   let obj12 = new Employee11();
     obj12.display();      // inside calling the variable
//   console.log(obj12.empname) //outside calling the varibale
  
// private : it can only acces the inside the class
class Employee
{
    private empname: string = "purvansh";

    display(): void
    {
        console.log(this.empname);
    }
}

let obj13 = new Employee();
obj13.display();   // inside calling the variable

//protected : it can access with i nthe class or child class

class employeetabel 
{
    protected mnc:String = "TCS"

    scortch(): void
    {
        console.log(this.mnc);
    }
}

class table extends employeetabel
{
    scortch(): void
    {
        console.log(this.mnc)

    }
}
let obj14 = new table();
obj14.scortch();

//constructor : there are 3 tyeps similar way public protected and private

//public it can access only with in the class

class employeetable2
{
    public constructor()
    {
        console.log("this is good");
    }
}  let obj15 = new employeetable2();



//Privtea : it will not allowed in creating an object
// class employeetable3
// {
//     private constructor()
//     {
//         console.log("this is bad");
//     }
// }  let obj16 = new employeetable3();

//protected :

class sanju
{
    protected constructor()
    {
        console.log("this is a parent constructor");
        
    }
}

class indu extends sanju
{
     constructor()
    {
        super();
    }
}
let obj16 = new indu();

