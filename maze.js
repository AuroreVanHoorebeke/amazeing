 document.body.addEventListener("keydown", function (e) {
    if(e.code == "F12"){
    alert("Noooooooooo don't open the console :'(");} });

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

let lineArr = multiline.split('\n');
console.log("before for loop");
let tileArr = [];


for (let i = 0; i < lineArr.length; i++) { //corriger multiling.length-1
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
            tile.className = "origin";
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
const character = document.createElement("div");
character.className = "character";
document.querySelector("body > main > div:nth-child(2) > div:nth-child(2)").appendChild(character);

const lostArk = document.createElement("div");
lostArk.className = "lostArk";
document.querySelector("body > main > div:nth-child(2) > div:nth-child(13)").appendChild(lostArk);

let pos = 16;
let score = 0;

//Event listener
document.body.addEventListener("keydown", function move(e) {
    // function checkWall (){} ; 
    function test(){console.log(e.code)};
    test(); 
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
