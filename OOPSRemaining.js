//Encapsulation

//# (Private Variable)

class BankAccount{
    #balance=200; //Private Variable Declared
    deposit(amount){
        this.#balance+=amount;
        console.log(`Deposited: ${amount}`);
    }
    getBalance(){
        console.log(`Current Balance: ${this.#balance}`)
    }
}
const acc =new BankAccount();
acc.deposit(5000);
acc.getBalance();


//Inheritance

class Vehicle{
    start(){
        console.log("Vehicle started");
    }
}

class Bike extends Vehicle{
    ride(){
        console.log("Bike is being riding");
    }
}

const B = new Bike();
B.start();
B.ride();

//Polymorphism

//Method Overloading
class Animal{
    sound(){
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal{
    sound(){
        console.log("Dog Barks");
    }
}4

class cat extends Animal{
    sound(){
        console.log("cats Meows");
    }
}

const A =[new Animal(),new Dog(),new cat()];
A.forEach(ani=>ani.sound());

//or

const A1= new Animal();
A1.sound();

const A2= new Dog();
A2.sound();

const A3= new cat();
A3.sound();

//Abstraction


//Sample 1
class Payment{

    makePayments(){
        console.log("Payment is sucess");
    }


    //Hiding Data
    #paymentdetails(){
        console.log("payment reference no");
    }

}

const P = new Payment();
P.makePayments();

//Sample 2

class Mobile{
    
    turnOn(){
        console.log("Switching ON");
        //this.#bootLogs();
    }
      #bootLogs(){
        console.log("Boot Logs...");    
    }
    }
    const display = new Mobile();
    display.turnOn();
