
$(document).ready(function() {
  var eqFlag = 0,
    opFlag = 0;
  $('.num').click(function() {
    opFlag = 0;
    if (eqFlag == 1) {
      document.getElementById("display").placeholder = "";
    }
    eqFlag = 0;
    document.getElementById("display").placeholder += this.id;
  });
  $('.op').click(function() {
    if (opFlag == 0) {
      document.getElementById("display").placeholder += this.id;
    }
    opFlag = 1;
  });
  $('.c').click(function() {
    console.log("clicked");
    document.getElementById("display").placeholder = "";
  });
  $('#del').click(function() {
  console.log("clicked");
    document.getElementById("display").placeholder = document.getElementById("display").placeholder.slice(0,-1);
  });
  $('.eq').click(function() {
    if (opFlag != 1) {
      eqFlag = 1;
      var ans = eval(document.getElementById("display").placeholder);
      document.getElementById("display").placeholder = ans;
    }
  });
});