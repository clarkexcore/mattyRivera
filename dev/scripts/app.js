//Empty NameSpacing
var portfolio = {}

//Portfolio Initializing
portfolio.init = function(){
	portfolio.masonry();
};

//Portfolio Masonry
portfolio.masonry = function(){
	$('.gallery-artwork').masonry({
		itemSelector: '.gallery-artwork__img',
		columnWidth: '.gallery-artwork__img',
		fitWidth: true
	});
};


$(function(){
	portfolio.init();
	console.log('Hello');
});