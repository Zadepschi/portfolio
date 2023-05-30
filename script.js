



  $(document).mousemove(function(e){
    $("#circle1").css({left: e.pageX, top:e.pageY, opacity:1});
    $("#circle2").css({left: e.pageX, top:e.pageY, opacity:1});
    $("#circle3").css({left: e.pageX, top:e.pageY, opacity:1});
  });
  
  $(document).mouseleave(function(){
    $("#circle1").css({opacity:0});
    $("#circle2").css({opacity:0});
    $("#circle3").css({opacity:0});
  });
  
  





  
gsap.to(".everyDay", {opacity: 0, duration: 1,  delay: 8})
gsap.from(".picPng", {opacity: 0, duration: 2, delay: 9})

gsap.from(".icon1", {opacity: 0, duration: 2, delay: 9.3})
gsap.from(".icon2", {opacity: 0, duration: 2, delay: 9.6})
gsap.from(".icon3", {opacity: 0, duration: 2, delay: 9.9})
gsap.from(".icon4", {opacity: 0, duration: 2, delay: 10.2})
gsap.from(".menu1", {opacity: 0, duration: 1, delay: 10.2, x: 50 }) 
gsap.from(".menu2", {opacity: 0, duration: 1, delay: 10.2, y: 200 }) 








