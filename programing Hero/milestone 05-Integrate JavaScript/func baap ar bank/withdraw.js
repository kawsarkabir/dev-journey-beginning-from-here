/* document.getElementById('withdraw-btn').addEventListener('click' , function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseInt(newWithdrawAmountString);
    withdrawField.value = '';
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotal.innerText;
    const previouswithdrawTotal = parseInt(previouswithdrawTotalString);
    
    const currentWithdrawTotal = previouswithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = currentWithdrawTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseInt(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = currentBalanceTotal;

});
 */

// functional way baap ar bank 
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount =getElementValueById('withdraw-total');
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    setTextElementValueById('withdraw-total', currentWithdrawTotal);

    const previousBalanceTotal = getElementValueById('balance-total');
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total' , currentBalanceTotal)
})