$(document).ready(function(){

  $("button").click(function() {
    var number = $("#roman").val();

    var roman = "";

    var next = 0;

    var num = [1000,900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    var romanSy = ["M","CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    for (var i = 0; number > 0; i++) {

      next = number / num[i];

      console.log("next = :" + next);

      for (var j = 1; j <= next; j++) {

        roman += romanSy[i];
        console.log("Roman num: " + roman);
      }

      number = number % num[i]
    }



    $("#output").val(roman);

  });

});
