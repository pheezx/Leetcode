const directions = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== "1") continue;
      count++;
      dfs(grid, i, j);
    }
  }
  return count;
};

function dfs(grid, i, j) {
  grid[i][j] = "0";
  for (let dir of directions) {
    let x = i + dir[0];
    let y = j + dir[1];
    if (
      x >= 0 &&
      y >= 0 &&
      x < grid.length &&
      y < grid[0].length &&
      grid[x][y] === "1"
    ) {
      dfs(grid, x, y);
    }
  }
}
