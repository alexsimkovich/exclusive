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

    $(".portfolio-block_i2").hover(
        function() {
            $(this).find(".portfolio_overlay").addClass("bounceIn animated").stop(true, true).fadeIn(650);
        }, function() {
            $(this).find(".bounceIn.animated").removeClass("bounceIn animated").stop(true, true).fadeOut(600);
        }
    );

    $(".portfolio-block_i3").hover(
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

    $(".dropdown").hover(
    function() {
        $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
        $(this).toggleClass('open');
        $('b', this).toggleClass("caret caret-up");
    },
    function() {
        $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
        $(this).toggleClass('open');
        $('b', this).toggleClass("caret caret-up");
    });

    $.fn.scrollToTop = function() {
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
    $("#goTop").scrollToTop();

    // process the form
    $('form').submit(function(event) {

        $('.form-group').removeClass('has-error'); // remove the error class
        $('.help-block').remove(); // remove the error text

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name' 				: $('input[name=name]').val(),
            'email' 			: $('input[name=email]').val(),
            'website' 	        : $('input[name=website]').val(),
            'comment' 	        : $('textarea[name=comment]').val()
        };

        // process the form
        $.ajax({
            type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url 		: 'mail.php', // the url where we want to POST
            data 		: formData, // our data object
            dataType 	: 'json', // what type of data do we expect back from the server
            encode 		: true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data);

                // here we will handle errors and validation messages
                if ( ! data.success) {

                    // handle errors for name ---------------
                    if (data.errors.name) {
                        $('#name-group').addClass('has-error'); // add the error class to show red input
                        $('#name-group').append('<div class="help-block">' + data.errors.name + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for email ---------------
                    if (data.errors.email) {
                        $('#email-group').addClass('has-error'); // add the error class to show red input
                        $('#email-group').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for superhero alias ---------------
                    if (data.errors.website) {
                        $('#website-group').addClass('has-error'); // add the error class to show red input
                        $('#website-group').append('<div class="help-block">' + data.errors.website + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for superhero alias ---------------
                    if (data.errors.comment) {
                        $('#comment-group').addClass('has-error'); // add the error class to show red input
                        $('#comment-group').append('<div class="help-block">' + data.errors.comment + '</div>'); // add the actual error message under our input
                    }

                } else {

                    // ALL GOOD! just show the success message!
                    $('form').append('<div class="alert alert-success">' + data.message + '</div>');

                    // usually after form submission, you'll want to redirect
                    // window.location = '/thank-you'; // redirect a user to another page

                }
            })

            // using the fail promise callback
            .fail(function(data) {

                // show any errors
                // best to remove for production
                console.log(data);
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });
});