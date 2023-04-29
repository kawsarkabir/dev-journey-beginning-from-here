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