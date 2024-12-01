//Add money
//step-1: add an event handler to the  money button inside the form
document.getElementById('btn-add-money')
.addEventListener('click', function(event) {
    //prevent page reload or form behaviour
    event.preventDefault();
    //step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    //step-3: get pin number
    const pinInput = document.getElementById('input-pin').value;
    // step-4: verify pin number (wrong way)
    if(pinInput === '1234') {
       // console.log('adding money to your account');
       const balance = document.getElementById('balance-account').innerText;
       //step-5: convert string into number
       const addMoneyNumber = parseFloat(addMoneyInput);
       const balanceNumber = parseFloat(balance);
    //    step-6: update current balance
       const newBalance = balanceNumber + addMoneyNumber;
    // step-7: update account in the UI
    document.getElementById('balance-account').innerText = newBalance;
    }

    else {
        alert('Failed to add money! Please try again');
    }

})