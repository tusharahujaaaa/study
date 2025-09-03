/*
*      *           *
*        *       *
*      *   *   *   *
*        *   *   *
*      *   *   *   *
*        *       *
*      *           *
* */

/*
*    1 2 3 4 5 6 
*    1 2 3 4 5 
*    1 2 3 4 
*    1 2 3 
*    1 2 
*    1
*/

function drawPattern(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <=n ; j++) {
            str += j + ' '
        }
        str += '\n'
    }
    console.log(str);

}



drawPattern(6);