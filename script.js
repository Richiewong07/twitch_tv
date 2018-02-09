// RUN OUR JQUERY
$(document).ready(function() {
  // FREE CODE CAMP STREAM INFO AND STATUS API CALL
  var url = "https://wind-bow.glitch.me/twitch-api?callback=?";
  $.getJSON(url, function(data1) {
    if (data1.stream === null) {
      $("#fccStatus").html("Free Code Camp is Currently Offline!");
    } else {
      $("#fccStatus").html("Free Code Camp is Currently Online!");
    }
  });
})
