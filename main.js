$(document).ready(function(){
  var d = new Date();
  var day = d.getDay();
  var month = d.getMonth();
  var Year = d.getFullYear();
  var date = d.getDate();
  console.log(Year);
  console.log(day);
  console.log(month);
  console.log(date);


  var msg = ["Sunday!!! Funcday!!",
            "Back on the grind!",
            "Oh. Its Tuesday!",
            "Boom! Wednesday!",
            "Thirsty, Thursday! Yo!",
            "t's Friday! We should be kickin' it!",
            "Paaarrrttyyyyy!"]
      $('#' + day).attr('id','today');
      $('#message').text(msg[day]);

  var month_name = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  console.log(month_name[month] + ',' + Year);
  $(".message2").text(month_name[month] + "," + Year);
  $(".message3").text(date + '-' + month_name[month] + "," + Year);

  //$(".message3").text(date + "-" + month_name[month] + "," Year);
});
