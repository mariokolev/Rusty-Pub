//scroll to position-y 0 when the page is being refreshed
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  //function for checking for added class
  function isAdded(yourElement, yourClass){
    const x = document.querySelector(yourElement)
    if(x.classList.contains(yourClass)){
        x.classList.remove(yourClass);
    }else{
        x.classList.add(yourClass);
    }
}

window.addEventListener("load", function(){
    $('.loader-bg').fadeOut(800);
    

//stop all transition when resizing window
        var resizeTimer;
        window.addEventListener('resize', function() {
            document.body.classList.add('is-resizing');
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                document.body.classList.remove('is-resizing');
            }, 100);
        });

    isAdded('#center-logo', 'active');
    isAdded('#landing-pic', 'active');
    isAdded('.nav-menu li:first-child', 'active');
    isAdded('.nav-menu li:nth-child(2)', 'active');
    isAdded('.nav-menu li:nth-child(3)', 'active');
  
    const x = window.matchMedia("(max-width:1080px)");
    if(x.matches){
            isAdded('#title-about', 'active');
            isAdded('#title-p', 'active');
            isAdded('#title-p-second', 'active');

    }else{
        window.addEventListener('scroll', function(e){
            revealonScroll('#title-about');
            revealonScroll('#title-p');
            revealonScroll(' #title-p-second');
        });
    }

var slideIndex = 1;
showSlides(slideIndex);



//Reveal on scroll 
function revealonScroll(target){
    target = document.querySelector(target);
    const windowOffSet = window.pageYOffset;
    const targetOffSet = target.offsetTop;
    const windowHeight = window.innerHeight;
    const bottom = windowOffSet + windowHeight;

    if (bottom > targetOffSet){
            target.classList.add('active');
    }else{
        target.classList.remove('active');
    }
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);

  }

function showSlides() {
    var i;
    
    //trying smth
    var dots = document.getElementsByClassName("dot");
    const windowOffSet = window.pageYOffset;

        if(windowOffSet > 430){
            for (i = 0; i < dots.length; i++) {
                dots[i].classList.remove("active-white");
                dots[i].className = dots[i].className.replace(" active-black", "");
            }
            dots[slideIndex-1].className += " active-black";
        }else{
            for (i = 0; i < dots.length; i++) {
                dots[i].classList.remove("active-black");
                dots[i].className = dots[i].className.replace(" active-white", "");
            }
   
    dots[slideIndex-1].className += " active-white";
}
  }

  //Changing dot's color while scrolling 
  function DotColor(){

    var dots = document.getElementsByClassName("dot");
    const windowOffSet = window.pageYOffset;
     if(windowOffSet >= 430){
        for(var i = 0; i < dots.length; i++){
            dots[i].classList.add("dot-black");
            if(dots[i].classList.contains("active-white")){
                dots[i].classList.remove("active-white");
                dots[i].classList.add("active-black");
            }
        }

        if(windowOffSet > 430 && windowOffSet < 1600){
                dots[1].classList.add("active-black");
                dots[2].classList.remove("active-black");
                dots[0].classList.remove("active-black");
        }

        }
        
        if(windowOffSet <= 430){
            for(var i = 0; i < dots.length; i++){
            dots[i].classList.remove("dot-black");
            if(dots[i].classList.contains("active-black")){
                dots[i].classList.remove("active-black");
                dots[i].classList.add("active-white");
            }
            }
                dots[0].classList.add("active-white");
                dots[1].classList.remove("active-white");
                dots[2].classList.remove("active-white");
        }

        if(windowOffSet > 1600){
            dots[2].classList.add("active-black");
            dots[0].classList.remove("active-black");
            dots[1].classList.remove("active-black");
        } 
     }

//Adding event listener to window when scrolling
//window.addEventListener("scroll", DotColor);
window.addEventListener("scroll", function(e){
    DotColor();
    revealonScroll('.behind-bar');
    revealonScroll('#text-about li:first-child');
    revealonScroll('.second');
    revealonScroll('#text-about li:last-child');
    revealonScroll('#title-events');
    revealonScroll('.grid-fever-night');
    revealonScroll('.grid-beer');
    revealonScroll('.grid-karaoke');


    const karaoke = document.querySelector('.grid-karaoke');
    const x = window.matchMedia("(min-width:1080px)");
    if(x.matches){
    karaoke.addEventListener('transitionend', function(){
            revealonScroll('.grid-karaoke .text-event');
            revealonScroll('.grid-fever-night .text-event');
            revealonScroll('.grid-beer .text-event');
    });
}else{
            revealonScroll('.grid-karaoke .text-event');
            revealonScroll('.grid-fever-night .text-event');
            revealonScroll('.grid-beer .text-event');
}
    
    
});


//JQuery for clicking dots
$('.dots li:first-child').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#landing-pic').offset().top
    }, 700);
});

$('.dots li:nth-child(2)').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#section-about').offset().top
    }, 700);
});


$('.dots li:nth-child(3)').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#section-events').offset().top
    }, 700);
});

//smooth scroll for nav elements
const about = document.querySelector(".nav-menu li:first-child");
const events = document.querySelector('.nav-menu li:nth-child(2)');
const burger = document.querySelector('#burger-container');
const navBar = document.querySelector('.nav-menu');

about.addEventListener('click', function(e){
    e.preventDefault();
    if(navBar.classList.contains('show-nav')){
        navBar.classList.remove('show-nav');
    }

    burger.style.position = 'absolute';
    burger.classList.remove('open');
        $('html, body').animate({
            scrollTop: $('#section-about').offset().top
        }, 700);
});

events.addEventListener('click', function(e){
    e.preventDefault();
    if(navBar.classList.contains('show-nav')){
        navBar.classList.remove('show-nav');
    }
    
    burger.classList.remove('open');
    burger.style.position = 'absolute';
        $('html, body').animate({
            scrollTop: $('#section-events').offset().top
        }, 700);
});


burger.addEventListener("click", function(){
  
    if(!burger.classList.contains('open')){
        navBar.style.display = 'block';
       navBar.classList.add('show-nav');
        burger.classList.add('open');
        burger.style.position = 'fixed';
    }else{
       navBar.classList.remove('show-nav');
        burger.style.position = 'absolute';
        burger.classList.remove('open');
    }

});


});





