/**
 * Created by Alex Simkovich.
 */

$(function(){
    TweenMax.staggerFrom($('.why-block_i'), 1.1, {opacity: 0, y:200, x:-100, yoyo:true}, 0.25)
    var controller = $.superscrollorama();

    var staggerTween1 = new TimelineMax();
    var staggerTween2 = new TimelineMax();
    var staggerTween3 = new TimelineMax();
    var staggerTween4 = new TimelineMax();

    staggerTween1.add(TweenMax.staggerFrom($('.portfolio-block_i'), 0.75, {opacity: 0, rotation: 180, ease: Quad.easeOut}, 0.15));
    controller.addTween('.portfolio-block_i', staggerTween1);

    staggerTween2.add(TweenMax.staggerFrom($('.progress-block_i'), 0.85, {opacity: 0, rotation: 180, ease: Bounce.easeOut}, 0.15));
    controller.addTween('.progress-block_i', staggerTween2);

    staggerTween3.add(TweenMax.staggerFrom($('.news_box'), 0.65, {opacity: 0, scale: 0, ease: Bounce.easeOut}, 0.15));
    controller.addTween('.news_box', staggerTween3);

    staggerTween4.add(TweenMax.staggerFrom($('.bottom-panel_i'), 0.45, {opacity: 0, scale: 0, ease: Bounce.easeInOut}, 0.15));
    controller.addTween('.bottom-panel_i', staggerTween4);

    /*Portfolio animation*/
    $(".portfolio-block_i").hover(
        function() {
            $(this).find(".portfolio_overlay").addClass("bounceIn animated").stop(true, true).fadeIn(650);
        }, function() {
            $(this).find(".bounceIn.animated").removeClass("bounceIn animated").stop(true, true).fadeOut(600);
        }
    );

    /*Tags animation*/
    $(".sidebar-tags_li").hover(
        function() {
            $(this).addClass("tada animated");
        }, function() {
            $(this).removeClass("tada animated");
        }
    );

    $.fn.scrollToTop = function() {
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
    $("#goTop").scrollToTop();
});