var isValidSudoku = function(board) {
    
  const set = new Set();
  
  for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[i].length; j++) {
          const cell = board[i][j];
          if(cell === '.') continue;
          const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
          const row = `row: ${i}, value ${cell}`;
          const col = `col: ${j}, value ${cell}`;
          const box = `box: ${boxNum}, value ${cell}`;
          if(set.has(row) || set.has(col) || set.has(box)) 
              return false;
          set.add(row);
          set.add(col);
          set.add(box);
          
      }
  }
  
  return true
  
};