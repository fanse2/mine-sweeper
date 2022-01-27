//🟨💣🏳️
let tileWidth = 20;
let width = 10;
let height = 10;
let bombCount = 15; //
//  'e':empty, 'b':bomb
let bombMap = [];

let blocks = [];
let boardEl = document.querySelector("#board");

bombMap = ("b".repeat(bombCount) + "e".repeat(width * height - bombCount))
  .split("")
  .sort((a, b) => 0.5 - Math.random());

console.log(bombMap);

class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

for (let i = 0; i < width * height; i++) {
  let xx = i % width;
  let yy = Math.floor(i / width);
  blocks.push(new Tile(xx, yy));
}

//Add each block into div#board
blocks.forEach((v, i) => {
  let nodeRow, nodeCol;
  v.type = bombMap[i];

  if (v.x === 0) {
    nodeRow = document.createElement("div");
    nodeRow.id = "r-" + v.y;
    nodeRow.classList.add("row");
    boardEl.appendChild(nodeRow);
  } else {
    nodeRow = document.querySelector("#r-" + v.y);
  }

  nodeCol = document.createElement("div");

  nodeCol.id = "c-" + v.x + "-" + v.y;

  nodeCol.classList.add(v.type);
  nodeCol.classList.add("block");

  if (v.type === "b") nodeCol.innerText = "💣";
  else if (v.type === "e") nodeCol.innerText = "🟨";

  nodeRow.appendChild(nodeCol);
});

const blocksEl = document.querySelectorAll(".block");
blocksEl.forEach((b) => {
  b.addEventListener("click", () => {
    b.innerText = "🏳️";
  });
});
