(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n){var r=t.item,o=t.currentUser,i=t.handleCardClick,a=t.handleDeleteCard,u=t.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardId=r._id,this._name=r.name,this._link=r.link,this._likes=r.likes,this._ownerId=r.owner._id,this._cardElement=n,this._handleCardClick=i,this._handleDeleteCard=a,this._handleLikeCard=u,this._currentUser=o}var n,r;return n=e,(r=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._cardElement).content.querySelector("li").cloneNode(!0)}},{key:"updateLikes",value:function(e,t){var n=this;0!==e.length?this._cardLikeCounter.textContent=e.length:this._cardLikeCounter.textContent="0","setLike"===t?this._cardLikeButton.classList.add("photo-card__like-button_active"):this._cardLikeButton.classList.remove("photo-card__like-button_active"),e.some((function(e){return e._id===n._currentUser}))&&this._cardLikeButton.classList.add("photo-card__like-button_active")}},{key:"_setEventListeners",value:function(){var e=this;this._cardLikeButton.addEventListener("click",(function(){e._cardLikeButton.classList.contains("photo-card__like-button_active")?e._handleLikeCard.handleDeleteLike(e._cardId,e._cardItem):e._handleLikeCard.handleSetLike(e._cardId,e._cardItem)})),this._ownerId===this._currentUser&&this._cardDeleteButton.addEventListener("click",(function(){return e._handleDeleteCard(e._cardId,e._cardItem)})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"deleteCard",value:function(){this._cardItem.remove(),this._cardItem=null}},{key:"createCard",value:function(){return this._cardItem=this._getCardTemplate(),this._cardImage=this._cardItem.querySelector(".photo-card__image"),this._cardLikeButton=this._cardItem.querySelector(".photo-card__like-button"),this._cardLikeCounter=this._cardItem.querySelector(".photo-card__like-counter"),this._cardDeleteButton=this._cardItem.querySelector(".photo-card__delete"),this._cardItem.querySelector(".photo-card__title").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._ownerId!==this._currentUser&&this._cardDeleteButton.remove(),this.updateLikes(this._likes,""),this._setEventListeners(),this._cardItem}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupInput=t.inputSelector,this._popupSubmit=t.submitButtonSelector,this._popupSubmitDisabled=t.inactiveButtonClass,this._popupInputTypeError=t.inputErrorClass,this._popupErrorVisible=t.errorClass,this._formToValidate=n,this._submitButton=this._formToValidate.querySelector(this._popupSubmit),this._inputArray=this._formToValidate.querySelectorAll(this._popupInput)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formToValidate.querySelector("#".concat(e.id,"-error"));n.textContent=t,e.classList.add(this._popupInputTypeError),n.classList.add(this._popupErrorVisible)}},{key:"_hideInputError",value:function(e){var t=this._formToValidate.querySelector("#".concat(e.id,"-error"));t.textContent="",e.classList.remove(this._popupInputTypeError),t.classList.remove(this._popupErrorVisible)}},{key:"_validateInput",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"switchSubmitButton",value:function(){0===Array.from(this._inputArray).filter((function(e){return!e.validity.valid})).length?(this._submitButton.disabled=!1,this._submitButton.classList.remove(this._popupSubmitDisabled)):(this._submitButton.disabled=!0,this._submitButton.classList.add(this._popupSubmitDisabled))}},{key:"validateInputs",value:function(){var e=this;this._inputArray.forEach((function(t){e._validateInput(t),e._hideInputError(t)}))}},{key:"_setInputEvtListeners",value:function(){var e=this;this._formToValidate.addEventListener("submit",(function(e){e.preventDefault()})),this._inputArray.forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e.switchSubmitButton()}))}))}},{key:"enableValidation",value:function(){this._setInputEvtListeners(this._formToValidate)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}},{key:"renderElements",value:function(e){var t=this;this._container.innerHTML="",e.forEach((function(e){t._renderer(e)}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEsc=function(e){n._handleEscClose(e)}}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEsc)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var n,r=t.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitForm=r,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._submitbutton=n._popup.querySelector(".popup__submit"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;f(d(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e.renderLoading(!0),e._handleSubmitForm(e._getInputValues())}))}},{key:"close",value:function(){f(d(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._submitbutton.textContent=e?"Сохранение...":this._submitbutton.dataset.value}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._caption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.title,n=e.src;this._image.src=n,this._image.alt=t,this._caption.textContent=t,v(m(a.prototype),"open",this).call(this)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var n,r=t.handleSubmitDelete;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitDelete=r,n._form=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;g(E(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitDelete(e._idCard,e._card)}))}},{key:"getCard",value:function(e,t){this._clear(),this._idCard=e,this._cardElement=t}},{key:"open",value:function(e){this._card=e,g(E(a.prototype),"open",this).call(this)}},{key:"_clear",value:function(){this._idCard="",this._cardElement=""}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.profileTitle,r=t.profileAbout,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._info={title:this._title.textContent,about:this._about.textContent,avatar:this._avatar.src},this._info}},{key:"setUserInfo",value:function(e){this._title.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=t.headers,this._serverURL=t.serverURL,this._handlePromiseReturn=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._serverURL,"/users/me"),{headers:this._headers}).then((function(t){return e._handlePromiseReturn(t)}))}},{key:"sendUserInfo",value:function(e){var t=this;return fetch("".concat(this._serverURL,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._handlePromiseReturn(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._serverURL,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._handlePromiseReturn(e)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._serverURL,"/cards"),{headers:this._headers}).then((function(t){return e._handlePromiseReturn(t)}))}},{key:"sendCard",value:function(e){var t=this;return fetch("".concat(this._serverURL,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._handlePromiseReturn(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._serverURL,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._serverURL,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._handlePromiseReturn(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._serverURL,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._handlePromiseReturn(e)}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({serverURL:"https://mesto.nomoreparties.co/v1/frontend-st-cohort-201",headers:{authorization:"3d71d52b-e1d0-42cf-a3a7-a3430cfe4ef8","Content-Type":"application/json"}}),R="";Promise.all([j.getUserInfo(),j.getCards()]).then((function(e){R=e[0]._id,console.log("ID пользователя:",R),N.setUserInfo(e[0]),T.renderElements(e[1])})).catch((function(e){console.log(e)}));var T=new a({renderer:function(e){T.addItem(Q(e,R))}},".photo-cards"),q=document.querySelector(".popup_edit_profile "+e.formSelector),B=document.querySelector(".popup_update-avatar "+e.formSelector),D=new o(e,q),U=new o(e,B),V=document.querySelector(".popup_edit_profile"),x=V.querySelector("#profile_name"),A=V.querySelector("#profile_about"),F=document.querySelector(".profile__button"),N=new I({profileTitle:".profile__title",profileAbout:".profile__about",profileAvatar:".profile__avatar"}),H=new h(".popup_edit_profile",{handleSubmitForm:function(e){j.sendUserInfo(e).then((function(e){N.setUserInfo({name:e.name,about:e.about,avatar:e.avatar}),H.close()})).catch((function(e){console.log(e)})).finally((function(){H.renderLoading(!1)}))}});document.querySelector(".profile__edit-avatar-button").addEventListener("click",(function(){J.open(),U.validateInputs(),U.switchSubmitButton()}));var J=new h(".popup_update-avatar",{handleSubmitForm:function(e){j.updateAvatar(e.avatar).then((function(e){N.setUserInfo({avatar:e.avatar,name:e.name,about:e.about}),J.close()})).catch((function(e){console.log(e)})).finally((function(){J.renderLoading(!1)}))}}),M=new o(e,document.querySelector(".popup_new-place "+e.formSelector)),z=new k(".popup_view_image"),G=new C(".popup_delete-place",{handleSubmitDelete:function(e,t){j.deleteCard(e).then((function(){t.deleteCard(),G.close()})).catch((function(e){console.log(e)}))}}),K=document.querySelector(".profile__add-button"),Q=function(e,t){var r=new n({item:e,currentUser:t,handleCardClick:function(){z.open({title:e.name,src:e.link})},handleDeleteCard:function(e,t){G.open(r),G.getCard(e,t)},handleLikeCard:{handleSetLike:function(e){j.setLike(e).then((function(e){r.updateLikes(e.likes,"setLike")})).catch((function(e){console.log(e)}))},handleDeleteLike:function(e){j.deleteLike(e).then((function(e){r.updateLikes(e.likes,"deleteLike")})).catch((function(e){console.log(e)}))}}},"#photo-card");return r.createCard()},W=new h(".popup_new-place",{handleSubmitForm:function(e){j.sendCard(e).then((function(e){T.addNewItem(Q(e,R)),W.close()})).finally((function(){W.renderLoading(!1)}))}});F.addEventListener("click",(function(){var e;e=N.getUserInfo(),x.value=e.title,A.value=e.about,H.open(),D.validateInputs(),D.switchSubmitButton()})),K.addEventListener("click",(function(){W.open(),M.validateInputs(),M.switchSubmitButton()})),document.addEventListener("DOMContentLoaded",(function(){D.enableValidation(),M.enableValidation(),U.enableValidation(),z.setEventListeners(),H.setEventListeners(),G.setEventListeners(),W.setEventListeners(),J.setEventListeners()}))})();