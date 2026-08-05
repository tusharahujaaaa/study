// ##########################   Questions   ##########################
// Q1 Racaman sequence
// output [0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62]

// ##########################   Solutions   ##########################

// Q1 Racaman sequence

function racaman(n) {
  const sequence = [0];
  const seen = new Set([0]);
  let current = 0;

  for (let i = 1; i < n; i++) {
    const next = current - i;

    if (next > 0 && !seen.has(next)) {
      current = next;
    } else {
      current = current + i;
    }

    seen.add(current);
    sequence.push(current);
  }

  return sequence;
}

console.log(...racaman(20));
