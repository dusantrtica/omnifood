(function() {
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting === true) {
            console.log('its there');
            $('nav').addClass('sticky');
        }
    }, {threshold: [0.1]});

    observer.observe(document.querySelector('.js--section-features'));

    document.querySelector('.js--scroll-to-plan').addEventListener('click', () => {
        console.log('clicked!')        
        document.querySelector('.js--section-plans').scrollIntoView({block: "start", inline: "nearest"});
    })
})();