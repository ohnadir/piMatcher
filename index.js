 function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = (pin + '');
    if (pinString.length == 4) {
        return pin;
    } else{
        // console.log("Got 3 digit nad calling again" , pin)
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    // console.log(pin);
    document.getElementById('display-input').value = pin;
}
document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText
    const calcInput = document.getElementById('typeNumbers');
    if (isNaN(number)) {
         if (number == 'C') {
             calcInput.value = '';
         }
    } else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

});

function verifyPin(){
    const pin = document.getElementById('display-input').value;
    const typedNumbers = document.getElementById('typeNumbers').value;
    if (pin == typedNumbers) {
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
    } else {
        const notifyFailed = document.getElementById('notify-failed');
        notifyFailed.style.display = 'block';
    }
}
