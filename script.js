// RUN OUR JQUERY
$(document).ready(function() {
  var following = [];
  // FREE CODE CAMP STREAM INFO AND STATUS API CALL
  var url = "https://wind-bow.glitch.me/twitch-api?callback=?";
  $.getJSON(url, function(data1) {
    if (data1.stream === null) {
      $("#fccStatus").html("Free Code Camp is Currently Offline!");
    } else {
      $("#fccStatus").html("Free Code Camp is Currently Online!");
    }
  });

  var followerURL = "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/";
  $.getJSON(followerURL, function(data2) {
    for (var i = 0; i < data2.follows.length; i++) {
      var displayName = data2.follows[i].channel.display_name;
      following.push(displayName);
    }
    following.push('comster404');
    following.push('brunofin');
    following.push('ESL_SC2');
  });
  console.log(following);

})
