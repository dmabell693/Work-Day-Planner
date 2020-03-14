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
        rowArray[i].css("background-color", "gray");
    } else if (dataArray[i] === moment().hour()) {
        rowArray[i].css("background-color", "red");   
    } else if (dataArray[i] > moment().hour()) {
        rowArray[i].css("background-color", "green");
    }
}