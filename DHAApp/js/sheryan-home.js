// JavaScript Document

/* Home Page Video Full Screen Code Start */
 $(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
	headerHeight =(document.getElementById('branding-section').offsetHeight)
 	windowHeight=windowHeight-headerHeight
   $('.video-bar').css('max-height', windowHeight);
   $('.video-bar').css('min-height', windowHeight);
  //$('.video-bar').css('height', windowHeight);
    $('.video-bar').css('width', '100%');

  };
  setHeight();
  $(window).resize(function() {
    setHeight();
  });
});
/* Home Page Video Full Screen Code End */
/* Happiness Meter Code Start */
var prev_id;
$( window ).scroll(function() {
var element_position = $("#happiness-box").offset().top;
var scroll_position = $(window).scrollTop();
var viewport_height = $(window).height();
if((scroll_position + viewport_height) > element_position){
   console.log("happiness-box div ")
  $(".happiness-meter").css({position: 'relative'});
}
else{
    $(".happiness-meter").css({position: 'fixed'});
}
});
/* Happiness Meter Code Ends */
/* Form Enter Code Start */
function handleEnter(e,loc){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13'){
 //window.open(loc)
//  window.location=loc    
    $('a:visible').each(function(){
        if($(this).attr("href")=="javascript:function() { return true; };"){ 
          ChangePQRScreen($(this)) ;
        } 
      })
    }
}
/* Form Enter Code Start */