$(document).ready(function(){
  $("#top-left-radius").change(function(){
    let radius = $(this).val() + "px";
    $(".preview-box").css("border-top-left-radius", radius);
  });
  $("#top-right-radius").change(function(){
    let radius = $(this).val() + "px";
    $(".preview-box").css("border-top-right-radius", radius);
  });
  $("#bottom-left-radius").change(function(){
    let radius = $(this).val() + "px";
    $(".preview-box").css("border-bottom-left-radius", radius);
  });
  $("#bottom-right-radius").change(function(){
    let radius = $(this).val() + "px";
    $(".preview-box").css("border-bottom-right-radius", radius);
  });
  $('#copy-button').click(function(){
    $("#top-left-radius").select();
    document.execCommand("copy");
  })
});
