const colorInput= document.querySelector('.color-input');
const subBtn = document.querySelector('#colorbtn');
const body = document.querySelector('body');

function isValidHex(hex){
    return /^#[0-9A-F]{6}$/i.test(hex); 
}

subBtn.addEventListener('click', function() {
    const hexValue = colorInput.value.trim();//remove white space front back
    
    if (isValidHex(hexValue)) {
        body.style.backgroundColor = hexValue; //if valid hex value, then bg color changed
        colorInput.value = ''; // Clear input field
    } else {
        alert('Invalid hex color value! Please enter a valid hex color code.');
    }
});