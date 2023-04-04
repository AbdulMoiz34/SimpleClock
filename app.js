setInterval(function () {
    var sec = document.getElementById("sec");
    var min = document.getElementById("min");
    var hour = document.getElementById("hour");
    var day = document.getElementById("day");
    var amPm = document.getElementById("AM-PM");
    var meridium = "AM";
    // exact time;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var dayIndex = date.getDay();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours > 12) {
        hours -= 12;
        meridium = "PM";
    } if (hours < 10) {
        hours = "0" + hours;
    }

    // For Day
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var fullDay = dayNames[dayIndex];
    // Sending in html elements
    sec.innerText = seconds;
    min.innerText = minutes + " : ";
    hour.innerText = hours + " : ";
    amPm.innerText = meridium;
    day.innerText = fullDay;

},1000)