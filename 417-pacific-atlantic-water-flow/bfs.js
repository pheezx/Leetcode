var pacificAtlantic = function (heights) {
  const atlantic = [];
  const pacific = [];
  const atlanticQueue = [];
  const pacificQueue = [];
  const rows = heights.length;
  const cols = heights[0].length;
  for (let i = 0; i < rows; i++) {
    atlantic.push([]);
    pacific.push([]);
    pacificQueue.push([i, 0]);
    atlanticQueue.push([i, cols - 1]);
  }
  for (let i = 0; i < cols; i++) {
    pacificQueue.push([0, i]);
    atlanticQueue.push([rows - 1, i]);
  }
  bfs(heights, atlanticQueue, atlantic);
  bfs(heights, pacificQueue, pacific);
  const result = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (atlantic[i][j] && pacific[i][j]) result.push([i, j]);
    }
  }
  return result;
};

const directions = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

const isIn = (heights, x, y) =>
  x >= 0 && y >= 0 && x < heights.length && y < heights[0].length;

function bfs(heights, queue, memo) {
  while (queue.length > 0) {
    const [i, j] = queue.shift();
    memo[i][j] = true;
    for (let dir of directions) {
      const x = i + dir[0];
      const y = j + dir[1];
      if (
        isIn(heights, x, y) &&
        memo[x][y] === undefined &&
        heights[x][y] >= heights[i][j]
      ) {
        queue.push([x, y]);
      }
    }
  }
}
