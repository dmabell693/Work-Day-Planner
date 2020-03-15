//place the date at the top of the page
$("#welcome-date").text(moment().format("dddd, MMMM Do"));

//define variables to grab id's of time blocks
var row9 = $("#row9");
var row10 = $("#row10");
var row11 = $("#row11");
var row12 = $("#row12");
var row13 = $("#row13");
var row14 = $("#row14");
var row15 = $("#row15");
var row16 = $("#row16");
var row17 = $("#row17");

//define variables to grab and parseInt data-number of correlating id's
var data9 = parseInt(row9.attr("data-number"));
var data10 = parseInt(row10.attr("data-number"));
var data11 = parseInt(row11.attr("data-number"));
var data12 = parseInt(row12.attr("data-number"));
var data13 = parseInt(row13.attr("data-number"));
var data14 = parseInt(row14.attr("data-number"));
var data15 = parseInt(row15.attr("data-number"));
var data16 = parseInt(row16.attr("data-number"));
var data17 = parseInt(row17.attr("data-number"));

//set variables into arrays for access using for-loop
var rowArray = [row9, row10, row11, row12, row13, row14, row15, row16, row17]

var dataArray = [data9, data10, data11, data12, data13, data14, data15, data16, data17]

//for-loop to iterate through and compare each data-number with current hour and set background-color accordingly
for (i=0; i<rowArray.length; i++) {
    if (dataArray[i] < moment().hour()) {
        rowArray[i].css("background-color", "#e7e9eb");
    } else if (dataArray[i] === moment().hour()) {
        rowArray[i].css("background-color", "#fd7a7f");   
    } else if (dataArray[i] > moment().hour()) {
        rowArray[i].css("background-color", "#98e28e");
    }
}



//local storage section

var row9Button = $("#row9-button");
var row10Button = $("#row10-button");
var row11Button = $("#row11-button");
var row12Button = $("#row12-button");
var row13Button = $("#row13-button");
var row14Button = $("#row14-button");
var row15Button = $("#row15-button");
var row16Button = $("#row16-button");
var row17Button = $("#row17-button");


//event-listener to grab text from textarea and place it in local storage


$("button").on("click", function() {
    event.preventDefault;
    if (event.target.id === "row9-button") {
        var agendaItem9 = $(this).prev().val();
        localStorage.setItem("row9Agendas", agendaItem9);
    }
});

$("button").on("click", function() {
    event.preventDefault;
    if (event.target.id === "row10-button") {
        var agendaItem10 = $(this).prev().val();
        localStorage.setItem("row10Agendas", agendaItem10);
    }
});

$("button").on("click", function() {
    event.preventDefault;
    if (event.target.id === "row11-button") {
        var agendaItem11 = $(this).prev().val();
        localStorage.setItem("row11Agendas", agendaItem11);
    }
});

$("button").on("click", function() {
    event.preventDefault;
    if (event.target.id === "row12-button") {
        var agendaItem12 = $(this).prev().val();
        localStorage.setItem("row12Agendas", agendaItem12);
    }
});

$("button").on("click", function() {
    event.preventDefault;
    if (event.target.id === "row13-button") {
        var agendaItem13 = $(this).prev().val();
        localStorage.setItem("row13Agendas", agendaItem13);
    }
});

$("button").on("click", function() {
    event.preventDefault;
    if (event.target.id === "row14-button") {
        var agendaItem14 = $(this).prev().val();
        localStorage.setItem("row14Agendas", agendaItem14);
    }
});

$("button").on("click", function() {
    event.preventDefault;
    if (event.target.id === "row15-button") {
        var agendaItem15 = $(this).prev().val();
        localStorage.setItem("row15Agendas", agendaItem15);
    }
});

$("button").on("click", function() {
    event.preventDefault;
    if (event.target.id === "row16-button") {
        var agendaItem16 = $(this).prev().val();
        localStorage.setItem("row16Agendas", agendaItem16);
    }
});

$("button").on("click", function() {
    event.preventDefault;
    if (event.target.id === "row17-button") {
        var agendaItem17 = $(this).prev().val();
        localStorage.setItem("row17Agendas", agendaItem17);
    }
});


// console.log(localStorage.row9Agendas);
row9.text(localStorage.row9Agendas);
row10.text(localStorage.row10Agendas);
row11.text(localStorage.row11Agendas);
row12.text(localStorage.row12Agendas);
row13.text(localStorage.row13Agendas);
row14.text(localStorage.row14Agendas);
row15.text(localStorage.row15Agendas);
row16.text(localStorage.row16Agendas);
row17.text(localStorage.row17Agendas);
