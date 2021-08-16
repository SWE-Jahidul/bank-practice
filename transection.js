function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const userAmmountText = inputField.value;
    const userAmmount = parseFloat(userAmmountText);
    // clear the deposite input values 
    inputField.value = '';
    return userAmmount;
}

function updateTotalField(useronput, depositeAmmount) {
    const depositeTotal = document.getElementById(useronput);
    const currentDepositeAmmountText = depositeTotal.innerText;
    const currentDepositeAmmount = parseFloat(currentDepositeAmmountText)
    const newDepositeTotal = currentDepositeAmmount + depositeAmmount
    depositeTotal.innerText = newDepositeTotal;
}

function updateTotalbalance(depositeAmmount,isadd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(balanceTotalText);
   
    if(isadd == true){
        const newBalanceTotal = previouseBalanceTotal + depositeAmmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else
    {
        const newBalanceTotal = previouseBalanceTotal - depositeAmmount;
        balanceTotal.innerText = newBalanceTotal;
    }
}
// handle deposit button event 
document.getElementById('deposite-submit').addEventListener('click', function () {
    const depositeAmmount = getInputValue('deposite-input');
    const useriputtotal = updateTotalField('deposite-total', depositeAmmount);
    updateTotalbalance(depositeAmmount,true);
    // update total balance 
 
});
// handel wdithdrow button event 
document.getElementById('withdrow-submit').addEventListener('click', function () {
    const userWdithrowAmmount = getInputValue('withdrow-input');
    // show user widthrow
    updateTotalField('widrow-total', userWdithrowAmmount) ;
    updateTotalbalance(userWdithrowAmmount,false);

});

