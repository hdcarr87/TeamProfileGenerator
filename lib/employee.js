class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.title = "Employee";
    }
  
    getName() {
      return this.name;
    }

    getId(){
      return this.id
    }

    getEmail(){
      return this.email
    }

    getRole(){
        return this.title;
    }
  }
  
  // creates two unique characters using the "character" constructor
  // const grace = new Character("Grace", 30, 75);
  
  // grace.printInfo();

  module.exports = Employee;

  