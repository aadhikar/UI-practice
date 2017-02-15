$(document).ready(function(){

    var x=2;
    $("#btnSubmit").click(function(){
        var text=$(".container .txtInput").val();
        alert($("#demo").html());
    });

    $("#demo").hover(function(){
        $("p").css("color","blue");
    },function(){
        $("p").css("color","black");
    });

    $("ul li:nth-child(2)").css("font-size","20px");

    $("ul li:first-child").attr("class","blueColor");
    $("ul li:eq(0)").css({"color":"red","font-size":"25px"});
});

