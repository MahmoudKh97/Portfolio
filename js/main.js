$(document).ready(function(){

    $("button").click(function(){
        $(".burger").toggleClass("show");
        $(".CContainerWrap").toggleClass("position");
        $("footer").toggleClass("footer");
    });

var typed = new Typed('.typedHome',{
    strings:["Web Developer","Web Disgner","Freelancer"],
    typeSpeed:60,
    loop:true
});


let pie = function(p){
$(p).easyPieChart({
    size:140,
    scaleColor:false,
    trackColor:'#DCE8F8',
    lineWidth:5,
    animate:5000
});
};

let nCount = function (selector) {
    $(selector).each(function () {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: "swing",
            step: function (value) {
                $(this).text(Math.ceil(value))
            }
        });
    });
};

let a = 0;
$(window).scroll(function () {
    let oTop = $(".chart").offset().top - innerHeight;
    if (a == 0 && $(this).scrollTop() >= oTop) {
        a++;
        nCount('.percent');
        pie('.chart');
    }
    if($(this).scrollTop() >= $("#About").offset().top - innerHeight){
        $(".top").css("display","flex");
    }
    else{
        $(".top").css("display","none");
    }
});

    $('.venobox').venobox();

AOS.init();

});
