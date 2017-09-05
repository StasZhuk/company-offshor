/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	const burger = __webpack_require__(2);
	const preloader = __webpack_require__(3);
	const nav = __webpack_require__(5);

	preloader();
	burger();
	nav();

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = function() {
	        const burger = document.querySelector('.burger');
	        const nav = document.querySelector('#main-nav');
	        burger.onclick = function (e) {
	            if (burger.classList.contains('active')) {
	                burger.classList.remove('active');
	                burger.classList.remove('no-animation');
	                nav.style.opacity = '0';
	                setTimeout(function() {
	                   nav.style.left = '-9999px';  
	                }, 500)
	            }
	            else {
	                burger.classList.add('active');
	                burger.classList.remove('no-animation');
	                nav.style.left = '0'; 
	                nav.style.opacity = '1';   
	            }
	            return false;
	        }
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = function() {
	    var
	        images            = document.images,
	        imagesTotalCount  = images.length, 
	        imagesLoadedCount = 0,
	        percentDisplay    = document.querySelector('#load-perc'),
	        preloader         = document.querySelector('#page-preloader');

	    for(let i = 0; i < imagesTotalCount; i++) {
	        imageClone = new Image();
	        imageClone.onload = imageLoaded;
	        imageClone.onerror = imageLoaded;
	        imageClone.src = images[i].src;
	    }

	    function imageLoaded() {
	        imagesLoadedCount++;
	        percentDisplay.innerHTML = (((100 / imagesTotalCount) * imagesLoadedCount) << 0) + '%';
	        
	        if(imagesLoadedCount === imagesTotalCount) {
	            setTimeout(function() {
	                if(!preloader.classList.contains('done')) {
	                    preloader.classList.add('done');
	                }
	            }, 1000);
	        }
	   }
	}

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	module.exports = function() {

	    const navMenu = document.querySelector('.blog__tabs');
	    var PosNavTop = offsetPosition(navMenu);
	    



	    window.addEventListener('scroll', function() {
	        var windowScrolTop = window.pageYOffset;
	        const elemTopChange = navMenu.getBoundingClientRect().top;
	        
	        if(windowScrolTop >= PosNavTop - 10) {
	            navMenu.classList.add('active');

	        }
	        else {
	            navMenu.classList.remove('active');

	        }
	    });

	    window.addEventListener('resize', function() {
	        var windowWidth = window.innerWidth;
	        var windowScrolTop = window.pageYOffset;
	        console.log(windowScrolTop);
	        
	        if(windowWidth < 768) {
	            navMenu.classList.remove('active');
	        }
	        if(windowWidth > 768 && windowScrolTop >= PosNavTop) {
	            navMenu.classList.add('active');
	        }
	    });

	    function offsetPosition(element) {
	        var offsetTop = 0;

	        do {
	             offsetTop  += element.offsetTop;
	        } 
	        while (element = element.offsetParent);

	        return offsetTop;
	    }


	}

/***/ })
/******/ ]);