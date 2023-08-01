function inputTotal (isIncrease){
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