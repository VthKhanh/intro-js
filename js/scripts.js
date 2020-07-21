(function () {
    var itemClassName = 'slider__photo';
        items = document.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0;

    // Set event listeners
    function setEventListeners() {
            next = jQuery('.slider__button--next')[0];
            prev = jQuery('.slider__button--prev')[0];

        jQuery(next).on('click', getNext);
        jQuery(prev).on('click', getPrev);
    }

    function getNext() {
        $('.slider__photo').eq(slide).removeClass('active'); 

        slide = (slide === totalItems - 1) ? 0 : (slide + 1);

        $('.slider__photo').eq(slide).addClass('active'); 
    }

    function getPrev(){
        $('.slider__photo').eq(slide).removeClass('active'); 

        if (slide === 0) {
            slide = document.getElementsByClassName('slider__photo').length - 1;
        } else {
            slide--;
        }
        $('.slider__photo').eq(slide).addClass('active'); 


    }

    function initSlider() {
        // setInitialClasses();
        setEventListeners();
        
        // Set moving to false so that the slider becomes interactive
        moving = false;
    }

    initSlider();
})();