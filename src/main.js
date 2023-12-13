'use strict';

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const $header = document.querySelector('.header');
const $headerHeight = $header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > $headerHeight) {
    $header.classList.add('header--dark');
  } else {
    $header.classList.remove('header--dark');
  }
  console.log(window.scrollY);
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const $home = document.querySelector('.home__container');
const $homeHeight = $home.offsetHeight;
document.addEventListener('scroll', () => {
  $home.style.opacity = 1 - window.scrollY / $homeHeight;
});

// Home 섹션 절반정도 내려가면 애로우 버튼 사라지게 처리
const $arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > $homeHeight / 2) {
    $arrowUp.classList.add('arrow-up--visible');
  } else {
    $arrowUp.classList.remove('arrow-up--visible');
  }
});

// Navbar 토글버튼 클릭 처리
const $navbarMenu = document.querySelector('.header__menu');
const $navbarToggle = document.querySelector('.header__toggle');
$navbarToggle.addEventListener('click', () => {
  $navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
$navbarMenu.addEventListener('click', () => {
  $navbarMenu.classList.remove('open');
});
