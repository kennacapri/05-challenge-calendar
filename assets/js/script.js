var todayDate = moment().format("MMMM Do, YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function() {
    

    $(".saveBtn").on("click", function() {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time,text);
    })
    // add text to each time block     $("#hour9 .description").val(localStorage.getItem("hour9"));
     $("#hour10 .description").val(localStorage.getItem("hour10"));
     $("#hour11 .description").val(localStorage.getItem("hour11"));
     $("#hour12 .description").val(localStorage.getItem("hour12"));
     $("#hour13 .description").val(localStorage.getItem("hour13"));
     $("#hour14 .description").val(localStorage.getItem("hour14"));
     $("#hour15 .description").val(localStorage.getItem("hour15"));
     $("#hour16 .description").val(localStorage.getItem("hour16"));
     $("#hour17 .description").val(localStorage.getItem("hour17"));



  function hourTracker() {
    var currentHour =  moment().hour();

    $(".time-block").each(function () {
      var hourlyBlock = parseInt($(this).attr("id").split("hour")[1]);

      // change color coding to match past, present and future
    if (hourlyBlock < currentHour) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
     else if (hourlyBlock === currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
     }      
     else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future"); 
     }
  })
} 
hourTracker();

})