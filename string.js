// ##########################   Ouestions   ##########################
// Q1 Reverse a string
// Q2 Find the largest odd number from given string
// Q3 Check the correctness of brackets/bracecs


// ##########################   Solutions   ##########################

// Q1 Reverse a string
// input 1234    output 4321

// function reverse() {
//   let string = "1234";
//   let res = 0;
//   for (let i = string.length - 1; i >= 0; i--) {
//     res = res * 10 + +string[i];
//   }
//   console.log(res.toString());
// }

// reverse();
// Q1 Reverse a string
// function reverseString(input) {
//   let output = "";
//   for (let i = input.length - 1; i >= 0; i--) {
//     output += input[i];
//   }
//   return output;
// }

// let input = "1234";
// let output = reverseString(input);
// console.log(output);

// ***************************************************************

// Q2 Find the largest odd number from given string

// let str = "5688248";
// let str1 = "61632826";
// let str2 = "616338261";

// function highestOdd(string) {
//   for (let i = string.length - 1; i >= 0; i--) {
//     // let temp = +string % 10;
//     // if (temp % 2 != 0) {
//     //   return string;
//     // } else {
//     //   string = Math.floor(string / 10).toString();
//     // }

//     if (string[i] % 2 != 0) {
//       return string;
//     } else {
//       string = string.slice(0, -1);
//     }
//   }
// }

// console.log(highestOdd(str));
// console.log(highestOdd(str1));
// console.log(highestOdd(str2));


// ***************************************************************

// Q3 Check the correctness of brackets/bracecs

// function isValid(str) {
//     let stack = [];
//     for (let char of str) {
//         if (char === '(' || char === '[' || char === '{') {
//             stack.push(char);
//         } else if (char === ')' || char === ']' || char === '}') {
//             if (stack.length === 0) return false;
            
//             let top = stack.pop();
//             if ((char === ')' && top !== '(') ||
//                 (char === ']' && top !== '[') ||
//                 (char === '}' && top !== '{')) {
//                 return false;
//             }
//     }
    
//   }

//   return stack.length === 0;
// }

// let input = "({({[{{}}]})})";
// console.log(isValid(input));



// ***************************************************************
