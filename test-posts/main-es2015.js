(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/_modal/modal.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/_modal/modal.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jw-modal\">\n  <div class=\"jw-modal-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div class=\"jw-modal-background\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/new-post/new-post.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-post/new-post.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"col-6 text-right\">\n  <input type=\"text\" placeholder=\"title\" class=\"col-6 d-block mt-5 ml-auto\">\n  <button type=\"button\" class=\"btn btn-dark mt-3 mb-3 d-block ml-auto\"  (click)='showAlert()'>Save</button>\n</div>\n<div class=\"col-6\">\n<input type=\"text\" placeholder=\"text\" class=\"col-6 d-block mt-5 mr-auto\">\n<button type=\"button\" class=\"btn btn-dark mt-3 mb-3 d-block  mr-auto\"  (click)='onBack()'>Back</button>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts-list/posts-list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts-list/posts-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <button type=\"button\" class=\"btn btn-dark mt-3 mb-3\"  (click)='onCreatePost()'>Create Post</button>\n  <app-posts [currentPosts]=posts [Page]=currentPage [comments]=comments [users]=users> </app-posts>\n  <button class=\"btn btn-dark\" *ngFor=\"let button of paginationButtons\" (click)='setPage(button)'>{{button + 1}}</button>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts-list/posts/posts.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts-list/posts/posts.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-dark table-hover\">\n  <thead>\n  <tr>\n    <th>Id</th>\n    <th>Title</th>\n    <th>Comments</th>\n    <th>User</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let post of currentPosts.slice(Page * 10, Page * 10 + 10)\">\n    <td>{{post.id}}</td>\n    <td>{{post.title}}</td>\n    <td>\n      <button (click)=\"openModal('custom-modal-1', post.id)\">Open Modal 1</button>\n    </td>\n    <td>\n      <button (click)=\"openAuthor('custom-modal-2', post.userId)\">Open Modal 1</button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n<app-jw-modal id=\"custom-modal-1\">\n  <h1>Comments postId:{{postId}}</h1>\n  <ul>\n    <li *ngFor=\"let comment of currentComments\" >\n      <p>{{comment.body}}</p>\n    </li>\n  </ul>\n  <button (click)=\"closeModal('custom-modal-1');\">Close</button>\n</app-jw-modal>\n\n<app-jw-modal id=\"custom-modal-2\">\n  <h1> userId:{{user.id}}</h1>\n<p>{{user.name}}</p>\n<p>{{user.email}}</p>\n  <button (click)=\"closeAuthor('custom-modal-2');\">Close</button>\n</app-jw-modal>\n\n\n\n"

/***/ }),

/***/ "./src/app/_modal/comment.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_modal/comment.service.ts ***!
  \*******************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let CommentsService = class CommentsService {
    constructor(http) {
        this.http = http;
        this.commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
    }
    getComments() {
        return this.http.get(this.commentsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${errorMessage}`;
        }
        else {
            errorMessage = `Server return code: ${err.status}, errors: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
CommentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CommentsService);



/***/ }),

/***/ "./src/app/_modal/modal.component.less":
/*!*********************************************!*\
  !*** ./src/app/_modal/modal.component.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MODAL STYLES\n-------------------------------*/\napp-jw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\napp-jw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\napp-jw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n}\napp-jw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3ZpdGFsaWkvRGVza3RvcC9hbmd1bGFyL3Rlc3QtcG9zdHMvc3JjL2FwcC9fbW9kYWwvbW9kYWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Z0NBQ2dDO0FDQ2hDO0VEQ0UsaUNBQWlDO0VDQ2pDLGFBQUE7QURDRjtBQ0hBO0VES0UsOENBQThDO0VDQzVDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VEQ0YscURBQXFEO0VDRW5ELGFBQUE7RURBRixzQ0FBc0M7RUNHcEMsY0FBQTtBRERKO0FDZkE7RUFtQk0sYUFBQTtFQUNBLGdCQUFBO0VEREosZ0RBQWdEO0VDSTVDLFlBQUE7QURGTjtBQ3JCQTtFRHVCRSwrQ0FBK0M7RUNNN0MsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RURKRiw0QkFBNEI7RUNPMUIsc0JBQUE7RUFDQSxhQUFBO0VETEYsK0RBQStEO0VDUTdELFlBQUE7QUROSjtBQ1VBO0VEUkUsNkVBQTZFO0VDVTdFLGdCQUFBO0FEUkYiLCJmaWxlIjoic3JjL2FwcC9fbW9kYWwvbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNT0RBTCBTVFlMRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYXBwLWp3LW1vZGFsIHtcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBkaXNwbGF5OiBub25lO1xufVxuYXBwLWp3LW1vZGFsIC5qdy1tb2RhbCB7XG4gIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cbiAgei1pbmRleDogMTAwMDtcbiAgLyogZW5hYmxlcyBzY3JvbGxpbmcgZm9yIHRhbGwgbW9kYWxzICovXG4gIG92ZXJmbG93OiBhdXRvO1xufVxuYXBwLWp3LW1vZGFsIC5qdy1tb2RhbCAuanctbW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC8qIG1hcmdpbiBleHBvc2VzIHBhcnQgb2YgdGhlIG1vZGFsIGJhY2tncm91bmQgKi9cbiAgbWFyZ2luOiA0MHB4O1xufVxuYXBwLWp3LW1vZGFsIC5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjc1O1xuICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gIHotaW5kZXg6IDkwMDtcbn1cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmFwcC1qdy1tb2RhbCB7XG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgZGlzcGxheTogbm9uZTtcblxuICAuanctbW9kYWwge1xuICAgIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcblxuICAgIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xuICAgIHotaW5kZXg6IDEwMDA7XG5cbiAgICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cbiAgICBvdmVyZmxvdzogYXV0bztcblxuICAgIC5qdy1tb2RhbC1ib2R5IHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXG4gICAgICBtYXJnaW46IDQwcHg7XG4gICAgfVxuICB9XG5cbiAgLmp3LW1vZGFsLWJhY2tncm91bmQge1xuICAgIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogMC43NTtcblxuICAgIC8qIHotaW5kZXggbXVzdCBiZSBiZWxvdyAuanctbW9kYWwgYW5kIGFib3ZlIGV2ZXJ5dGhpbmcgZWxzZSAgKi9cbiAgICB6LWluZGV4OiA5MDA7XG4gIH1cbn1cblxuYm9keS5qdy1tb2RhbC1vcGVuIHtcbiAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/_modal/modal.component.ts":
/*!*******************************************!*\
  !*** ./src/app/_modal/modal.component.ts ***!
  \*******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "./src/app/_modal/modal.service.ts");



let ModalComponent = class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // remove self from modal service when component is destroyed
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
};
ModalComponent.ctorParameters = () => [
    { type: _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ModalComponent.prototype, "id", void 0);
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jw-modal',
        template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/_modal/modal.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./modal.component.less */ "./src/app/_modal/modal.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ModalComponent);



/***/ }),

/***/ "./src/app/_modal/modal.service.ts":
/*!*****************************************!*\
  !*** ./src/app/_modal/modal.service.ts ***!
  \*****************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalService = class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }
    close(id) {
        // close modal specified by id
        console.log('close');
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
};
ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ModalService);



/***/ }),

/***/ "./src/app/_modal/users.service.ts":
/*!*****************************************!*\
  !*** ./src/app/_modal/users.service.ts ***!
  \*****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
        this.commentsUrl = 'https://jsonplaceholder.typicode.com/users';
    }
    getUsers() {
        return this.http.get(this.commentsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${errorMessage}`;
        }
        else {
            errorMessage = `Server return code: ${err.status}, errors: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UsersService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'test-posts';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts-list/posts-list.component */ "./src/app/posts-list/posts-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _posts_list_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts-list/posts/posts.component */ "./src/app/posts-list/posts/posts.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_modal/modal.component */ "./src/app/_modal/modal.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./new-post/new-post.component */ "./src/app/new-post/new-post.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__["PostsListComponent"],
            _posts_list_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"],
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
            _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_12__["NewPostComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                { path: 'newPost', component: _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_12__["NewPostComponent"] },
                // {path: 'products/:id',
                //   canActivate: [ProductDetailGuard],
                //   component: ProductDetailComponent },
                // {path: 'posts/:page', component: PostsListComponent },
                { path: 'welcome', component: _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__["PostsListComponent"] },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/new-post/new-post.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-post/new-post.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1wb3N0L25ldy1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/new-post/new-post.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-post/new-post.component.ts ***!
  \************************************************/
/*! exports provided: NewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostComponent", function() { return NewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NewPostComponent = class NewPostComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onBack() {
        this.router.navigate(['/welcome']);
    }
    showAlert() {
        alert('saved successfully');
    }
};
NewPostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NewPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-post',
        template: __webpack_require__(/*! raw-loader!./new-post.component.html */ "./node_modules/raw-loader/index.js!./src/app/new-post/new-post.component.html"),
        styles: [__webpack_require__(/*! ./new-post.component.css */ "./src/app/new-post/new-post.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NewPostComponent);



/***/ }),

/***/ "./src/app/posts-list/post-list.service.ts":
/*!*************************************************!*\
  !*** ./src/app/posts-list/post-list.service.ts ***!
  \*************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PostService = class PostService {
    constructor(http) {
        this.http = http;
        this.postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    }
    getProducts() {
        return this.http.get(this.postsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${errorMessage}`;
        }
        else {
            errorMessage = `Server return code: ${err.status}, errors: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PostService);



/***/ }),

/***/ "./src/app/posts-list/posts-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/posts-list/posts-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzLWxpc3QvcG9zdHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/posts-list/posts-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/posts-list/posts-list.component.ts ***!
  \****************************************************/
/*! exports provided: PostsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListComponent", function() { return PostsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-list.service */ "./src/app/posts-list/post-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modal_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_modal/comment.service */ "./src/app/_modal/comment.service.ts");
/* harmony import */ var _modal_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_modal/users.service */ "./src/app/_modal/users.service.ts");






let PostsListComponent = class PostsListComponent {
    // bodyText: string;
    constructor(postService, commentsService, usersService, router) {
        this.postService = postService;
        this.commentsService = commentsService;
        this.usersService = usersService;
        this.router = router;
        this.paginationButtons = Array(10).fill(1).map((item, index) => index);
        this.currentPage = 0;
        this.posts = [];
        this.comments = [];
        this.users = [];
    }
    setPage(pageNumber) {
        this.currentPage = pageNumber;
    }
    ngOnInit() {
        // this.bodyText = 'This text can be updated in modal 1';
        this.commentsService.getComments().subscribe({
            next: comments => {
                this.comments = comments;
            },
            error: err => this.errorMessage = err
        });
        this.usersService.getUsers().subscribe({
            next: users => {
                this.users = users;
            },
            error: err => this.errorMessage = err
        });
        this.postService.getProducts().subscribe({
            next: posts => {
                this.posts = posts;
            },
            error: err => this.errorMessage = err
        });
    }
    onCreatePost() {
        this.router.navigate(['/newPost']);
    }
};
PostsListComponent.ctorParameters = () => [
    { type: _post_list_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _modal_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentsService"] },
    { type: _modal_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PostsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // selector: 'app-posts-list',
        template: __webpack_require__(/*! raw-loader!./posts-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts-list/posts-list.component.html"),
        styles: [__webpack_require__(/*! ./posts-list.component.css */ "./src/app/posts-list/posts-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_list_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
        _modal_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentsService"],
        _modal_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], PostsListComponent);



/***/ }),

/***/ "./src/app/posts-list/posts/posts.component.css":
/*!******************************************************!*\
  !*** ./src/app/posts-list/posts/posts.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzLWxpc3QvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/posts-list/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/posts-list/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modal/modal.service */ "./src/app/_modal/modal.service.ts");



let PostsComponent = class PostsComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnChanges(changes) {
    }
    ngOnInit() {
        this.bodyText = 'This text can be updated in modal 1';
    }
    openModal(id, postId) {
        this.postId = postId;
        this.modalService.open(id);
        this.currentComments = this.comments.filter(comment => comment.postId === +postId);
        this.bodyText = this.currentComments;
    }
    closeModal(id) {
        this.modalService.close(id);
    }
    openAuthor(id, userId) {
        this.userId = userId;
        this.modalService.open(id);
        // this.users.forEach(us => us.id === +userId ? console.log(us.name) : null);
        this.user = this.users.filter(us => us.id === +userId);
        this.user = this.user[0];
    }
    closeAuthor(id) {
        this.modalService.close(id);
    }
};
PostsComponent.ctorParameters = () => [
    { type: _modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PostsComponent.prototype, "currentPosts", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PostsComponent.prototype, "Page", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PostsComponent.prototype, "comments", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PostsComponent.prototype, "users", void 0);
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts-list/posts/posts.component.html"),
        styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts-list/posts/posts.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
], PostsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vitalii/Desktop/angular/test-posts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map