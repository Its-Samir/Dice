function play() {
    // Random Number 1 Generator

    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImg = "images/dice" + randomNum1 + ".png";
    var image = document.querySelectorAll('img')[0];
    image.setAttribute('src', randomDiceImg);

    // Random Number 2 Generator

    var randomNum2 = Math.floor(Math.random() * 6) + 1;
    var diceImgSrc = "images/dice" + randomNum2 + ".png";
    var image2 = document.querySelectorAll('img')[1];
    image2.setAttribute('src', diceImgSrc);

    // Heading Changing

    if (randomNum1 > randomNum2) {
        document.querySelector('h1').innerHTML = "Player 1 Won.";
    }
    else if (randomNum1 < randomNum2) {
        document.querySelector('h1').innerHTML = "Player 2 Won.";
    }
    else {
        document.querySelector('h1').innerHTML = "Draw!";
    }
}

document.querySelector('.play').addEventListener('click', function() {
    play();
});