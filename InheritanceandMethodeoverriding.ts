//In heritance : one class properties required another class
// parent class and child class

//code reusability
//avoid duplication
//better maintainability

//singe inheritance : it contains one single and one parent

class employee
{
    work():void
    {
       console.log("working in TCS");
    }
}
class manager extends employee
{
    hardwork():void
    {
       console.log("smart work")
    }
}

let obj1 = new manager()
obj1.hardwork();
obj1.work();

//Multiple inheritance : one parent and multiple child classes
//1 parent add
//2 child  sub
//3 child  mul

//3 child contains : 3 methods , 2child contains : 2 methods , 1 arent contins : 1 methods

class employee1
{
    work():void
    {
       console.log("working in TCS");
    }
}
class manager1 extends employee1
{
    hardwork():void
    {
       console.log("smart work")
    }
}
class manager2 extends manager1
{
    nowork():void{
        console.log("no work will be done")
    }
}

let obj2 = new manager2()
obj2.hardwork();
obj2.nowork();
obj2.work();

//hirarical inheriance : one parent and two child to
//     parent
//child   child

//one parent and one child called after that parent and remaining child

class employee2
{
    work():void
    {
       console.log("working in google");
    }
}
class manager3 extends employee2
{
    hardwork():void
    {
       console.log("working in onsite")
    }
}
let obj3 = new manager3()
obj3.hardwork();
obj3.work();
class manager4 extends employee2
{
    nowork():void{
        console.log("working in australia")
    }
}
let obj5 = new manager4()
obj5.nowork();
obj5.work();

//multiple inheriance : it contains two parent and one child
//this will not allow in our concept
//it will allowed in interfaces only

//interface : it is an template
//what to impliment
//it won't tell how to impliment
//object creation is not required here


//only diclaration no body

//Hybird inheritance : it may contains combination of two or more inheritancetypes(eg : inhertance and interface)

class sandeep
{
    genuine():void
    {
       console.log("very innocent person")
    }
}

interface puravnsh
{
    sinceare():void
}

class sasi extends sandeep implements puravnsh
{
    sinceare():void
    {
     console.log("he is very cute boy");
    }
}

let obj6 = new sasi()
obj6.genuine();
obj6.sinceare();

//methode overriding

class TCS
{
    MNC():void
    {
      console.log("employee safety");
    }
}

class TATA extends TCS
{
    override MNC():void
    {
        console.log("No safety for employee in TCS")
    }
}

let obj7 = new TATA
obj7.MNC();