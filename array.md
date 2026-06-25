Q1: - Given an array of integers nums and an integer target
return indices of two numbers such that they add up to target
nums = [2,7,11,15]
target = 9

Output: [0,1]

function twoSum(num, target) {
    // for (let i = 0; i < num.length; i++){
    //     for (let j = i + 1; j < num.length; j++) { 
    //         if (num[i] + num[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }
    
    let map = new Map();
    for (let i = 0; i < num.length; i++) { 
        let requiredNum = target - num[i];
        console.log(map.has(requiredNum), requiredNum)
        if (map.has(requiredNum)) {
            return [map.get(requiredNum), i]
        }
        map.set(num[i], i);
    }
}

Q2:- Return true if any duplicate exists in array, else false.
[1,2,3,1] => true
[1,2,3,4] => false

function checkDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {

        // APPROACH 1
        // for (let j = i + 1; j < arr.length; j++) {
        //     if (arr[i] === arr[j]) {
        //         return true;
        //     }
        // }

        // APPROACH 2
        // const current = arr[i];

        // if (arr.indexOf(current) !== arr.lastIndexOf(current)) {
        //     return true;
        // }

        // APPROACH 3
        // const current = arr[i];
        // const arrTemorary = arr.slice(i + 1)

        // if (arrTemorary.includes(current)) {
        //     return true;
        // }

        // APPROACH 4
        const set = new Set(arr);

        if (set.size !== arr.length) {
            return true;
        }
    }
    return false;
}

console.log(checkDuplicate([1,3 , 2, 3,]));
console.log(checkDuplicate([1, 2, 3, 4]));


Q3:- Valid Anagram

"listen" & "silent" => true
"rat" & "car" => false

