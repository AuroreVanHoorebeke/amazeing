const main = document.querySelector("main");

const multiline = 
`***********.*
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

for (let i = 0; i < multiline.length; i++) { //corriger multiling.length-1
    const tile = document.createElement("div");
    tile.className = "tile";
    main.appendChild(tile);

    tile.textContent = multiline[i].split('');

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
        case '\n': //delete cette ligne d'une manière ou d'une autre
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

    switch (e.code){
    case "ArrowLeft":
        pos-=1;
        if(document.querySelector("body > main > div:nth-child(" + pos + ")").classList.contains("wall")){
            console.log("Ouch");
            pos+=1;
        } else {
        document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(character);
        }
        break;

    case "ArrowRight":
        pos+=1;
        if(document.querySelector("body > main > div:nth-child(" + pos + ")").classList.contains("wall")){
            console.log("Ouch");
            pos-=1;
        } else {
        document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(character);
        }
        break;

    case "ArrowUp":
        pos -= 14;
        if(document.querySelector("body > main > div:nth-child(" + pos + ")").classList.contains("wall")){
            console.log("Ouch");
            pos += 14;
        } else {
        document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(character);
        }
        break;

    case "ArrowDown":
        pos += 14;
        if(document.querySelector("body > main > div:nth-child(" + pos + ")").classList.contains("wall")){
            console.log("Ouch");
            pos -= 14;
        } else {
        document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(character);
        }
        break;

    }
});