// stap:1-add event handler with the withdraw but
// console.log('withdraw.js');

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step: 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step: 3
    const withwrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withwrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // step: 4
    const currentWithdrawTOtal = previousWithdrawTotal + newWithdrawAmount;
    withwrawTotalElement.innerText = currentWithdrawTOtal;
    // step: 5
    const blanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);

    // step: 6
    const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;
    blanceTotalElement.innerText = newBlanceTotal;

    // step: 7
    withdrawField.value = '';

})


