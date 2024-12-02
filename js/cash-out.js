
//
document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();
    const cashOutInput = document.getElementById('input-cash-out').value;
    const cashOutPinInput = document.getElementById('input-cash-out-pin').value;

    if(cashOutPinInput === '1234') {
        const currentBalance = document.getElementById('balance-account').innerText;
        const cashOutNumber = parseFloat(cashOutInput);
        const currentBalanceNumber = parseFloat(currentBalance);

        const updateBalance = currentBalanceNumber - cashOutNumber;
        document.getElementById('balance-account').innerText = updateBalance;
        

    }

    else {
        alert('Failed ! please try again !');
    }

})