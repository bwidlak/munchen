// Adjust the size of the image
// Read the width of other img

var afterBeforeSlider;

$(window).resize(function(){
	afterBeforeSlider.resize();
});

$(document).ready(function() {
	afterBeforeSlider = new slidedImage();
	afterBeforeSlider.resizeSlidedImage();
})


function slidedImage () {

}

slidedImage.prototype.resizeSlidedImage = function() {
	var setWidth = $('#before-after-slider > img').width();
	$('#before-after-slider .mask img').width(setWidth);
}