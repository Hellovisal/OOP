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