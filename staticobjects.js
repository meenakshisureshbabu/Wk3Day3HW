class Governor {
  constructor(name,age,city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  static office = "123,High Way, Jersey City";
  static public_meeting_time = "10AM";

  static getOffice(){
    return this.office;
  }
  static isSplPass(){
    return true;
  }
}

console.log(Governor.office);
console.log(Governor.public_meeting_time);
console.log(Governor.getOffice());
console.log(Governor.isSplPass());

----------------------------------------------------------------------------------------------------------------------------------

console.log(
  "--------------------------------------------------------------------"
);
class meal {
  constructor(table, main_course, sides, drink) {
    this.main_course = main_course;
    this.sides = sides;
    this.drink = drink;
    this.table = table;
  }
}

class Person {
  constructor(name, workplace, age) {
    this.name = name;
    this.workplace = workplace;
    this.age = age;
  }

  welcomemsg() {
    console.log("WELCOME TO " + this.workplace);
  }
  goodbyemsg() {
    console.log("THANKS FOR VISITING " + this.workplace + " TODAY");
  }
  atyourservicemsg() {
    console.log("THIS IS " + this.name + " AT YOUR SERVICE");
  }
}

class PostalWorker extends Person {
  constructor(name, workplace, age, designation) {
    super(name, workplace, age);
    this.mail = [];
    this.designation = designation;
  }

  sortMail() {
    console.log("Mail sorted");
  }
  collectMail(to_name) {
    this.mail.push(to_name);
    //console.log(this.mail);
    //return this.mail;
  }

  mailStatus(mail_name) {
    console.log(mail_name + " 's mail delivered");
  }

  sendMail() {
    let mail_name = this.mail.pop();
    console.log("Mail sending in progress to " + mail_name);
    this.mailStatus(mail_name);
  }
}

class Chef extends Person {
  constructor(name, workplace, age, restaurantname, designation) {
    super(name, workplace, age);
    this.restaurantname = restaurantname;
    this.designation = designation;
    this.items_ordered = [];
  }

  receiveOrder(meal) {
    this.items_ordered.push(meal);
  }

  prepareOrder() {
    if (this.items_ordered.length > 0) {
      console.log("Preparing the order......");
      this.serveOrder(this.items_ordered[0]);
    }
  }

  serveOrder(food) {
    console.log(food, " IS SERVED SUCCESSFULLY");
    this.removeOrder(food);
  }

  removeOrder(food) {
    this.items_ordered.shift();
    this.prepareOrder();
  }
}

const postalworker_1 = new PostalWorker("TOMMY", "PostOffice", 25, "PostClerk");
let mail_receivers_1 = ["Mr.A", "Mr.B", "Mr.C", "Mr.D"];
postalworker_1.welcomemsg();
postalworker_1.atyourservicemsg();
for (let mailreceiver of mail_receivers_1) {
  postalworker_1.collectMail(mailreceiver);
  postalworker_1.sortMail();
  postalworker_1.sendMail();
}
postalworker_1.goodbyemsg();

const postalworker_2 = new PostalWorker(
  "HILFIGER",
  "PostOffice",
  35,
  "PostClerk"
);
let mail_receivers_2 = ["Mr.A", "Mr.B", "Mr.C", "Mr.D"];
postalworker_2.welcomemsg();
postalworker_2.atyourservicemsg();
for (let mailreceiver of mail_receivers_2) {
  postalworker_2.collectMail(mailreceiver);
  postalworker_2.sortMail();
  postalworker_2.sendMail();
}
postalworker_2.goodbyemsg();

const chef_1 = new Chef(
  "SALMON",
  "Restaurant",
  40,
  "Scales Restaurant",
  "Chief Cook"
);
chef_1.welcomemsg();
chef_1.atyourservicemsg();
chef_1.receiveOrder(new meal(1, "Steamed Fish", "French Fries", "Coke"));
chef_1.receiveOrder(new meal(2, "Steamed Crab", "French Fries", "Sprite"));
chef_1.prepareOrder();
chef_1.goodbyemsg();

const chef_2 = new Chef(
  "SNAPPER",
  "Restaurant",
  40,
  "Scales Restaurant",
  "Chief Cook"
);
chef_2.welcomemsg();
chef_2.atyourservicemsg();
chef_2.receiveOrder(new meal(3, "Steamed Fish", "French Fries", "Coke"));
chef_2.receiveOrder(new meal(4, "Steamed Crab", "French Fries", "Sprite"));
chef_2.prepareOrder();
chef_2.goodbyemsg();

console.log(
  "--------------------------------------------------------------------------------"
);

class BankAccount {
  constructor() {
    this.ownername = "User";
    this.balance = 10000;
    this.accountnum = 12345;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
    return this.balance;
  }
  withdraw() {
    console.log("Withdrawal from Bank Account");
  }
}

class CheckingAccount extends BankAccount {
  constructor(isoverdraftenabled){
    super();
    this.overdraftenabled = isoverdraftenabled;
  }
  withdraw(amount){
    if(this.overdraftenabled){
      console.log("OverdraftEnabled on your Checking account! Please collect the amount");
      this.balance = this.balance - amount;
      return this.balance;
    }
    else{
      console.log("Overdraft not enabled, Insufficient balance in Checking Account")
      return this.balance;
    }
  }

}

class SavingsAccount extends BankAccount{
  constructor(){
    super();
  }
  withdraw(){
    console.log("No withdrwals Allowed from the Savimgs Account")
  }
}


const checkacct = new CheckingAccount(false);
checkacct.deposit(3000);
console.log(`Amount in Account(${checkacct.accountnum}) of ${checkacct.ownername}: ${checkacct.balance}`);
console.log("Balance amount in account after withdrawal : ",checkacct.withdraw(15000));
const saveacct = new SavingsAccount();
saveacct.deposit(4000);
console.log(`Amount in Account(${saveacct.accountnum}) of ${saveacct.ownername}: ${saveacct.balance}`);
saveacct.withdraw();

