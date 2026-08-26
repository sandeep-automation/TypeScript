//instanace variable :
//instance properties or methods are you can acces only creating an object
//what is instanve variable : the main purpose is to store the data not perofrm any action
// syn : class
// {
//      name: string = Sandeep;
// }

class details1
{
    name;
    id;

    constructor(name:string,id:number)
    {
        this.name = name;
        this.id = id;
    }
}
   let obj = new details1("sandeep",2345)
   console.log(obj.name);
   console.log(obj.id);

//    console.log(obj);

//instance methode : it is perofrm an action on the object. it is related to object
// syn : class details2
//       { 
//          name : string = "sandeep";
//         display mehode2
//         {
//            this.name = name
//         }
//       }

class calculator
{
    name;
    id;

    constructor(name : string,id : number) //constructorassign value to the variable
    {
        this.name = name;
        this.id = id;
    }

    displaydetails() //methode : read the value from an object
    {
        console.log(this.name);  
        console.log(this.id);
    }
}let obj4 = new calculator("sasi",13)
 console.log(obj4);


 //static variable : dont create an object directly we can classname.variable name
 //it will created only one object and it is also belongs to the class only

 class companydetails
 {
    static companyname:string = "tcs";
 } console.log(companydetails.companyname)

 //static methode : it is also belongs to the class only

 class details
 {
    static companyname1:string = "tata consultancy services";

    displaydetails()
    {
        console.log("details. companyname1");
    }
 }console.log(details.companyname1);

