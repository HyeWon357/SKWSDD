$(document).ready(function(){

    $("#title1").hide();
    $("#title2").hide();
    $("#title3").hide();

    //list1
    $("#but1").mouseenter(function(){
        $("#title1").show();
    });

    $("#but1").mouseleave(function(){
        $("#title1").hide();
    });
    
    //list2
    $("#but2").mouseenter(function(){
        $("#title2").show();
    });

    $("#but2").mouseleave(function(){
        $("#title2").hide();
    });
    
    // list3
    $("#but3").mouseenter(function(){
        $("#title3").show();
    });

    $("#but3").mouseleave(function(){
        $("#title3").hide();
    });

});