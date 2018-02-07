$(document).ready(function() {
	  $('.added').click(function(){
        $(".tooltip--element").removeClass('tooltip--hide');
    });
    $('.agree').click(function(){
        $(".tooltip--element").addClass('tooltip--hide');
    });
});