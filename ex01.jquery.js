(function($){
    $.fn.ex01 = function() {

            return this.each(function() {
					var obj =$(this);
					var ltt = $("ul.nav li", obj);							
					
					ltt.click(function() {				
                    $(this).css("color","red");						
					ltt.not(this).css("color","green");

                });
            });
        }
   
})(jQuery);