//add event handler
//step-1: add event listener
document.getElementById('button-login')
.addEventListener('click', function(event){
   // console.log('login button clicked');
   // step-2: prevent default behaviour of form tag (prevent reloading browser after submitting )
   event.preventDefault();


//step-3: get the phone number
   const phoneNumber = document.getElementById('phone-number').value;
   const pinNumber = document.getElementById('pin-number').value;
   console.log(phoneNumber, pinNumber);

   if(phoneNumber === '1234' && pinNumber === '1234') {
    console.log('You are logged in');
    window.location.href = '/home.html';
   } 

   else {
    alert('wrong phone number or pin');
   }

})