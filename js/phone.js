
document.getElementById('btn-phone-plus').addEventListener('click', function(){
//   const inputNumberField = document.getElementById('phone-number-field');
//   const inputNumberFieldString = inputNumberField.value;
//   const inputNumber = parseInt(inputNumberFieldString);
//   const inputTotal = inputNumber + 1;
//    inputNumberField.value = inputTotal;  
const updateInputTotal = inputTotal(true);
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const updateInputTotal = inputTotal(false);
})