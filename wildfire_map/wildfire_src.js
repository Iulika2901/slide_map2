const slides = document.querySelectorAll(".slides img")
document.getElementById("myLink").addEventListener("click", function(event) {
    event.preventDefault(); 
});

myLink.addEventListener("keydown", function(event) {
    if (event.key === "e" || event.key === "2") {
      event.preventDefault();
    }
  });


  document.addEventListener("keydown", function(event) {
    if (event.target.tagName !== "INPUT" && event.target.tagName !== "BUTTON" && event.target.tagName !== "TEXTAREA") {
        event.preventDefault();
    }
});


let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);


document.getElementById('calculate-button').addEventListener('click', function() {

    const number1 =document.getElementById('number1').value;
    const number2 = parseFloat(document.getElementById('number2').value);
    
    if(number1=='Africa' & number2%3==0)
       sum = 5144202;
    if(number1=='Africa' & number2%3==1)
        sum = 6666179;
    if(number1=='Africa' & number2%3==2)
        sum = 5588420;
    if(number1=='Albania')
        sum = 0;
    if(number1=='World' & number2%3==0)
        sum = 364051420 ;
    if(number1=='World' & number2%3==1)
        sum =399923200 ;
    if(number1=='World' & number2%3==2)
        sum = 384226340 ;
    if(number1=='Africa' & number2==2027)
        sum = 5588420;
    if(number1=='Romania' & number2%3==0)
        sum = 26127.11;
     if(number1=='Romania' & number2%3==1)
         sum = 26139.92;
     if(number1=='Romania' & number2%3==2)
         sum = 26152.72;
     if(number1=='Spain' & number2%3==0)
        sum =  24543.11;
     if(number1=='Spain' & number2%3==1)
         sum =  24555.92;
     if(number1=='Spain' & number2%3==2)
         sum =  24576.72;
     if(number2<1890 || number2> 2300) sum = 'enter valid input';
     //else sum = 'enter valid input';

    document.getElementById('result').innerText = sum;
});


function initializeSlider(){
   if(slides.length > 0){
       slides[slideIndex].classList.add("displaySlide");
       //intervalId = setInterval(nextSlide, 5000);
   }
}

function showSlide(index){
    if(index >= slides.length){
       slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


 
$(function() {
    "use strict";
    var a = 0;
    $('#tv').hide();
    for (; a < 25; a += 1) {
      setTimeout(function b() {
        var a = Math.random() * 1e3 + 5e3,
          c = $("<div />", {
            "class": "smoke",
            css: {
              left: Math.random() * 800,
              backgroundSize: "contain",
              width: Math.random() * 800,
              height: Math.random() * 600
            }
          });
        $(c).addClass("animated");
        $(c).addClass("zoomIn");
        $(c).addClass("rollOut");
        $(c).appendTo("#viewport");
        $.when($(c).animate({}, {
            duration: a / 4,
            easing: "linear",
            queue: false,
            complete: function() {
              $(c).animate({}, {
                duration: a / 3,
                easing: "linear",
                queue: false
              })
            }
          }),
          $(c).animate({
            bottom: $("#viewport").height()
          }, {
            duration: a,
            easing: "linear",
            queue: false
          })).then(
          function() {
            $(c).remove();
            b()
          })
      }, Math.random() * 3e3)
    }
    $("body").keypress(function() {
      $('body').addClass("fadeOut");
      setTimeout(function() {
        $('#tv').show();
      }, 1000);
  
      console.log("Handler for .keypress() called.");
    });
  }())
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/player_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var tv,
    playerDefaults = {
      autoplay: 0,
      autohide: 1,
      modestbranding: 0,
      rel: 0,
      showinfo: 0,
      controls: 0,
      disablekb: 1,
      enablejsapi: 0,
      iv_load_policy: 3
    };
  var vid = [{
      'videoId': '2b5QNj-BVhs',
      'startSeconds': 515,
      'endSeconds': 690,
      'suggestedQuality': 'hd720'
    }, {
      'videoId': '9ge5PzHSS0Y',
      'startSeconds': 465,
      'endSeconds': 657,
      'suggestedQuality': 'hd720'
    }, {
      'videoId': 'OWsCt7B-KWs',
      'startSeconds': 0,
      'endSeconds': 240,
      'suggestedQuality': 'hd720'
    }, {
      'videoId': 'qMR-mPlyduE',
      'startSeconds': 19,
      'endSeconds': 241,
      'suggestedQuality': 'hd720'
    }],
    randomvid = Math.floor(Math.random() * (vid.length - 1 + 1));
  
  function onYouTubePlayerAPIReady() {
    tv = new YT.Player('tv', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: playerDefaults
    });
  }
  
  function onPlayerReady() {
    tv.loadVideoById(vid[randomvid]);
    tv.mute();
  }
  
  function onPlayerStateChange(e) {
    if (e.data === 1) {
      $('#tv').addClass('active');
    } else if (e.data === 0) {
      tv.seekTo(vid[randomvid].startSeconds)
    }
  }
  
  function vidRescale() {
  
    var w = $(window).width() + 200,
      h = $(window).height() + 200;
  
    if (w / h > 16 / 9) {
      tv.setSize(w, w / 16 * 9);
      $('.tv .screen').css({
        'left': '0px'
      });
    } else {
      tv.setSize(h / 9 * 16, h);
      $('.tv .screen').css({
        'left': -($('.tv .screen').outerWidth() - w) / 2
      });
    }
  }
  
  $(window).on('load resize', function() {
    vidRescale();
  });
  
  $('.hi span').on('click', function() {
    $('#tv').toggleClass('mute');
    if ($('#tv').hasClass('mute')) {
      tv.mute();
    } else {
      tv.unMute();
    }
  });
