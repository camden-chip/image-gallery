//get all links of the images
var allImages = document.querySelectorAll( '#gallery img' );


var imageSources = [];

for (var i = 0; i < allImages.length; i++) {
	
	imageSources.push( allImages[i].src );
}
console.log( imageSources )
//delete all the images on the page

var galleryContainer = document.querySelector( '#gallery');
galleryContainer.innerHTML = '';
//create the slider container

var slider = document.createElement('div');

//attach an ID to the slider
slider.id = 'slider';

//add the slider to the browser

galleryContainer.appendChild( slider );
var next = document.createElement('button');
var prev = document.createElement('button');

next.id = 'next';
prev.id = 'prev';

next.innerHTML = "Next";
prev.innerHTML = "Previous";

//add the buttons to the slider

slider.appendChild(next);
slider.appendChild(prev);

// show the first image to the visitor
 slider.style.backgroundImage = 'url('+ imageSources[0] +')';
