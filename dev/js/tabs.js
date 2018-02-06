alert('hello world!');
/*function inicia_tab(){
     //tabs
     $('.cnt-tab').hide();
    // $('.cnt-tab:first').show();
     $(".btn-tab").on( "click", function() {
       $(".btn-tab").removeClass('active');
       $(this).addClass('active');
       $('.cnt-tab').hide();
       var tab = $(this).attr('href');
       $(tab).show();
       return false;
     });

     if($(this).hasClass('active')){
         $('#seccion li a').addClass('active');
         $(this).removeClass('active');
         $('.cnt-tab').hide();
         $(t).fadeIn('slow');
    }

}


function dynamicTab(){
     var menus = $("#menus"), menuWidth = menus.parent().outerWidth();
     var menupage = Math.ceil(menus[0].scrollWidth / menuWidth), currPage = 1;
     if (menupage > 1) {
         $("#goNext").click(function () {
             currPage < menupage && menus.stop(true).animate({
                 "left": -menuWidth * currPage
             }, "slow") && currPage++
         });
         $("#goPrev").click(function () {
             currPage > 1 && menus.stop(true).animate({
                 "left": -menuWidth * (currPage - 1)
             }, "slow") && currPage--;
         });
         $(window).on("resize", function () {
             menuWidth = menus.parent().outerWidth();
             menupage = Math.ceil(menus[0].scrollWidth / menuWidth);
             currPage = Math.ceil(-parseInt(menus.css("left")) / menuWidth) + 1;
         });
     }
 }
function acordeon(){
    $('.block .contenedorAcordeon').hide();
    $('.accordion h4').on('click',function(){
        var is_active = false;
        if($(this).find("span.icon-flecha-abajo").hasClass('flechaActiva')){
            is_active = true;
        }
        $('.accordion h4 span.icon-flecha-abajo').removeClass("flechaActiva");
        if(!is_active){
            $(this).find("span.icon-flecha-abajo").addClass("flechaActiva");
        }
        if($(this).next().find('.contenedorAcordeon').is(':visible')){
            $(this).next().find('.contenedorAcordeon').slideUp();
        }
        if($(this).next().find('.contenedorAcordeon').is(':hidden')){
            $('.accordion h4').next().find('.contenedorAcordeon').slideUp();
            $(this).next().find('.contenedorAcordeon').slideDown();
        }
    });
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function  makeSelectUI(){
    var elementos = $('.select-ui');
    $('.select-ui').each(function(){
        $(this).append('<div class="drop"></div>');
        var divDrop = $(this).find('.drop');
        var boton = divDrop.append('<button type="button" class="botonDrop"></button>');
        var optDrrop = divDrop.append('<div class="down"></div>');
        var opciones =  $(this).find('select').find('option');
        var posicion = 0;
        opciones.each(function(){
            if(posicion == 0){
                var label = $(this).text();
                divDrop.find('.botonDrop').html(label + '<span class="icon-flecha-abajo iconDrop1"></span>');
            }else{
                var label = $(this).text();
                var valor = $(this).attr('value');
                var index = posicion;
                optDrrop.find('.down').append('<a data-valor="'+valor+'" data-indice="'+index +'">'+label+'</a>');
            }
            posicion++;
        });
        $(this).find('select').hide()
        $('.down a').click(function(){
            var valor = $(this).data('valor');
            var label = $(this).html();
            $(this).parent().parent().parent().find('select').val(valor);
            $(this).parent().removeClass('show');
            $(this).parent().parent().find('.botonDrop').html(label + '<span class="icon-flecha-abajo iconDrop1"></span>');
        })
    })
}
$( document ).ready(function() {
    inicia_tab();
    acordeon();
    makeSelectUI();
    $('.botonDrop').click(function() {
        $(this).next().toggleClass('show');
    });

    //ancla
    $("a.ancla").click(function(e){
        e.preventDefault();
        var enlace = $(this).attr("href");
            $("html, body").animate({
        scrollTop: $(enlace).offset().top
        }, 1000);
    });

    //modal
    $('.botonModal').click(function() {
        $(this).next().removeClass('bgModalHide');
        $(this).next().next().removeClass('modalSimple');
        $('body').css('overflow','hidden');
    });
    $('.cerrarModal').click(function() {
        $(".bgModal").addClass('bgModalHide');
        $(".contenedorModal").addClass('modalSimple');
        $('body').css('overflow','scroll');
    });
    $('.contenedorModal').click(function() {
        $(".bgModal").addClass('bgModalHide');
        $(".contenedorModal").addClass('modalSimple');
        $('body').css('overflow','scroll');
    });
    $('.contenedorModalSimple').click(function(event){
        event.stopPropagation();
    });
    //slider ranger

    //De Tab a acordeon
    function responsiveTab(){
        $('.tabs_buttons').each(function(){
                var acordeoHtml = '<div class="accordion accTab">';
                var titulos = $(this).find('li').find('a');
                titulos.each(function(){
                    var target = $($(this).context.hash);
                    var titulo = $(this).text();
                    acordeoHtml += '<article>';
                    acordeoHtml += '<h4>'+titulo+'<span class="icon-flecha-abajo flecha"></span></h4>';
                    acordeoHtml += '<div class="block"><div class="contenedorAcordeon" style="display: none;">' + $(target).html() + '</div></div>';
                    acordeoHtml += '</article>';
                });
                acordeoHtml += '<article>';
                $(this).parent().html($(this).parent().html() + acordeoHtml);
                acordeon();
        });
        if(window.innerWidth < 992){
            $('.tabs_buttons').each(function(){
                $(this).hide();
            });
            $('.tabs_content').each(function(){
                $(this).hide();
            });
            $('.accTab').each(function(){
                $(this).show();
            });
        }else{
            $('.tabs_buttons').each(function(){
                $(this).show();
            });
            $('.tabs_content').each(function(){
                $(this).show();
            });
            $('.accTab').each(function(){
                $(this).hide();
            });
        }
        inicia_tab();
    }
    window.onresize = function(event) {
        if(window.innerWidth < 992){
            $('.tabs_buttons').each(function(){
                $(this).hide();
            });
            $('.tabs_content').each(function(){
                $(this).hide();
            });
            $('.accTab').each(function(){
                $(this).show();
            });
        }else{
            $('.tabs_buttons').each(function(){
                $(this).show();
            });
            $('.tabs_content').each(function(){
                $(this).show();
            });
            $('.accTab').each(function(){
                $(this).hide();
            });
        }
    }
    responsiveTab();


});

$('.js-getImage').each(function(i, e) {
    var image;
    image = $(e).find('.js-image img').attr('src');
    $(e).find('.js-image').css('background-image', 'url(' + image + ')');
    return $(e).find('.js-image');
});

// slider
$(document).ready(function(){

    if($('.slick-slider').length > 0){
  $('.slick-slider').slick({
      centerMode: true,
       arrows: true,
      centerPadding: '100px',
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true

    });
}

});




$(document).ready(function() {



$('.panel-heading.clickable').click(function() {
    var $this = $(this);
    if(!$this.hasClass('panel-collapsed')) {
        
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('arrowUp').addClass('icon-flecha-abajo');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('arrowDown').addClass('icon-flecha-izquierda');
    }
});




//Next Step checked
    $('#condiciones').change(function() {
        if($(this).is(":checked")) {
        $('#next-step').removeClass('botonInactivo');
        $('#next-step').addClass('botonPrimario');
        $('.labelRadio').removeClass('error');
        }else{
        $('#next-step').addClass('botonInactivo');
        $('#next-step').removeClass('botonPrimario');
        }
    });
//No pass if not checked
    $('#next-step').click(function(){
        if($('#condiciones').is(":not(:checked)")){
            return false;
        }
    });

});*/
