const boardSize = 8; // Adjust the board size as needed

const knightMoves = [
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
];

function isValidMove(row, col) {
  return row >= 0 && row < boardSize && col >= 0 && col < boardSize;
}

function knightsTravails(startRow, startCol, endRow, endCol) {
  const visited = new Set();
  const queue = [[startRow, startCol, 0]]; // [row, col, moves]

  while (queue.length > 0) {
    const [currentRow, currentCol, moves] = queue.shift();

    if (currentRow === endRow && currentCol === endCol) {
      return moves;
    }

    visited.add(`${currentRow}-${currentCol}`);

    for (const [dr, dc] of knightMoves) {
      const newRow = currentRow + dr;
      const newCol = currentCol + dc;

      if (isValidMove(newRow, newCol) && !visited.has(`${newRow}-${newCol}`)) {
        queue.push([newRow, newCol, moves + 1]);
      }
    }
  }

  return -1; // No path found
}

// Example usage:
const startRow = 0;
const startCol = 0;
const endRow = 7;
const endCol = 7;

const minMoves = knightsTravails(startRow, startCol, endRow, endCol);
console.log(`Minimum moves: ${minMoves}`);
