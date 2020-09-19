
const imageSlide = document.querySelector('.image-slide');
const images = document.querySelectorAll('.image-slide img');

//Buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

//Counter 
let counter = 1;
let size = images[0].clientWidth;


imageSlide.style.transform = `translateX(${-size * counter}px)`;

//add event to buttons
nextBtn.addEventListener('click', ()=> {
    if(counter >= images.length-1) return;
    imageSlide.style.transition  = "transform 0.4s ease-in-out"
    counter++
    imageSlide.style.transform = `translateX(${-size * counter}px)`;
    
})

prevBtn.addEventListener('click', ()=> {
    if(counter<= 0) return;
        imageSlide.style.transition  = "transform 0.5s ease-in-out"
        counter--;
        imageSlide.style.transform = `translateX(${-size * counter}px)`;

})

//after go to last image, keep looking previous ones
imageSlide.addEventListener('transitionend', ()=> {
    if(images[counter].id == 'lastClone'){
        imageSlide.style.transition="none";
        counter = images.length-2;
        imageSlide.style.transform = `translateX(${-size * counter}px)`;

    }
    if(images[counter].id ==='firstClone'){
        imageSlide.style.transition="none";
        counter = 1;

        imageSlide.style.transform = `translateX(${-size * counter}px)`;

        
    }
    
    
})