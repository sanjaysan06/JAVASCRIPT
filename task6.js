
//Reverse the words in a string and also reverse the letters in each word


const str ="My ctc is 20LPA";
let sp=str.split(" ");
let reverse="";

for(let i=sp.length-1;i>=0;i--)
{
    reverse +=sp[i]+ " ";
}
console.log(reverse);

let sp1=str.split(" ");
let reverse1="";

for(let i=0;i<sp1.length;i++)
{
    for(let j=sp1[i].length-1;j>=0;j--)
    {
        reverse1 +=sp1[i][j];
    }
    reverse1 +=" ";
}
console.log(reverse1);



















































// let str="My ctc is 20LPA";
// let reverse=" ";

 
// // for(let i=str.length-1;i>=0;i--)
// // {
// //     reverse +=str[i];

// }
// for(let i=0; i<str.length().map();i++)
// {
//     reverse +=str[i];
// }
// console.log(reverse);


// let str = "My ctc is 20LPA";

// let words = str.split(" ");

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].split("").reverse().join("");
// }

// console.log(words.join(" "));

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].split("").reverse().join("");
// }

// console.log(words.reverse().join(" "));

// for(let i=str.split-1;i>=0;i--)
// {
//     words +=str[i];
// }
// console.log(words);



// const str="My ctc is 20LPA";

// let words=str.split(" ");
// let reverse="";

// for(let i=0;i<=str.length-1;i++)
// {
//     for(let j=(words[i].length-1);j>=0;j--)
//     {
//         reverse +=words[i][j]; //word[0] [yM]
//     }
//     reverse +=" ";
// }
// console.log(reverse);

// let word=str.split("");
// let rev="";
// for(let x=str.length-1;x>=0;x--)
// {
//     rev +=word[x];
// }
// console.log(rev);
