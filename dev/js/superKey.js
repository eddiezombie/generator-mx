
$(document).ready(function() {

	$('.card--superkey').on('click',function(event) {
		event.preventDefault();
		$('#superclave').find('.active').removeClass('step');
		$('#claveacceso').find('.step').removeClass('active');
	});

	$('.card-keyAccess').on('click',function(event) {
		event.preventDefault();
		$('#claveacceso').find('.active').removeClass('step');
		$('#superclave').find('.step').removeClass('active');
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

	$('.form_security').find('.form_input').keyup(function () {
		if (this.value.length == this.maxLength) {
			$(this).parents('.form_field').next().children('.form_input').focus();
		}
	});

	
});