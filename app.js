$(document).ready(function(){
  $("#container").append("<button class='newSpy'>New Spy</button>");
  $("#container").parent().on("click", ".newSpy", newSpy);
  $("#container").on("click", ".spyStatus", spyStatus);
  $("#container").on("click", ".removeSpy", removeSpy);



});
var numSpies = 0;

function newSpy(){
  $("#container").append("<div class='spy' style='background-color: yellow'>" + (numSpies = numSpies + 1) +
      "<button class='removeSpy'>Remove</button><button class='spyStatus'>Status</button>");
  $('#container').children().last().data("id", "yellow");    
}

function spyStatus(){
  if($(this).parent().data('id') === 'yellow'){
    $(this).parent().css('background-color', 'red');
    $(this).parent().data('id', 'red');
  } else{
    $(this).parent().css('background-color', 'yellow');
    $(this).parent().data('id', 'yellow');
  }
}

function removeSpy(){
  $(this).parent().remove();
};
