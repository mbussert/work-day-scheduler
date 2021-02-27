// Date & Time Display
let dateDisplay = $('#currentDay');

function setTime() {
    let getTime = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
    dateDisplay.text(getTime);

    setColor(); // Evaluate row color based on time and update every 1 second.
}

setInterval(function () { setTime(); }, 1000);

// Variables associated with each HTML TD element
let nineAm = $('#nineam').data();
let tenAm = $('#tenam').data();
let elevenAm = $('#elevenam').data();
let twelvePm = $('#twelvepm').data();
let onePm = $('#onepm').data();
let twoPm = $('#twopm').data();
let threePm = $('#threepm').data();
let fourPm = $('#fourpm').data();
let fivePm = $('#fivepm').data();

// Function to compare time vs. timeslot and update row color accordingly
function setColor() {

    let time = parseInt(moment().format('HHmm'));

    if (time >= nineAm.time && time < tenAm.time) {
        removeAll();
        setFuture();
        $('#nineam').removeClass('future');
        $('#nineam').addClass('present');
    } else if (time >= tenAm.time && time < elevenAm.time) {
        $('#nineam').removeClass('present');
        $('#nineam').addClass('past');
        $('#tenam').removeClass('future');
        $('#tenam').addClass('present');
    } else if (time >= elevenAm.time && time < twelvePm.time) {
        $('#tenam').removeClass('present');
        $('#tenam').addClass('past');
        $('#elevenam').removeClass('future');
        $('#elevenam').addClass('present');
    } else if (time >= twelvePm.time && time < onePm.time) {
        $('#elevenam').removeClass('present');
        $('#elevenam').addClass('past');
        $('#twelvepm').removeClass('future');
        $('#twelvepm').addClass('present');
    } else if (time >= onePm.time && time < twoPm.time) {
        $('#twelvepm').removeClass('present');
        $('#twelvepm').addClass('past');
        $('#onepm').removeClass('future');
        $('#onepm').addClass('present');
    } else if (time >= twoPm.time && time < threePm.time) {
        $('#onepm').removeClass('present');
        $('#onepm').addClass('past');
        $('#twopm').removeClass('future');
        $('#twopm').addClass('present');
    } else if (time >= threePm.time && time < fourPm.time) {
        $('#twopm').removeClass('present');
        $('#twopm').addClass('past');
        $('#threepm').removeClass('future');
        $('#threepm').addClass('present');
    } else if (time >= fourPm.time && time < fivePm.time) {
        $('#threepm').removeClass('present');
        $('#threepm').addClass('past');
        $('#fourpm').removeClass('future');
        $('#fourpm').addClass('present');
    } else if (time >= fivePm.time && time < 1800) {
        $('#fourpm').removeClass('present');
        $('#fourpm').addClass('past');
        $('#fivepm').removeClass('future');
        $('#fivepm').addClass('present');
    } else {
        removeAll();
        setPast();
    }
}

// Function to remove future class from all TD elements
function removeFuture () {
    $('#nineam').removeClass('future');
    $('#tenam').removeClass('future');
    $('#elevenam').removeClass('future');
    $('#twelvepm').removeClass('future');
    $('#onepm').removeClass('future');
    $('#twopm').removeClass('future');
    $('#threepm').removeClass('future');
    $('#fourpm').removeClass('future');
    $('#fivepm').removeClass('future');
}

// Function to remove present class from all TD elements
function removePresent() {
    $('#nineam').removeClass('present');
    $('#tenam').removeClass('present');
    $('#elevenam').removeClass('present');
    $('#twelvepm').removeClass('present');
    $('#onepm').removeClass('present');
    $('#twopm').removeClass('present');
    $('#threepm').removeClass('present');
    $('#fourpm').removeClass('present');
    $('#fivepm').removeClass('present');
}

// Function to remove past class from all TD elements
function removePast() {
    $('#nineam').removeClass('past');
    $('#tenam').removeClass('past');
    $('#elevenam').removeClass('past');
    $('#twelvepm').removeClass('past');
    $('#onepm').removeClass('past');
    $('#twopm').removeClass('past');
    $('#threepm').removeClass('past');
    $('#fourpm').removeClass('past');
    $('#fivepm').removeClass('past');
}

// Function to remove all three classes from all TD elements
function removeAll() {
    removeFuture();
    removePresent();
    removePast();
}

// Function to set all TD elements to class future
function setFuture() {
    $('#tenam').addClass('future');
    $('#elevenam').addClass('future');
    $('#twelvepm').addClass('future');
    $('#onepm').addClass('future');
    $('#twopm').addClass('future');
    $('#threepm').addClass('future');
    $('#fourpm').addClass('future');
    $('#fivepm').addClass('future');
}

// Function to set all TD elements to class past
function setPast() {
    $('#nineam').addClass('past');
    $('#tenam').addClass('past');
    $('#elevenam').addClass('past');
    $('#twelvepm').addClass('past');
    $('#onepm').addClass('past');
    $('#twopm').addClass('past');
    $('#threepm').addClass('past');
    $('#fourpm').addClass('past');
    $('#fivepm').addClass('past');
}

// Save Input Fields to Local Storage
let nineAmInput = $('#nineam-input');
let tenAmInput = $('#tenam-input');
let elevenAmInput = $('#elevenam-input');
let twelvePmInput = $('#twelvepm-input');
let onePmInput = $('#onepm-input');
let twoPmInput = $('#twopm-input');
let threePmInput = $('#threepm-input');
let fourPmInput = $('#fourpm-input');
let fivePmInput = $('#fivepm-input');

function saveInfo(event) {
    event.preventDefault();

    localStorage.setItem("9am", nineAmInput.val());
    localStorage.setItem("10am", tenAmInput.val());
    localStorage.setItem("11am", elevenAmInput.val());
    localStorage.setItem("12pm", twelvePmInput.val());
    localStorage.setItem("1pm", onePmInput.val());
    localStorage.setItem("2pm", twoPmInput.val());
    localStorage.setItem("3pm", threePmInput.val());
    localStorage.setItem("4pm", fourPmInput.val());
    localStorage.setItem("5pm", fivePmInput.val());
}

// Pull values from Local Storage and Set to Appropriate Boxes on Page Load
function loadInfo() {

    $('#nineam-input').text(localStorage.getItem("9am"));
    $('#tenam-input').text(localStorage.getItem("10am"));
    $('#elevenam-input').text(localStorage.getItem("11am"));
    $('#twelvepm-input').text(localStorage.getItem("12pm"));
    $('#onepm-input').text(localStorage.getItem("1pm"));
    $('#twopm-input').text(localStorage.getItem("2pm"));
    $('#threepm-input').text(localStorage.getItem("3pm"));
    $('#fourpm-input').text(localStorage.getItem("4pm"));
    $('#fivepm-input').text(localStorage.getItem("5pm"));

}

loadInfo(); // If user has saved info, load into appropriate text area.