$("#jumbo-vid").playbackrate = 2.5;
console.log("in script");

$(".scroll-button").click(function() {
	$('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
	console.log("scrolling");
})