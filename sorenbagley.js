function main() {

	 
	$('.works_button').on('mouseover', function() {
		$(this).addClass("active");			
		});
	$('.works_button').on('mouseout', function() {
		$(this).removeClass("active");		
		});
		
	$('.info_button').on('mouseover', function() {
		$(this).addClass("active");			
		});
	$('.info_button').on('mouseout', function() {
		$(this).removeClass("active");		
		});
	$('.works_button').on('click', function() {
		$('.works_branch').toggle();
		$('.info_branch').hide();
		$(this).toggleClass("stay_active");	
		$('.info_button').removeClass("stay_active");
		});
	$('.info_button').on('click', function() {
		$('.info_branch').toggle();		
		$('.works_branch').hide();
		$(this).addClass("stay_active");	
		$('.works_button').removeClass("stay_active");
		});
	$('.about_button').on('click', function(){
		$(this).addClass("stay_active");
		});
	$('.contact_button').on('click', function(){
		$(this).addClass("stay_active");		
		});
	//masonry//
$('.thumbnail_gallery').masonry({
		columnWidth: 320,
		itemSelector: 'individual_image',
		isFitWidth: true,
		isAnimated: !Modernizr.csstransitions
	}).imagesLoaded(function() {
		$(this).masonry('reload');
	});


}
$(document).ready(main);