document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositTotalInput = document.getElementById('depoit-input');
    const depositTotalInputInnerString = depositTotalInput.value;
    const depositTotal = parseFloat(depositTotalInputInnerString);
    depositTotalInput.value = '';
    if(isNaN(depositTotal)){
        alert('plece Enter a nambar');
        return;
    }
    //console.log(depositTotal)
    if(depositTotal >= 50){
        const depoitAmountPreveus = document.getElementById('deposit-ammount');;
    const depoitAmountString = depoitAmountPreveus.innerText;
    const depoitAmmount =  parseFloat(depoitAmountString);
    const totalDepositBalance = depositTotal + depoitAmmount;
    depoitAmountPreveus.innerText = totalDepositBalance;
    const TotalBalanceElement = document.getElementById('total-balance');
    const TotalBalancesstring = TotalBalanceElement.innerText;
    const TotalBalance = parseFloat(TotalBalancesstring);
    const newTotalBalance = TotalBalance + depositTotal;
    TotalBalanceElement.innerText = newTotalBalance;
    }
    else{
        alert('Minimum Diposit $50')
    }
})