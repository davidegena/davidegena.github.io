(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\david\Desktop\GitHub\davidg33k.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "6eW9":
/*!**************************************************!*\
  !*** ./src/app/theme/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class LayoutComponent {
    scrollTo(section) {
        const sectionHtml = document.querySelector('#' + section);
        if (sectionHtml !== null) {
            sectionHtml.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 4, vars: 0, consts: [[1, "content"], ["href", "javascript:", "id", "return-to-top", 3, "click"], [1, "fas", "fa-arrow-up"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_2_listener() { return ctx.scrollTo("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Q9DS":
/*!************************************************************!*\
  !*** ./src/app/components/sections/blog/blog.component.ts ***!
  \************************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 125, vars: 0, consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "blog-wrapper"], [1, "blog-item", "rounded", "bg-white", "shadow-dark", "wow", "fadeIn"], [1, "thumb"], ["src", "assets/images/my-works/ANWFNMpreview.png", "alt", "blog-title"], [1, "details"], [1, "my-0", "title"], [2, "line-height", "1.3"], [1, "meta-row"], [1, "list-inline", "meta", "mb-0"], [1, "list-inline-item"], ["href", "https://github.com/davidegena/multicloud-netmaker-k8s", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Open on GitHub", 1, "github-btn"], [1, "fab", "fa-github"], ["src", "assets/images/my-works/DeepLPluginPreview.png", "alt", "blog-title"], ["href", "https://github.com/davidegena/Flow.Launcher.Plugin.DeepFlow", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Open on GitHub", 1, "github-btn"], ["src", "assets/images/my-works/ISellYouABrickCTFPreview.png", "alt", "blog-title"], ["href", "https://github.com/davidegena/ISellYouABrick_CTF", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Open on GitHub", 1, "github-btn"], ["src", "assets/images/my-works/AutomizedPathTraversalScriptPreview.png", "alt", "blog-title"], ["href", "https://github.com/davidegena/CTFs_Scripts", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Open on GitHub", 1, "github-btn"], ["src", "assets/images/my-works/SteamDWPreview.png", "alt", "blog-title"], ["href", "https://github.com/davidegena/SteamDataWarehouse", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Open on GitHub", 1, "github-btn"], ["src", "assets/images/my-works/CuteKittensPreview.png", "alt", "blog-title"], ["href", "https://github.com/davidegena/AuthCodeStealer", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Open on GitHub", 1, "github-btn"], ["src", "assets/images/my-works/InstaLeetxPreview.png", "alt", "blog-title"], ["href", "https://github.com/davidegena/InstaLeetx", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Open on GitHub", 1, "github-btn"], ["src", "assets/images/my-works/CovidPrevSysPreview.png", "alt", "blog-title"], ["href", "https://github.com/davidegena/COVIDPreventionSystem", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Open on GitHub", 1, "github-btn"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A new way for Networking Multicloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Research thesis on the application of Mesh VPNs for multicloud networking.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "August, 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "DeepFlow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "DeepL Plugin to quickly translate with FlowLauncher.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "May, 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "ISellYouABrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "A medium/hard boot2root CTF.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "December, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Automized Path Traversal Resolver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "A typer/rich python script to solve all path traversal CTFs of PortSwigger.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "August, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Steam Data Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Data warehouse applied to the Steam store database to analyze the trends of categories and genres over months and years. Software used: Pentaho and Tableau.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "August, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "CuteKittens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "A \"cute\" malware extension that steals OAuth2.0 protocol authorization codes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "August, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "InstaLeetx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "A script to automate the download of video contents in Italian from 1337x.to.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "May, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "COVIDPreventionSystem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Computer vision applied to COVID prevention techniques.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "February, 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "RX07":
/*!***************************************************************!*\
  !*** ./src/app/components/scroll-spy/scroll-spy.directive.ts ***!
  \***************************************************************/
/*! exports provided: ScrollSpyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function() { return ScrollSpyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScrollSpyDirective {
    constructor(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.returnToTopVisible = false;
    }
    onScroll(event) {
        let currentSection = '';
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection && currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
        const shouldShow = scrollTop > 400;
        if (shouldShow !== this.returnToTopVisible) {
            this.returnToTopVisible = shouldShow;
            const returnToTop = document.querySelector('#return-to-top');
            if (returnToTop) {
                returnToTop.classList.toggle('visible', shouldShow);
            }
        }
    }
}
ScrollSpyDirective.ɵfac = function ScrollSpyDirective_Factory(t) { return new (t || ScrollSpyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ScrollSpyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollSpyDirective, selectors: [["", "scrollSpy", ""]], hostBindings: function ScrollSpyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollSpyDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, inputs: { spiedTags: "spiedTags" }, outputs: { sectionChange: "sectionChange" } });


/***/ }),

/***/ "RntK":
/*!**************************************************************!*\
  !*** ./src/app/components/sections/about/about.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 39, vars: 0, consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-3"], [1, "text-center", "text-md-left"], ["src", "assets/images/about-avatar.png", "width", "150", "height", "150", "alt", "Bolby"], [1, "spacer-30", "d-md-none", "d-lg-none"], [1, "col-md-9", "triangle-left-md", "triangle-top-sm"], [1, "rounded", "bg-white", "shadow-dark", "padding-30"], [1, "word-glow"], [1, "fas", "fa-heart", "about-heart", "word-glow"], [1, "mt-3", "cv-switcher-wrap"], [1, "cv-switcher"], ["href", "../../../../assets/docs/CurriculumVitae_DavideGena.pdf", "aria-label", "Download Curriculum Vitae in English", 1, "cv-option"], [1, "fas", "fa-download"], [1, "cv-text-full"], [1, "cv-text-short"], [1, "cv-divider"], ["href", "../../../../assets/docs/EuropassCurriculumVitae_DavideGena.pdf", "aria-label", "Scarica il Curriculum Vitae Europass in italiano", 1, "cv-option"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Passionate about computers since I was young, I love problem solving, scripting, and cybersecurity in general.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "This portfolio is my little creative ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "laboratory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ", here you'll find both completed projects and more ambitious drafts of what I'd like to implement. Every project here is open source, and the code is reviewable on GitHub.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enjoy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Curriculum Vitae (EN)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "CV (EN)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Europass Curriculum Vitae (IT)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Europass CV (IT)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-heart[_ngcontent-%COMP%] {\n  color: var(--accent-deep);\n  margin-left: 8px;\n}\n\n.word-glow[_ngcontent-%COMP%] {\n  position: relative;\n  font-weight: 700;\n  background: linear-gradient(90deg, color-mix(in srgb, var(--accent-deep) 70%, var(--text-body)) 0%, color-mix(in srgb, var(--accent) 70%, var(--text-body)) 25%, color-mix(in srgb, var(--accent-deep) 70%, var(--text-body)) 50%, color-mix(in srgb, var(--accent) 70%, var(--text-body)) 75%, color-mix(in srgb, var(--accent-deep) 70%, var(--text-body)) 100%);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  color: var(--accent-deep);\n  animation: word-glow-shift 3s linear infinite, word-glow-pulse 2s ease-in-out infinite;\n}\n\n@keyframes word-glow-shift {\n  0% {\n    background-position: 0% center;\n  }\n  100% {\n    background-position: 200% center;\n  }\n}\n\n@keyframes word-glow-pulse {\n  0%, 100% {\n    filter: drop-shadow(0 0 1.5px rgba(var(--accent-deep-rgb), 0.3));\n  }\n  50% {\n    filter: drop-shadow(0 0 6px rgba(var(--accent-deep-rgb), 0.6));\n  }\n}\n\n.cv-switcher-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n}\n\n.cv-switcher[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: stretch;\n  border: 1px solid var(--glass-border);\n  border-radius: 999px;\n  overflow: hidden;\n  background: linear-gradient(135deg, var(--glass-strong), var(--glass-soft));\n  backdrop-filter: blur(16px) saturate(180%);\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 1px var(--glass-hi), inset 0 -1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.cv-option[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 26px;\n  color: var(--accent);\n  font-weight: 700;\n  font-size: 15px;\n  text-decoration: none;\n  position: relative;\n  z-index: 0;\n  overflow: hidden;\n}\n\n.cv-option[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.cv-option[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  right: -1px;\n  bottom: -1px;\n  background: linear-gradient(180deg, rgba(var(--accent-deep-rgb), 0.45), rgba(var(--accent-deep-rgb), 0.15));\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: transform 0.12s ease-out;\n  z-index: -1;\n}\n\n.cv-option[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n  text-decoration: none;\n}\n\n.cv-option[_ngcontent-%COMP%]:hover:before {\n  transform: scaleY(1);\n}\n\n.cv-option[_ngcontent-%COMP%]:active:before {\n  background: linear-gradient(180deg, rgba(var(--accent-deep-rgb), 0.6), rgba(var(--accent-deep-rgb), 0.3));\n}\n\n.cv-text-short[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cv-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  align-self: stretch;\n  background: var(--glass-border);\n}\n\n@media only screen and (max-width: 576px) {\n  .cv-option[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    font-size: 13px;\n    gap: 6px;\n  }\n  .cv-option[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .cv-text-full[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .cv-text-short[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa1dBQUE7RUFNQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0ZBQUE7QUFKRjs7QUFPQTtFQUNFO0lBQ0UsOEJBQUE7RUFKRjtFQU1BO0lBQ0UsZ0NBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0U7SUFDRSxnRUFBQTtFQUxGO0VBT0E7SUFDRSw4REFBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBTkY7O0FBU0E7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkVBQUE7RUFDQSwwQ0FBQTtFQUNBLGtEQUFBO0VBQ0EsaUhBQ0U7QUFQSjs7QUFZQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFXRTtFQUNFLGVBQUE7QUFUSjs7QUFZRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyR0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUFWSjs7QUFhRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUFYSjs7QUFZSTtFQUNFLG9CQUFBO0FBVk47O0FBZUk7RUFDRSx5R0FBQTtBQWJOOztBQWtCQTtFQUNFLGFBQUE7QUFmRjs7QUFrQkE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQWZGOztBQWtCQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtFQWZGO0VBaUJFO0lBQ0UsZUFBQTtFQWZKOztFQW1CQTtJQUNFLGFBQUE7RUFoQkY7O0VBbUJBO0lBQ0UsZUFBQTtFQWhCRjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWhlYXJ0IHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1kZWVwKTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLndvcmQtZ2xvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLFxuICAgIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1hY2NlbnQtZGVlcCkgNzAlLCB2YXIoLS10ZXh0LWJvZHkpKSAwJSxcbiAgICBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjZW50KSA3MCUsIHZhcigtLXRleHQtYm9keSkpIDI1JSxcbiAgICBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjZW50LWRlZXApIDcwJSwgdmFyKC0tdGV4dC1ib2R5KSkgNTAlLFxuICAgIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1hY2NlbnQpIDcwJSwgdmFyKC0tdGV4dC1ib2R5KSkgNzUlLFxuICAgIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1hY2NlbnQtZGVlcCkgNzAlLCB2YXIoLS10ZXh0LWJvZHkpKSAxMDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1kZWVwKTtcbiAgYW5pbWF0aW9uOiB3b3JkLWdsb3ctc2hpZnQgM3MgbGluZWFyIGluZmluaXRlLCB3b3JkLWdsb3ctcHVsc2UgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgd29yZC1nbG93LXNoaWZ0IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIGNlbnRlcjtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIGNlbnRlcjtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHdvcmQtZ2xvdy1wdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxLjVweCByZ2JhKHZhcigtLWFjY2VudC1kZWVwLXJnYiksIC4zKSk7XG4gIH1cbiAgNTAlIHtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA2cHggcmdiYSh2YXIoLS1hY2NlbnQtZGVlcC1yZ2IpLCAuNikpO1xuICB9XG59XG5cbi5jdi1zd2l0Y2hlci13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3Ytc3dpdGNoZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdsYXNzLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1nbGFzcy1zdHJvbmcpLCB2YXIoLS1nbGFzcy1zb2Z0KSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCkgc2F0dXJhdGUoMTgwJSk7XG4gIGJveC1zaGFkb3c6XG4gICAgMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIC4wOCksXG4gICAgaW5zZXQgMCAxcHggMXB4IHZhcigtLWdsYXNzLWhpKSxcbiAgICBpbnNldCAwIC0xcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cblxuLmN2LW9wdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTJweCAyNnB4O1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTFweDtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHJpZ2h0OiAtMXB4O1xuICAgIGJvdHRvbTogLTFweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKHZhcigtLWFjY2VudC1kZWVwLXJnYiksIC40NSksIHJnYmEodmFyKC0tYWNjZW50LWRlZXAtcmdiKSwgLjE1KSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTJzIGVhc2Utb3V0O1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKHZhcigtLWFjY2VudC1kZWVwLXJnYiksIC42KSwgcmdiYSh2YXIoLS1hY2NlbnQtZGVlcC1yZ2IpLCAuMykpO1xuICAgIH1cbiAgfVxufVxuXG4uY3YtdGV4dC1zaG9ydCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jdi1kaXZpZGVyIHtcbiAgd2lkdGg6IDFweDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYm9yZGVyKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY3Ytb3B0aW9uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGdhcDogNnB4O1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG5cbiAgLmN2LXRleHQtZnVsbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jdi10ZXh0LXNob3J0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loader/loader.component */ "vPOg");




class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'Okk';
        this.router.events.subscribe(routerEvent => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                if (routerEvent.url != "/theme/view") {
                    this.router.navigate(["theme/view"], { skipLocationChange: true });
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/layout/layout.component */ "6eW9");
/* harmony import */ var _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loader/loader.module */ "mRNh");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/shared.module */ "hGdz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
        _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();


/***/ }),

/***/ "hGdz":
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scroll-spy/scroll-spy.directive */ "RX07");
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/sections.module */ "k9h8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyDirective"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__["SectionsModule"]
        ], _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__["SectionsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__["SectionsModule"]], exports: [_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyDirective"],
        _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__["SectionsModule"]] }); })();


/***/ }),

/***/ "k9h8":
/*!********************************************************!*\
  !*** ./src/app/components/sections/sections.module.ts ***!
  \********************************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "sWZ+");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "RntK");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ "Q9DS");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "xp7a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SectionsModule {
}
SectionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SectionsModule });
SectionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function SectionsModule_Factory(t) { return new (t || SectionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SectionsModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]] }); })();


/***/ }),

/***/ "mRNh":
/*!****************************************************!*\
  !*** ./src/app/components/loader/loader.module.ts ***!
  \****************************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.component */ "vPOg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class LoaderModule {
}
LoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoaderModule });
LoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function LoaderModule_Factory(t) { return new (t || LoaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoaderModule, { declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]] }); })();


/***/ }),

/***/ "sWZ+":
/*!************************************************************!*\
  !*** ./src/app/components/sections/home/home.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() {
        this.displayText = '';
        this.phrases = [
            "I'm a developer and cybersecurity enthusiast.",
            "I'm a lover of cinema, vfx and photography.",
            "I'm a passionate about video games and electronic music."
        ];
        this.typeSpeedMin = 18;
        this.typeSpeedMax = 48;
        this.wordPauseMin = 60;
        this.wordPauseMax = 160;
        this.deleteSpeedMin = 12;
        this.deleteSpeedMax = 30;
        this.holdTime = 4500;
        this.gapTime = 500;
        this.phraseIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
    }
    ngOnInit() {
        this.typeLoop();
    }
    ngOnDestroy() {
        clearTimeout(this.typeTimeout);
    }
    ngAfterContentInit() {
        setTimeout(() => {
            const Parallax = __webpack_require__(/*! parallax-js */ "patp");
            const scene = document.getElementById('scene');
            const parallaxInstance1 = new Parallax(scene, {
                relativeInput: false
            });
            // parallax-js's own gyroscope handling relies on outdated user-agent
            // sniffing and doesn't know about iOS 13+'s permission gate, so it's
            // unreliable on iOS. Hand iOS off to our own dedicated handler instead
            // and leave parallax-js untouched for desktop (mouse) and Android,
            // where its built-in device-orientation support already works.
            if (this.isIosMotionPermissionRequired()) {
                parallaxInstance1.disable();
                this.setupIosTilt(scene);
            }
        }, 2000);
    }
    isIosMotionPermissionRequired() {
        const DeviceOrientationEventTyped = window.DeviceOrientationEvent;
        return !!DeviceOrientationEventTyped && typeof DeviceOrientationEventTyped.requestPermission === 'function';
    }
    setupIosTilt(scene) {
        const DeviceOrientationEventTyped = window.DeviceOrientationEvent;
        const layers = Array.prototype.slice.call(scene.children);
        if (!layers.length) {
            return;
        }
        let calibrationBeta = null;
        let calibrationGamma = null;
        const maxTiltDeg = 20;
        const pixelsPerDepth = 60;
        const onDeviceOrientation = (event) => {
            if (event.beta === null || event.gamma === null) {
                return;
            }
            if (calibrationBeta === null || calibrationGamma === null) {
                calibrationBeta = event.beta;
                calibrationGamma = event.gamma;
            }
            const tiltX = Math.max(-maxTiltDeg, Math.min(maxTiltDeg, event.gamma - calibrationGamma)) / maxTiltDeg;
            const tiltY = Math.max(-maxTiltDeg, Math.min(maxTiltDeg, event.beta - calibrationBeta)) / maxTiltDeg;
            layers.forEach((layer) => {
                const depth = parseFloat(layer.getAttribute('data-depth') || '0');
                const moveX = tiltX * depth * pixelsPerDepth;
                const moveY = tiltY * depth * pixelsPerDepth;
                layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            });
        };
        // iOS requires the permission prompt to be triggered directly by a user
        // gesture, so we wait for the first tap anywhere on the page.
        const requestAndBind = () => {
            document.removeEventListener('touchend', requestAndBind);
            document.removeEventListener('click', requestAndBind);
            DeviceOrientationEventTyped.requestPermission()
                .then((state) => {
                if (state === 'granted') {
                    window.addEventListener('deviceorientation', onDeviceOrientation);
                }
            })
                .catch(() => { });
        };
        document.addEventListener('touchend', requestAndBind, { once: true });
        document.addEventListener('click', requestAndBind, { once: true });
    }
    scrollTo(section) {
        const sectionHtml = document.querySelector('#' + section);
        if (sectionHtml !== null) {
            sectionHtml.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }
    get typedText() {
        return this.displayText.replace(/ $/, ' ');
    }
    randomBetween(min, max) {
        return min + Math.random() * (max - min);
    }
    typeLoop() {
        const currentPhrase = this.phrases[this.phraseIndex];
        if (!this.isDeleting) {
            this.charIndex++;
            this.displayText = currentPhrase.substring(0, this.charIndex);
            if (this.charIndex === currentPhrase.length) {
                this.isDeleting = true;
                this.typeTimeout = setTimeout(() => this.typeLoop(), this.holdTime);
                return;
            }
            const lastChar = currentPhrase.charAt(this.charIndex - 1);
            let delay = this.randomBetween(this.typeSpeedMin, this.typeSpeedMax);
            if (lastChar === ' ') {
                delay += this.randomBetween(this.wordPauseMin, this.wordPauseMax);
            }
            this.typeTimeout = setTimeout(() => this.typeLoop(), delay);
        }
        else {
            this.charIndex--;
            this.displayText = currentPhrase.substring(0, this.charIndex);
            if (this.charIndex === 0) {
                this.isDeleting = false;
                this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
                this.typeTimeout = setTimeout(() => this.typeLoop(), this.gapTime);
                return;
            }
            this.typeTimeout = setTimeout(() => this.typeLoop(), this.randomBetween(this.deleteSpeedMin, this.deleteSpeedMax));
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 85, vars: 1, consts: [[1, "binaryscroll"], [1, "container"], [1, "intro"], [1, "signature-wrap"], ["role", "img", "aria-label", "Davide Gena", 1, "signature", "mb-0", "mt-0"], [1, "sig-bubbles", "spot-left", "c-dark"], [1, "bubble", "b1"], [1, "bubble", "b2"], [1, "bubble", "b3"], [1, "sig-bubbles", "spot-mid", "c-dark"], [1, "sig-bubbles", "spot-right", "c-dark"], [1, "text-rotating"], [1, "social-icons", "list-inline", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "https://www.instagram.com/davide.gena/"], [1, "fab", "fa-instagram"], ["href", "https://www.linkedin.com/in/davide-gena/"], [1, "fab", "fa-linkedin"], ["href", "https://github.com/davidegena"], [1, "fab", "fa-github"], [1, "mt-4"], ["href", "javascript:", 1, "btn", "btn-default", 3, "click"], [1, "scroll-down"], ["href", "javascript:", 1, "mouse-wrapper", 3, "click"], [1, "mouse"], [1, "wheel"], ["id", "scene", "data-relative-input", "true", 1, "parallax"], ["data-depth", "0.3", 1, "layer", "p1", "icon-wrap", "c-yellow"], [1, "icon-glow-wrap"], [1, "icon-glow", "icon-atom"], [1, "icon-shape", "icon-atom"], ["data-depth", "0.2", 1, "layer", "p2", "icon-wrap", "c-pink"], [1, "icon-glow", "icon-bottle1"], [1, "icon-shape", "icon-bottle1"], ["data-depth", "0.3", 1, "layer", "p3", "icon-wrap", "c-teal"], [1, "icon-glow", "icon-microscop"], [1, "icon-shape", "icon-microscop"], ["data-depth", "0.6", 1, "layer", "p4", "icon-wrap", "c-yellow"], [1, "icon-glow", "icon-bottle2"], [1, "icon-shape", "icon-bottle2"], ["data-depth", "0.2", 1, "layer", "p5", "icon-wrap", "c-purple"], [1, "icon-glow", "icon-bottle3"], [1, "icon-shape", "icon-bottle3"], ["data-depth", "0.5", 1, "layer", "p6", "icon-wrap", "c-pink"], ["data-depth", "0.4", 1, "layer", "p7", "icon-wrap", "c-yellow"], ["data-depth", "0.3", 1, "layer", "p8", "icon-wrap", "c-purple"], ["data-depth", "0.3", "data-depth-y", "-1.30", 1, "layer", "p9", "icon-wrap", "c-teal"], ["data-depth", "0.2", 1, "layer", "p10", "icon-wrap", "c-teal"], ["data-depth", "0.5", 1, "layer", "p11", "icon-wrap", "c-yellow"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_32_listener() { return ctx.scrollTo("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_35_listener() { return ctx.scrollTo("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Scroll Down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.typedText);
    } }, styles: [".text-rotating[_ngcontent-%COMP%] {\n  display: inline;\n}\n.text-rotating[_ngcontent-%COMP%]:after {\n  content: \"|\";\n  margin-left: 2px;\n  color: var(--accent);\n  animation: typewriter-blink 1.2s step-end infinite;\n}\n@keyframes typewriter-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n.signature-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n  margin-top: 16px;\n}\n.sig-bubbles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -16px;\n  width: 24px;\n  height: 0;\n  margin-left: -12px;\n}\n.sig-bubbles[_ngcontent-%COMP%]   .bubble.b1[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.sig-bubbles[_ngcontent-%COMP%]   .bubble.b2[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n}\n.sig-bubbles[_ngcontent-%COMP%]   .bubble.b3[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n}\n.sig-bubbles.spot-left[_ngcontent-%COMP%] {\n  left: 8.4%;\n}\n.sig-bubbles.spot-mid[_ngcontent-%COMP%] {\n  left: 55.2%;\n}\n.sig-bubbles.spot-mid[_ngcontent-%COMP%]   .bubble.b1[_ngcontent-%COMP%] {\n  animation-delay: 0.35s;\n}\n.sig-bubbles.spot-mid[_ngcontent-%COMP%]   .bubble.b2[_ngcontent-%COMP%] {\n  animation-delay: 0.95s;\n}\n.sig-bubbles.spot-mid[_ngcontent-%COMP%]   .bubble.b3[_ngcontent-%COMP%] {\n  animation-delay: 1.55s;\n}\n.sig-bubbles.spot-right[_ngcontent-%COMP%] {\n  left: 93.4%;\n}\n.sig-bubbles.spot-right[_ngcontent-%COMP%]   .bubble.b1[_ngcontent-%COMP%] {\n  animation-delay: 0.8s;\n}\n.sig-bubbles.spot-right[_ngcontent-%COMP%]   .bubble.b2[_ngcontent-%COMP%] {\n  animation-delay: 1.4s;\n}\n.sig-bubbles.spot-right[_ngcontent-%COMP%]   .bubble.b3[_ngcontent-%COMP%] {\n  animation-delay: 2s;\n}\n.signature[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 540px;\n  max-width: 100%;\n  aspect-ratio: 2614/375;\n  background-color: var(--text-strong);\n  transition: background-color 0.4s ease-in-out;\n  -webkit-mask-image: url(\"/assets/images/davidegenasign-lab-edition.png\");\n  mask-image: url(\"/assets/images/davidegenasign-lab-edition.png\");\n  -webkit-mask-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-position: center;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrREFBQTtBQUNKO0FBR0E7RUFDRTtJQUNFLFVBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQURGO0FBSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUZOO0FBSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUZOO0FBSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUZOO0FBTUE7RUFDRSxVQUFBO0FBSEY7QUFLQTtFQUNFLFdBQUE7QUFGRjtBQUdFO0VBQWEsc0JBQUE7QUFBZjtBQUNFO0VBQWEsc0JBQUE7QUFFZjtBQURFO0VBQWEsc0JBQUE7QUFJZjtBQUZBO0VBQ0UsV0FBQTtBQUtGO0FBSkU7RUFBYSxxQkFBQTtBQU9mO0FBTkU7RUFBYSxxQkFBQTtBQVNmO0FBUkU7RUFBYSxtQkFBQTtBQVdmO0FBUkE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esd0VBQUE7RUFDQSxnRUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQVdGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1yb3RhdGluZyB7XG4gIGRpc3BsYXk6IGlubGluZTtcblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnfCc7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICBhbmltYXRpb246IHR5cGV3cml0ZXItYmxpbmsgMS4ycyBzdGVwLWVuZCBpbmZpbml0ZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHR5cGV3cml0ZXItYmxpbmsge1xuICAwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLnNpZ25hdHVyZS13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnNpZy1idWJibGVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNnB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogLTEycHg7XG5cbiAgLmJ1YmJsZSB7XG4gICAgJi5iMSB7XG4gICAgICB3aWR0aDogMTRweDtcbiAgICAgIGhlaWdodDogMTRweDtcbiAgICB9XG4gICAgJi5iMiB7XG4gICAgICB3aWR0aDogMTlweDtcbiAgICAgIGhlaWdodDogMTlweDtcbiAgICB9XG4gICAgJi5iMyB7XG4gICAgICB3aWR0aDogMTFweDtcbiAgICAgIGhlaWdodDogMTFweDtcbiAgICB9XG4gIH1cbn1cbi5zaWctYnViYmxlcy5zcG90LWxlZnQge1xuICBsZWZ0OiA4LjQlO1xufVxuLnNpZy1idWJibGVzLnNwb3QtbWlkIHtcbiAgbGVmdDogNTUuMiU7XG4gIC5idWJibGUuYjEgeyBhbmltYXRpb24tZGVsYXk6IC4zNXM7IH1cbiAgLmJ1YmJsZS5iMiB7IGFuaW1hdGlvbi1kZWxheTogLjk1czsgfVxuICAuYnViYmxlLmIzIHsgYW5pbWF0aW9uLWRlbGF5OiAxLjU1czsgfVxufVxuLnNpZy1idWJibGVzLnNwb3QtcmlnaHQge1xuICBsZWZ0OiA5My40JTtcbiAgLmJ1YmJsZS5iMSB7IGFuaW1hdGlvbi1kZWxheTogLjhzOyB9XG4gIC5idWJibGUuYjIgeyBhbmltYXRpb24tZGVsYXk6IDEuNHM7IH1cbiAgLmJ1YmJsZS5iMyB7IGFuaW1hdGlvbi1kZWxheTogMnM7IH1cbn1cblxuLnNpZ25hdHVyZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDU0MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMjYxNCAvIDM3NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1zdHJvbmcpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC40cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2RhdmlkZWdlbmFzaWduLWxhYi1lZGl0aW9uLnBuZycpO1xuICBtYXNrLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2RhdmlkZWdlbmFzaWduLWxhYi1lZGl0aW9uLnBuZycpO1xuICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xuICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XG4gIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xuICBtYXNrLXNpemU6IGNvbnRhaW47XG59XG4iXX0= */"] });


/***/ }),

/***/ "vPOg":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* spinner */





function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 1);
} }
class LoaderComponent {
    constructor(router, document, activatedRoute) {
        this.router = router;
        this.document = document;
        this.activatedRoute = activatedRoute;
        this.isSpinnerVisible = true;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["id", "preloader", 4, "ngIf"], ["id", "preloader"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 1, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/layout/layout.component */ "6eW9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        redirectTo: '/theme/view',
        pathMatch: 'full'
    },
    {
        path: 'theme',
        component: _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [
            {
                path: 'view',
                loadChildren: () => __webpack_require__.e(/*! import() | view-view-module */ "view-view-module").then(__webpack_require__.bind(null, /*! ./view/view.module */ "B4v+")).then(module => module.ViewModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/theme/view',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xp7a":
/*!******************************************************************!*\
  !*** ./src/app/components/sections/contact/contact.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 14, vars: 0, consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-12", "contact-info"], [1, "wow", "fadeInUp"], ["href", "https://www.linkedin.com/in/davide-gena/", "target", "_blank", "rel", "noopener noreferrer", 1, "linkedin-btn", "wow", "fadeInUp"], [1, "fab", "fa-linkedin", "word-glow"], [1, "word-glow"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Get In Touch \uD83E\uDD19\uD83C\uDFFB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Let's talk about everything!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The best place to reach me is LinkedIn \u2014 feel free to connect or drop me a message \uD83D\uDC4B\uD83C\uDFFB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Connect on LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".linkedin-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 14px;\n  padding: 12px 28px;\n  border: 1px solid var(--glass-border);\n  border-radius: 999px;\n  color: var(--accent);\n  background: linear-gradient(135deg, var(--glass-strong), var(--glass-soft));\n  backdrop-filter: blur(16px) saturate(180%);\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 1px var(--glass-hi), inset 0 -1px 1px rgba(0, 0, 0, 0.05);\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  position: relative;\n  z-index: 0;\n  overflow: hidden;\n  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out, border-color 0.15s ease-out;\n}\n.linkedin-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  filter: drop-shadow(0 1px 1px var(--glass-hi));\n}\n.linkedin-btn[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  right: -1px;\n  bottom: -1px;\n  background: linear-gradient(180deg, rgba(var(--accent-deep-rgb), 0.45), rgba(var(--accent-deep-rgb), 0.15));\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: transform 0.12s ease-out;\n  z-index: -1;\n}\n.linkedin-btn[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n  text-decoration: none;\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12), inset 0 1px 1px var(--glass-hi-hover), inset 0 -1px 1px rgba(0, 0, 0, 0.06);\n}\n.linkedin-btn[_ngcontent-%COMP%]:hover:before {\n  transform: scaleY(1);\n}\n.linkedin-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(-1px) scale(0.98);\n}\n.word-glow[_ngcontent-%COMP%] {\n  position: relative;\n  font-weight: 700;\n  background: linear-gradient(90deg, color-mix(in srgb, var(--accent-deep) 70%, var(--text-body)) 0%, color-mix(in srgb, var(--accent) 70%, var(--text-body)) 25%, color-mix(in srgb, var(--accent-deep) 70%, var(--text-body)) 50%, color-mix(in srgb, var(--accent) 70%, var(--text-body)) 75%, color-mix(in srgb, var(--accent-deep) 70%, var(--text-body)) 100%);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  color: var(--accent-deep);\n  animation: word-glow-shift 3s linear infinite, word-glow-pulse 2s ease-in-out infinite;\n}\n@keyframes word-glow-shift {\n  0% {\n    background-position: 0% center;\n  }\n  100% {\n    background-position: 200% center;\n  }\n}\n@keyframes word-glow-pulse {\n  0%, 100% {\n    filter: drop-shadow(0 0 1.5px rgba(var(--accent-deep-rgb), 0.3));\n  }\n  50% {\n    filter: drop-shadow(0 0 6px rgba(var(--accent-deep-rgb), 0.6));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJFQUFBO0VBQ0EsMENBQUE7RUFDQSxrREFBQTtFQUNBLGlIQUNFO0VBR0YsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDRGQUFBO0FBRkY7QUFJRTtFQUNFLGVBQUE7RUFDQSw4Q0FBQTtBQUZKO0FBS0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkdBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FBSEo7QUFNRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHdIQUNFO0FBTE47QUFRSTtFQUNFLG9CQUFBO0FBTk47QUFVRTtFQUNFLHVDQUFBO0FBUko7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrV0FBQTtFQU1BLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxzRkFBQTtBQWRGO0FBaUJBO0VBQ0U7SUFDRSw4QkFBQTtFQWRGO0VBZ0JBO0lBQ0UsZ0NBQUE7RUFkRjtBQUNGO0FBaUJBO0VBQ0U7SUFDRSxnRUFBQTtFQWZGO0VBaUJBO0lBQ0UsOERBQUE7RUFmRjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlua2VkaW4tYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgcGFkZGluZzogMTJweCAyOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1nbGFzcy1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWdsYXNzLXN0cm9uZyksIHZhcigtLWdsYXNzLXNvZnQpKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpIHNhdHVyYXRlKDE4MCUpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcbiAgYm94LXNoYWRvdzpcbiAgICAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgLjA4KSxcbiAgICBpbnNldCAwIDFweCAxcHggdmFyKC0tZ2xhc3MtaGkpLFxuICAgIGluc2V0IDAgLTFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDUpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1cyBlYXNlLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2Utb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLW91dDtcblxuICBpIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAxcHggdmFyKC0tZ2xhc3MtaGkpKTtcbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMXB4O1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgcmlnaHQ6IC0xcHg7XG4gICAgYm90dG9tOiAtMXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEodmFyKC0tYWNjZW50LWRlZXAtcmdiKSwgLjQ1KSwgcmdiYSh2YXIoLS1hY2NlbnQtZGVlcC1yZ2IpLCAuMTUpKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xMnMgZWFzZS1vdXQ7XG4gICAgei1pbmRleDogLTE7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpIHNjYWxlKDEuMDIpO1xuICAgIGJveC1zaGFkb3c6XG4gICAgICAwIDEwcHggMjhweCByZ2JhKDAsIDAsIDAsIC4xMiksXG4gICAgICBpbnNldCAwIDFweCAxcHggdmFyKC0tZ2xhc3MtaGktaG92ZXIpLFxuICAgICAgaW5zZXQgMCAtMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNik7XG4gICAgJjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KSBzY2FsZSguOTgpO1xuICB9XG59XG5cbi53b3JkLWdsb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxcbiAgICBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjZW50LWRlZXApIDcwJSwgdmFyKC0tdGV4dC1ib2R5KSkgMCUsXG4gICAgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjY2VudCkgNzAlLCB2YXIoLS10ZXh0LWJvZHkpKSAyNSUsXG4gICAgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjY2VudC1kZWVwKSA3MCUsIHZhcigtLXRleHQtYm9keSkpIDUwJSxcbiAgICBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjZW50KSA3MCUsIHZhcigtLXRleHQtYm9keSkpIDc1JSxcbiAgICBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjZW50LWRlZXApIDcwJSwgdmFyKC0tdGV4dC1ib2R5KSkgMTAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtZGVlcCk7XG4gIGFuaW1hdGlvbjogd29yZC1nbG93LXNoaWZ0IDNzIGxpbmVhciBpbmZpbml0ZSwgd29yZC1nbG93LXB1bHNlIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHdvcmQtZ2xvdy1zaGlmdCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSBjZW50ZXI7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSBjZW50ZXI7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB3b3JkLWdsb3ctcHVsc2Uge1xuICAwJSwgMTAwJSB7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMS41cHggcmdiYSh2YXIoLS1hY2NlbnQtZGVlcC1yZ2IpLCAuMykpO1xuICB9XG4gIDUwJSB7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNnB4IHJnYmEodmFyKC0tYWNjZW50LWRlZXAtcmdiKSwgLjYpKTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map