/*
*      *           *
*        *       *
*      *   *   *   *
*        *   *   *
*      *   *   *   *
*        *       *
*      *           *
* */

function checkAnagram(str1, str2) {

    // Approach 1: Using character frequency
    // // Step 1: Remove spaces and convert to lowercase
    // const normalize = str => str.replace(/\s/g, '').toLowerCase();
    // const normalizedStr1 = normalize(str1);
    // const normalizedStr2 = normalize(str2);

    // // Step 2: Sort the characters of both strings
    // const sortedStr1 = normalizedStr1.split('').sort().join('');
    // const sortedStr2 = normalizedStr2.split('').sort().join('');
    // // Step 3: Compare the sorted strings
    // return sortedStr1 === sortedStr2;


    // Approach 2
    const normalize = str => str.replace(/\s/g, '').toLowerCase();
    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);
    if (normalizedStr1.length !== normalizedStr2.length) { 
        return false;
    }

    for (let i = 0; i < normalizedStr1.length; i++) { 
        normalizedStr2
    }
    

}



console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("rat", "car"));



// "listen" & "silent" => true
// "rat" & "car" => false

