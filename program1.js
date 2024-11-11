const getTotalIsles = function (grid) {

 const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Directions for horizontal and vertical movement (up, down, left, right)
  const directions = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1],  // right
  ];

  // Helper function to perform DFS
  const dfs = (r, c) => {
    // If the current cell is out of bounds or is water ('W'), return
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
      return;
    }

    // Mark the current cell as visited by changing it to water ('W')
    grid[r][c] = 'W';

    // Visit all 4 possible neighbors (up, down, left, right)
    for (const [dr, dc] of directions) {
      dfs(r + dr, c + dc);
    }
  };

  // Traverse the entire grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // If we find an unvisited land ('L'), it's the start of a new island
      if (grid[i][j] === 'L') {
        islandCount++;
        // Perform DFS to mark all cells in this island as visited
        dfs(i, j);
      }
    }
  }

  return islandCount;



};

module.exports = getTotalIsles;
