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
    twosLeft = document.getElementById('twosLeft').innerHTML = amountOfCards / 13;
    threesLeft = document.getElementById('threesLeft').innerHTML = amountOfCards / 13;
    foursLeft = document.getElementById('foursLeft').innerHTML = amountOfCards / 13;
    fivesLeft = document.getElementById('fivesLeft').innerHTML = amountOfCards / 13;
    sixsLeft = document.getElementById('sixsLeft').innerHTML = amountOfCards / 13;
    sevensLeft = document.getElementById('sevensLeft').innerHTML = amountOfCards / 13;
    eightsLeft = document.getElementById('eightsLeft').innerHTML = amountOfCards / 13;
    ninesLeft = document.getElementById('ninesLeft').innerHTML = amountOfCards / 13;
    tensLeft = document.getElementById('tensLeft').innerHTML = amountOfCards / 13;
    jacksLeft = document.getElementById('jacksLeft').innerHTML = amountOfCards / 13;
    queensLeft = document.getElementById('queensLeft').innerHTML = amountOfCards / 13;
    kingsLeft = document.getElementById('kingsLeft').innerHTML = amountOfCards / 13;
    acesLeft = document.getElementById('acesLeft').innerHTML = amountOfCards / 13;
}






function btn2 () {
    runningCount += 1;
    document.getElementById('runningCount').innerHTML = runningCount;
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
    twosLeft -= 1;
    document.getElementById('twosLeft').innerHTML = twosLeft;

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
    threesLeft -= 1;
    document.getElementById('threesLeft').innerHTML = threesLeft;
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
    foursLeft -= 1;
    document.getElementById('foursLeft').innerHTML = foursLeft;
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
    fivesLeft -= 1;
    document.getElementById('fivesLeft').innerHTML = fivesLeft;
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
    sixsLeft -= 1;
    document.getElementById('sixsLeft').innerHTML = sixsLeft;
}
function btn7 () {
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
    sevensLeft -= 1;
    document.getElementById('sevensLeft').innerHTML = sevensLeft;
}
function btn8 () {
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
    eightsLeft -= 1;
    document.getElementById('eightsLeft').innerHTML = eightsLeft;
}
function btn9 () {
    amountOfCards -= 1;
    document.getElementById('amountOfCards').innerHTML = amountOfCards;
    trueCount = runningCount / (amountOfCards / 52);
    document.getElementById('trueCount').innerHTML = trueCount.toFixed(2);
    ninesLeft -= 1;
    document.getElementById('ninesLeft').innerHTML = ninesLeft;
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
    tensLeft -= 1;
    document.getElementById('tensLeft').innerHTML = tensLeft;
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
    jacksLeft -= 1;
    document.getElementById('jacksLeft').innerHTML = jacksLeft;
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
    queensLeft -= 1;
    document.getElementById('queensLeft').innerHTML = queensLeft;
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
    kingsLeft -= 1;
    document.getElementById('kingsLeft').innerHTML = kingsLeft;
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
    acesLeft -= 1;
    document.getElementById('acesLeft').innerHTML = acesLeft;
}


document.getElementById('amountOfCards').innerHTML = amountOfCards;