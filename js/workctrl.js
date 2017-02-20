/*
file: workctrl.js
author: amanda falke 2016
*/

export default function WorkCtrl($scope)
{
	/* gallery */
	$scope.myInterval = 6000;
	$scope.noWrapSlides = false;
	$scope.active = 0;

	/* work */
	$scope.work = [
		{
			id: 1,
			client: "Black Cobra",
			title: "Invernal",
			image: "../images/work/thumb-black-cobra-invernal-cover-lettering.jpg"
		},
		{
			image: "../images/work/thumb-agalloch-deadwinterdays-shirt.jpg",
			id: 2,
			text: "AGALLOCH"
		},
		{
			image: "../images/work/thumb-mountain-goats.jpg",
			id: 3,
			text: "MOUNTAIN GOATS"
		},
		{
			image: "../images/work/thumb-cormorant-earth-diver.jpg",
			id: 4,
			text: "CORMORANT",
		},
		{
			image: "../images/work/thumb-witch-mountain-mobile-of-angels-cover.jpg",
			id: 5,
			text: "WITCH MOUNTAIN"
		},
		{
			image: "../images/work/thumb-monarch-omens.jpg",
			id: 6,
			text: "MONARCH"
		},
		{
			image: "../images/work/thumb-black-cobra-japan-cover.jpg",
			id: 7,
			text: "BLACK COBRA",
		},
		{
			image: "../images/work/thumb-cormorant-earth-diver-back.jpg",
			id: 8,
			text: "CORMORANT"
		},
		{
			image: "../images/work/thumb-burnt-books.jpg",
			id: 9,
			text: "BURNT BOOKS"
		},
		{
			image: "../images/work/thumb-witchmountain-cauldron-of-the-wild.jpg",
			id: 10,
			text: "WITCH MOUNTAIN"
		},
		{
			image: "../images/work/thumb-wizard-rifle-shirt.jpg",
			id: 11,
			text: "WIZARD RIFLE"
		},
		{
			image: "../images/work/thumb-barrowlands.jpg",
			id: 12
		},
		{
			image: "../images/work/thumb-diesto-high-as-the-sun.jpg",
			id: 13,
			text: "DIESTO"
		},
		{
			image: "../images/work/thumb-blackcobra-panels.jpg",
			id: 14,
			text: "BLACK COBRA",
		},
		{
			image: "../images/work/thumb-thrones.jpg",
			id: 15,
			text: "THRONES/SEDAN"
		},
		{
			image: "../images/work/thumb-blackcobra-invernal-japan-panels.jpg",
			id: 16,
			text: "BLACK COBRA"
		},
		{
			image: "../images/work/thumb-cormorant-earthdiver-poster.jpg",
			id: 17,
			text: "CORMORANT"
		},
		{
			image: "../images/work/thumb-turbo.jpg",
			id: 18,
			text: "TURBO LIGHTNING"
		},
		{
			image: "../images/work/thumb-mountain-goats-shirt.jpg",
			id: 19,
			text: "MOUNTAIN GOATS"
		},
		{
			image: "../images/work/thumb-diesto-for-water-or-blood.jpg",
			id: 20,
			text: "DIESTO"
		},
		{
			image: "../images/work/thumb-witch-mountain-shirt.jpg",
			id: 21,
			text: "WITCH MOUNTAIN"
		},
		{
			image: "../images/work/thumb-cormorant-earth-diver-panels.jpg",
			id: 22,
			text: "CORMORANT"
		},
		{
			image: "../images/work/thumb-nether-regions.jpg",
			id: 23,
			text: "NETHER REGIONS"
		},
		{
			id: 24,
			image: "../images/work/thumb-al-tattoo.jpg"
		},
		{
			image: "../images/work/thumb-norilsk.jpg",
			id: 25,
			text: "NORILSK"
		},
		{
			image: "../images/work/thumb-bc-shirt.jpg",
			id: 26
		},
		{
			id: 27,
			image: "../images/work/thumb-lepidoptera.jpg"
		},
		{
			id: 28,
			image: "../images/work/thumb-wizardrifle-speak.jpg"
		},
		{
			id: 29,
			image: "../images/work/thumb-fuming-mouth-gatlin.jpg"
		},
		{
			id: 30,
			image: "../images/work/thumb-wizard-rifle-logo-shirt.jpg"
		}
	];

	/* gallery */
	$scope.slides = [
		{
			image: "../images/gallery/gallery-witchmountain-mobile-of-angels-3k2.jpg",
			id: 0,
			text: "Witch Mountain, Mobile of Angels | LP Album illustration"
		},
		{
			image: "../images/gallery/gallery-blackcobra-invernal-3k.jpg",
			id: 1,
			text: "Black Cobra, Invernal |  LP Album illustration (US)"
		},
		{
			image: "../images/gallery/gallery-mountain-goats-poster-3k.jpg",
			id: 2,
			text: "Mountain Goats | Tour poster illustration"
		},
		{
			image: "../images/gallery/gallery-nightmare-3k.jpg",
			id: 3,
			text: "Nightmare | illustration"
		}
	];
}
