$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: false,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 600,
        fade: true,
    });
});





const starsList = document.querySelectorAll('.stars');
const starsArray = Array.prototype.slice.call(starsList)

starsArray.forEach(item =>
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = item.dataset.itemValue;
    })
);