// Set the date we're counting down to
const countDownDate = new Date("Dec 19, 2024 23:59:59").getTime();
// countDownDate holds the number of milliseconds from January 1, 1970, 00:00:00 UTC to July 19, 2024, 23:59:59 UTC. This can be used in countdown calculations or to compare with other date and time values.

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the timeDiff between now and the countdown date
    const timeDiff = countDownDate - now;
    // console.log(timeDiff);

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display the results in the corresponding elements
    document.querySelector(".day").innerHTML = days;
    document.querySelector(".hour").innerHTML = hours;
    document.querySelector(".min").innerHTML = minutes;
    document.querySelector(".sec").innerHTML = seconds;

    // If the countdown is finished
    if (timeDiff < 0) {
        // countdown no longer updates every second.
        clearInterval(countdownFunction); 
        document.querySelector(".day").innerHTML = "0";
        document.querySelector(".hour").innerHTML = "0";
        document.querySelector(".min").innerHTML = "0";
        document.querySelector(".sec").innerHTML = "0";
        document.querySelector(".coming-soon h2").innerHTML = "We are now open!";
    }
}, 1000);
