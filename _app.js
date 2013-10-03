$(document).ready( function(){
var container=$('#container');
var btnBack=$('#back');
var btnFeed=$('#feed');
var btnPeople=$('#people');
var btnMe=$('#me');
var btnLoding=$('#loading');

var html=container.html();
//container.html('');
btnBack.on('click', function(){
	window.history.back();
});


btnFeed.on('click', function(){
	showContents(html);
});

btnPeople.on('click', function(){
	showContents(html);
});

btnMe.on('click', function(){
	showContents(html);
});

var showContents=function( data ){
	btnLoding.fadeIn("slow", function(){
	container.html(html).fadeIn("slow");
	btnLoding.fadeOut("slow");
	});
};

});