// //prime number between 2 to 100


// for(let i=2;i<=100;i++)
// {
//     let isPrime=true;
//     for(let j=2;j<i;j++)
//     {
//         if(i%j===0)
//         {
//             isPrime=false;
//             break;
//         }
//     }
//     if(isPrime)
//     {
//         console.log(i);
//     }
// }



// for (let i=2;i<=100;i++) {

//     let count=0;

//     for (let j=1;j<=i;j++) {

//         if (i%j===0) {
//             count++;
//         }
//     }

//     if (count===2) {
//         console.log(i);
//     }
// }



let num = 17;
let count = 0;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        count++;
    }
}

if (count == 0) {
    console.log(num + " is a prime number");
}

else 
{
    console.log(num + " is not a prime number");
}