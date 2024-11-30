//add event handler
//step-1: add event listener
document.getElementById('button-login')
.addEventListener('click', function(event){
   // console.log('login button clicked');
   // step-2: prevent default behaviour of form tag (prevent reloading browser after submitting )
   event.preventDefault();


//step-3: get the phone number
   const phoneNumber = document.getElementById('phone-number').value;
   console.log(phoneNumber);

})