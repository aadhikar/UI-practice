$(document).ready(function(){
    $(".accordionItem h3").click(function(){
        $(".accordionContent").slideUp();
        $(this).parent().children(".accordionContent").slideDown();
    });
});

