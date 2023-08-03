function getCardPrice(Id){
    const cardPrice = document.getElementById(Id);
const cardPriceString = cardPrice.innerText;
const cardPriceNumber = parseInt(cardPriceString);
return cardPriceNumber;
}

function setElementbyID(Id, value){
    const setElemnt = document.getElementById(Id);
    setElemnt.innerText = value;
}

function calculateSubTotal(){
    const cardPhonePrice = getCardPrice('phone-total');
const cardCasePrice = getCardPrice('case-total');
// SubTotal
const cardPriceNumber = cardPhonePrice + cardCasePrice;
// const subTotalPrice = document.getElementById('sub-total');

// subTotalPrice.innerText = subPrice;
setElementbyID('sub-total', cardPriceNumber);

// Tax
// const taxTotal = document.getElementById('tax-amount');
const taxAmountString = (cardPriceNumber * 0.01).toFixed(2);
const taxAmountNumber = parseFloat(taxAmountString);
// taxTotal.innerText = taxAmountNumber;
setElementbyID('tax-amount', taxAmountNumber);

// grandTotal
// const grandTotal = document.getElementById('final-total');
const grandTotalAmount = cardPriceNumber + taxAmountNumber;
// grandTotal.innerText = grandTotalAmount;
setElementbyID('final-total', grandTotalAmount);

}