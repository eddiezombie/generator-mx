$(document).ready(function() {

	$('.modal--success').click(function(event) {
		$('.bgModal').removeClass('bgModalHide');
		$('#modal-info-1').removeClass('modal_simple');
		$('body').css('overflow','hidden');
	});	

	$('.modal_close, #btn--close').click(function() {
        $(".bgModal").addClass('bgModalHide');
        $("#modal-info-1").addClass('modal_simple');
        $('body').css('overflow','scroll');
        return false;
    });

	$('.modal--alert').click(function(event) {
		$('.bgModal').removeClass('bgModalHide');
		$('#modal-info-2').removeClass('modal_simple');
		$('body').css('overflow','hidden');
	});	

	$('.modal_close, #btn--close').click(function() {
        $(".bgModal").addClass('bgModalHide');
        $("#modal-info-2").addClass('modal_simple');
        $('body').css('overflow','scroll');
        return false;
    });

    $('.modal--error').click(function(event) {
		$('.bgModal').removeClass('bgModalHide');
		$('#modal-info-3').removeClass('modal_simple');
		$('body').css('overflow','hidden');
	});	

	$('.modal_close, #btn--close').click(function() {
        $(".bgModal").addClass('bgModalHide');
        $("#modal-info-3").addClass('modal_simple');
        $('body').css('overflow','scroll');
        return false;
    });

});

