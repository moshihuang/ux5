/**
 * 控制回顧頁的翻頁、轉場、計時等功能
 * 依賴 gsap
 * 整支檔案內容需視為一體
 */
var Stage = /*#__PURE__*/function () {
  "use strict";

  function Stage(el) {
    var _options$delay;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Stage);

    this.options = options;
    this.delay = (_options$delay = options === null || options === void 0 ? void 0 : options.delay) !== null && _options$delay !== void 0 ? _options$delay : 5000;
    this.el = el;
    this.screenRefs = [];
    this.activeSlide = options.activeSlide || 1;
    this.paginationAnim;
    this.paginationAnimFinished;
    this.turnAnimating = false;
    this.firstInit = true;
  }

  _createClass(Stage, [{
    key: "activeSlideIndex",
    get: function get() {
      return this.activeSlide - 1;
    }
  }, {
    key: "init",
    value: function init() {
      var _screenRef$screen$dur, _screenRef$screen;

      this._bindEl();

      this._bindGesture();

      this._activePagination(this.activeSlideIndex);

      this._activeSlide(this.activeSlideIndex);

      var screenRef = this.screenRefs[this.activeSlideIndex];

      this._initTimer({
        delay: (_screenRef$screen$dur = screenRef === null || screenRef === void 0 ? void 0 : (_screenRef$screen = screenRef.screen) === null || _screenRef$screen === void 0 ? void 0 : _screenRef$screen.duration) !== null && _screenRef$screen$dur !== void 0 ? _screenRef$screen$dur : this.delay
      });

      if (this.options.autoplay) {
        this.timer.start();
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      if (this.activeSlideIndex === 0) return;

      this._active(this.activeSlide - 1);
    }
  }, {
    key: "next",
    value: function next() {
      if (this.activeSlideIndex === this.slideCount - 1) {
        this.timer.stop();
        return;
      } 

      this._active(this.activeSlide + 1);
    }
  }, {
    key: "addScreen",
    value: function addScreen(screen, index) {
      var screenRef = {
        first: true,
        screen: screen
      };

      if (isNaN(+index)) {
        this.screenRefs.push(screenRef);
      } else {
        this.screenRefs[index] = screenRef;
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.timer.pause();

      if (this.paginationAnim) {
        this.paginationAnim.pause();
      }
    }
  }, {
    key: "start",
    value: function start() {
      this.timer.start();

      if (this.paginationAnim && !this.paginationAnimFinished) {
        this.paginationAnim.play();
      }
    }
  }, {
    key: "_active",
    value: function _active(slide) {
      var _screenRef$screen$dur2, _screenRef$screen2;

      if (slide === this.activeSlide || this.turnAnimating) return;
      var slideIndex = slide - 1;

      this._activePagination(slideIndex);

      this._activeSlide(slideIndex, slideIndex > this.activeSlideIndex);

      this.activeSlide = slide;
      var screenRef = this.screenRefs[this.activeSlideIndex];
      this.timer.delay = (_screenRef$screen$dur2 = screenRef === null || screenRef === void 0 ? void 0 : (_screenRef$screen2 = screenRef.screen) === null || _screenRef$screen2 === void 0 ? void 0 : _screenRef$screen2.duration) !== null && _screenRef$screen$dur2 !== void 0 ? _screenRef$screen$dur2 : this.delay;
      this.timer.reset();

      if (this.options.autoplay) {
        this.timer.start();
      } else {
        this.timer.stop();
      }
    }
    /**
     * @param {number} index 
     * @param {boolean} direction true 為 next, false 為 prev
     */

  }, {
    key: "_activeSlide",
    value: function _activeSlide(index) {
      var _this = this,
          _activeScreenRef$scre,
          _activeScreenRef$scre2;

      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var prevIndex = direction ? index - 1 : index + 1;
      var $prevSlide = this.$slides.eq(prevIndex);
      var $prevSlides = this.$slides.filter(function (i) {
        return i < index;
      });
      var prevScreenRef = this.screenRefs[prevIndex];
      var $activeSlide = this.$slides.eq(index);
      var activeScreenRef = this.screenRefs[index];
      this.turnAnimating = true;
      $prevSlides.addClass('is-active');
      $activeSlide.addClass('is-active');

      if ($prevSlide && !direction) {
        $prevSlide.off('transitionend.stage').on('transitionend.stage', function () {
          var _this$prevScreenRef;

          _this.turnAnimating = false;
          (_this$prevScreenRef = _this.prevScreenRef) === null || _this$prevScreenRef === void 0 ? void 0 : _this$prevScreenRef.screen.leaveTransitionEnd(direction);
          activeScreenRef === null || activeScreenRef === void 0 ? void 0 : activeScreenRef.screen.enterTransitionEnd(direction);
        }).removeClass('is-active');
      }

      prevScreenRef === null || prevScreenRef === void 0 ? void 0 : prevScreenRef.screen.leave(direction);
      activeScreenRef === null || activeScreenRef === void 0 ? void 0 : (_activeScreenRef$scre = activeScreenRef.screen) === null || _activeScreenRef$scre === void 0 ? void 0 : (_activeScreenRef$scre2 = _activeScreenRef$scre.enter) === null || _activeScreenRef$scre2 === void 0 ? void 0 : _activeScreenRef$scre2.call(_activeScreenRef$scre, direction, activeScreenRef.first, activeScreenRef.first);

      if (direction) {
        if (this.firstInit) {
          activeScreenRef === null || activeScreenRef === void 0 ? void 0 : activeScreenRef.screen.enterTransitionEnd(direction, activeScreenRef.first);
          activeScreenRef.first = false;
          this.turnAnimating = false;
          this.firstInit = false;
        } else {
          $activeSlide.off('transitionend.stage').on('transitionend.stage', function () {
            _this.turnAnimating = false;

            if (activeScreenRef) {
              activeScreenRef === null || activeScreenRef === void 0 ? void 0 : activeScreenRef.screen.enterTransitionEnd(direction, activeScreenRef.first);
              activeScreenRef.first = false;
            }

            if (direction) {
              prevScreenRef === null || prevScreenRef === void 0 ? void 0 : prevScreenRef.screen.leaveTransitionEnd(direction);
            }
          });
        }
      }
    }
  }, {
    key: "_activePagination",
    value: function _activePagination(index) {
      var _screenRef$screen$dur3,
          _screenRef$screen3,
          _this2 = this;

      if (this.paginationAnim) {
        this.paginationAnim.kill();
      }

      var screenRef = this.screenRefs[index];
      var delay = (_screenRef$screen$dur3 = screenRef === null || screenRef === void 0 ? void 0 : (_screenRef$screen3 = screenRef.screen) === null || _screenRef$screen3 === void 0 ? void 0 : _screenRef$screen3.duration) !== null && _screenRef$screen$dur3 !== void 0 ? _screenRef$screen$dur3 : this.delay;
      var $prevSliders = this.$paginitionItems.filter(function (i) {
        return i < index;
      }).find('.c-sliderPagination__itemSlider');
      var $afterSliders = this.$paginitionItems.filter(function (i) {
        return i >= index;
      }).find('.c-sliderPagination__itemSlider');
      var $activeSlider = this.$paginitionItems.eq(index).find('.c-sliderPagination__itemSlider');
      $prevSliders.css('transform', 'translateX(0)');
      $afterSliders.css('transform', 'translateX(-100%)');
      this.paginationAnimFinished = false;
      this.paginationAnim = gsap.fromTo($activeSlider[0], {
        x: '-100%'
      }, {
        x: 0,
        duration: delay / 1000,
        ease: 'none',
        onComplete: function onComplete() {
          _this2.paginationAnimFinished = true;
        }
      });
    }
  }, {
    key: "_bindEl",
    value: function _bindEl() {
      var _this3 = this;

      this.$el = $(this.el);
      this.$mask = this.$el.find('.c-sliderMask');
      this.$mask.find('.c-sliderMask__left').on('click', function (e) {
        _this3.prev();
      });
      this.$mask.find('.c-sliderMask__right').on('click', function (e) {
        _this3.next();
      });
      this.$el.on('pointerdown', function (e) {
        _this3.pause();
      });
      this.$el.on('pointerup', function (e) {
        if (_this3.options.autoplay) {
          _this3.start();
        }
      });
      this.$slides = this.$el.find('.c-slider__wrapper').first().find('.c-slider__slide');
      this.slideCount = this.$slides.length;
      this.$paginition = this.$el.find('.c-sliderPagination');

      for (var i = 0; i < this.slideCount; i++) {
        this.$paginition.append("\n                <div class=\"c-sliderPagination__item\">\n                    <div class=\"c-sliderPagination__itemSlider\"></div>\n                </div>\n            ");
      }

      this.$paginitionItems = this.$paginition.find('.c-sliderPagination__item');
    }
  }, {
    key: "_bindGesture",
    value: function _bindGesture() {
      var _this4 = this;

      this.hammertime = new Hammer.Manager(this.$el[0], {
        recognizers: [[Hammer.Pan], [Hammer.Press]]
      });
      this.hammertime.on('pan', function (ev) {
        if (ev.distance < 10 || Math.abs(ev.velocity) < 0.3) return;

        switch (ev.direction) {
          case Hammer.DIRECTION_LEFT:
            _this4.next();

            _this4.timer.reset();

            _this4.hammertime.stop();

            break;

          case Hammer.DIRECTION_RIGHT:
            _this4.prev();

            _this4.timer.reset();

            _this4.hammertime.stop();

            break;
        }
      });
    }
  }, {
    key: "_initTimer",
    value: function _initTimer(options) {
      var _this5 = this;

      this.timer = new PageChangeTimer(options);
      this.timer.onTimeout(function () {
        _this5.next();
      });
    }
  }]);

  return Stage;
}();

var PageChangeTimer = /*#__PURE__*/function () {
  "use strict";

  function PageChangeTimer(options) {
    _classCallCheck(this, PageChangeTimer);

    this.time = 0;
    this.intervalId = null;
    this.listeners = [];
    this.delay = options === null || options === void 0 ? void 0 : options.delay;
  }

  _createClass(PageChangeTimer, [{
    key: "start",
    value: function start() {
      var _this6 = this;

      if (this.frameId) return;
      var prevTimestamp;

      var run = function run() {
        _this6.frameId = requestAnimationFrame(function (timestamp) {
          if (!prevTimestamp) {
            prevTimestamp = timestamp;
          }

          _this6.time += timestamp - prevTimestamp;

          if (_this6.time >= _this6.delay) {
            _this6.time = 0;

            _this6._callListeners();
          }

          prevTimestamp = timestamp;
          run();
        });
      };

      run();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.pause();
      this.time = 0;
    }
  }, {
    key: "pause",
    value: function pause() {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.time = 0;
    }
  }, {
    key: "onTimeout",
    value: function onTimeout(cb) {
      this.listeners.push(cb);
    }
  }, {
    key: "_callListeners",
    value: function _callListeners() {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      this.listeners.forEach(function (cb) {
        return cb.apply(void 0, params);
      });
    }
  }]);

  return PageChangeTimer;
}();