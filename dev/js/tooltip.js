$(document).ready(function() {
	$('.added').on('click',function(){
        $('.tooltip--container').addClass('.tooltip--hide');
        $('.tooltip').show('.tooltip--container');
    });
    $('.added').on('click',function(){
        $('.tooltip--hide').removeClass('.tooltip--container');
    });
});