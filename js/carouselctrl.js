/*
file: carouselctrl.js
author: amanda falke 2016
*/
export default function CarouselCtrl($scope)
{
	$scope.myInterval = 9000;
	$scope.noWrapSlides = false;
	$scope.active = 0;
	$scope.slides = [
		{
			image: "../images/gallery/gallery-witchmountain-mobile-of-angels-3k2.jpg",
			imagexs: "../images/gallery/gallery-xs-witchmountain-mobile-of-angels.jpg",
			id: 0,
			text: "Witch Mountain, Mobile of Angels | LP Album illustration"
		},
		{
			image: "../images/gallery/gallery-blackcobra-invernal-3k.jpg",
			imagexs: "../images/gallery/gallery-xs-blackcobra-invernal.jpg",
			id: 1,
			text: "Black Cobra, Invernal |  LP Album illustration (US)"
		},
		{
			image: "../images/gallery/gallery-nightmare-3k.jpg",
			imagexs: "../images/gallery/gallery-xs-nightmare.jpg",
			id: 2,
			text: "Nightmare | illustration"
		},
		{
			image: "../images/gallery/gallery-karl-johan-2300.jpg",
			imagexs: "../images/gallery/gallery-xs-karl-johan.jpg",
			id: 3,
			text: "Fathers Quarterly Magazine | Illustrations"
		}
	];
}
