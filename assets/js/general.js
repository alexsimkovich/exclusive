/**
 * Created by Alex Simkovich.
 */

$(function(){
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