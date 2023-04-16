// step 1:
document.getElementById('deposit-btn').addEventListener('click', function(){
    
    // step 2:
    const depositField = document.getElementById('deposit-field')
    const newDepositAmountString =depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step 3:
    depositField.value = '';

    // step 4:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString =depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 5:
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step 6:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //  step 7:
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})

// withdraw function here
// step 1:
document.getElementById('withdraw-btn').addEventListener('click', function(){
    
    // step 2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);

    // step 3: 
    withdrawField.value ='';

    // step 4:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step 5:
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    
    // step 6:
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString =balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 7:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})