window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
    let date = new Date();



    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    //if (h < 10) {
    //    h = "0" + h;
    // }

    //if (m < 10) {
    //   m = "0" + m;
    // }

    //if (s < 10) {
    //    s = "0" + s;
    // }

    h = h < 10 ? (h = "0" + h) : h;
    m = m < 10 ? (m = "0" + m) : m;
    s = s < 10 ? (s = "0" + s) : s;

    // const time = h + ":" + m + ":" + s + "" + '|' + "" + session;
    const time = `${h}:${m}<small>.${s}|${session}</small>`;


    document.getElementById("DisplayClock").innerHTML = time;
    setTimeout(showTime, 1000);

    //body background

    let bg;

    const userName = "Steve"
    const user = document.getElementById("User");


    if (h < 8 && session === "AM") {
        bg = `url(https://wallpapercave.com/wp/wp4889227.jpg)`;
        user.innerHTML = `Good Morning ${userName}`;
    } else if (h < 11 && session === "AM") {
        bg = `url(https://images7.alphacoders.com/550/550963.jpg)`;
        user.innerHTML = `Good Day ${userName}`;
    } else if (h < 8 && session === "PM") {
        bg = `url(https://jooinn.com/images/afternoon-sun-1.jpg)`;
        user.innerHTML = `Good Afternoon ${userName}`;
    } else {
        bg = `url(https://wallpaperaccess.com/full/2859272.jpg)`;
        user.innerHTML = `Good Night ${userName}`;
    }

    const body = document.querySelector("body");

    body.style.background = `${bg} center/cover`

}

document.querySelector(".focus-container input").
addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        const focus = document.querySelector(".focus-container input");
        document.querySelector(".focus-container").innerHTML = `<h6>TODAY:</h6><h1>${focus.value}</h1>`
    }

})