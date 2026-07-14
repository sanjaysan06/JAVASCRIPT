let A=17;
if(A%2==0)
{
    console.log('Even Number');
}
else
{
console.log('Odd Number');
}

let a=45;
let b=79;
let c=62;

if(a>=b && a >= c)
{
    console.log("largest Number is", + a);
}
else if(b>=a && b>=c)
{
    console.log("Largest Number is", + b);
}
else if(c>=a && c>=b)
{
    console.log("Largest Number is", + c);
}

let str="Ganesh123";
if(str.length<8)
{
    console.log('Weak Password');
}
else if(str.length >=8 && str.length <= 12)
{
    console.log('Strong Password');
}
else{
    console.log("very strong password");
}


let num=30;
if(num%3==0 && num%5==0)
{
    console.log('Divisible by both 3 and 5');
}
else if(num%3==0)
{
    console.log('Divisible by 3 only');
}
else if(num%5==0)
{
    console.log('Divisible by 5 only');
}
else
{
    console.log('Not Divisible by both 3 and 5');
}



// Write a program to display the weather category based on temperature.

// Below 15°C → Cold
// 15°C to 30°C → Pleasant
// Above 30°C → Hot

// Input:

// let temperature = 32;

// Expected Output: Hot

let temperature=32;
 if(temperature < 15)
 {
    console.log("Cold");
 }
 else if(temperature >=15 && temperature <=30)
 {
    console.log("Pleasant");
 }
 else
 {
    console.log("Hot");
 }

//  Write a program to display the action based on the traffic signal.

// Red → Stop
// Yellow → Ready
// Green → Go
// Otherwise → Invalid Signal

let signal= "Red";
if(signal === "Red")
{
    console.log("Stop");
}

else if(signal === "Yellow")
{
    console.log("Ready");
}
else if(signal === "Green")
{
    console.log("Go");
}
else{
    console.log("Invalid");
}


// 7. Login Validation

// Write a program to validate login credentials.

// If both username and password are correct → Login Successful
// Otherwise → Invalid Credentials


let username="admin";
let password="Admin123@";

if (username === "admin" && password === "Admin123@")
{
    console.log("Login Successful");
}
else{
    console.log("Invalid Credentials");
}

// 8. Age Category

// Write a program to display the age category.

// 0–12 → Child
// 13–19 → Teenager
// 20–59 → Adult
// 60 and above → Senior Citizen

let age=20;
if (age <=12)
{
    console.log("Child");
}
else if(age>=13 && age <=19)
{
    console.log("Teenager");
}
else if(age >=20 && age <=59)
{
    console.log("Adult");
}
else
    {
    console.log("Senior Citizen");
    }

    // 9. Vowel or Consonant

// Write a program to check whether a given character is a Vowel or Consonant.

// Input:

// let ch = "e";

// Expected Output: Vowel

let ch="e";
if(ch ==="a" || ch ==="e" || ch ==="i" || ch ==="o" || ch ==="u" || ch ==="A" || ch ==="E" ||ch === "I" || ch === "O" || ch ==="U")
{
    console.log("Vowel");
}
else{
    console.log("Consonant");
}

// 10. Shopping Discount

// Write a program to calculate the discount based on the bill amount.

// ₹500 – ₹999 → 10% Discount
// ₹1000 – ₹4999 → 20% Discount
// ₹5000 and above → 30% Discount
// Below ₹500 → No Discount

let discount=2000;
if(discount >= 500 && discount <=999)
{
    console.log("10% Discount");
}
else if(discount >= 1000 && discount <= 4999)
{
    console.log("20% Discount");
}
else if(discount === 5000)
{
    console.log("30% Discount");

}
else if(discount <500)
{
    console.log("No Discount");
}

// 11. Electricity Bill Category

// Write a program to display the electricity usage category.

// 0–100 Units → Low Usage
// 101–300 Units → Medium Usage
// Above 300 Units → High Usage

let bill =600;
if(bill <= 100)
{
    console.log("Low Usage");
}
else if(bill >= 101 && bill <=300)
{
    console.log("Medium");
}
else
{
    console.log("High Usage");
}

// 12. Leap Year

// Write a program to check whether a given year is a Leap Year.

// Input:

// let year = 2024;

// Expected Output: Leap Year

let year = 2024;
if((year %4 === 0 && year %4!==100) ||(year %400==0))
{
    console.log("Leap Year");
}
else
{
    console.log("Not a Leap Year");
}
