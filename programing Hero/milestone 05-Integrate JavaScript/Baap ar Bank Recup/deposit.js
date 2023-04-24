document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newdepositAmountString = depositField.value;
    const newdepositAmount = parseInt(newdepositAmountString)

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseInt(previousDepositTotalString);
    
    const currentDepositTotal = previousDepositTotal + newdepositAmount;
    depositTotal.innerText = currentDepositTotal;


    // step 5: update balaance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseInt(previousBalanceString);

    // step 6: calculate balance
    const currentBalanceTotal = previousBalance + newdepositAmount;
    balanceTotal.innerText = currentBalanceTotal 
    depositField.value = ''
});

