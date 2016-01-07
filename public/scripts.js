$(document).ready(function() {
  $("button").on("click", function(){
    $.ajax("/balance").then(function(response){
      $(".results").text(response);
    })
  });
});
