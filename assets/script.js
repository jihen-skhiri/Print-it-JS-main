document.addEventListener("DOMContentLoaded", function() {
    const slides = [
        {
            "image":"slide1.jpg",
            "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image":"slide2.jpg",
            "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image":"slide3.jpg",
            "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image":"slide4.png",
            "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ]

    let currentSlide = 0;

    const slideImage = document.getElementById('slide');
    const tagline = document.querySelector('#banner p');

    const dotsList = document.querySelector('.dots');
    createDot() 
    updateDots()
    clickDots()  

    // Création Bullets points
    function createDot () {
        slides.forEach((slide, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('dot_selected');
            dot.dataset.index = index;
            dotsList.appendChild(dot);
        });
        
}

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        slideImage.src = "./assets/images/slideshow/" + slides[currentSlide].image;
        tagline.innerHTML = slides[currentSlide].tagLine;
        updateDots();
       
    }
    
    function updateDots() {
        const dots = document.querySelectorAll('.dot'); 
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        });
    }

    document.getElementById('slideright').addEventListener('click', function() {
        showSlide(currentSlide + 1);
    });

    document.getElementById('slideleft').addEventListener('click', function() {
        showSlide(currentSlide - 1);
    });
function clickDots(){
    const dots = document.querySelectorAll('.dot'); 
    dots.forEach((dot, index) => {
        dot.addEventListener('click', ()=> {
            currentSlide = index
            showSlide(currentSlide);
        });
    });
}

});
