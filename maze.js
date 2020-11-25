document.body.addEventListener("keydown", function (e) {
    if(e.code == "F12"){
    alert("Noooooooooo don't open the console :'(");} });

const body = document.querySelector("body");
const main = document.querySelector("main");
const div = document.querySelectorAll("div");

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

let lineArr = lvl2.split('\n');
main.style.width = lineArr.length;

let tileArr = [];

for (let i = 0; i < lineArr.length; i++) {
    const lineDiv = document.createElement("div");
    lineDiv.className = "lineDiv";
    main.appendChild(lineDiv);

    tileArr= lineArr[i].split('');

    for(let j=0; j < tileArr.length; j++){
        const tile = document.createElement("div");
        tile.className = "tile";
        tile.innerHTML = tileArr[j];
        lineDiv.appendChild(tile);

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
            break;
        case "T":
            tile.className = "end";
            tile.textContent = "";
            break;
        };
    };
}

//Character and end divs
const start = document.querySelector(".start");
const end = document.querySelector(".end")


const character = document.createElement("div");
character.className = "character";
start.appendChild(character);

const lostArk = document.createElement("div");
lostArk.className = "lostArk";
end.appendChild(lostArk);

let x = 2;
let y = 2;
let dy = 1; //dy = delta y
let dx = 1; //dy : delta x
let score = 0;


//Event listener
document.body.addEventListener("keydown", function move(e) {

    function test(){console.log(e.code)};
    test(); 
    switch (e.code){
    case "ArrowLeft":
        if(x>=2){
        x-=dx;
        if(document.querySelector("body > main > div:nth-child("+ y +") > div:nth-child("+ x +")").className.match("wall")){
            console.log("Ouch");
            x+=dx;
        } else {
            document.querySelector("body > main > div:nth-child("+ y +") > div:nth-child("+ x +")").appendChild(character);
        }
        };
        break;

    case "ArrowRight":
        if(x<=tileArr.length-1){
        x+=dx;
        if (document.querySelector("body > main > div:nth-child("+ y +") > div:nth-child("+ x +")").className.match("wall")){
            console.log("Ouch");
            x-=dx;
        } else {
        document.querySelector("body > main > div:nth-child("+ y +") > div:nth-child("+ x +")").appendChild(character);
        }};

        break;

    case "ArrowUp":
        if(y>=2){
        y -= dy;
        if(document.querySelector("body > main > div:nth-child("+ y +") > div:nth-child("+ x +")").className.match("wall")){
            console.log("Ouch");
            y += dy;
        } else {
        document.querySelector("body > main > div:nth-child("+ y +") > div:nth-child("+ x +")").appendChild(character);
        };
        };
        break;

    case "ArrowDown":
        if(y<=lineArr.length-1){
        y += dy;
        if(document.querySelector("body > main > div:nth-child("+ y +") > div:nth-child("+ x +")").className.match("wall")){
            console.log("Ouch");
            y -= dy;
        } else {
        document.querySelector("body > main > div:nth-child("+ y +") > div:nth-child("+ x +")").appendChild(character);
        }
        };
        break;
    }
    if (document.querySelector("body > main > div:nth-child("+ y +") > div:nth-child("+ x +")").className.match("end")){
        document.querySelector("body > main > div:nth-child("+ y +") > div:nth-child("+ x +")").appendChild(character);
        x+=dx;
        end.removeChild(lostArk);
        alert("You won!");
        score+=1;
        alert("Score: " + score);}
});
