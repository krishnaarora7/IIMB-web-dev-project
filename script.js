

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

if (menuButton && navigation) {

    menuButton.addEventListener('click', function () {

        const isOpen =
            menuButton.getAttribute('aria-expanded') === 'true';

        menuButton.setAttribute(
            'aria-expanded',
            String(!isOpen)
        );

        navigation.classList.toggle('open', !isOpen);

    });


    const navLinks = navigation.querySelectorAll('a');

    navLinks.forEach(function (link) {

        link.addEventListener('click', function () {

            menuButton.setAttribute('aria-expanded', 'false');

            navigation.classList.remove('open');

        });

    });

}


const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {

    const revealObserver = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add('is-visible');

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealItems.forEach(function (item) {

        revealObserver.observe(item);

    });

} else {
    revealItems.forEach(function (item) {
        item.classList.add('is-visible');
    });
}

const yearElement = document.querySelector('#year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}