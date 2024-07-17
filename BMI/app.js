const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const name= document.querySelector('#name').value;
    const w= document.querySelector('#weight').value;
    const h= document.querySelector('#height').value;

    const results = document.querySelector('#results');
    const message = document.querySelector('#message');

    if ((h==='')|| (h<0) || (isNaN(h))) {
        results.innerHTML="Invalid height!";
    }

    else if((w==='')|| (w<0) || (isNaN(w))) {
        results.innerHTML="Invalid weight!";
    }

    else{
        //calculate bmi
        const bmi = (w/((h*h)/10000)).toFixed(2);
        //display bmi value
        user.innerHTML= `${name}!`;
        greet.innerHTML='Hi, Your BMI is:'
        results.innerHTML=`<span>${bmi}</span>`;

        // Display End Message
        if (bmi < 18.6) {
            message.innerHTML = "You are Underweight";
        } else if (bmi > 18.6 && bmi < 24.9) {
            message.innerHTML = "Your are Healthy"
        } else if (bmi > 24.9) {
            message.innerHTML = "You are Overweight"
        }
    }
});
