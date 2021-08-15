
// handle deposit button event 
document.getElementById('deposite-submit').addEventListener('click', function () {
    const userDepositeField = document.getElementById('deposite-input');
    const userDepositeAmmountText = userDepositeField.value;
    const userDepositeAmmount = parseFloat(userDepositeAmmountText);
    //console.log(userDepositeAmmount);

    // show user deposite 
    const depositeTotal = document.getElementById('deposite-total');
    const currentDepositeAmmountText = depositeTotal.innerText;
    const currentDepositeAmmount = parseFloat(currentDepositeAmmountText)

    const newDepositeTotal = currentDepositeAmmount + userDepositeAmmount;
    depositeTotal.innerText = newDepositeTotal;
    // clear the deposite input values 
    userDepositeField.value = '';
    // update total balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previouseBalanceTotal + userDepositeAmmount;
    balanceTotal.innerText = newBalanceTotal;


})
//
// handel wdithdrow button event 

document.getElementById('withdrow-submit').addEventListener('click', function () {
    const userInputWdithrowField = document.getElementById('withdrow-input');
    const userWidthdrowAmmoutText = userInputWdithrowField.value;
    const userWdithrowAmmount = parseFloat(userWidthdrowAmmoutText);
    console.log(userWidthdrowAmmoutText);

    // show user widthrow
    const wdithdrowTotal = document.getElementById('widrow-total');
    const currentWidrowAmmountText = wdithdrowTotal.innerText;
    // console.log(currentWidrowAmmountText);

    const crrentWidrowAmmount = parseFloat(currentWidrowAmmountText);
    const newWdithTotal = crrentWidrowAmmount + userWdithrowAmmount;
    wdithdrowTotal.innerText = newWdithTotal;
    userInputWdithrowField.value = '';


    // total balance after widthrow 
    const toalBalance = document.getElementById('balance-total')
    const totalBalancetext = toalBalance.innerText;
    const previousBlanceTotal = parseFloat(totalBalancetext);
    const newbalence = previousBlanceTotal - userWdithrowAmmount;
    toalBalance.innerText =newbalence;
})

