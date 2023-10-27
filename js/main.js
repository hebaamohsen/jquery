$(document).ready(function(){
    $("#menu i").click(function(){
        $("#menu").css({left:"260px"});
        $(".menu-item").css({display:"block", transition:"all 2s"});
    })
    $(".close").click(function(){
        $(".menu-item").css({display:"none", transition:"all 2s"})
        $("#menu").css({left:"20px"});
    })
    

    $("#duration h3").click(function(){
        $(this).next().slideToggle();

        $("#duration div").not($(this).next()).slideUp();
    })
    
    
    
    let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    
    let update = setInterval(function(){
        let now = new Date().getTime();
        let distance = countDownDate - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    $(".days").html(days + "<span>D</span>");
    $(".hours").html(hours + "<span>h</span>");
    $(".min").html(minutes + "<span>m</span>");
    $(".sec").html(seconds + "<span>s</span>");
    
    if (distance < 0) {
        clearInterval(update);
        $(".days").html("EXPIRED");
        $(".hours").html("EXPIRED");
        $(".min").html("EXPIRED");
        $(".sec").html("EXPIRED");
      }
    }, 1000);
    
    
    
    
    let totalChar = 100;

    $("textarea").keydown(function(e){
        let leftChar = totalChar - $(this).val().length;

        $(".num").text(leftChar);
        if(leftChar <= 0){
            $(".num").text("your available character finished ");
        }
    })


    $("a[href^='#']").click(function(e){
        let href = e.target.getAttribute('href');
        let sectionOffset = $(href).offset().top;
        $("html,body").animate({screenTop:sectionOffset},2000)
    })
})


