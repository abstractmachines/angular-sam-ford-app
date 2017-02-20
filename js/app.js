/* Sam Ford custom Angular application
file: app.js
author: amanda falke 2016
*/

import "bootstrap/dist/css/bootstrap.min.css";

import angular from "angular";

import "angular-ui-router";

import galleryDirective from "../js/gallery-directive.js";
import workDirective from "../js/work-directive.js";
import aboutTemplate from "../js/about-directive.js";

import uiRouter from "../js/ui-router.js";

import CarouselCtrl from "../js/carouselctrl.js";
import WorkCtrl from "../js/workctrl.js";
import PortfolioCtrl from "../js/portfolioctrl.js";

import "angular-touch";
import "angular-animate";

import "../js/ng-magnify.js";

import "../js/ui-bootstrap-custom-tpls-2.3.1.min.js";

import "../css/ng-magnify.css";
import "../css/style.css";

angular.module("sfApp", ["ui.router","ngMagnify","ui.bootstrap","ngTouch","ngAnimate"]);

angular.module("sfApp").config(uiRouter);

angular.module("sfApp")
	.controller("CarouselCtrl",CarouselCtrl);
angular.module("sfApp")
	.controller("WorkCtrl",WorkCtrl);
angular.module("sfApp")
	.controller("PortfolioCtrl",PortfolioCtrl);

angular.module("sfApp")
	.directive("galleryDirective",galleryDirective);
angular.module("sfApp")
	.directive("workDirective",workDirective);
angular.module("sfApp")
	.directive("aboutTemplate",aboutTemplate);
