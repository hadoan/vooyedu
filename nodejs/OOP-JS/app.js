const Employee = require('./employee');

console.log("Hello OOP!");

const haEmployee = new Employee();
//Property (thuoc tinh)
haEmployee.first_name = 'Ha';
haEmployee.last_name ='Doan';


console.log(haEmployee.first_name);
console.log("full name: " + haEmployee.getFullName());

haEmployee.first_name = 'Ha1';
console.log(haEmployee.first_name);
console.log("full name: " + haEmployee.getFullName());

console.log(haEmployee.getDefaultName());

const nguyen = new Employee("Nguyen","Nguyen");
nguyen.first_name = 'Nguyên';
// nguyen.last_name = 'Nguyen';

console.log(nguyen.getFullName());



const employees = [];
console.log('employees: '+ employees);

employees.push(haEmployee);

employees.push(nguyen);


const hanh = {
    first_name: 'Hanh',
    last_name: 'Vu'
};

hanh.getFullName = function(){
    return this.first_name + ' '+this.last_name;
}

console.log( hanh.getFullName());

employees.push(hanh);


console.log('employees: '+ JSON.stringify(employees));



const cities = ['Hanoi', "Sai Gon", 'Da Nang'];
cities.push('Hai Phong');

cities.sort();
console.log(cities);
