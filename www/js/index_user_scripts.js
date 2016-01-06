/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #back_about_main */
    $(document).on("click", "#back_about_main", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  #next_about */
    
    
        /* button  #next_about */
    
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
