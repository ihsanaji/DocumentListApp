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
     
     $(document).on("click", "#back_information_main", function(){
         saveInformations();
     });
     
     $(document).on("click", "#next_information_manuals", function(){
         saveInformations();
     });
     
     $(document).on("click", "#back_manuals_information", function(){
         saveManuals();
     });
     
     $(document).on("click", "#next_manuals_plans", function(){
         saveManuals();
     });
     
     $(document).on("click", "#back_plans_manuals", function(){
         savePlans();
     });
     
     $(document).on("click", "#next_plans_agreements", function(){
         savePlans();
     });
     
     $(document).on("click", "#back_agreements_plans", function(){
         saveAgreements();
     });
     
     $(document).on("click", "#next_agreements_documents", function(){
         saveAgreements();
     });
     
     $(document).on("click", "#next_documents_procedures", function(){
         saveDocuments();
     });
     
     $(document).on("click", "#back_documents_agreements", function(){
         saveDocuments();
     });
     
     $(document).on("click", "#back_procedures_documents", function(){
         saveProcedures();
     });
     
     $(document).on("click", "#next_procedures_guidelines", function(){
         saveProcedures();
     });
     
     $(document).on("click", "#back_guidelines_procedures", function(){
         saveGuidelines();
     });
     
     $(document).on("click", "#next_guidelines_verified", function(){
         saveGuidelines();
     });
     
     function saveInformations(){
         var inputs = $("#information .input-group input");
         
         localStorage.setItem("nameOfOffice", $.trim($(inputs[0]).val()));
         localStorage.setItem("address", $.trim($(inputs[1]).val()));
         localStorage.setItem("phoneOrEmail", $.trim($(inputs[2]).val()));
     }
     
     function saveManuals(){
         if(localStorage.getItem("manualsCount") !== null){
             for(var l = 0; l < localStorage.getItem("manualsCount"); l++){
                 localStorage.removeItem("manual"+l);
             }
             localStorage.setItem("manualsCount", 0);
         }
         var inputGroups = $("#manuals .input-group");
         var itemsCount = 0;
         for(var i = 0; i < inputGroups.length; i++){
             var string = [];
             var inputs = $(inputGroups[i]).find("input");
             var isEmpty = true;
             for(var j = 0; j < inputs.length; j++){
                 string[j] = $.trim($(inputs[j]).val());
                 if($.trim($(inputs[j]).val()) !== ""){
                     isEmpty = false;
                 }
             }
             if(!isEmpty){
                 localStorage.setItem("manual"+itemsCount, string.join(","));
                 ++itemsCount;
             }
         }
         localStorage.setItem("manualsCount", itemsCount);
     }
     
     function savePlans(){
         if(localStorage.getItem("plansCount") !== null){
             for(var l = 0; l < localStorage.getItem("plansCount"); l++){
                 localStorage.removeItem("plan"+l);
             }
             localStorage.setItem("plansCount", 0);
         }
         var inputGroups = $("#plans .input-group");
         var itemsCount = 0;
         for(var i = 0; i < inputGroups.length; i++){
             var string = [];
             var inputs = $(inputGroups[i]).find("input");
             var isEmpty = true;
             for(var j = 0; j < inputs.length; j++){
                 string[j] = $.trim($(inputs[j]).val());
                 if($.trim($(inputs[j]).val()) !== ""){
                     isEmpty = false;
                 }
             }
             if(!isEmpty){
                 localStorage.setItem("plan"+itemsCount, string.join(","));
                 ++itemsCount;
             }
         }
         localStorage.setItem("plansCount", itemsCount);
     }
     
     function saveAgreements(){
         if(localStorage.getItem("agreementsCount") !== null){
             for(var l = 0; l < localStorage.getItem("agreementsCount"); l++){
                 localStorage.removeItem("agreement"+l);
             }
             localStorage.setItem("agreementsCount", 0);
         }
         var inputGroups = $("#agreements .input-group");
         var itemsCount = 0;
         for(var i = 0; i < inputGroups.length; i++){
             var string = [];
             var inputs = $(inputGroups[i]).find("input");
             var isEmpty = true;
             for(var j = 0; j < inputs.length; j++){
                 string[j] = $.trim($(inputs[j]).val());
                 if($.trim($(inputs[j]).val()) !== ""){
                     isEmpty = false;
                 }
             }
             if(!isEmpty){
                 localStorage.setItem("agreement"+itemsCount, string.join(","));
                 ++itemsCount;
             }
         }
         localStorage.setItem("agreementsCount", itemsCount);
     }
     
     function saveDocuments(){
         if(localStorage.getItem("documentsCount") !== null){
             for(var l = 0; l < localStorage.getItem("documentsCount"); l++){
                 localStorage.removeItem("document"+l);
             }
             localStorage.setItem("documentsCount", 0);
         }
         var inputGroups = $("#documents .input-group");
         var itemsCount = 0;
         for(var i = 0; i < inputGroups.length; i++){
             var string = [];
             var inputs = $(inputGroups[i]).find("input");
             var isEmpty = true;
             for(var j = 0; j < inputs.length; j++){
                 string[j] = $.trim($(inputs[j]).val());
                 if($.trim($(inputs[j]).val()) !== ""){
                     isEmpty = false;
                 }
             }
             if(!isEmpty){
                 localStorage.setItem("document"+itemsCount, string.join(","));
                 ++itemsCount;
             }
         }
         localStorage.setItem("documentsCount", itemsCount);
     }
     
     function saveProcedures(){
         if(localStorage.getItem("proceduresCount") !== null){
             for(var l = 0; l < localStorage.getItem("proceduresCount"); l++){
                 localStorage.removeItem("procedure"+l);
             }
             localStorage.setItem("proceduresCount", 0);
         }
         var inputGroups = $("#procedures .input-group");
         var itemsCount = 0;
         for(var i = 0; i < inputGroups.length; i++){
             var string = [];
             var inputs = $(inputGroups[i]).find("input");
             var isEmpty = true;
             for(var j = 0; j < inputs.length; j++){
                 string[j] = $.trim($(inputs[j]).val());
                 if($.trim($(inputs[j]).val()) !== ""){
                     isEmpty = false;
                 }
             }
             if(!isEmpty){
                 localStorage.setItem("procedure"+itemsCount, string.join(","));
                 ++itemsCount;
             }
         }
         localStorage.setItem("proceduresCount", itemsCount);
     }
     
     function saveGuidelines(){
         if(localStorage.getItem("guidelinesCount") !== null){
             for(var l = 0; l < localStorage.getItem("guidelinesCount"); l++){
                 localStorage.removeItem("manual"+l);
             }
             localStorage.setItem("guidelinesCount", 0);
         }
         var inputGroups = $("#guidelines .input-group");
         var itemsCount = 0;
         for(var i = 0; i < inputGroups.length; i++){
             var string = [];
             var inputs = $(inputGroups[i]).find("input");
             var isEmpty = true;
             for(var j = 0; j < inputs.length; j++){
                 string[j] = $.trim($(inputs[j]).val());
                 if($.trim($(inputs[j]).val()) !== ""){
                     isEmpty = false;
                 }
             }
             if(!isEmpty){
                 localStorage.setItem("guideline"+itemsCount, string.join(","));
                 ++itemsCount;
             }
         }
         localStorage.setItem("guidelinesCount", itemsCount);
     }
     
     function saveVerification(){
         var inputs = $("#verified .input-group input");
         
         localStorage.setItem("lastUpdate", $.trim($(inputs[0]).val()));
         localStorage.setItem("verification", $.trim($(inputs[1]).val()));
         localStorage.setItem("sentToHeadOffice", $.trim($(inputs[2]).val()));
         localStorage.setItem("sentToBranch", $.trim($(inputs[3]).val()));
         localStorage.setItem("sentToOffsite", $.trim($(inputs[4]).val()));
     }
     
     
    
        /* button  #next_about */
    
    
        /* button  #next_about */
     
    
    
    }
    
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
$(function(){
    var inputs, inputGroups, items, i, j;

    /*Information*/
    inputs = $("#information .input-group input");
         
     $(inputs[0]).val(localStorage.getItem("nameOfOffice"));
     $(inputs[1]).val(localStorage.getItem("address"));
     $(inputs[2]).val(localStorage.getItem("phoneOrEmail"));
    
    /*Verification*/
    inputs = $("#verified .input-group input");
         
     $(inputs[0]).val(localStorage.getItem("lastUpdate"));
     $(inputs[1]).val(localStorage.getItem("verification"));
     $(inputs[2]).val(localStorage.getItem("sentToHeadOffice"));
     $(inputs[3]).val(localStorage.getItem("sentToBranch"));
     $(inputs[4]).val(localStorage.getItem("sentToOffsite"));

    /*Manuals*/
    if(localStorage.getItem("manualsCount") !== null){
        inputGroups = $("#manuals .input-group");
        for(i = 0; i < localStorage.getItem("manualsCount"); i++){
            // inflate
            inputs = $(inputGroups[i]).find("input");
            items = (localStorage.getItem("manual"+i)).split(",");
            for(j = 0; j < inputs.length; j++){
                $(inputs[j]).val(items[j]);
            }
        }
     }else{}

    /*Plans*/
    if(localStorage.getItem("plansCount") !== null){
        inputGroups =$("#plans .input-group");
        for(i = 0; i < localStorage.getItem("plansCount"); i++){
            // inflate
            inputs = $(inputGroups[i]).find("input");
            items = (localStorage.getItem("plan"+i)).split(",");
            for(j = 0; j < inputs.length; j++){
                $(inputs[j]).val(items[j]);
            }
        }
     }else{}

    /*Agreements*/
    if(localStorage.getItem("agreementsCount") !== null){
        inputGroups = $("#agreements .input-group");
        for(i = 0; i < localStorage.getItem("agreementsCount"); i++){
            // inflate
            inputs = $(inputGroups[i]).find("input");
            items = (localStorage.getItem("agreement"+i)).split(",");
            for(j = 0; j < inputs.length; j++){
                $(inputs[j]).val(items[j]);
            }
        }
     }else{}

    /*Documents*/
    if(localStorage.getItem("documentsCount") !== null){
        inputGroups = $("#documents .input-group");
        for(i = 0; i < localStorage.getItem("documentsCount"); i++){
            // inflate
            inputs = $(inputGroups[i]).find("input");
            items = (localStorage.getItem("document"+i)).split(",");
            for(j = 0; j < inputs.length; j++){
                $(inputs[j]).val(items[j]);
            }
        }
     }else{}

    /*Procedures*/
    if(localStorage.getItem("proceduresCount") !== null){
        inputGroups = $("#procedures .input-group");
        for(i = 0; i < localStorage.getItem("proceduresCount"); i++){
            // inflate
            inputs = $(inputGroups[i]).find("input");
            items = (localStorage.getItem("procedure"+i)).split(",");
            for(j = 0; j < inputs.length; j++){
                $(inputs[j]).val(items[j]);
            }
        }
     }else{}

    /*Guidelines*/
    if(localStorage.getItem("guidelinesCount") !== null){
        inputGroups = $("#guidelines .input-group");
        for(i = 0; i < localStorage.getItem("guidelinesCount"); i++){
            // inflate
            inputs = $(inputGroups[i]).find("input");
            items = (localStorage.getItem("guideline"+i)).split(",");
            for(j = 0; j < inputs.length; j++){
                $(inputs[j]).val(items[j]);
            }
        }
     }else{}
     
});