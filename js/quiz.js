  $( function() {
// homeurl ="http://www.LSpapercut.com"
 homeurl ="file:///C:/Users/justin/Documents/papercut/"
      
      $("#submitquiz").click(function() {
  var total = 0;
  $("body").find('input').each(function(){
      
      if ($(this).val() == "") {
          $(this).val("0");
      } else {
          
      }
    total += parseInt($(this).val()); 
  });
          

          if ($("body").attr("id").val == "squiz") {
              audience = "slm";
          } else {
              audience = "flm";
          }
window.location = homeurl+audience+'.html#'+total;

          
      });
      
  });