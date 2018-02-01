$(document).ready(function(){
  currentDiv="";
  $(function() {
  var availableTags = $('ul.cont_select_int li:visible').map(function() {
    return $(this).text();
  }).toArray();

  $("#tags").autocomplete({
    source: availableTags
  });
});
  CheckSelectedDefault();
  ChangePQRScreen();

  $('li').on('click',function(){
    CheckSelectedDefault();
   })
  $('input[type=radio]').change(function(){
      if(this.checked){  
        EnableSliding(this);
      }
  })


});

ChangePQRScreen=function(anchor){
  if($(anchor).attr("href")=="javascript:function() { return true; };" ){

     divPosition=($(anchor).children().closest("span").attr("class")=="left")?(parseInt($(anchor).data('div').split('-')[1])+1).toString()
     :(parseInt($(anchor).data('div').split('-')[1])-1).toString();
     e=$('#'+$(anchor).data('div'));
     e.show();
     hideDiv=$('#pqr-'+divPosition);
     hideDiv.hide();
     currentDiv=parseInt($(anchor).data('div').split("-")[1])-1;
     CheckSelectedDefault();
     return false;
  }
}

CheckSelectedDefault=function(){
liElements=[];
$('ul.cont_select_int li:visible').each(function(){
        liElements.push($(this).text()); // if current visible dummy li dropdown elements has selected elements has one of its element.
    });
$("select :selected").each(function(){
  if($(this) !=undefined ){
    if(this.value.length===0 && $.inArray(this.text, liElements) != -1 ){
      DisableSliding();
      return false;
      }
      else if( $.inArray(this.text, liElements) != -1){ //enable the next/prev click if only current dropdown has value
        EnableSliding(this);
        }
      }
  });
}

EnableSliding=function(context){
        closestSpans=$(context).parents().find("div.box-mid")[parseInt(currentDiv==""?"0":currentDiv)];
        $(closestSpans).siblings().find("span.left ,span.right")
        .removeClass("disabled").parent().closest($('a:visible'))
        .attr({'href':'javascript:function() { return true; };','style':'cursor:pointer;',}).children('span');
        currentDiv ="";    

}
DisableSliding=function(){
    $('span.right ,span.left').addClass('disabled')
      .parent().closest($('a:visible'))
      .attr({'style':'cursor:default;',})
      return false;
}