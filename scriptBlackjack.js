//NAV
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');

    });
}
navSlide();

//BLACKJACK
runningCount = 0;
trueCount = 0;
decks = 0;
amountOfCards = 0



function deckBtn() {
    decks = document.getElementById('decks').value;
    console.log(decks);
    amountOfCards = decks * 52;
    console.log(amountOfCards);
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
}






function btn2 () {
    runningCount += 1;
    document.getElementById('runningCount').innerHTML = runningCount;
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);

}
function btn3 () {
    runningCount += 1;
    document.getElementById('runningCount').innerHTML = runningCount;
    trueCount = runningCount / decks;
    document.getElementById('trueCount').innerHTML = trueCount;
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
}
function btn4 () {
    runningCount += 1;
    document.getElementById('runningCount').innerHTML = runningCount;
    trueCount = runningCount / decks;
    document.getElementById('trueCount').innerHTML = trueCount;
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
}
function btn5 () {
    runningCount += 1;
    document.getElementById('runningCount').innerHTML = runningCount;
    trueCount = runningCount / decks;
    document.getElementById('trueCount').innerHTML = trueCount;
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
}
function btn6 () {
    runningCount += 1;
    document.getElementById('runningCount').innerHTML = runningCount;
    trueCount = runningCount / decks;
    document.getElementById('trueCount').innerHTML = trueCount;
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
}
function btn7 () {
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
}
function btn8 () {
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
}
function btn9 () {
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
}
function btn10 () {
    runningCount -= 1;
    document.getElementById('runningCount').innerHTML = runningCount;
    trueCount = runningCount / decks;
    document.getElementById('trueCount').innerHTML = trueCount;
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
}
function btnJ () {
    runningCount -= 1;
    document.getElementById('runningCount').innerHTML = runningCount;
    trueCount = runningCount / decks;
    document.getElementById('trueCount').innerHTML = trueCount;
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
}
function btnQ () {
    runningCount -= 1;
    document.getElementById('runningCount').innerHTML = runningCount;
    trueCount = runningCount / decks;
    document.getElementById('trueCount').innerHTML = trueCount;
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
}
function btnK () {
    runningCount -= 1;
    document.getElementById('runningCount').innerHTML = runningCount;
    trueCount = runningCount / decks;
    document.getElementById('trueCount').innerHTML = trueCount;
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
}
function btnA () {
    runningCount -= 1;
    document.getElementById('runningCount').innerHTML = runningCount;
    trueCount = runningCount / decks;
    document.getElementById('trueCount').innerHTML = trueCount;
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
}


document.getElementById('amountOfCards').innerHTML = amountOfCards;