import $ from "jquery";

// Define planeanimation as a function
function planeanimation() {
  $(function () {
    var img = $("#plane"),
      width = img.get(0).width,
      screenWidth = $(window).width(),
      duration = 10000;
      

    function animatePlane() {
      img.css("left", -width).animate(
        {
          left: screenWidth,
        },
        duration,
        animatePlane
      );
    }

    animatePlane();
  });
   
}

export default planeanimation;
