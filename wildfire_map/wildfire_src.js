const slides = document.querySelectorAll(".slides img")
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
