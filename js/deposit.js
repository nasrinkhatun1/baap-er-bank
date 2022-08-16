// step-1: add event listener
document.getElementById('btn-Deposit').addEventListener('click', function () {
    // step-2: get the  deposit amount from the deposit input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3:get the deposit current total amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the depositTotal
    depositTotalElement.innerText = currentDepositTotal;
    // step-5: get blance current total
    const blanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);
    // step-6:calculat current total blance
    const currentBlanceTotal = previousBlanceTotal + newDepositAmount;
    // set the blanceTotal
    blanceTotalElement.innerText = currentBlanceTotal;
    // step-7:clear the deposit field
    depositField.value = '';
})


