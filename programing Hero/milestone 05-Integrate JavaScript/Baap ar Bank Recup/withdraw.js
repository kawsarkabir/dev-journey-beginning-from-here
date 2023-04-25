document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseInt(newWithdrawAmountString);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseInt(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = currentWithdrawTotal;


    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseInt(previousBalanceString);

    const currentBalanceTotal = previousBalance - newWithdrawAmount;
    balanceTotal.innerText = currentBalanceTotal;
    
    withdrawField.value = '';


})