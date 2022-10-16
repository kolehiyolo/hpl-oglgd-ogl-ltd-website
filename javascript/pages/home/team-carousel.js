function buildHTML() {
    let carouselHTML = ``;
    let classPrefix = `main-team-body-carousel-item`;

    teamMembers.forEach((item) => {
        let itemHTML = `<div class="${classPrefix}">`;
        itemHTML += `<div class="${classPrefix}-inner">`;

        // * Front Side
        itemHTML += `<div class="${classPrefix}-inner-front">`;
        itemHTML += `<img src="${item.img}" alt="">`;
        itemHTML += `<div class="${classPrefix}-inner-front-text">`;
        itemHTML += `<h3>${item.name}</h3>`;
        itemHTML += `<p>${item.position}</p>`;
        itemHTML += `</div>`;
        itemHTML += `</div>`;

        // * Back Side
        itemHTML += `<div class="${classPrefix}-inner-back">`;
        itemHTML += `<div class="${classPrefix}-inner-back-head">`;
        itemHTML += `<h3>${item.name}</h3>`;
        itemHTML += `<p>${item.position}</p>`;
        itemHTML += `</div>`;
        itemHTML += `<div class="${classPrefix}-inner-back-text">`;
        item.description.forEach((desc) => {
            itemHTML += `<p>${desc}</p>`;
        });
        itemHTML += `</div>`;
        itemHTML += `</div>`;

        itemHTML += `</div>`;
        itemHTML += `</div>`;

        carouselHTML += itemHTML;
    });

    $(`.main-team-body-carousel`).html(carouselHTML);
}

function setupOwlCarousel() {
    let $owl = $('.owl-carousel');

    $(document).ready(function () {
        $owl.owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            center: true,
            autoWidth: true,
            startPosition: 0,
        });
    });

    $owl.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $(document).on('click', '.owl-item>div', function () {
        let $speed = 300;
        $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });
}

buildHTML();
setupOwlCarousel();