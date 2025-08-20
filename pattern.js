/*
    ######
     *****
      ####
       ***
        ##
         * 
*/




function draw(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j < i) {
                str += ' ';
            } else {
                str += (i % 2 === 0) ? '#' : '*';  // symbols
            }
        }
        str += '\n';
    }
    console.log(str.trim());
}


draw(6);




/* 
*    1 2 3 4
*     2 3 4
*      3 4
*       4
* */



function draw(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j < i) {
                str += ' ';
            } else {
                str += (j + 1) + ' '; // leading number
            }
        }
        str += '\n';
    }
    console.log(str.trim());
}


draw(4);




/* 
*    1 2 3 4
*     2 3 4
*      3 4
*       4
*      3 4
*     2 3 4
*    1 2 3 4
* */




function draw(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j < i) {
                str += ' ';
            } else {
                str += (j + 1) + ' '; // leading number
            }
        }
        str += '\n';
    }
    for (let i = n - 1; i > 0; i--) {
        for (let j = 0; j < n; j++) {
            if (j < i - 1) {
                str += ' ';
            } else {
                str += (j + 1) + ' '; // leading number
            }
        }
        str += '\n';
    }
    console.log(str.trim());
}


draw(4);