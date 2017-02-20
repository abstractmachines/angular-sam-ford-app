/*
file: ui-router.js
author: amanda falke 2016
*/
export default function uiRouter ($stateProvider,$urlRouterProvider){

	$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "pages/gallery.html",
			controller: "CarouselCtrl"
		})
		.state("gallery", {
			url: "/gallery",
			templateUrl: "pages/gallery.html",
			controller: "CarouselCtrl"
		})
		.state("about", {
			url: "/about",
			templateUrl: "pages/about.html",
		})
		.state("work", {
			url: "/work",
			templateUrl: "pages/work.html",
			controller: "WorkCtrl"
		})
		.state("portfolio", {
			url: "/portfolio/:id",
			templateUrl: "pages/workportfolio.html",
			controller: function($stateParams){
			},
			controller: "PortfolioCtrl"
		})
		.state("portfolio.project", {
			controller: "PortfolioCtrl"
		});

	$urlRouterProvider
		.otherwise("/");
}
