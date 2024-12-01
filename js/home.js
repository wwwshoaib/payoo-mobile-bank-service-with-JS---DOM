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
    console.log(addMoneyInput, pinInput);

})