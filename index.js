function rollDice() {
    let diceImg = document.getElementById("diceimg");
    let diceValue = Math.floor(Math.random() * 6) + 1;
    let counter = 1;
    let rollSound = new Audio("content/dice-roll.mp3"); 

    rollSound.play(); 

    let rolling = setInterval(() => {
        diceImg.src = `content/${counter}.png`;
        counter = counter < 6 ? counter + 1 : 1;
    }, 100);

    setTimeout(() => {
        clearInterval(rolling);
        diceImg.src = `content/${diceValue}.png`;
    }, 1500);
}
