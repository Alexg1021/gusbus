$(document).ready(function() {
  $("#quote-btn").on("click", function() {  
    $.getJSON("http://api.icndb.com/jokes/random?firstName=Gus&lastName=Bus", function(json) {

      $(".quote").html("<i class='fa fa-quote-left fa-2x'></i> " + json.value.joke);  
    });
  });
});
