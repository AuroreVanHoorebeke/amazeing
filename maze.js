const main = document.querySelector("main");

const multiline = `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`;

multiline.split('\n');

for (let i = 0; i < multiline.length; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    main.appendChild(tile);

    tile.textContent = multiline[i].split(''); // ['l', 'i', 'n', 'e', '1']

    switch (multiline[i]) {
        case "*":
            tile.className = "wall";
            tile.textContent = "";
            break;
        case ".":
            tile.className = "path";
            tile.textContent = "";
            break;
        case "S":
            tile.className = "origin";
            tile.textContent = "";
            break;
        case "T":
            tile.className = "end";
            tile.textContent = "";
            break;
        case '\n':
            tile.style.display = "none";
    }
};
//Character and end divs
const character = document.createElement("div");
character.className = "character";
document.querySelector("body > main > div:nth-child(16)").appendChild(character);

const lostArk = document.createElement("div");
lostArk.className = "lostArk";
document.querySelector("body > main > div:nth-child(27)").appendChild(lostArk);

let pos = 16;

//Event listener
document.body.addEventListener("keydown", function move(e) {

    if (e.code === "ArrowLeft") {
        pos-=1;
        document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(character);
        return pos;
    }
    if (e.code === "ArrowRight") {
        pos+=1;
        document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(character);
        return pos;
    }

    if (e.code === "ArrowUp") {
        pos -= 14;
        document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(character);
        return pos;
    }

    if (e.code === "ArrowDown") {
        pos += 14;
        document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(character);
        return pos;
    }
});