$(document).ready(function(){
    $("#menu i").click(function(){
        $("#menu").css({left:"260px"});
        $(".menu-item").css({display:"block", transition:"all 2s"});
    })
    $(".close").click(function(){
        $(".menu-item").css({display:"none", transition:"all 2s"})
        $("#menu").css({left:"20px"});
    })
    
    $(".inner-singer-1").hide();
    $(".inner-singer-2").hide();
    $(".inner-singer-3").hide();
    $(".inner-singer-4").hide();
    
    $(".singer-1").click(function(){
        $(".inner-singer-1").slideToggle(1000);
    })
    $(".singer-2").click(function(){
        $(".inner-singer-2").slideToggle(1000);
        $(".inner-singer-1").slideUp(1000);
    })
    $(".singer-3").click(function(){
        $(".inner-singer-3").slideToggle(1000);
        $(".inner-singer-2").slideUp(1000);
    })
    $(".singer-4").click(function(){
        $(".inner-singer-4").slideToggle(1000);
        $(".inner-singer-3").slideUp(1000);
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
})
