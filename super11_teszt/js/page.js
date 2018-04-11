$(function() {
	$('.innerbox').matchHeight();
});
		
$(function() {
	$('.skew').matchHeight({target: $('.innerbox')
	});
});
		
$(document).ready(function() {
	$('.closebutton').on('click', function(e) { 
		$('.box2, .closebutton').remove(); 
	});
});