// Date & Time Display
let dateDisplay = $('#currentDay');

function setTime() {
    let getTime = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
    dateDisplay.text(getTime);

    setColor();

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

function saveInfo() {
    console.log('clicked');
}

// function saveHighScore(event) {
//     event.preventDefault();

//     let userInput = {
//         score: mostRecentScore,
//         name: username.val()
//     };
//     highScores.push(score);

//     highScores.sort((a, b) => {
//         return b.score - a.score;
//     });

//     highScores.splice(5);
//     localStorage.setItem("highScores", JSON.stringify(highScores));

//     $("#quiz").css("display", "none");
//     $("#gameover").css("display", "none");
//     $("#highscores").css("display", "inline-block");
//     timeEl.text("0");

//     $("#highscoreslist").append(highScores.map(score => {
//         return `<li>${score.name} - ${score.score}</li>`
//     }).join(""))


// };