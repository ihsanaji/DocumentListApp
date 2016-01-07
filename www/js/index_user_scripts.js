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
     
     $(document).on("click", "#add_manuals", function(){
         var item = '<div class="input-group"><div class="table-thing with-label widget uib_w_93 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Name :</label><input class="wide-control" placeholder="Insert Name" type="text"></div><div class="table-thing with-label widget uib_w_20 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Date of Receipt :</label><input class="wide-control" type="date"></div><div class="table-thing with-label widget uib_w_21 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Author :</label><input class="wide-control" placeholder="Insert Author" type="text"></div><div class="table-thing with-label widget uib_w_22 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Custodian :</label><input class="wide-control" placeholder="Insert Custodian" type="text"></div><div class="table-thing with-label widget uib_w_23 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">On-Site Location :</label><input class="wide-control" placeholder="Insert On-Site Location" type="text"></div><div class="table-thing with-label widget uib_w_24 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Off-Site Location :</label><input class="wide-control" placeholder="Insert Off-Site Location" type="text"></div></div>';
         
         var inputGroup = $("#manuals .input-group");
//         $(inputGroup[inputGroup.length-1]).after(item);
         $(inputGroup[inputGroup.length-1]).after($(inputGroup[inputGroup.length-1]).clone());
         var inputs = $(inputGroup[inputGroup.length-1]).next().find("input");
         $(inputs).each(function(index){
             $(this).val("");
         });
     });
     
     $(document).on("click", "#add_plans", function(){
         var item = '<div class="input-group"><div class="table-thing with-label widget uib_w_94 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Name :</label><input class="wide-control" placeholder="Insert Name" type="text"></div><div class="table-thing with-label widget uib_w_31 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Date of Receipt :</label><input class="wide-control" type="date"></div><div class="table-thing with-label widget uib_w_32 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Author</label><input class="wide-control" placeholder="Insert Author" type="text"></div><div class="table-thing with-label widget uib_w_33 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Custodian :</label><input class="wide-control" placeholder="Insert Custodian" type="text"></div><div class="table-thing with-label widget uib_w_34 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">On-Site Location :</label><input class="wide-control" placeholder="Insert On-Site Location" type="text"></div><div class="table-thing with-label widget uib_w_35 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Off-Site Location :</label><input class="wide-control" placeholder="Insert Off-Site Location" type="text"></div></div>';
         
         var inputGroup = $("#plans .input-group");
//         $(inputGroup[inputGroup.length-1]).after(item);
         $(inputGroup[inputGroup.length-1]).after($(inputGroup[inputGroup.length-1]).clone());
         var inputs = $(inputGroup[inputGroup.length-1]).next().find("input");
         $(inputs).each(function(index){
             $(this).val("");
         });
     });
     
     $(document).on("click", "#add_agreements", function(){
         var item = '<div class="input-group"><div class="table-thing with-label widget uib_w_95 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Name :</label><input class="wide-control" placeholder="Insert Name" type="text"></div><div class="table-thing with-label widget uib_w_42 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Date of Receipt :</label><input class="wide-control" type="date"></div><div class="table-thing with-label widget uib_w_43 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Author :</label><input class="wide-control" placeholder="Insert Author" type="text"></div><div class="table-thing with-label widget uib_w_44 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Custodian :</label><input class="wide-control" placeholder="Insert Custodian" type="text"></div><div class="table-thing with-label widget uib_w_45 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">On-Site Location :</label><input class="wide-control" placeholder="Insert On-Site Location" type="text"></div><div class="table-thing with-label widget uib_w_46 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Off-Site Location :</label><input class="wide-control" placeholder="Insert Off-Site Location" type="text"></div></div>';
         
         var inputGroup = $("#agreements .input-group");
//         $(inputGroup[inputGroup.length-1]).after(item);
         $(inputGroup[inputGroup.length-1]).after($(inputGroup[inputGroup.length-1]).clone());
         var inputs = $(inputGroup[inputGroup.length-1]).next().find("input");
         $(inputs).each(function(index){
             $(this).val("");
         });
     });
     
     $(document).on("click", "#add_documents", function(){
         var item = '<div class="input-group"><div class="table-thing with-label widget uib_w_96 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Name :</label><input class="wide-control" placeholder="Insert Name" type="text"></div><div class="table-thing with-label widget uib_w_53 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Date of Receipt :</label><input class="wide-control" type="date"></div><div class="table-thing with-label widget uib_w_54 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Author :</label><input class="wide-control" placeholder="Insert Author" type="text"></div><div class="table-thing with-label widget uib_w_55 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Custodian :</label><input class="wide-control" placeholder="Insert Custodian" type="text"></div><div class="table-thing with-label widget uib_w_56 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">On-Site Location :</label><input class="wide-control" placeholder="Insert On-Site Location" type="text"></div><div class="table-thing with-label widget uib_w_57 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Off-Site Location :</label><input class="wide-control" placeholder="Insert Off-Site Location" type="text"></div></div>';
         
         var inputGroup = $("#documents .input-group");
//         $(inputGroup[inputGroup.length-1]).after(item);
         $(inputGroup[inputGroup.length-1]).after($(inputGroup[inputGroup.length-1]).clone());
         var inputs = $(inputGroup[inputGroup.length-1]).next().find("input");
         $(inputs).each(function(index){
             $(this).val("");
         });
     });
     
     $(document).on("click", "#add_procedures", function(){
         var item = '<div class="input-group"><div class="table-thing with-label widget uib_w_97 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Name :</label><input class="wide-control" placeholder="Insert Name" type="text"></div><div class="table-thing with-label widget uib_w_64 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Date of Receipts :</label><input class="wide-control" type="date"></div><div class="table-thing with-label widget uib_w_65 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Author :</label><input class="wide-control" placeholder="Insert Author" type="text"></div><div class="table-thing with-label widget uib_w_66 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Custodian :</label><input class="wide-control" placeholder="Insert Custodian" type="text"></div><div class="table-thing with-label widget uib_w_71 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">On-Site Location :</label><input class="wide-control" placeholder="Insert On-Site Location" type="text"></div><div class="table-thing with-label widget uib_w_72 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Off-Site Location :</label><input class="wide-control" placeholder="Insert Off-Site Location" type="text"></div></div>';
         
         var inputGroup = $("#procedures .input-group");
//         $(inputGroup[inputGroup.length-1]).after(item);
         $(inputGroup[inputGroup.length-1]).after($(inputGroup[inputGroup.length-1]).clone());
         var inputs = $(inputGroup[inputGroup.length-1]).next().find("input");
         $(inputs).each(function(index){
             $(this).val("");
         });
     });
     
     $(document).on("click", "#add_guidelines", function(){
         var item = '<div class="input-group"><div class="table-thing with-label widget uib_w_98 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Name :</label><input class="wide-control" placeholder="Insert Name" type="text"></div><div class="table-thing with-label widget uib_w_75 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Date of Receipt :</label><input class="wide-control" type="date"></div><div class="table-thing with-label widget uib_w_76 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Author :</label><input class="wide-control" placeholder="Insert Author" type="text"></div><div class="table-thing with-label widget uib_w_77 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Custodian :</label><input class="wide-control" placeholder="Insert Custodian" type="text"></div><div class="table-thing with-label widget uib_w_82 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">On-Site Location :</label><input class="wide-control" placeholder="Insert On-Site Location" type="text"></div><div class="table-thing with-label widget uib_w_83 position" data-uib="app_framework/input" data-ver="2"><label class="narrow-control label-top-left">Off-Site Location :</label><input class="wide-control" placeholder="Insert Off-Site Location" type="text"></div></div>';
         
         var inputGroup = $("#guidelines .input-group");
//         $(inputGroup[inputGroup.length-1]).after(item);
         $(inputGroup[inputGroup.length-1]).after($(inputGroup[inputGroup.length-1]).clone());
         var inputs = $(inputGroup[inputGroup.length-1]).next().find("input");
         $(inputs).each(function(index){
             $(this).val("");
         });
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
            if(i > 0){
                $(inputGroups[i-1]).after($(inputGroups[i-1]).clone());
                inputGroups = $("#manuals .input-group");
            }
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
            if(i > 0){
                $(inputGroups[i-1]).after($(inputGroups[i-1]).clone());
                inputGroups = $("#manuals .input-group");
            }
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
            if(i > 0){
                $(inputGroups[i-1]).after($(inputGroups[i-1]).clone());
                inputGroups = $("#manuals .input-group");
            }
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
            if(i > 0){
                $(inputGroups[i-1]).after($(inputGroups[i-1]).clone());
                inputGroups = $("#manuals .input-group");
            }
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
            if(i > 0){
                $(inputGroups[i-1]).after($(inputGroups[i-1]).clone());
                inputGroups = $("#manuals .input-group");
            }
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
            if(i > 0){
                $(inputGroups[i-1]).after($(inputGroups[i-1]).clone());
                inputGroups = $("#manuals .input-group");
            }
            // inflate
            inputs = $(inputGroups[i]).find("input");
            items = (localStorage.getItem("guideline"+i)).split(",");
            for(j = 0; j < inputs.length; j++){
                $(inputs[j]).val(items[j]);
            }
        }
     }else{}
     
});