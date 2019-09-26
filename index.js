jQuery(document).ready(function () {

  const buttonBack = $(".back");
  $(buttonBack).hide();

  // $("#target1").click(function () {
  //   $(".back").hide();
  // });

  $("#card-nikk").mouseenter(function () {
    $("path").css("fill", "yellow");
  });

  $("#card-nikk").mouseleave(function () {
    $("path").css("fill", "white");
  });

  $("#card-nikk").click(function () {
    $(".a-selection").hide();
    $("h3").hide();
    $(".nikk-profile").slideDown("slow").delay("1000");
    $(".back").show();
  });

  $(".back").click(function () {
    $(".nikk-profile").hide();
    $(".a-selection").show();
    $("h3").show();
    $(".back").hide();
  });








});