$(document).ready(function (){
    var altura = $("nav").offset().top;

    $(window).on("scroll",function () {
        if( $(window).scrollTop() > altura ){
            $("nav").addClass("menu-fixed");
        }else{
            $("nav").removeClass("menu-fixed");
        }
    });
});