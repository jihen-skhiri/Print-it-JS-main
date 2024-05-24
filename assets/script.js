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


/*fonction Ajout des bullets points */
let dots = document.querySelector(".dots");
AddBullets();
function AddBullets() {
	
	for(let i=0; i<slides.length;i++) {
		let newdot = document.createElement("span")
		newdot.classList.add("dot")
		if (i === 0) newdot.classList.add('dot_selected');
        newdot.dataset.i = i;
		dots.appendChild(newdot)
	}	
}
/************************Update Bullets*************************/
let point = document.querySelectorAll(".dot")
function currentslide(n){
	
	for(i=0; i<point.length;i++) {
		point[i].classList.toggle('dot_selected', i===n);	
		
	};
	
	}
/*******Change slide en click sur Bullet */

function ClickBullet(){
for (let i = 0; i < point.length; i++) {
        point[i].addEventListener('click', (e) => {
            numero = parseInt(e.target.dataset.i);
           changeSlide(numero);
        });

    }
}

ClickBullet()


/***************fonction pour modifier le slide***********************/
let right = document.getElementById("slideright")
let left = document.getElementById("slideleft")
let numero = 0;
let sens = 0
function changeSlide(sens) {
	numero = numero + sens;
	let tag = document.querySelector("#banner p")
	for(let i=0; i<slides.length; i++) {
		document.getElementById("slide").src = "./assets//images/slideshow/" + slides[numero].image;
		tag.innerHTML = slides[numero].tagLine;	
		currentslide(numero)
		
	}	
	
	
}
/*******défilement infini */


right.addEventListener("click", changeSlide(sens));
left.addEventListener("click", changeSlide(sens));





