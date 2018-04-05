  $( function() {
    // homeurl ="http://www.LSpapercut.com"
var href = window.location.href;
var homeurl = href.substring(0, href.lastIndexOf('/')) + "/";
      
      
      $("#submitquiz").click(function() {
//           alert(homeurl);
  var total = 0;
  $("body").find('input').each(function(){
      
      if ($(this).val() == "") {
          $(this).val("0");
      } else {
          
      }
    total += parseInt($(this).val()); 
  });
          
          
          
          if ($("body").attr("id") == "squiz") {
              audience = "slm";
          } else {
              audience = "flm";
          }
window.location = homeurl+audience+'.html#'+total;

          
      });
      
  });