// ##########################   Questions   ##########################
// Q1 fill a matrix diagonally
// 1 2 4 7
// 3 5 8 11
// 6 9 12 14
// 10 13 15 16

// ##########################   Solutions   ##########################

// Q1 fill a matrix diagonally

// 1 2 4 7
// 3 5 8 11
// 6 9 12 14
// 10 13 15 16

// function digonalMatrix(size) {
//   let matrix = Array.from({ length: size }, () => Array(size).fill(0));
//   let num = 1;

//   for (let i = 0; i < 2 * size - 1; i++) {
//     let rowStart = i < size ? 0 : i - (size - 1);
//     let colStart = i < size ? i : size - 1;

//     while (rowStart < size && colStart >= 0) {
//       matrix[rowStart][colStart] = num++;
//       rowStart++;
//       colStart--;
//     }
//   }
//   for (const row of matrix) {
//     console.log(row.join(" "));
//   }
// }

// digonalMatrix(4);
