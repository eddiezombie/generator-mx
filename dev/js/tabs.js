function inicia_tab(){
     //tabs
     $('.tab--cont').hide();
    // $('.cnt-tab:first').show();
     $(".btn-tab").on( "click", function() {
       $(".btn-tab").removeClass('active');
       $(this).addClass('active');
       $('.tab--cont').hide();
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
        if($(this).find("span.icon-arrow--down").hasClass('icon-arrow--above')){
            is_active = true;
        }
        $('.accordion h4 span.icon-arrow--down').removeClass("icon-arrow--above");
        if(!is_active){
            $(this).find("span.icon-arrow--down").addClass("icon-arrow--above");
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
 
$( document ).ready(function() {
    inicia_tab();
    acordeon(); 
    

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
 
$(document).ready(function() {
 
    $('.panel-heading.clickable').click(function() {
        var $this = $(this);
        if(!$this.hasClass('panel-collapsed')) {
            
            $this.parents('.panel').find('.panel-body').slideUp();
            $this.addClass('panel-collapsed');
            $this.find('i').removeClass('icon-arrow--above').addClass('icon-arrow--down');
        } else {
            $this.parents('.panel').find('.panel-body').slideDown();
            $this.removeClass('panel-collapsed');
            $this.find('i').removeClass('icon-arrow--down').addClass('icon-arrow--above');
        }
    });
});