jQuery(document).ready(function () {

  const buttonBack = $(".back");
  $(buttonBack).hide();

  // $("#target1").click(function () {
  //   $(".back").hide();
  // });

  $(".a-card").mouseenter(function () {
    $("path", this).css("fill", "yellow");
  });

  $(".a-card").mouseleave(function () {
    $("path", this).css("fill", "white");
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

  $("#card-fjaak").click(function () {
    $(".a-selection").hide();
    $("h3").hide();
    $(".fjaak-profile").slideDown("slow").delay("1000");
    $(".back").show();
  });

  $(".back").click(function () {
    $(".fjaak-profile").hide();
    $(".a-selection").show();
    $("h3").show();
    $(".back").hide();
  });

  $("#card-fadi").click(function () {
    $(".a-selection").hide();
    $("h3").hide();
    $(".fadi-profile").slideDown("slow").delay("1000");
    $(".back").show();
  });

  $(".back").click(function () {
    $(".fadi-profile").hide();
    $(".a-selection").show();
    $("h3").show();
    $(".back").hide();
  });

  $("#card-manuel").click(function () {
    $(".a-selection").hide();
    $("h3").hide();
    $(".manuel-profile").slideDown("slow").delay("1000");
    $(".back").show();
  });

  $(".back").click(function () {
    $(".manuel-profile").hide();
    $(".a-selection").show();
    $("h3").show();
    $(".back").hide();
  });

  $("#card-victor").click(function () {
    $(".a-selection").hide();
    $("h3").hide();
    $(".victor-profile").slideDown("slow").delay("1000");
    $(".back").show();
  });

  $(".back").click(function () {
    $(".victor-profile").hide();
    $(".a-selection").show();
    $("h3").show();
    $(".back").hide();
  });

  $("#card-balas").click(function () {
    $(".a-selection").hide();
    $("h3").hide();
    $(".balas-profile").slideDown("slow").delay("1000");
    $(".back").show();
  });

  $(".back").click(function () {
    $(".balas-profile").hide();
    $(".a-selection").show();
    $("h3").show();
    $(".back").hide();
  });

  $("#card-claus").click(function () {
    $(".a-selection").hide();
    $("h3").hide();
    $(".claus-profile").slideDown("slow").delay("1000");
    $(".back").show();
  });

  $(".back").click(function () {
    $(".claus-profile").hide();
    $(".a-selection").show();
    $("h3").show();
    $(".back").hide();
  });

  $("#card-anna").click(function () {
    $(".a-selection").hide();
    $("h3").hide();
    $(".anna-profile").slideDown("slow").delay("1000");
    $(".back").show();
  });

  $(".back").click(function () {
    $(".anna-profile").hide();
    $(".a-selection").show();
    $("h3").show();
    $(".back").hide();
  });

  $("#card-framework").click(function () {
    $(".a-selection").hide();
    $("h3").hide();
    $(".framework-profile").slideDown("slow").delay("1000");
    $(".back").show();
  });

  $(".back").click(function () {
    $(".framework-profile").hide();
    $(".a-selection").show();
    $("h3").show();
    $(".back").hide();
  });








});