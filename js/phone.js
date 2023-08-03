function inputPhoneTotal (isIncrease){
    const inputNumberField = document.getElementById('phone-number-field');
  const inputNumberFieldString = inputNumberField.value;
  const inputNumber = parseInt(inputNumberFieldString);
  let updateInputTotal;
  if(isIncrease){
    updateInputTotal = inputNumber + 1;
  }
  else{
    updateInputTotal = inputNumber - 1;
  }
  
   inputNumberField.value = updateInputTotal;  
   
   return updateInputTotal;

}
function updatePhonePrice(updateInputTotal){
    const phoneTotal = document.getElementById('phone-total');
    // const phoneTotalString = phoneTotal.innerText;
    const phonePriceTotal = updateInputTotal * 1219;
    phoneTotal.innerText = phonePriceTotal;
    
}
document.getElementById('btn-phone-plus').addEventListener('click', function(){
//   const inputNumberField = document.getElementById('phone-number-field');
//   const inputNumberFieldString = inputNumberField.value;
//   const inputNumber = parseInt(inputNumberFieldString);
//   const inputTotal = inputNumber + 1;
//    inputNumberField.value = inputTotal;  
const updateInputTotal = inputPhoneTotal(true);
// const phoneTotal = document.getElementById('phone-total');
// const phoneTotalString = phoneTotal.innerText;
// const phonePriceTotal = updateInputTotal * 1219;
// phoneTotal.innerText = phonePriceTotal;
updatePhonePrice(updateInputTotal);


})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const updateInputTotal = inputPhoneTotal(false);
    updatePhonePrice(updateInputTotal);
   
})