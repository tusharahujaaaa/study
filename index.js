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
*    1
*    0 1
*    1 0 1
*    0 1 0 1
*    1 0 1 0 1
*    0 1 0 1 0 1
*/

function drawPattern(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        let t = i % 2 == 0 ? 0 : 1;
        for (let j = 1; j <= i; j++) {
            str += t + ' '
            // str += (i + j) % 2 + ' '
            t = t == 0 ? 1 : 0
        }
        str += '\n'
    }
    console.log(str);

}



drawPattern(6);