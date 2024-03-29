//Global variables
var mBone;
var newhash = 's1';

// On Window resize, keep the iframe updated

$(window).scroll(function () {
   // $(this).scrollTop();
 });

$(window).resize(function(){
	if ((!navigator.userAgent.match(/iPhone/i)) && (!navigator.userAgent.match(/iPod/i))) {
		mBone.resize()
		mBone.setInTheMiddle();
	}
	mBone.resizeSlidedImage();
});

// On Document Ready
$(document).ready(function() {
	mBone = new mainBone();
	if ((!navigator.userAgent.match(/iPhone/i)) && (!navigator.userAgent.match(/iPod/i))) {
		mBone.resize()
		mBone.setInTheMiddle();
	}
	mBone.resizeSlidedImage();
});

// hash_changed	= function() {
	
// 	newhash = location.hash.toLowerCase();
// 	console.log("hash_changed->" + newhash)
// 	$.scrollTo($(newhash+'cont').position().top,1000);

// };


//**********************************************************************//
//**************MAIN BONE CLASS*****************************************//
//**********************************************************************//


function mainBone () {
	
}

mainBone.prototype.resize = function() {

   	var w = $(window).width(); 
	var h = $(window).height(); 
	
	var ypos = 0;
	$( "section.resize" ).each(function( index ) {
		$(this).css('height',h);
	});

	$( "section.min-resize" ).each(function( index ) {
		$(this).css('min-height',h);
	});

	// $.scrollTo($(newhash+'cont').position().top,0);
};

mainBone.prototype.resizeSlidedImage = function() {
	var setWidth = $('#before-after-slider > img').width();
	$('#before-after-slider .mask img').width(setWidth);
};

mainBone.prototype.setInTheMiddle = function() {
	var h = $(window).height();
	$( "section.resize.position-middle").each(function( ) {
		var rowElement = $(this).find('.position');
		rowElement.css("margin-top", Math.floor( (h - rowElement.height()) / 2 ) );
	});
};