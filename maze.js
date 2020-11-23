const main = document.querySelector("main");

// const tileDiv = document.createElement("div");
// tileDiv.className = "tile";
// main.appendChild(tileDiv);

// const lineDiv = document.createElement("div");
// lineDiv.className = "line";
// main.appendChild(lineDiv);

const wallTile = document.createElement("div");
wallTile.className = "wall";
main.appendChild(wallTile);

const pathTile = document.createElement("div");
pathTile.className = "path";
main.appendChild(pathTile);

const multiline = `***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********`;

console.log(multiline);

for (let i = 0; i < multiline.length; i++) {
    const tileDiv = document.createElement("div");
    tileDiv.className = "tile";
    main.appendChild(tileDiv);

    tileDiv.textContent = multiline[i].split('');// ['l', 'i', 'n', 'e', '1']
}
