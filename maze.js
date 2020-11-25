document.body.addEventListener("keydown", function (e) {
    if (e.code == "F12") {
        alert("Noooooooooo don't open the console :'(");
    }
});

const body = document.querySelector("body");
const main = document.querySelector("main");
const div = document.querySelectorAll("div");

let lvl = 0;

const lvl1 =
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

const lvl2 =
    `**********************
*..S.................*
********************.*
*....................*
*.********************
*...................T*`

const lvl3 =
    `********
****S***
****.***
****.***
****.***
*......*
*.****.*
*..***.*
*..***.*
**.*****
*T.*****
********
`

const lvl4 =
`********************
*....****S.......***
*.**.****.******.***
*.*.........****.***
*.*.*********.**.***
*.*******.....**.***
*.*******.******.***
*.***............***
*.******************
*T******************
********************`

let levels = [lvl1, lvl2, lvl3, lvl4];

let mazeArr = [];
let tileArr = [];
let x;
let y;

function levelling() {
    let lineArr = levels[lvl].split('\n');

    for (let i = 0; i < lineArr.length; i++) {
        const lineDiv = document.createElement("div");
        lineDiv.className = "lineDiv";
        main.appendChild(lineDiv);

        mazeArr[i] = [];
        tileArr = lineArr[i].split('');

        for (let j = 0; j < tileArr.length; j++) {
            const tile = document.createElement("div");
            tile.className = "tile";
            tile.innerHTML = tileArr[j];
            lineDiv.appendChild(tile);

            mazeArr[i][j] = tile;

            switch (tileArr[j]) {
                case "*":
                    tile.className = "wall";
                    tile.textContent = "";
                    break;
                case ".":
                    tile.className = "path";
                    tile.textContent = "";
                    break;
                case "S":
                    tile.className = "start";
                    tile.textContent = "";

                    const character = document.createElement("div");
                    character.className = "character";
                    tile.appendChild(character);
                    x = j;
                    y = i;
                    break;
                case "T":
                    tile.className = "end";
                    tile.textContent = "";

                    const lostArk = document.createElement("div");
                    lostArk.className = "lostArk";
                    tile.appendChild(lostArk);
                    break;
            };
        };
    }
}

let score = 0;

//Event listener
document.body.addEventListener("keydown", function move(e) {

    function test() {
        console.log(e.code)
    };
    test();
    let destination;
    const player = document.querySelector(".character");

    switch (e.code) {
        case "ArrowLeft":

            if (x >= 2) {
                x--;
                destination = mazeArr[y][x];

                if (destination.className.match("wall")) {
                    console.log("Ouch");
                    x++;
                    destination = mazeArr[y][x];
                }
            };
            break;

        case "ArrowRight":

            if (x <= tileArr.length - 1) {
                x++;
                destination = mazeArr[y][x];

                if (destination.className.match("wall")) {
                    console.log("Ouch");
                    x--;
                    destination = mazeArr[y][x];
                }
            };
            break;

        case "ArrowUp":

            if (y >= 1) {
                console.log(y);
                y--;
                destination = mazeArr[y][x];

                if (destination.className.match("wall")) {
                    console.log("Ouch");
                    y++;
                    destination = mazeArr[y][x];
                }
            };
            break;

        case "ArrowDown":
            
                y++;
                destination = mazeArr[y][x];

                if (destination.className.match("wall")) {
                    console.log("Ouch");
                    y--;
                    destination = mazeArr[y][x];
                }
            break;
    }
    destination.appendChild(player);

    if (destination.className.match("end")) {
        destination.appendChild(player);
        x = 0;
        y = 0;
        destination = mazeArr[y][x];
        alert("You won!");
        score += 1;
        alert("Score: " + score);

        main.innerHTML = "";
        lvl++;
        levelling();
    };

});
levelling();