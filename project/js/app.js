

    let screenHeight = $(window).height();

    $(window).scroll(function () {
        let currentPosition = $(this).scrollTop();
        if (currentPosition > screenHeight - 100) {
            $(".site-nav").addClass("site-nav-scroll");
        } else {
            $(".site-nav").removeClass("site-nav-scroll");
            setActive("home");
        }
    });

    $(".navbar-toggler").click(function () {
        let result = $(".navbar-collapse").hasClass("show");
        if (result) {
            $(".menu-icon").removeClass("fa-close").addClass('fa-bars');
        } else {
            $(".menu-icon").removeClass("fa-bars").addClass('fa-close');
        }
    });


    // $('#home').waypoint(function (direction) {
    //     $(".nav-link").removeClass("current-nav");
    //     $(".nav-link[href='#home']").addClass("current-nav");
    // }, {
    //     offset: '25%'
    // });

    // $('#about').waypoint(function (direction) {
    //     $(".nav-link").removeClass("current-nav");
    //     $(".nav-link[href='#about']").addClass("current-nav");
    // }, {
    //     offset: '25%'
    // });

    // $('#services').waypoint(function (direction) {
    //     $(".nav-link").removeClass("current-nav");
    //     $(".nav-link[href='#services']").addClass("current-nav");
    // }, {
    //     offset: '25%'
    // });

    // $('#pricing').waypoint(function (direction) {
    //     $(".nav-link").removeClass("current-nav");
    //     $(".nav-link[href='#pricing']").addClass("current-nav");
    // }, {
    //     offset: '25%'
    // });

    // $('#contactus').waypoint(function (direction) {
    //     $(".nav-link").removeClass("current-nav");
    //     $(".nav-link[href='#contactus']").addClass("current-nav");
    // }, {
    //     offset: '25%'
    // });


function setActive(current) {
    $(`.nav-link`).removeClass('current-nav');
        $(`.nav-link[href='#${current}']`).addClass('current-nav');
    }

function navScroll() {
    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {
        if (direction == "down") {
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }
    }, {
        offset:'30px'
    });

    currentSection.waypoint(function (direction) {
        if (direction == "up") {
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }
    }, {
        offset: '150px'
    });
}
navScroll();

$(window).on("load", function () { 
    $('.loader-container').fadeOut(500, function () {
        $(this).remove();
    });
});


