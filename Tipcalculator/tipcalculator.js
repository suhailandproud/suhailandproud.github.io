const input1 = document.getElementById('bill');
const input2 = document.getElementById('members');

const input3 = document.getElementById('service')

const button = document.querySelector('.button');
const totaltip = document.querySelector('.finalamount');
button.addEventListener('click', function() {
totaltip.innerText = ((input1.value * input3.value) / input2.value);
})