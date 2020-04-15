import React from 'react';
import './styles/CountDownTimer.css';


function CountDownTimer(){
    return(
        <div className="container">
            <h1> Countdown to our marriage </h1>
            <ul>
                <li>
                    <span id="days">
                    </span>
                    Days
                </li>
                <li>
                    <span id="hours">
                    </span>
                    Hours
                </li>
                <li>
                    <span id="minutes">
                    </span>
                    Minutes
                </li>
                <li>
                    <span id="seconds">
                    </span>
                    Seconds
                </li>
            </ul>
        </div>
    )
}
export default CountDownTimer;

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;

let countdown = new Date('Jul 12, 2020 06:30:00').getTime();
let x = setInterval(()=> {
    let now = new Date().getTime();
    let distance = countdown - now;

    document.getElementById("days").innerText = Math.floor(distance / (day));
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / hour);
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / minute);
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
}, second);

