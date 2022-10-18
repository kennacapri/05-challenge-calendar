$(document).ready(function() {
    $('#currentDay').text(moment().format("MMMM Do, YYYY"));

  function hourTracker() {
    var currentHour =  moment().hour();

    $(".time-block").each(function() {
      var hourlyBlock = parseInt($(this).attr("id").split("hour")[1]);

      // change color coding to match past, present and future
    if (hourlyBlock < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
     else if (hourlyBlock === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
     }      
     else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future"); 
     }
  })
} hourTracker();
})