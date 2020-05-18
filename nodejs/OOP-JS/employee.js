module.exports = class Employee {
    
    // constructor()
    // {
    //     console.log('default constructor!');
    // }

    constructor(firstName, lastName)
    {
        console.log('second constructor! '+ firstName+' '+lastName);
        this.first_name = firstName;
        this.last_name = lastName;


        this.start_date = new Date();
    }

    getFullName(){
        return this.first_name + ' ' + this.last_name;
    }

    getPaidTime(){
        
    }

    getDefaultName(){
        return "Nguyen";
    }

}