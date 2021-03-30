$(document).ready(function () {
  // Animates dropdown
  $("#pop-up").animate(
    {
      top: "+=100px",
    },
 1000
  );

  // Fixes dropdown
  $("#pop-up").addClass("fixed");

  // Removes dropdown when clicked
  $("#pop-up button").click(function (event) {
    event.preventDefault();
    $("#pop-up").css("top", "-50vh");
    $("#pop-up-overlay").css("display", "none");
  });

});
