//repeated words in a string


// let sentance="this is a snts for testing a repeated word are repeated in this snts";
// let words= sentance.toLowerCase().split(" ");
// let count={};

// for(let word of words)
// {
//     count[word]=(count[word] || 0) + 1;
// }
// console.log("Repeated words:");

// for(let word in count)
// {
//     if(count[word] > 1)
//     {
//         console.log(word + " : " + count [word]);
//     }
// }


// let str="This is a new sent for test a repeated word in a sent to get output";
// let wordss= str.split(" ");
// let counts={};

// for(let word of wordss)
// {
//     if(counts[word])
//         {
    
//         counts[word]++;
//         }

// }
// else
// {
//     count[word]=1;

// }
// for(let word in counts)
// {
//     if(counts[word]>1)
//     {
//         console.log(word);
//     }
// }


let str="hi hi hello wellcome tp js and js wellcome to js";
let words=str.split(" ");
let count={};

for(let word of words)
{
    if(count[word])
    {
        count[word]++;
    }
    else
    {
        count[word]=1;
    }
}
for(let key in count)
{
    if(count[key]>1)
    {
        console.log(key +" : "+ count[key]);
    }
}