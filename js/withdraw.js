document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawTotalInputElement = document.getElementById('withdraw-input');
    const withdrawTotalElementString = withdrawTotalInputElement.value;
    const previuswithdrawTotal = parseFloat(withdrawTotalElementString);
    //console.log(previuswithdrawTotal)
    withdrawTotalInputElement.value = '';
    if(isNaN(previuswithdrawTotal)){
        alert('Plece Entrer a numbar');
        return;
    }
//     const withdrawTotalElement = document.getElementById('withdraw-balance');
//     const withdrawTotalString = withdrawTotalElement.innerText;
//     const withdrawTotal = parseFloat(withdrawTotalString);
//     console.log(withdrawTotal)
//     console.log(previuswithdrawTotal,withdrawTotal)
   
//     const TotalBalanceElement = document.getElementById('total-balance');
//     const TotalBalancesstring = TotalBalanceElement.innerText;
//     const TotalBalance = parseFloat(TotalBalancesstring);
//    if(TotalBalance < previuswithdrawTotal){
//     alert('Tor baper bank a ato taka nai');
//     return;
//    }
//    const newWithdrawTotalBalance = previuswithdrawTotal + withdrawTotal;
//    withdrawTotalElement.innerText = newWithdrawTotalBalance;
//     const newTotalBalance = TotalBalance - previuswithdrawTotal;
//     TotalBalanceElement.innerText = newTotalBalance;

if(previuswithdrawTotal >= 100){
    const withdrawTotalElement = document.getElementById('withdraw-balance');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);
    console.log(withdrawTotal)
    console.log(previuswithdrawTotal,withdrawTotal)
   
    const TotalBalanceElement = document.getElementById('total-balance');
    const TotalBalancesstring = TotalBalanceElement.innerText;
    const TotalBalance = parseFloat(TotalBalancesstring);
   if(TotalBalance < previuswithdrawTotal){
    alert('Tor baper bank a ato taka nai');
    return;
   }
   const newWithdrawTotalBalance = previuswithdrawTotal + withdrawTotal;
   withdrawTotalElement.innerText = newWithdrawTotalBalance;
    const newTotalBalance = TotalBalance - previuswithdrawTotal;
    TotalBalanceElement.innerText = newTotalBalance;
}
    else{
        alert('Minimum Withdraw $100')
    }
})
