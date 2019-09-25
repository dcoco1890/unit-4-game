// score variables
var wins = 0;
var losses = 0;
// crystal values
let cry1 = 0;
let cry2 = 0;
let cry3 = 0;
let cry4 = 0;
// comp number and user number
let compNum = 0;
let userNum = 0;
// empty array used to hold crystal
let nums = [];


// creates 4 numbers between 1 and 12 and adds them into the nums array
// ensures that all four values are different
function fourDifValues() {
    while (nums.length < 4) {
        var x = Math.floor(Math.random() * 12) + 1;
        if (!nums.includes(x)) {
            nums.push(x);
        }
    }
}


//deprecated 

//weird crystal object that creates a random number between 1 and 12
// var crystal = {
//    value: function(){
//     var x = Math.floor(Math.random() * 12) + 1;
//     return x;
//    }
// }



// This function creates the computers number and the number randomly assigned to each crystal
function getValue() {
    var x = Math.floor(Math.random() * 101) + 19;
    nums = [];
    fourDifValues();
    cry1 = nums[0];
    cry2 = nums[1];
    cry3 = nums[2];
    cry4 = nums[3];
    return x;
}
// this function right here "reStarts" the game, creates a new computer number, and random values for the crystals.
function reStart() {
    compNum = getValue();
    userNum = 0;
    $('#comp-score').text(compNum);
    $('#user-score').text(userNum);
    $('#head').text("Crystal Collector");
}

// this function is called by any of the four clicky functions. If it determines the computer number and user number are equal,
// it will increase the win counter and update screen elements accordingly. If the users number became larger than the comps
// number, it will increment losses and update the screen accordingly. If neither of those are true, it simply replaces the 
// user number text on the screen with the new value of the user number (as determined by clicking a crystal)
function updateScore() {

    if (userNum === compNum) {
        wins++;
        $('#user-score').text(userNum);
        $('#w').text(wins);
        $('#head').text("Click any crystal to play again");
        $(".modal-title").text("You WIN");
        $("#modal-body").text(`Good job, bob. Now do it again! Click on a crystal to play again. But be careful, the numbers won't be the same!`);
        $("#modal").modal();
    } else if (userNum > compNum) {
        losses++;
        $('#user-score').text(userNum);
        $('#l').text(losses);
        $('#head').text("Click any crystal to play again");
        $(".modal-title").text("You Lose");
        $("#modal-body").text(`Nice try, guy. Try to get your score equal to mine though. Click on a crystal to play again.
         But be careful, the numbers won't be the same!`);
        $("#modal").modal();
    } else {
        $('#user-score').text(userNum);
    }

}

// four click functions, one for each crystal. On a click, the function first checks to see if the Users Number is 
// greater than or equal to the computers number. If it is, it will run the restart function. If not, it increase the value 
// of the users number by the randomly assigned crystal value, then runs Update Score.

$('#one').on("click", function() {

    if (userNum >= compNum) {
        reStart();
    } else {
        userNum += cry1;
        updateScore();
    }
});
$('#two').on("click", function() {
    if (userNum >= compNum) {
        reStart();
    } else {
        userNum += cry2;
        updateScore();
    }
});
$('#three').on("click", function() {

    if (userNum >= compNum) {
        reStart();
    } else {
        userNum += cry3;
        updateScore();
    }
});
$('#four').on("click", function() {
    if (userNum >= compNum) {
        reStart();
    } else {
        userNum += cry4;
        updateScore();
    }
});


//This kicks off the Whole shebang!
reStart();