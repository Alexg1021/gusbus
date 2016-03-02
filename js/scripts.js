$(document).ready(function() {
  $("#quote-btn").on("click", function() {  
    $.getJSON("http://api.icndb.com/jokes/random?firstName=Gus&lastName=Bus", function(json) {

      $(".quote").html(JSON.stringify(json.value.joke));  
    });
  });
});
