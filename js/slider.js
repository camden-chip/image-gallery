//get all links of the images
var allImages = document.querySelectorAll( '#gallery img' );


var imageSources = [];

for (var i = 0; i < allImages.length; i++) {
	
	imageSources.push( allImages[i].src );
}

//delete all the images on the page

var galleryContainer = document.querySelector( '#gallery');
galleryContainer.innerHTML = '';
//create the slider container

var slider = document.createElement('div');

//attach an ID to the slider
slider.id = 'slider';

//add the slider to the browser

galleryContainer.appendChild( slider );

var prev = document.createElement('button');
var next = document.createElement('button');


prev.id = 'prev';
next.id = 'next';


prev.innerHTML = "Previous";
next.innerHTML = "Next";

//add the buttons to the slider

slider.appendChild(prev);
slider.appendChild(next);

// show the first image to the visitor
 slider.style.backgroundImage = 'url('+ imageSources[0] +')';
 //listen for clicks on the buttons

next.onclick = changePicture;
prev.onclick = changePicture;

function changePicture() {
	
//which image is in use?

var imageInUse = slider.style.backgroundImage;

// extract the URL
 var bits = imageInUse.split('"');


//save the link inside a variable
var url = bits[1];
 console.log(url);

 //find out what index is in use in theimage sources
 var index = imageSources.indexOf( url );


//ifthe next button was clicked
if( this.id == 'next') { 
	index++;
	//if the index is beyond the last image
	if( index == imageSources.length ) { index = 0;
		console.log('you have reached the end');

	}
	
}else {
		index--;
		//if you have gone befor the firt image
		if(index == -1) { 
			index = imageSources. length -1;
		}
	}
//get thenew URL
var newUrl = imageSources[index];

//Change the picture innthe slider
slider.style.backgroundImage = 'url('+ newUrl +')';
}




















