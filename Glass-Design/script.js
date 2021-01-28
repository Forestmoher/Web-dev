

//controls hover affect for 'glass sections'// 

$(function () {
    $('.glass1').hover(function () {
        $('.glass1').css('background', 'white');
    }, function () {
        // on mouseout, reset 
        $('.glass1').css('background', '');
    });
});

$(function () {
    $('.glass2').hover(function () {
        $('.glass2').css({
            "background": "white",
            "width": "68%",
            "left": "7%",
            "z-index": "5"
        });
    }, function () {
        // on mouseout, reset
        $('.glass2').css({
            "background": "",
            "width": "",
            "left": "",
            "z-index": ""
        });
    });
});

$(function () {
    $('.glass3').hover(function () {
        $('.glass3').css({
            "background": "white",
            "width": "76%",
            "left": "9%",
            "z-index": "6"
        });
        $('.glass2').css({
            "width": "68%",
            "left": "7%",
            "z-index": "5"
        });
    }, function () {
        // on mouseout, reset 
        $('.glass3').css({
            "background": "",
            "width": "",
            "left": "",
            "z-index": ""
        });
        $('.glass2').css({
            "width": "",
            "left": "",
            "z-index": ""
        });
    });
});

$(function () {
    $('.glass4').hover(function () {
        $('.glass4').css({
            "background": "white",
            "width": "84%",
            "left": "11%",
            "z-index": "7"
        });
        $('.glass2').css({
            "width": "68%",
            "left": "7%",
            "z-index": "5"
        });
        $('.glass3').css({
            "width": "76%",
            "left": "9%",
            "z-index": "6"
        });
    }, function () {
        // on mouseout, reset 
        $('.glass4').css({
            "background": "",
            "width": "",
            "left": "",
            "z-index": ""
        });
        $('.glass2').css({
            "width": "",
            "left": "",
            "z-index": ""
        });
        $('.glass3').css({
            "width": "",
            "left": "",
            "z-index": ""
        });
    });
});