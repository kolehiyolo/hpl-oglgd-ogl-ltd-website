<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/home.css">
    <title>OGL Ltd | Home</title>

    <!-- * Owl Carousel -->
    <!-- <link rel="stylesheet" href="owlcarousel/owl.carousel.min.css">
    <link rel="stylesheet" href="owlcarousel/owl.theme.default.min.css"> -->
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'>

</head>

<body>
    <header class="header">
    </header>

    <main class="main">
        <section class="main-hero">
            <h2>Hero</h2>
        </section>
        <section class="main-lore">
            <h2>Lore</h2>
        </section>
        <section class="main-connector">
            <h2>Connector</h2>
        </section>
        <section class="main-opportunity">
            <h2>Opportunity</h2>
        </section>
        <section class="main-features">
            <h2>Features</h2>
        </section>
        <section class="main-media">
            <div class="main-media-head">
                <h2>Media Mentions</h2>
            </div>
            <div class="main-media-body">

            </div>
        </section>
        <?php include 'pages/home/roadmap.php'; ?>
        <?php include 'pages/home/team.php'; ?>
        <section class="main-advisors">
            <h1>Advisors</h1>
        </section>
        <section class="main-bts">
            <h1>Behind the Scenes</h1>
        </section>
        <section class="main-partners">
            <h1>Partners</h1>
        </section>
        <section class="main-pre_footer">
            <h1>Pre-footer</h1>
        </section>

    </main>

    <footer class="footer">
    </footer>

    <!-- * Owl Carousel Scripts -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'></script>
    <script>
        $(document).ready(function () {
            $(".owl-carousel").owlCarousel({
                loop: false,
                margin: 20,
                nav: false,
                center: true,
                // center: false,
                autoWidth: true,
                startPosition: 5,
                // freeDrag: true,
                // touchDrag: false,
                // pullDrag: false,
            });
        });
    </script>
</body>

</html>