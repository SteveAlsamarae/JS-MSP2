window.addEventListener("DOMContentLoaded", showTime());

function showTime(){
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let sessions = "AM";

    if(h == 0){
        h = 12;
    }

    if(h>12){
        h = h-12;
        session = "PM";
    }

}