jQuery(document).ready(function () {

    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    /**
     * A recursive function that fades the page logo to 10% visibility 
     * and back to 100%
     */
    function blinkLogo(){
        $('.branding').fadeTo(300, 0.1).fadeTo(300, 1, blinkLogo);
    }

    blinkLogo(); // call the function for the first time

    $('[data-type="mineralwater"]').css('background', 'green');
    $('[data-type="proteinbar"]').css('background', 'blue');

    function printThisPage(){
        window.print();
    }

    $('.print-page-btn').click(printThisPage);

    $('.person-card p').each(function() {
        var html = $(this).html();
        var word = html.substr(0, html.indexOf(' '));
        var rest = html.substr(html.indexOf(' '));
        $(this).html(rest).prepend($('<strong/>').html(word)); 
    });
    
    $('.person-card:contains(Michael Lewiston)').prependTo('.people-cards');

    $('.navbar li a:contains(people)').text('Personnel');
    $('#people .headline').text('Personnel');

    //Weather API function

    $.ajax({
        url: '//api.openweathermap.org/data/2.5/weather?q=helsinki&units=metric&APIKEY=d9099e3d8ef4520a51031ac4d5fdafaf'
    }).done(function(resp){

        $('.fixed-button.weather-btn').text(`Helsinki today ${resp.main.temp} feels like ${resp.main.feels_like}`);

    });

    console.log(resp.main.feels_like);

});