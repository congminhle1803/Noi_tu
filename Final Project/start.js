function getNumberOfPlayers() {
    var playerCount = document.getElementById("playerCount").value;
    console.log(playerCount);
    localStorage.setItem("playerCount", playerCount);
}

document.getElementById("start").onclick = getNumberOfPlayers;
