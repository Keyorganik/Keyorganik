var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 30,
	freeMode: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const nav = document.querySelector('.header__nav');
const logo = document.querySelector('.header__logo-image');
const scrollDown = document.querySelector('.scroll-down');
const aboutUs = document.querySelector('#about-us');
const ourMission = document.querySelector('.heading-our-mission');
const ourVision = document.querySelector('.heading-our-vision');
const hamburger = document.querySelector('.header__hamburger');
const navUl = document.querySelector('.header__mobile__nav');

window.addEventListener('scroll', () => {
	if (window.scrollY > 200) {
		nav.classList.add('header__nav-scroll');
		logo.style.width = '8rem';
		logo.style.height = '8rem';

		ourMission.classList.add('left-to-right');
		ourVision.classList.add('right-to-left');
	} else {
		nav.classList.remove('header__nav-scroll');
		logo.style.width = '12rem';
		logo.style.height = '12rem';
	}
});

scrollDown.addEventListener('click', () => {
	aboutUs.scrollIntoView();
});

hamburger.addEventListener('click', () => {
	navUl.classList.toggle('show');
	navUl.classList.contains('show')
		? (hamburger.style = 'transform:translateX(-13rem)')
		: (hamburger.style = 'transform:translateX(0)');
});
