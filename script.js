// current date displays on top of calendar
var date = moment().format('dddd MMMM Do, YYYY');

$('#currentDay').text(date);

// the current hour
var currentHour = moment().format('HH');  
var timeRow = $("<div>").addClass("timeblock row");
var counter = 1

//build the calendar div for 9am to 5pm
var timeblock = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM','4PM', '5PM'];
for (let i = 0; i < timeblock.length; i++) {
    var timeID = timeblock[i]+" block"
    $(".container").append(timeRow);
    var time = $("<div>").addClass("col-2 colorcode").text(timeblock[i]);
    $(".timeblock").append(time);
    var editContent = $("<input>").addClass("col-9 edit-cont"+counter).attr('id', timeID);
    $(".timeblock").append(editContent);
    var saveButton = $("<button>").addClass("col-1 saveBtn").text("Save");
    $(".timeblock").append(saveButton);    


    // var and statment to assign color based on past, present, future
    var newTime = parseInt(timeblock[i].slice(0,timeblock[i].length -2));
    if (newTime >= 1 && newTime <= 5) {
        newTime += 12;
    }        
    if (newTime === currentHour) {
        $(".edit-cont"+counter).addClass("present");
        console.log("in past")
    } else if (newTime > currentHour) {
        $(".edit-cont"+counter).addClass("future");
    } else {
        $(".edit-cont"+counter).addClass("past");
    }
    counter ++;
};

$("button").click(function () {
    $("input").each(function() {    
       var id = $(this).attr('id');
       var value = $(this).val();
      localStorage.setItem(id, value);
   }); 
});

$(document).ready(function() {
    $('input').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        
        $(this).val(value);
        
    }); 
});






// var input = document.getElementsByClassName("edit-cont").value;
// localStorage.getItem("saveBtn");



// function submit() {
//     var names = document.getElementById("names").value;
//     var allNames = JSON.parse(localStorage.getItem("allNames")) || [];
//     allNames.push(names);
//     localStorage.setItem("allNames", JSON.stringify(allNames));
//     document.getElementById("names").value = '';
//     document.getElementById("namesList").innerHTML = localStorage.getItem("allNames");
//   }
  
//   document.getElementById("namesList").innerHTML = localStorage.getItem("allNames");