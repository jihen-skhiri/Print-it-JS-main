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

AddBullets();
function AddBullets() {
	let dots = document.querySelector(".dots");
	for(let i=0; i<slides.length;i++) {
		let newdot = document.createElement("span")
		newdot.classList.add("dot")
		dots.appendChild(newdot)
	}	
	console.log(dots)
}

/***************fonction pour modifier le slide***********************/
let right = document.getElementById("slideright")
let left = document.getElementById("slideleft")
let numero = 0;
let sens = 0
function changeSlide(sens) {
	numero = numero + sens;
	let tag = document.querySelector("#banner p")
	for(let i=0; i<slides.length;i++) {
		document.getElementById("slide").src = "./assets//images/slideshow/" + slides[numero].image;
		tag.innerHTML = slides[numero].tagLine;
	}
}
right.addEventListener("click", changeSlide(sens));
left.addEventListener("click", changeSlide(sens));


