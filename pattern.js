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
    let map = new Map();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < n / 2; j++) {
            if (j < i) {
                str += ' ';
            } else {
                str += (j + 1) + ' '; // leading number
            }
        }
        map.set(i, str);
        str = '';
    }
    // console.log(map);
    for (let i = 0; i < n - 1; i++) {
        if (i < n / 2) {
            str += map.get(i);
        } else {
            str += map.get(n-i-2);
        }
        str += '\n';
    }
    console.log(str.trim());
}


draw(8);


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
    for (let i = 0; i < 2 * n - 1; i++) {
        let row = (i < n) ? i : 2 * n - 2 - i; // mirror row index
        for (let j = 0; j < n; j++) {
            if (j < row) {
                str += ' ';
            } else {
                str += (j + 1) + ' ';
            }
        }
        str += '\n';
    }
    console.log(str.trimEnd());
}

draw(4);


/*
*    ******
*    *    *
*    *    *
*    *    *
*    *    *
*    ******
*/

function drawPattern(n) {
    let str = '';
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if (i == 0 || i == n - 1 || j==0 || j==n-1 ) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }
    console.log(str.trim());
 }


drawPattern(6);

/*
*         1
*        2 2
*       3 3 3
*      4 4 4 4
*     5 5 5 5 5
*    6 6 6 6 6 6
*/

function drawPattern(n) {
    for (let i = 1; i <= n; i++) {
        let line = " ".repeat(n - i) + (i + " ").repeat(i);
        console.log(line.trimEnd());
        // let line = "";

        // // Print spaces
        // for (let j = 1; j <= n - i; j++) {
        //     line += " ";
        // }

        // // Print numbers with space
        // for (let k = 1; k <= i; k++) {
        //     line += i + " ";
        // }

        // console.log(line.trimEnd());
    }
}



drawPattern(6);