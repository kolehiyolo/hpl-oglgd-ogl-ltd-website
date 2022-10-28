let activeBack = `<img src="https://uploads-ssl.webflow.com/6344c9131791d85f89745f7e/634cb43b3b3269ec33fa639e_prev%20button.svg" loading="lazy" alt="">`;
let activeNext = `<img src="https://uploads-ssl.webflow.com/6344c9131791d85f89745f7e/634cb2b005fc10bd5194eba2_next%20button.svg" loading="lazy" alt="">`;
let disabledBack = `<p style="color: white; background: grey; padding: 20px;">Back</p>`;
let disabledNext = `<p style="color: white; background: grey; padding: 20px;">Next</p>`;

$(".carousel-back").click(function (e) {
    console.log("BACK WORKING");
    disableButton()
    if ($(".w-active").attr("aria-label") === "Show slide 1 of 2") {
        console.log("No more back");
        $(`.carousel-next`).html(activeNext);
        $(`.carousel-back`).html(disabledBack);
    } else {
        $(".w-slider-dot:nth-child(1)").click();
        $(`.carousel-back`).html(activeBack);
        $(`.carousel-next`).html(activeNext);
    }
});
$(".carousel-next").click(function (e) {
    console.log("NEXT WORKING");
    disableButton()
    if ($(".w-active").attr("aria-label") === "Show slide 2 of 2") {
        console.log("No more next");
        $(`.carousel-back`).html(activeBack);
            $(`.carousel-next`).html(disabledNext);
    } else {
        $(".w-slider-dot:nth-child(2)").click();
        $(`.carousel-back`).html(activeBack);
        $(`.carousel-next`).html(activeNext);
    }
});

function disableButton() {
    console.log("disableButton()");
    let slide = 0;
    let end = $('.w-slider-dot').length - 1;
    console.log($('.w-slider-dot')[1].classList);
    if ($(`.w-slider-dot`)[0].classList.length === 2) {
        slide = 0;
    } else if ($(`.w-slider-dot`)[end].classList.length === 2) {
        slide = end;
    };
    switch (slide) {
        case 0:
            $(`.carousel-next`).html(activeNext);
            $(`.carousel-back`).html(disabledBack);
            break;
        case end:
            $(`.carousel-back`).html(activeBack);
            $(`.carousel-next`).html(disabledNext);
            break;
        default:
            $(`.carousel-back`).html(activeBack);
            $(`.carousel-next`).html(activeNext);
            break;
    }
};
disableButton();

$(".carousel-back").click(function (e) {
    console.log("BACK WORKING");
    disableButton()
    if ($(".w-active").attr("aria-label") === "Show slide 1 of 2") {
        console.log("No more back");
        $(`.carousel-next`).html(activeNext);
        $(`.carousel-back`).html(disabledBack);
    } else {
        $(".w-slider-dot:nth-child(1)").click();
        $(`.carousel-back`).html(activeBack);
        $(`.carousel-next`).html(activeNext);
    }
});
$(".carousel-next").click(function (e) {
    console.log("NEXT WORKING");
    disableButton()
    if ($(".w-active").attr("aria-label") === "Show slide 2 of 2") {
        console.log("No more next");
        $(`.carousel-back`).html(activeBack);
            $(`.carousel-next`).html(disabledNext);
    } else {
        $(".w-slider-dot:nth-child(2)").click();
        $(`.carousel-back`).html(activeBack);
        $(`.carousel-next`).html(activeNext);
    }
});
$("#read-more").click(function () {
    $("#story-context").toggleClass("toggleactive");
    $(".story-context").toggleClass("story-context-active");
    $("#story-hero").toggleClass("hidden");
    $("#hero-active").toggleClass("hero-active");
});