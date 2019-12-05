

$(document).ready(function() {
  $("form#compare").submit(function (event) {

    var AA = parseInt($("#A").val());
    var BB = parseInt($("#B").val());
    var CC = parseInt($("#C").val());
    $("#not,#notTitle,#equ,#equTitle,#sca,#scaTitle,#iso,#isoTitle").hide();

  if (AA + BB <= CC || AA + CC <= BB || CC + BB <= AA) {
    $("#not").show();
    $("#notTitle").show();
  } else if (AA === BB && AA === CC) {
    $("#equ").show();
    $("#equTitle").show();
  } else if (AA !== BB && AA !== CC) {
    $("#sca").show();
    $("#scaTitle").show();
  } else {
    $("#iso").show();
    $("#isoTitle").show();
  }

  event.preventDefault();
  });
});
