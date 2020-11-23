const main = document.querySelector("main");

const multiline = `***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********`;

console.log(multiline);

for (let i = 0; i < multiline.length; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    main.appendChild(tile);

    tile.textContent = multiline[i].split(''); // ['l', 'i', 'n', 'e', '1']

    switch (multiline[i]) {
        case "*":
            console.log("mur");
            tile.className = "wall";
            tile.textContent = "";
            break;
        case ".":
            console.log("chemin");
            tile.className = "path";
            tile.textContent = "";
            break;
        case "S":
            console.log("missou personnage");
            tile.className = "origin";
            tile.textContent = "";
            break;
        case "T":
            console.log("l'arche perdu");
            tile.className = "end";
            tile.textContent = "";
            break;
    }
};
//Character and end divs
const character = document.createElement("div");
character.className = "character";
document.querySelector("body > main > div:nth-child(15)").appendChild(character);

const lostArk = document.createElement("div");
lostArk.className = "lostArk";
document.querySelector("body > main > div:nth-child(26)").appendChild(lostArk);

//Event listener
document.body.addEventListener("keydown", function move(e) {
    console.log(e.code)
    let pos = 15;
    if (e.code === "ArrowLeft") {
        pos--;
        document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(character);
        return pos;
    }

    if (e.code === "ArrowRight") {
    pos++;
    document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(character);
    return pos;} 
    else if (e.code === "ArrowUp") {
    pos -= 13;
    document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(character);
    return pos;} 
    else if (e.code === "ArrowDown") {
    pos += 13;
    document.querySelector("body > main > div:nth-child(" + pos + ")").appendChild(character);
    return pos;}

    move(e);
});