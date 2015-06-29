$(document).ready(function(){
  $(".content > li > a").click(function(){
    //alert($(this).index())
    $(this).parent("li").find("ul").slideToggle();
    $(this).parent("li").siblings().find("ul").slideUp();
    $(this).addClass("active");
    $(this).parents("li").siblings().children("a").removeClass("active");
    $("#content").load('list.html');
  })
})
