const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, id, title, email, school){
        super(name, id, title, email);
        this.school = school;
        this.title = "Intern"
       }
        getSchool(){
            return this.school
        }

        getRole(){
            return this.title;
        }
    }

    module.exports = Intern