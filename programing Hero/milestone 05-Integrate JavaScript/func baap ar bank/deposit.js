//normal way 
/* document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString =depositField.value;
    const newDepositAmount = parseInt(newDepositAmountString);
    depositField.value = '';

    
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseInt(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotal.innerText = currentDepositTotal;
   

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseInt(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = currentBalanceTotal;
}) */
// functional way
document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-total');

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', currentDepositTotal);

    const previousBalanceTotal = getElementValueById('balance-total');
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total' , currentBalanceTotal)
 });

