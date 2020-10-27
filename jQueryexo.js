    //jQuery Selector

$("p").hide();

$("#text").hide();

$(".text").hide();

$("*").hide();

$("[href]").hide();

$("tr:odd").hide();



    //jQuery Events

$("p").click(function(){
    $(this).hide();
  });

$("p").dblclick(function(){
    $(this).hide();
  });

$("p").mouseenter(function(){
    $(this).hide();
  });

$("input").keypress(function(){
    $(this).hide();
  });

$("p").on("click", function(){
    $(this).hide();
  });



    //jQuery Hide and Show

$("p").click(function(){
    $(this).hide();
  });

$("p").click(function(){
    $(this).hide("slow");
  });

$("button").click(function(){
    $("p").show();
  });

$("button").click(function(){
    $("p").toggle();
  });



    //jQuery Fade

$("div").fadeOut();

$("div").fadeOut("slow");

$("div").fadeTo("slow", 0.2);

$("button").click(function(){
    $("div").fadeToggle(1000);
  });



    //jQuery Slide

$("div").slideUp();

$("div").slideUp("slow");

$("div").slideDown();

$("button").click(function(){
    $("div").slideToggle();
  });



    //jQuery Animate

$("div").animate({left: '250px'});

$("div").animate({height: '500px'});

$("div").animate({
    opacity: '0.4',
    height: '500px',
    width: '500px'
  });

$("div").animate({fontSize: '100px'}, "slow");



    //jQuery Stop

$("div").stop();



    //jQuery Get

$("div").text();

$("div").html();

$("input").val();

$("a").attr("href");



    //jQuery Set

$("div").text("Hello World");

$("input").val("John Doe");

$("img").attr("src", "myimage.jpg");

$("#myLink").text("Demo");
$("#myLink").attr("href", "https://www.demo.com");



    //jQuery Add

$("p").append("YES!");

$("p").prepend("YES!");



    //jQuery Remove

$("div").remove();

$("div").empty();

$("div").remove(".test, .demo");



    //jQuery CSS Classes

$("p").addClass("important");

$("p").addClass("important test");

$("p").removeClass("important");

$("p").click(function(){
    $(this).toggleClass("important");
  });



    //jQuery Traversing

$("span").parent();

$("span").parents();

$("div").children();

$("div").find("span");

$("h2").siblings();

$("div").first();