//================= [Encapsolution] ===========
class Employee{
    setEmp(name,id,gender){
        this.name=name;
        this.id=id;
        this.gender=gender;
    }
    getEmpName(){
        return this.name;
    }
    getEmpId(){
        return this.id;
    }
    getEmpGender(){
        return this.gener;
    }

}
let emp1=new Employee();
    emp1.setEmp('SAL',"001","M");
    console.log(emp1.getEmpName());
    console.log(emp1.getEmpId());
// ================ [inheritance] ===========
class animal{
    eat(){
        console.log(`this  ${this.name} is eating`);
    }
}
class dog extends animal{
    name ="dog";
}
const dogs=new dog();
dogs.eat();
// ====================[Polymorphism]=================
class Animal{
    constructor (name){
        this.name=name;
    }
    sounds(){
        console.log("Generic Animal sound!");
    }
}
class dog extends Animal{
    constructor (name){
        super(name);
    }
    sounds(){
        console.log("woof! woof!");
    }
}
const a1=new Animal("Dom");
const a2=new dog("Jelly");
a1.sounds();
a2.sounds();
