const main = document.querySelector("main");

const boardPattern = `***********.*
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

boardPattern.split('\n');

/**
 * Setting up the game
 */
function setup(){
    drawBoard();
}

setup();
/**
 * Uses boardPattern to generate divs with different classes and draw the board
 * */
function drawBoard(){
for (let i = 0; i < boardPattern.length; i++) { //corriger multiling.length-1
    
    const tile = document.createElement("div");
    tile.className = "tile";
    main.appendChild(tile);

    tile.textContent = boardPattern[i].split('');

    switch (boardPattern[i]) {
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
}

const character = document.createElement("div");
character.className = "character";
document.querySelector("body > main > div.origin").appendChild(character)

const lostArk = document.createElement("div");
lostArk.className = "lostArk";
document.querySelector("body > main > div:nth-child(27)").appendChild(lostArk);


let pos = 16;
let score = 0;
//Event listener
document.body.addEventListener("keydown", function move(e) {
    // function checkWall (){} ;  
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
        if (document.querySelector("body > main > div:nth-child(" + pos + ")").classList.contains("wall")){
            console.log("Ouch");
            pos-=1;
        } else if (document.querySelector("body > main > div:nth-child(" + pos + ")").classList.contains("end")){
            document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(character);
            pos+=1;
            document.querySelector("body > main > div:nth-child(27)").removeChild(lostArk);
            alert("You won!");
            score+=1;
            alert("Score: " + score);
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