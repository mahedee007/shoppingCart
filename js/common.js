function getCardPrice(Id){
    const cardPrice = document.getElementById(Id);
const cardPriceString = cardPrice.innerText;
const cardPriceNumber = parseInt(cardPriceString);
return cardPriceNumber;
}
function calculateSubTotal(){
    const cardPhonePrice = getCardPrice('phone-total');
const cardCasePrice = getCardPrice('case-total');
// SubTotal
const cardPriceNumber = cardPhonePrice + cardCasePrice;
const subTotalPrice = document.getElementById('sub-total');
const subPrice = cardPriceNumber;
subTotalPrice.innerText = subPrice;

// Tax
const taxTotal = document.getElementById('tax-amount');
const taxAmountString = (subPrice * 0.01).toFixed(2);
const taxAmountNumber = parseFloat(taxAmountString);
taxTotal.innerText = taxAmountNumber;

// grandTotal
const grandTotal = document.getElementById('final-total');
const grandTotalAmount = subPrice + taxAmountNumber;
grandTotal.innerText = grandTotalAmount;

}