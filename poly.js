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
class cat extends Animal{
    constructor(name){
        super(name);
    }
    sounds(){
        console.log("Meow Mewo");
    }
}
const a1=new Animal("Dom");
const a2=new dog("Jelly");
a1.sounds();
a2.sounds();
