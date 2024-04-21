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