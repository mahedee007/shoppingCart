function inputCaseTotal (isIncrease){
    const inputNumberField = document.getElementById('case-number-field');
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
function updateCasePrice(updateInputTotal){
    const caseTotal = document.getElementById('case-total');
    // const caseTotalString = caseTotal.innerText;
    const casePriceTotal = updateInputTotal * 59;
    caseTotal.innerText = casePriceTotal;
}
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const updateInputTotal = inputCaseTotal(true);
//     const caseTotal = document.getElementById('case-total');
// const caseTotalString = caseTotal.innerText;
// const casePriceTotal = updateInputTotal * 59;
// caseTotal.innerText = casePriceTotal;
updateCasePrice(updateInputTotal);

})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const updateInputTotal = inputCaseTotal(false);
    // const caseTotal = document.getElementById('case-total');
    // const caseTotalString = caseTotal.innerText;
    // const casePriceTotal = updateInputTotal * 59;
    // caseTotal.innerText = casePriceTotal;
    updateCasePrice(updateInputTotal)
})