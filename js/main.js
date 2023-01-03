// js raw codes

$(document).ready(function(){

   $('#tab02').hide();
    $('#tab03').hide();

 $('#tab1').click(function(){
    $('#tab01').show();
    $('#tab02').hide();
    $('#tab03').hide();

 });

  $('#tab2').click(function(){
    $('#tab01').hide();
    $('#tab02').show();
    $('#tab03').hide();

 });

   $('#tab3').click(function(){
    $('#tab01').hide();
    $('#tab02').hide();
    $('#tab03').show();

 });

});



/// owl carousel js codes ///

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:8000,
    responsive:{
        0:{
            items:1
        },
        577:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


/// wow js codes ///

new WOW().init();

//////////////////////
