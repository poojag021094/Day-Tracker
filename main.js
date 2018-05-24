$(document).ready(function(){
  var d = new Date();
  var day = d.getDay();
  console.log(day);

  var msg = ["Sunday!!! Funcday!!",
            "Back on the grind!",
            "Oh. Its Tuesday!",
            "Boom! Wednesday!",
            "Thirsty, Thursday! Yo!",
            "t's Friday! We should be kickin' it!",
            "Paaarrrttyyyyy!"]
      $('#' + day).attr('id','today');
      $('#message').text(msg[day]);
});
