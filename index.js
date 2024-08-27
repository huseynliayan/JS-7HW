class Person {
  constructor(company, address) {
    this.company = company;
    this.address = address;
  }
  viewUsers() {
    console.log("List of users:");
    this.users.forEach((user) => console.log(`${user.name}, ${user.address}`));
  }
}
class Admin extends Person {
  constructor(company, address) {
    super(company, address);
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log(`${user.name} was added!`);
  }

  removeUser(userName) {
    this.users = this.users.filter((user) => user.name !== userName);
    console.log(`${userName} was removed!`);
  }
}

class User extends Person {
  constructor(company, address, name) {
    super(company, address);
    this.name = name;
  }
}

//const person = new Person()
const admin = new Admin("STEP", "Koroglu");
const user1 = new User("STEP", "Koroglu", "Ahmad Ahmadzada");
const user2 = new User("STEP", "Koroglu", "Jane Smith");

admin.addUser(user1);
admin.addUser(user2);
admin.viewUsers();
//user1.viewUsers();
admin.removeUser("Ahmad Ahmadzada");
admin.viewUsers();
