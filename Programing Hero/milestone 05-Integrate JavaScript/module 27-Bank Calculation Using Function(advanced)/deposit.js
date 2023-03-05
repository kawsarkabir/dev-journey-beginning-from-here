document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field')
    const previousDepositTotal = getElementValueById('deposit-total')
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total' , newDepositTotal)

    // get previous balance by using the function 
    const previousBalanceTotal = getElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total' , newBalanceTotal)

})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    // get previoust 
    const previousBalanceTotal = getElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total' , newBalanceTotal)
})