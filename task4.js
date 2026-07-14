// Task for object, class, constructor

// 1.Create a method getDetails() to display student information.

// Example:

// const s1 = new Student("Ganesh", 22, 90);
// s1.getDetails();

// Output:

// Name: Ganesh
// Age: 22
// Marks: 90

class Student
{
    constructor(name,age,marks)
    {
        this.name= name;
        this.age=age;
        this.marks=marks;
    }
    getDetails()
    {
        console.log("Name:",this.name);
        console.log("Age:",this.age);
        console.log("Marks:",this.marks);
    }
}
const s1 = new Student("Ganesh", 22, 90);
s1.getDetails();

// 2. Employee Salary Calculation

// Requirements:

// Create an Employee class.
// Constructor accepts name and salary.
// Method calculateBonus() returns 10% of salary.

class Employee
{
    constructor(name,salary)
    {
        this.name=name;
        this.salary=salary;
    }
    calculateBonus()
    {
        return this.salary *0.10;
    }

}
const emp= new Employee("Sai",50000);

console.log("Name:",emp.name);
console.log("Salary:",emp.salary);
console.log("Bonus:",emp.calculateBonus());

// 3. Bank Account

// Requirements:

// Constructor accepts account holder name and balance.
// Methods:
// deposit(amount)
// withdraw(amount)
// checkBalance()

// Example:

// acc.deposit(500);
// acc.withdraw(200);

class BankAccount
{
    constructor(accountHolder,balance)
    {
        this.accountHolder=accountHolder;
        this.balance=balance;
    }
    deposit(amount)
    {
        this.balance = this.balance+amount;
        console.log("Deposited:",amount);
    }
    withdraw(amount)
    {
        this.balance = this.balance-amount;
        console.log("Withdrawn:",amount);
    }
    checkBalance()
    {
        console.log("Current Balance:",this.balance);
    }
}
const acc = new BankAccount("SANJAY",1000);

acc.deposit(500);
acc.withdraw(200);
acc.checkBalance();

// 4. Car Object

// Requirements:

// Create a Car class with:
// brand
// model
// year
// Method displayInfo().

class Car
{
    constructor(brand,model,year)
    {
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    displayInfo()
    {
        console.log("Brand:",this.brand);
        console.log("Model:",this.model);
        console.log("Year:",this.year);
    }
}
const car1 = new Car("BMW","M5","2026");
car1.displayInfo();

// 5. Rectangle Class

// Requirements:

// Constructor accepts length and width.
// Methods:
// getArea()
// getPerimeter()

class Rectangle
{
    constructor(length,width)
    {
        this.length=length;
        this.width=width;
    }
    getArea(){
        return this.length * this.width;
    }
    getPerimeter()
    {
        return 2 *(this.length + this.width);
    }
}
const rect= new Rectangle(20,5);

console.log("Area:",rect.getArea());
console.log("Perimeter:",rect.getPerimeter());


// 6. Product Management

// Requirements:

// Create a Product class.
// Constructor:
// productName
// price
// Method:
// applyDiscount(discountPercentage)

class Product
{
    constructor(productName,price)
    {
        this.productName=productName;
        this.price=price;
    }
    applyDiscount(discountPercentage)
    {
        let discount=(this.price * discountPercentage)/100;
        let finalPrice=(this.price-discount);
        console.log("Product:",this.productName);
        console.log("OriginalPrice:",this.price);
        console.log("Discount:",discountPercentage + "%");
        console.log("Final Price:",finalPrice);

    }
}
const prod=new Product("Iphone",80000);
prod.applyDiscount(50);
