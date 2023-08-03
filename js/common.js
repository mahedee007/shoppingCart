function getCardPrice(Id){
    const cardPrice = document.getElementById(Id);
const cardPriceString = cardPrice.innerText;
const cardPriceNumber = parseInt(cardPriceString);
return cardPriceNumber;
}
