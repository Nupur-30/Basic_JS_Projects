var password=document.getElementById("password");

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";

for (var i = 0; i < passwordLength; i++) {
   var randomIndex = Math.floor(Math.random() * chars.length);
   password += chars[randomIndex];
  }
        document.getElementById("password").value = password;
 }

// After 12 iterations, the password string contains 12 randomly selected characters, forming the final password. This password is then assigned to the value property of the input field with ID "Password"
function copyPassword() {
  var copyText = document.getElementById("password");
  navigator.clipboard.writeText(copyText.value)
    .then(function() {
      alert('Text copied to clipboard');
    })
    .catch(function(err) {
      alert('Failed to copy text: ', err);
    });
}