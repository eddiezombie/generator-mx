$(document).ready(function() {
	$('#menu-slide').slick({
		centerMode: true,
		slidesToShow: 3,
		initialSlide:2,
		infinite: false,
		focusOnSelect: true,
		cssEase: 'ease-in-out',
		asNavFor: '.slider-for',
		centerPadding: '0px',
		responsive: [
			{
				breakpoint: 768,
				settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 3
				}
			},
			{
				breakpoint: 640,
				settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 1
				}
			}
		]
	});
	$('#menu-slide').on('afterChange', function(event, slick, currentSlide){
		$('#content-slide').find('.step').removeClass('active');
		$('#content-slide').find('.step-01').addClass('active');
		$('input').val('');
		$('.error input, .success input').val('1234');
	});
	$('#menu-slide').on('beforeChange', function(event, slick, currentSlide){
		if ($('#pinpass').hasClass('slick-current')) {
			$('.box.banner').hide();
		}else{
			$('.box.banner').show();
		}
	});
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		initialSlide:2,
		fade: true,
		infinite: false,
		draggable:false,
		asNavFor: '#menu-slide',
		cssEase: 'ease-in-out'
	});

});


// Cambios de pasos
$('#superclave').on('click', '.js-activar', function(event) {
	event.preventDefault();
	$("#form-super_clave input").each(function(){
		if($(this).val() === ''){
			$(this).focus();
			return false;
		}else{
			$('#superclave').find('.step').removeClass('active');
			$('#superclave').find('.step-02').addClass('active');
		}
	});
});

$('#superclave').on('click', '.js-bloquear', function(event) {
	event.preventDefault();
	$("#form-clave_internet input").each(function(){
		if($(this).val() === ''){
			$(this).focus();
			return false;
		}else{
			$('#superclave').find('.step').removeClass('active');
			$('#superclave').find('.step-03').addClass('active');
		}
	});

});
$('#claveacceso').on('click', '.js-aceptar', function(event) {
	event.preventDefault();
	$("#form-cambio_clave input").each(function(){
		if($(this).val() === ''){
			$(this).focus();
			return false;
		}else{
			$('#claveacceso').find('.step').removeClass('active');
			$('#claveacceso').find('.step-02').addClass('active');
		}
	});
});


$('.js-getImage').each(function(i, e) {
	var image;
	image = $(e).find('.js-image img').attr('src');
	$(e).find('.js-image').css('background-image', 'url(' + image + ')');
	return $(e).find('.js-image');
});

$('.form_security').find('.form_input').keyup(function () {
	if (this.value.length == this.maxLength) {
		$(this).parents('.form_field').next().children('.form_input').focus();
	}
});
