$(document).ready(function(){
    $(".hamburger").on("click", function(){
        $(".menu").animate({
          height: 'toggle'
        });
    });
});
