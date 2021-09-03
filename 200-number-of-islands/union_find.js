const directions = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

const to1d = (x, y, cols) => x * cols + y;

var numIslands = function (grid) {
  const uf = new UnionFind(grid);
  const rows = grid.length;
  const cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "0") continue;
      for (let dir of directions) {
        const x = i + dir[0];
        const y = j + dir[1];
        if (x < 0 || y < 0 || x >= rows || y >= cols || grid[x][y] === "0")
          continue;
        uf.union(to1d(i, j, cols), to1d(x, y, cols));
      }
    }
  }
  return uf.count();
};

function UnionFind(grid) {
  const roots = {};
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "0") continue;
      const id = to1d(i, j, cols);
      roots[id] = id;
      count++;
    }
  }
  this.union = (id1, id2) => {
    const find1 = this.find(id1);
    const find2 = this.find(id2);
    if (roots[find1] !== roots[find2]) {
      roots[find2] = find1;
      count--;
    }
  };
  this.find = (id) => {
    while (roots[id] !== id) {
      roots[id] = roots[roots[id]];
      id = roots[id];
    }
    return id;
  };
  this.count = () => count;
}
