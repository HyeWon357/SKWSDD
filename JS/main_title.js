$(document).ready(function () {
    $("#text2").hide();
    $("#text3").hide();
    $("#text4").hide();

    $("#text").mouseenter(function () {
        $(this).css({
            "width": '800px', "height": '400px',
            "-webkit-transform": 'scale(1.1)', "transform": 'scale(1.1)',
            "background-color": 'rgba(0, 0, 0, 0.582)',
            "padding-top": "25px"
        });

        $("#text2").show();
        $("#text3").show();

    });



    $("#text").mouseleave(function () {
        $(this).css({
            "width": '800px', "height": '140px',
            "-webkit-transform": 'none', "transform": 'none',
            "background-color": 'rgba(0, 0, 0, 0)',
            "padding-top": "10px"
        });

        $("#text2").hide();
        $("#text3").hide();

    });


    $("#text_1").mouseenter(function () {
        $(this).css({
            "width": '800px', "height": '600px',
            "-webkit-transform": 'scale(1.1)', "transform": 'scale(1.1)',
            "background-color": 'rgba(0, 0, 0, 0.582)',
            "padding-top": "25px", "color": 'rgba(148, 147, 147, 0.856)'
        });

        $("#text4").show();
        
    });
    
    
    $("#text_1").mouseleave(function () {
        $(this).css({
            "width": '800px', "height": '110px',
            "-webkit-transform": 'none', "transform": 'none',
            "background-color": 'rgba(0, 0, 0, 0)',
            "padding-top": "30px", "color": 'rgba(148, 147, 147, 0.856)'
        });

        $("#text4").hide();

    });
    

});
