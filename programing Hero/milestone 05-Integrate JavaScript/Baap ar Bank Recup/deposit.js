document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newdepositAmountString = depositField.value;
    const newdepositAmount = parseInt(newdepositAmountString)

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseInt(previousDepositTotalString)
    
    const currentDepositTotal = previousDepositTotal + newdepositAmount;
    depositTotal.innerText = currentDepositTotal;


    depositField.value = ''
});
