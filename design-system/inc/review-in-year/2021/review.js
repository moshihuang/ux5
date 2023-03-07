$(function () {
  $('#main-stage').height(window.innerHeight);
  var mainStage = new Stage('#main-stage', {
    delay: 15000,
    autoplay: true,
    activeSlide: 1
  });
  mainStage.addScreen(new Screen1());
  mainStage.addScreen(new Screen2());
  mainStage.addScreen(new Screen3());
  mainStage.addScreen(new Screen4());
  mainStage.addScreen(new Screen5());
  mainStage.addScreen(new Screen6()); // Screen7 start
  // 依實際資料則一載入，陣列資料順序 [登入, 投資, 刷卡, ATM]
  // 登入

  // 資料變數於 general-ag029-020 套用
  // 故此變數無效
  mainStage.addScreen(new Screen7_1({
    chartData: [5, 4, 3, 2]
  })); // ATM
  // mainStage.addScreen(new Screen7_2({
  //     chartData: [1, 2, 3, 4]
  // }));
  // 刷卡
  // mainStage.addScreen(new Screen7_3({
  //     chartData: [3, 2, 5, 4]
  // }));
  // 投資
  // mainStage.addScreen(new Screen7_4({
  //     chartData: [3, 4, 1, 2]
  // }));
  // Screen7 end

  mainStage.addScreen(new Screen8()); // 判斷圖片是否載入完成
  // 如果超過 4 秒仍未完成就會直接開始

  checkImgLoaded(4000).then(function () {
    mainStage.init();
    document.dispatchEvent(new CustomEvent("initReviewStage", { detail: { stage: mainStage }} ));
  });
});
var fadeInTextTransConfig = {
  opacity: 1,
  duration: 0.85,
  ease: 'sine.inOut'
};

var ScreenBase = /*#__PURE__*/function () {
  "use strict";

  function ScreenBase() {
    _classCallCheck(this, ScreenBase);
  }

  _createClass(ScreenBase, [{
    key: "play",
    value: function play() {
      var _this$tl;

      (_this$tl = this.tl) === null || _this$tl === void 0 ? void 0 : _this$tl.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      var _this$tl2;

      (_this$tl2 = this.tl) === null || _this$tl2 === void 0 ? void 0 : _this$tl2.pause();
    }
  }, {
    key: "enter",
    value: function enter(direction, first) {}
  }, {
    key: "enterTransitionEnd",
    value: function enterTransitionEnd(direction, first) {
      if (!this.finished) {
        this.play();
      }
    }
  }, {
    key: "leave",
    value: function leave() {
      this.pause();
    }
  }, {
    key: "leaveTransitionEnd",
    value: function leaveTransitionEnd(direction) {}
  }]);

  return ScreenBase;
}();

var Screen1 = /*#__PURE__*/function (_ScreenBase) {
  "use strict";

  _inherits(Screen1, _ScreenBase);

  var _super = _createSuper(Screen1);

  function Screen1() {
    var _this;

    _classCallCheck(this, Screen1);

    _this = _super.call(this);
    var images = [{
      el: 'main',
      left: '-79px',
      top: '539px',
      width: '479px'
    }, {
      el: 'main-shadow',
      opacity: 0,
      left: '-79px',
      top: '539px',
      width: '479px'
    }, {
      el: 'light',
      left: '-108px',
      top: '63px',
      zIndex: '100',
      width: '388px',
      '-webkit-mask': 'radial-gradient(circle at left top, #fff var(--light-gradient-start), transparent calc(var(--light-gradient-start) + 20%))',
      mask: 'radial-gradient(circle at left top, #fff var(--light-gradient-start), transparent calc(var(--light-gradient-start) + 20%))',
      vars: {
        '--light-gradient-start': '-20%'
      }
    }, {
      el: 'year',
      left: '242px',
      top: '552px',
      width: '108px',
      '-webkit-mask': 'radial-gradient(circle at left top, #fff var(--year-gradient-start), transparent calc(var(--year-gradient-start) + 20%))',
      mask: 'radial-gradient(circle at left top, #fff var(--year-gradient-start), transparent calc(var(--year-gradient-start) + 20%))',
      vars: {
        '--year-gradient-start': '-20%'
      }
    }, {
      el: 'slogan',
      left: '202px',
      top: '578px',
      width: '118px',
      '-webkit-mask': 'linear-gradient(135deg, #fff var(--slogan-gradient-start), transparent calc(var(--slogan-gradient-start) + 20%))',
      mask: 'linear-gradient(135deg,#fff var(--slogan-gradient-start),transparent calc(var(--slogan-gradient-start) + 20%))',
      vars: {
        '--slogan-gradient-start': '-20%'
      }
    }];
    setAnimElProps('#screen1', images, {
      position: 'absolute'
    });
    _this.tl = gsap.timeline({
      paused: true,
      onComplete: function onComplete() {
        _this.finished = true;
      }
    });

    _this.tl.to(animSelector('#screen1', 'light'), {
      '--light-gradient-start': '100%',
      duration: 4
    }).add(gsap.timeline().to(animSelector('#screen1', 'year'), {
      '--year-gradient-start': '100%',
      duration: 2
    }).to(animSelector('#screen1', 'slogan'), {
      '--slogan-gradient-start': '100%',
      duration: 2
    }, '<').to(animSelector('#screen1', 'main-shadow'), {
      opacity: 1,
      duration: 2
    }, '<'), '-=3');

    return _this;
  }

  return Screen1;
}(ScreenBase);

var Screen2 = /*#__PURE__*/function (_ScreenBase2) {
  "use strict";

  _inherits(Screen2, _ScreenBase2);

  var _super2 = _createSuper(Screen2);

  function Screen2() {
    var _this2;

    _classCallCheck(this, Screen2);

    _this2 = _super2.call(this);
    hideText('#screen2', 3);
    $('#bubble1, #bubble2, #bubble3').css('opacity', '0');
    var bubble3Tl = gsap.timeline().fromTo('#bubble3', {
      opacity: 0,
      scale: 0.7
    }, {
      opacity: 0.75,
      scale: 1,
      duration: 0.9
    }).to('#bubble3', {
      x: '-=1',
      y: '-=8',
      duration: 0.9
    }, '<');
    var bubble1Tl = gsap.timeline().to('#bubble1', {
      x: '+=1',
      y: '-=3',
      duration: 0.75
    }).fromTo('#bubble1', {
      opacity: 0,
      scale: 0.3
    }, {
      opacity: 0.75,
      scale: 1,
      duration: 0.75
    }, '<');
    var bubbleTl = gsap.timeline().to('#bubble2', {
      x: '-=2',
      y: '-=4',
      duration: 0.75
    }).fromTo('#bubble2', {
      opacity: 0,
      scale: 0.7
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.75
    }, '<').add(bubble1Tl, '-=0.5').add(bubble3Tl, '-=.5');
    var cheersTl = gsap.timeline().set('#left-hand', {
      rotate: -4.5
    }).set('#right-hand', {
      rotate: 4.5
    }).fromTo('#left-hand', {
      x: -240
    }, {
      x: -5,
      duration: 1.1
    }).fromTo('#right-hand', {
      x: 240
    }, {
      x: 5,
      duration: 1.1
    }, '<').fromTo('#left-hand', {
      rotate: -4.5,
      x: -5
    }, {
      rotate: 0,
      x: 0,
      duration: 0.6,
      ease: 'back.out(3)'
    }).fromTo('#right-hand', {
      rotate: 4.5,
      x: 5
    }, {
      rotate: 0,
      x: 0,
      duration: 0.6,
      ease: 'back.out(3)'
    }, '<');
    _this2.tl = gsap.timeline({
      paused: true,
      onComplete: function onComplete() {
        _this2.finished = true;
      }
    });

    _this2.tl.to(animSelector('#screen2', 'text1'), fadeInTextTransConfig).to(animSelector('#screen2', 'text2'), fadeInTextTransConfig, '+=.3').to(animSelector('#screen2', 'text3'), fadeInTextTransConfig, '+=.3').add(cheersTl).add(bubbleTl);

    $('#left-hand').css('transform-origin', 'left bottom').css('transform', 'translateX(-100%)');
    $('#right-hand').css('transform-origin', 'right bottom').css('transform', 'translateX(100%)');
    return _this2;
  }

  return Screen2;
}(ScreenBase);

var Screen3 = /*#__PURE__*/function (_ScreenBase3) {
  "use strict";

  _inherits(Screen3, _ScreenBase3);

  var _super3 = _createSuper(Screen3);

  function Screen3() {
    var _this3;

    _classCallCheck(this, Screen3);

    _this3 = _super3.call(this);
    var images = [// radiation
    {
      el: 'radiation',
      top: '102px',
      left: '106px',
      width: '336px',
      '-webkit-mask': 'radial-gradient(circle at 150px bottom,#fff var(--radiation-mask-size),transparent calc(var(--radiation-mask-size) + 5%))',
      'mask': 'radial-gradient(circle at 150px bottom,#fff var(--radiation-mask-size),transparent calc(var(--radiation-mask-size) + 5%))',
      vars: {
        '--radiation-mask-size': '-5%'
      }
    }, // hands
    {
      el: 'left-hand',
      top: '67px',
      left: '-51px',
      width: '300px'
    }, {
      el: 'right-hand',
      top: '295px',
      left: '281px',
      width: '284px'
    }, // lightnings
    {
      el: 'lightning1',
      top: '242px',
      left: '242px',
      width: '24px',
      opacity: '0',
      // transform: 'scale(0)',
      transformOrigin: 'right bottom'
    }, {
      el: 'lightning2',
      top: '256px',
      left: '271px',
      width: '24px',
      opacity: '0',
      // transform: 'scale(0)',
      transformOrigin: 'left bottom'
    }, // coins
    {
      el: 'coin1',
      top: '210px',
      left: '258px',
      width: '44px',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: '14px 36px'
    }, {
      el: 'coin2',
      top: '177px',
      left: '223px',
      width: '34px',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: '25px bottom'
    }, {
      el: 'coin3',
      top: '170px',
      left: '212px',
      width: '27px',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: '25px bottom'
    }, {
      el: 'coin4',
      top: '154px',
      left: '304px',
      width: '32px',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: '6px bottom'
    }, {
      el: 'coin5',
      top: '174px',
      left: '317px',
      width: '28px',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: '2px bottom'
    }, {
      el: 'coin6',
      top: '117px',
      left: '330px',
      width: '26px',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: '3px bottom'
    }, {
      el: 'coin-back1',
      top: '145px',
      left: '280px',
      width: '24px',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: '5px bottom'
    }, {
      el: 'coin-back2',
      top: '222px',
      left: '381px',
      width: '20px',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: '0 12px'
    }, {
      el: 'coin-back3',
      top: '119px',
      left: '154px',
      width: '25px',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: '20px bottom'
    }, {
      el: 'coin-back4',
      top: '130px',
      left: '404px',
      width: '30px',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: '1px 25px'
    }, {
      el: 'coin-back5',
      top: '76px',
      left: '300px',
      width: '22px',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: '7px bottom'
    }];
    setAnimElProps('#screen3', images, {
      position: 'absolute'
    });
    hideText('#screen3', 2);
    _this3.tl = gsap.timeline({
      paused: true
    });

    _this3.tl.to(animSelector('#screen3', 'text1'), fadeInTextTransConfig).add(gsap.timeline().to(animSelector('#screen3', 'left-hand'), {
      x: 16,
      y: 8,
      duration: .75,
      ease: CustomEase.create('custom', 'M0,0,C0.084,0.244,0.486,0.973,0.742,1.042,0.824,1.064,0.916,1.07,1,1')
    }).to(animSelector('#screen3', 'right-hand'), {
      x: -16,
      y: -8,
      duration: .75,
      ease: CustomEase.create('custom', 'M0,0,C0.084,0.244,0.486,0.973,0.742,1.042,0.824,1.064,0.916,1.07,1,1')
    }, '<'), '<').add(gsap.timeline({}).to(animSelector('#screen3', 'lightning1'), {
      opacity: 1,
      duration: 0.1
    }).to(animSelector('#screen3', 'lightning1'), {
      scale: 1,
      y: 4,
      duration: 0.1,
      ease: CustomEase.create('custom', 'M0,0,C0,0,0.158,0.5,0.158,0.5,0.158,0.5,0.318,-0.478,0.318,-0.478,0.318,-0.478,0.548,0.5,0.548,0.5,0.548,0.5,0.764,-0.484,0.764,-0.484,0.764,-0.484,0.884,0.486,0.884,0.486,0.884,0.486,1,0,1,0')
    }, '<').to(animSelector('#screen3', 'lightning2'), {
      opacity: 1,
      duration: 0.05
    }, '<+=0.01').to(animSelector('#screen3', 'lightning2'), {
      scale: 1,
      y: 7,
      duration: 0.05,
      ease: CustomEase.create('custom', 'M0,0,C0,0,0.158,0.5,0.158,0.5,0.158,0.5,0.318,-0.478,0.318,-0.478,0.318,-0.478,0.548,0.5,0.548,0.5,0.548,0.5,0.764,-0.484,0.764,-0.484,0.764,-0.484,0.884,0.486,0.884,0.486,0.884,0.486,1,0,1,0')
    }, '<'), '-=0.25').to(animSelector('#screen3', 'radiation'), {
      '--radiation-mask-size': '100%',
      duration: 2
    }, '<').add(gsap.timeline().to(animSelector('#screen3', 'coin1'), {
      opacity: 1,
      scale: 1,
      duration: .2
    }, '.15').to(animSelector('#screen3', 'coin2'), {
      opacity: 1,
      scale: 1,
      duration: .1
    }, '.3').to(animSelector('#screen3', 'coin3'), {
      opacity: 1,
      scale: 1,
      duration: .1
    }, '.35').to(animSelector('#screen3', 'coin5'), {
      opacity: 1,
      scale: 1,
      duration: .1
    }, '.45').to(animSelector('#screen3', 'coin4'), {
      opacity: 1,
      scale: 1,
      duration: .15
    }, '.47').to(animSelector('#screen3', 'coin-back1'), {
      opacity: 1,
      scale: 1,
      duration: .15
    }, '.5').to(animSelector('#screen3', 'coin-back2'), {
      opacity: 1,
      scale: 1,
      duration: .1
    }, '.5').to(animSelector('#screen3', 'coin-back3'), {
      opacity: 1,
      scale: 1,
      duration: .1
    }, '.65').to(animSelector('#screen3', 'coin6'), {
      opacity: 1,
      scale: 1,
      duration: .1
    }, '.65').to(animSelector('#screen3', 'coin-back4'), {
      opacity: 1,
      scale: 1,
      duration: .2
    }, '.75').to(animSelector('#screen3', 'coin-back5'), {
      opacity: 1,
      scale: 1,
      duration: .1
    }, '.85'), '<').to(animSelector('#screen3', 'text2'), fadeInTextTransConfig, '-=.9');

    return _this3;
  }

  return Screen3;
}(ScreenBase);

var Screen4 = /*#__PURE__*/function (_ScreenBase4) {
  "use strict";

  _inherits(Screen4, _ScreenBase4);

  var _super4 = _createSuper(Screen4);

  function Screen4() {
    var _this4;

    _classCallCheck(this, Screen4);

    _this4 = _super4.call(this);
    hideText('#screen4', 2);
    $('#anchor').css('opacity', '0');
    var $anchor = $('#anchor');
    var images = [{
      el: 'planet1',
      width: '250px',
      top: 'calc(50% + 50px)',
      left: '-59px'
    }, {
      el: 'planet2',
      width: '130px',
      top: '50%',
      left: '328px'
    }, {
      el: 'comet2',
      width: '5px',
      left: '-5px',
      top: '350px'
    }, {
      el: 'constellation',
      width: '350px',
      top: 'calc(50% - 360px)',
      left: '74px'
    }, {
      el: 'ground1',
      left: '234px',
      top: '182px',
      zIndex: 2,
      width: '86px'
    }, {
      el: 'ground2',
      left: '252px',
      top: '204px',
      zIndex: 4,
      width: '20px'
    }, {
      el: $anchor.clone(),
      left: '180px',
      top: '242px',
      zIndex: 5,
      width: '21px',
      transformOrigin: 'center bottom',
      transform: 'rotate(-1deg)',
      data: {
        anim: 'anchor'
      }
    }, {
      el: $anchor.clone(),
      left: '324px',
      top: '149px',
      width: '17px',
      transformOrigin: 'center bottom',
      transform: 'rotate(-3deg)',
      data: {
        anim: 'anchor'
      }
    }, {
      el: $anchor.clone(),
      top: '220px',
      left: '231px',
      width: '23px',
      transformOrigin: 'center bottom',
      data: {
        anim: 'anchor'
      }
    }, {
      el: $anchor.clone(),
      left: '253px',
      top: '182px',
      zIndex: 3,
      width: '25px',
      transformOrigin: 'center bottom',
      transform: 'rotate(-2deg)',
      data: {
        anim: 'anchor'
      }
    }, {
      el: $anchor.clone(),
      left: '196px',
      top: '177px',
      width: '29px',
      transformOrigin: 'center bottom',
      transform: 'rotate(-2deg)',
      data: {
        anim: 'anchor'
      }
    }, {
      el: $anchor.clone(),
      left: '292px',
      top: '154px',
      zIndex: 1,
      width: '34px',
      transformOrigin: 'center bottom',
      data: {
        anim: 'anchor'
      }
    }];
    setAnimElProps('#screen4', images, {
      position: 'absolute'
    }).forEach(function ($el) {
      if ($el.data('anim') === 'anchor' || $el.data('anim') === 'ground') {
        $el.appendTo('#screen4 .c-reviewCard__mainImg');
      }
    });
    _this4.tl = gsap.timeline({
      paused: true,
      onComplete: function onComplete() {
        _this4.finished = true;
      }
    }).addLabel('start').to(animSelector('#screen4', 'text1'), _objectSpread({}, fadeInTextTransConfig)).to(animSelector('#screen4', 'text2'), _objectSpread({}, fadeInTextTransConfig), '+=0.5').add(gsap.timeline().fromTo(animSelector('#screen4', 'anchor'), {
      opacity: 0,
      scaleY: 0,
      scaleX: 0.5
    }, {
      opacity: 1,
      scaleY: 1,
      scaleX: 1,
      duration: 0.35,
      ease: 'back.out(2)',
      stagger: function stagger(index, target, list) {
        return 2 - 2 / Math.pow(1.7, index);
      }
    }), 'start+=1.4').to(animSelector('#screen4', 'comet1'), {
      duration: 3,
      ease: 'none',
      motionPath: {
        path: [{
          x: 800,
          y: 90
        }],
        relative: true,
        autoRotate: true
      }
    }, 'start').to([animSelector('#screen4', 'comet2')], {
      duration: 3,
      ease: 'none',
      motionPath: {
        path: [{
          x: 800,
          y: 90
        }],
        relative: true,
        autoRotate: true
      }
    }, 'start+=1.2').to(animSelector('#screen4', 'comet3'), {
      duration: 4,
      motionPath: {
        path: [{
          x: 800,
          y: 220
        }],
        relative: true,
        autoRotate: true
      }
    }, 'start+=.5');
    return _this4;
  }

  return Screen4;
}(ScreenBase);

var Screen5 = /*#__PURE__*/function (_ScreenBase5) {
  "use strict";

  _inherits(Screen5, _ScreenBase5);

  var _super5 = _createSuper(Screen5);

  function Screen5() {
    var _this5;

    _classCallCheck(this, Screen5);

    _this5 = _super5.call(this);
    hideText('#screen5', 3);
    $('#card-bubble').css('opacity', '0');
    $('#card-bubble').css('transform-origin', 'right top');
    _this5.tl = gsap.timeline({
      paused: true
    });

    _this5.tl.to(animSelector('#screen5', 'text1'), _objectSpread({}, fadeInTextTransConfig)).to(animSelector('#screen5', 'text2'), _objectSpread(_objectSpread({}, fadeInTextTransConfig), {}, {
      duration: 0.35
    }), '+=.35').fromTo('#card-bubble', {
      opacity: 0,
      scale: 0.3
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.35,
      ease: 'back.out(2)'
    }, '-=.2').to(animSelector('#screen5', 'text3'), _objectSpread({}, fadeInTextTransConfig), '+=.35');

    return _this5;
  }

  return Screen5;
}(ScreenBase);

var Screen6 = /*#__PURE__*/function (_ScreenBase6) {
  "use strict";

  _inherits(Screen6, _ScreenBase6);

  var _super6 = _createSuper(Screen6);

  function Screen6() {
    var _this6;

    _classCallCheck(this, Screen6);

    _this6 = _super6.call(this);
    hideText('#screen6', 3);
    var flowerAnim = bodymovin.loadAnimation({
      container: document.querySelector('#screen6 .c-reviewCard__mainImg'),
      // Required
      path: './inc/review-in-year/2021/images/page6/flower.json',
      // Required
      renderer: 'svg',
      // Required
      autoplay: false,
      loop: false,
      name: 'flower'
    });
    _this6.tl = gsap.timeline({
      paused: true,
      onComplete: function onComplete() {
        _this6.finished = true;
      }
    });

    _this6.tl.to(animSelector('#screen6', 'text1'), _objectSpread({}, fadeInTextTransConfig)).to(animSelector('#screen6', 'text2'), _objectSpread({}, fadeInTextTransConfig), '+=.85').call(function () {
      flowerAnim.play();
    }).to(animSelector('#screen6', 'text3'), _objectSpread({}, fadeInTextTransConfig), '+=.35');

    return _this6;
  }

  return Screen6;
}(ScreenBase);

var Screen7_base = /*#__PURE__*/function (_ScreenBase7) {
  "use strict";

  _inherits(Screen7_base, _ScreenBase7);

  var _super7 = _createSuper(Screen7_base);

  function Screen7_base() {
    var _this7;

    _classCallCheck(this, Screen7_base);

    _this7 = _super7.call(this);
    _this7.shareBtn = document.querySelector('#shareBtn');
    _this7.btnInsideContainer = document.querySelector('#shareBtnInside');
    _this7.btnOutsideContainer = document.querySelector('#shareBtnOutside');
    return _this7;
  }

  _createClass(Screen7_base, [{
    key: "enterTransitionEnd",
    value: function enterTransitionEnd() {
      var _this8 = this;

      requestAnimationFrame(function () {
        var _this8$shareBtn$getBo = _this8.shareBtn.getBoundingClientRect(),
            top = _this8$shareBtn$getBo.top,
            left = _this8$shareBtn$getBo.left;

        $(_this8.btnOutsideContainer).css('top', top + 'px').css('left', left + 'px').append(_this8.shareBtn);

        _get(_getPrototypeOf(Screen7_base.prototype), "enterTransitionEnd", _this8).call(_this8);
      });
    }
  }, {
    key: "leave",
    value: function leave() {
      _get(_getPrototypeOf(Screen7_base.prototype), "leave", this).call(this);

      this.btnInsideContainer.appendChild(this.shareBtn);
    }
  }]);

  return Screen7_base;
}(ScreenBase);
/**
 * 登入
 */


var Screen7_1 = /*#__PURE__*/function (_Screen7_base) {
  "use strict";

  _inherits(Screen7_1, _Screen7_base);

  var _super8 = _createSuper(Screen7_1);

  function Screen7_1(_ref) {
    var _this9;

    var chartData = _ref.chartData;

    _classCallCheck(this, Screen7_1);

    _this9 = _super8.call(this);
    _this9.chartData = chartData;
    setAnimElProps('#screen7_1', [{
      el: 'text1',
      transform: 'translateY(-10px)'
    }, {
      el: 'share-btn'
    }, {
      el: 'chart'
    }], {
      opacity: 0
    });
    _this9.tl = gsap.timeline({
      paused: true,
      onComplete: function onComplete() {
        _this9.finished = true;
      }
    }).call(function () {
      createPolarChart('chart7_1', _this9.chartData);
    }, null).to(animSelector('#screen7_1', 'chart'), {
      opacity: 1,
      duration: 1.5
    }).to(animSelector('#screen7_1', 'text1'), _objectSpread(_objectSpread({}, fadeInTextTransConfig), {}, {
      y: '+=10'
    }), '+=.2').set(animSelector('#screen7_1', 'share-btn'), {
      y: 15
    }, '<').to(animSelector('#screen7_1', 'share-btn'), {
      opacity: 1,
      y: '-=15',
      duration: fadeInTextTransConfig.duration
    }, '<');
    return _this9;
  }

  return Screen7_1;
}(Screen7_base);
/**
 * ATM
 */


var Screen7_2 = /*#__PURE__*/function (_Screen7_base2) {
  "use strict";

  _inherits(Screen7_2, _Screen7_base2);

  var _super9 = _createSuper(Screen7_2);

  function Screen7_2(_ref2) {
    var _this10;

    var chartData = _ref2.chartData;

    _classCallCheck(this, Screen7_2);

    _this10 = _super9.call(this);
    _this10.chartData = chartData;
    setAnimElProps('#screen7_2', [{
      el: 'text1',
      transform: 'translateY(-10px)'
    }, {
      el: 'share-btn'
    }, {
      el: 'chart'
    }], {
      opacity: 0
    });
    _this10.tl = gsap.timeline({
      paused: true,
      onComplete: function onComplete() {
        _this10.finished = true;
      }
    }).call(function () {
      createPolarChart('chart7_2', _this10.chartData);
    }, null).to(animSelector('#screen7_2', 'chart'), {
      opacity: 1,
      duration: 1.5
    }).to(animSelector('#screen7_2', 'text1'), _objectSpread(_objectSpread({}, fadeInTextTransConfig), {}, {
      y: '+=10'
    }), '+=.4').set(animSelector('#screen7_2', 'share-btn'), {
      y: 15
    }, '<').to(animSelector('#screen7_2', 'share-btn'), {
      opacity: 1,
      y: '-=15',
      duration: fadeInTextTransConfig.duration
    }, '<');
    return _this10;
  }

  return Screen7_2;
}(Screen7_base);
/**
 * 刷卡
 */


var Screen7_3 = /*#__PURE__*/function (_Screen7_base3) {
  "use strict";

  _inherits(Screen7_3, _Screen7_base3);

  var _super10 = _createSuper(Screen7_3);

  function Screen7_3(_ref3) {
    var _this11;

    var chartData = _ref3.chartData;

    _classCallCheck(this, Screen7_3);

    _this11 = _super10.call(this);
    _this11.chartData = chartData;
    setAnimElProps('#screen7_3', [{
      el: 'text1',
      transform: 'translateY(-10px)'
    }, {
      el: 'share-btn'
    }, {
      el: 'chart'
    }], {
      opacity: 0
    });
    _this11.tl = gsap.timeline({
      paused: true,
      onComplete: function onComplete() {
        _this11.finished = true;
      }
    }).call(function () {
      createPolarChart('chart7_3', _this11.chartData);
    }, null).to(animSelector('#screen7_3', 'chart'), {
      opacity: 1,
      duration: 1.5
    }).to(animSelector('#screen7_3', 'text1'), _objectSpread(_objectSpread({}, fadeInTextTransConfig), {}, {
      y: '+=10'
    }), '+=.4').set(animSelector('#screen7_3', 'share-btn'), {
      y: 15
    }, '<').to(animSelector('#screen7_3', 'share-btn'), {
      opacity: 1,
      y: '-=15',
      duration: fadeInTextTransConfig.duration
    }, '<');
    return _this11;
  }

  return Screen7_3;
}(Screen7_base);
/**
 * 投資
 */


var Screen7_4 = /*#__PURE__*/function (_Screen7_base4) {
  "use strict";

  _inherits(Screen7_4, _Screen7_base4);

  var _super11 = _createSuper(Screen7_4);

  function Screen7_4(_ref4) {
    var _this12;

    var chartData = _ref4.chartData;

    _classCallCheck(this, Screen7_4);

    _this12 = _super11.call(this);
    _this12.chartData = chartData;
    setAnimElProps('#screen7_4', [{
      el: 'text1',
      transform: 'translateY(-10px)'
    }, {
      el: 'share-btn'
    }, {
      el: 'chart'
    }], {
      opacity: 0
    });
    _this12.tl = gsap.timeline({
      paused: true,
      onComplete: function onComplete() {
        _this12.finished = true;
      }
    }).call(function () {
      createPolarChart('chart7_4', _this12.chartData);
    }, null).to(animSelector('#screen7_4', 'chart'), {
      opacity: 1,
      duration: 1.5
    }).to(animSelector('#screen7_4', 'text1'), _objectSpread(_objectSpread({}, fadeInTextTransConfig), {}, {
      y: '+=10'
    }), '+=.4').set(animSelector('#screen7_4', 'share-btn'), {
      y: 15
    }, '<').to(animSelector('#screen7_4', 'share-btn'), {
      opacity: 1,
      y: '-=15',
      duration: fadeInTextTransConfig.duration
    }, '<');
    return _this12;
  }

  return Screen7_4;
}(Screen7_base);

var Screen8 = /*#__PURE__*/function (_ScreenBase8) {
  "use strict";

  _inherits(Screen8, _ScreenBase8);

  var _super12 = _createSuper(Screen8);

  function Screen8() {
    var _this13;

    _classCallCheck(this, Screen8);

    _this13 = _super12.call(this);
    hideText('#screen8', 3);

    var firework1 = _this13.createFireworkAnim1();

    firework1.el.setAttribute('transform', 'translate(360 250)');
    firework1.el.setAttribute('opacity', '0.6');
    $('#screen8Svg').append(firework1.el);

    var firework2 = _this13.createFireworkAnim2();

    firework2.el.setAttribute('transform', 'translate(80 420)');
    firework2.el.setAttribute('opacity', '0.6');
    $('#screen8Svg').append(firework2.el);

    var firework3 = _this13.createFireworkAnim3();

    firework3.el.setAttribute('transform', 'translate(400 450) scale(1.5)');
    firework3.el.setAttribute('opacity', '0.6');
    $('#screen8Svg').append(firework3.el);
    _this13.tl = gsap.timeline({
      paused: true,
      onComplete: function onComplete() {
        _this13.finished = true;
      }
    });

    _this13.tl.to(animSelector('#screen8', 'text1'), _objectSpread({}, fadeInTextTransConfig)).to(animSelector('#screen8', 'text2'), _objectSpread({}, fadeInTextTransConfig), '+=0.5').to(animSelector('#screen8', 'text3'), _objectSpread({}, fadeInTextTransConfig), '+=0.5').addLabel('firework').add(gsap.timeline({
      repeat: Infinity,
      repeatDelay: 0.5
    }).add(firework1.anim).add(firework2.anim, '-=2.5').add(firework3.anim, '-=2.5'));

    var bgAnim = bodymovin.loadAnimation({
      container: document.querySelector('#screen8 .c-reviewCard__bg'),
      // Required
      path: './inc/review-in-year/2021/images/page8/bg.json',
      // Required
      renderer: 'svg',
      // Required
      autoplay: true,
      loop: true,
      name: 'bg'
    });
    bgAnim.setSpeed(0.75);
    return _this13;
  }

  _createClass(Screen8, [{
    key: "createFireworkAnim1",
    value: function createFireworkAnim1() {
      var firework = createFirework(32, [{
        length: 30,
        width: 2,
        color: '#d268cc',
        innerRadius: 5,
        clip: {
          width: 50
        }
      }, {
        length: 20,
        width: 2,
        color: '#d268cc',
        innerRadius: 5,
        clip: {
          width: 50
        }
      }, {
        length: 10,
        width: 2,
        color: '#747474',
        innerRadius: 10,
        clip: {
          width: 40
        }
      }, {
        length: 8,
        width: 2,
        color: '#d268cc',
        innerRadius: 5,
        clip: {
          width: 40
        }
      }], {
        getLine: function getLine(index) {
          var loopIndex = index % 8;

          switch (loopIndex) {
            case 0:
              return 0;

            case 1:
              return 3;

            case 2:
              return 2;

            case 3:
              return 3;

            case 4:
              return 1;

            case 5:
              return 3;

            case 6:
              return 2;

            case 7:
              return 3;
          }
        }
      });
      gsap.set(firework.querySelectorAll('[data-firework-fire="0"] line, [data-firework-fire="1"] line, [data-firework-fire="2"] line, [data-firework-fire="3"] line'), {
        x: '-100%',
        opacity: 1
      });
      gsap.set(firework.querySelectorAll('[data-firework-fire="1"] line'), {
        opacity: .75
      });
      var anim = gsap.timeline().add(gsap.timeline().to(firework.querySelectorAll('[data-firework-fire="0"] line'), {
        x: '10',
        ease: 'power1.out',
        duration: 2.5
      })).add(gsap.timeline().to(firework.querySelectorAll('[data-firework-fire="1"] line'), {
        x: '10',
        ease: 'power2.out',
        duration: 2.2
      }), '<+=0.3').to(firework.querySelectorAll('[data-firework-fire="0"] line'), {
        opacity: 0,
        duration: .7,
        ease: 'none'
      }, '-=.7').to(firework.querySelectorAll('[data-firework-fire="1"] line'), {
        opacity: 0,
        duration: .4,
        ease: 'none'
      }, '-=.4').add(gsap.timeline().to(firework.querySelectorAll('[data-firework-fire="2"] line'), {
        x: '14',
        duration: 1.5,
        ease: 'none'
      }).to(firework.querySelectorAll('[data-firework-fire="2"] line'), {
        opacity: 0,
        ease: 'power3.out',
        duration: 1.3
      }, '-=0.2'), '0.5').add(gsap.timeline().to(firework.querySelectorAll('[data-firework-fire="3"] line'), {
        x: '18',
        duration: 1.5,
        ease: 'none'
      }).to(firework.querySelectorAll('[data-firework-fire="3"] line'), {
        opacity: 0,
        ease: 'power3.out',
        duration: 1
      }, '-=0.5'), '1').set(firework, {
        transformOrigin: '50% 50%'
      }, 0).to(firework, {
        rotate: '+=10',
        duration: 3
      }, 0);
      return {
        el: firework,
        anim: anim
      };
    }
  }, {
    key: "createFireworkAnim2",
    value: function createFireworkAnim2() {
      var firework = createFirework(16, [{
        length: 25,
        width: 1.5,
        color: '#d268cc',
        innerRadius: 10,
        clip: {
          width: 35
        }
      }, {
        length: 18,
        width: 1.5,
        color: '#d268cc',
        innerRadius: 8,
        clip: {
          width: 30
        }
      }], {
        getLine: function getLine(index) {
          var loopIndex = index % 4;

          switch (loopIndex) {
            case 0:
              return 0;

            default:
              return 1;
          }
        }
      });
      gsap.set(firework.querySelectorAll('[data-firework-fire="0"] line, [data-firework-fire="1"] line'), {
        x: '-100%',
        opacity: 1
      });
      var anim = gsap.timeline().to(firework.querySelectorAll('[data-firework-fire="0"] line'), {
        x: '4',
        ease: 'power2.out',
        duration: 3
      }).to(firework.querySelectorAll('[data-firework-fire="1"] line'), {
        x: '4',
        ease: 'power3.out',
        duration: 2.5
      }, '<+=0.15').to(firework.querySelectorAll('[data-firework-fire="1"] line, [data-firework-fire="0"] line'), {
        opacity: 0,
        ease: 'power2.out',
        duration: 1
      }, '1.6');
      return {
        el: firework,
        anim: anim
      };
    }
  }, {
    key: "createFireworkAnim3",
    value: function createFireworkAnim3() {
      var firework = createFirework(16, [{
        length: 35,
        width: 1.5,
        color: '#FFCAFF',
        innerRadius: 10,
        clip: {
          width: 35
        }
      }, {
        length: 20,
        width: 1.5,
        color: '#FFCAFF',
        innerRadius: 8,
        clip: {
          width: 30
        }
      }, {
        length: 20,
        width: 1.5,
        color: '#FFCAFF',
        innerRadius: 8,
        clip: {
          width: 30
        }
      }], {
        getLine: function getLine(index) {
          var loopIndex = index % 4;

          switch (loopIndex) {
            case 0:
              return 0;

            case 1:
              return 2;

            case 2:
              return 1;

            case 3:
              return 2;
          }
        }
      });
      gsap.set(firework.querySelectorAll('[data-firework-fire="0"] line, [data-firework-fire="1"] line, [data-firework-fire="2"] line'), {
        x: '-100%',
        opacity: 1
      });
      var anim = gsap.timeline().to(firework.querySelectorAll('[data-firework-fire="0"] line'), {
        x: '6',
        ease: 'power2.out',
        duration: 3
      }).to(firework.querySelectorAll('[data-firework-fire="1"] line, [data-firework-fire="2"] line'), {
        x: '6',
        ease: 'power3.out',
        duration: 2.5
      }, '<+=0.15').to(firework.querySelectorAll('[data-firework-fire="1"] line, [data-firework-fire="0"] line, [data-firework-fire="2"] line'), {
        opacity: 0,
        ease: 'power2.out',
        duration: 1
      }, '1.6');
      return {
        el: firework,
        anim: anim
      };
    }
  }]);

  return Screen8;
}(ScreenBase); // 產生煙火


var fireworkId = 0;

function createFirework(amount, lines) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  fireworkId++;
  var firework = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  var clipPaths = [];

  for (var i = 0; i < lines.length; i++) {
    var _clip$innerRadius, _clip$width;

    var _lines$i = lines[i],
        length = _lines$i.length,
        width = _lines$i.width,
        color = _lines$i.color,
        innerRadius = _lines$i.innerRadius,
        _lines$i$clip = _lines$i.clip,
        clip = _lines$i$clip === void 0 ? {} : _lines$i$clip;
    var clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    clipPath.setAttribute('id', "firework-clip-".concat(fireworkId, "-").concat(i));
    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', (_clip$innerRadius = clip === null || clip === void 0 ? void 0 : clip.innerRadius) !== null && _clip$innerRadius !== void 0 ? _clip$innerRadius : innerRadius);
    rect.setAttribute('y', 0);
    rect.setAttribute('width', (_clip$width = clip === null || clip === void 0 ? void 0 : clip.width) !== null && _clip$width !== void 0 ? _clip$width : length);
    rect.setAttribute('height', width);
    clipPath.appendChild(rect);
    clipPaths.push(clipPath);
    firework.appendChild(clipPath);
  }

  for (var _i = 0; _i < amount; _i++) {
    var lineIndex = options.getLine ? options.getLine(_i) : _i % lines.length;
    var _lines$lineIndex = lines[lineIndex],
        _length = _lines$lineIndex.length,
        _width = _lines$lineIndex.width,
        _color = _lines$lineIndex.color,
        _innerRadius = _lines$lineIndex.innerRadius;
    var _clipPath = clipPaths[lineIndex];
    var angle = 360 / amount * _i;
    var fireWrapper = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    fireWrapper.setAttribute('data-firework-id', "fire-".concat(_i));
    fireWrapper.setAttribute('data-firework-fire', "".concat(lineIndex));
    fireWrapper.setAttribute('clip-path', "url(#".concat(_clipPath.id, ")"));
    fireWrapper.setAttribute('transform', "rotate(".concat(angle, ")"));
    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', _innerRadius);
    line.setAttribute('y1', '0');
    line.setAttribute('x2', _innerRadius + _length);
    line.setAttribute('y2', '0');
    line.setAttribute('stroke', _color);
    line.setAttribute('stroke-width', _width);
    line.setAttribute('stroke-width', _width);
    fireWrapper.appendChild(line);
    firework.appendChild(fireWrapper);
  }

  return firework;
}

function createPolarChart(container, data) {
// 雷達圖效果於 general-ag029-020 套用
//   Highcharts.chart(container, {
//     credits: {
//       enabled: false
//     },
//     chart: {
//       polar: true,
//       spacing: [30, 30, 30, 30],
//       backgroundColor: 'transparent'
//     },
//     title: {
//       text: ''
//     },
//     xAxis: {
//       categories: ['登入', '投資', '刷卡', 'ATM'],
//       tickmarkPlacement: 'on',
//       lineWidth: 0,
//       gridLineWidth: 0,
//       labels: {
//         distance: 10,
//         y: 4,
//         style: {
//           color: '#ff802e',
//           fontSize: '13px',
//           fontWeight: 'bold'
//         },
//         useHTML: true
//       }
//     },
//     yAxis: {
//       labels: {
//         enabled: false
//       },
//       gridLineInterpolation: 'polygon',
//       gridLineWidth: 0,
//       min: 0,
//       max: 5,
//       softMax: 5,
//       endOnTick: false,
//       lineWidth: 0,
//       alternateGridColor: '#fafafa',
//       plotBands: [{
//         from: 0,
//         to: 1,
//         color: '#fff'
//       }, {
//         from: 1,
//         to: 2,
//         color: '#fafafa'
//       }, {
//         from: 2,
//         to: 3,
//         color: '#fff'
//       }, {
//         from: 3,
//         to: 4,
//         color: '#fafafa'
//       }, {
//         from: 4,
//         to: 5,
//         color: '#fff'
//       }],
//       plotLines: [{
//         value: 1,
//         color: '#ddd'
//       }, {
//         value: 2,
//         color: '#bebebe'
//       }, {
//         value: 3,
//         color: '#ddd'
//       }, {
//         value: 4,
//         color: '#bebebe'
//       }]
//     },
//     tooltip: {
//       enabled: false
//     },
//     legend: {
//       enabled: false
//     },
//     series: [{
//       type: 'area',
//       data: data,
//       color: '#ff802e',
//       fillColor: 'rgba(255, 128, 46, 0.25)',
//       pointPlacement: 'on',
//       marker: {
//         fillColor: '#fff',
//         lineColor: null,
//         lineWidth: 1,
//         radius: 3,
//         states: {
//           hover: {
//             enabled: false
//           }
//         }
//       }
//     }]
//   });
}

function animSelector(scope, name) {
  return "".concat(scope, " [data-anim=\"").concat(name, "\"]");
}

function hideText(scope, number) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  for (var i = start; i <= number; i++) {
    $("".concat(scope, " [data-anim=\"text").concat(i, "\"]")).css('opacity', 0);
  }
}

function setAnimElProps(scope) {
  var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return configs.map(function (config) {
    var _defaults$config$vars = _objectSpread(_objectSpread(_objectSpread({}, defaults), config), {}, {
      vars: _objectSpread(_objectSpread({}, defaults.vars), config.vars),
      data: _objectSpread(_objectSpread({}, defaults.data), config.data)
    }),
        el = _defaults$config$vars.el,
        data = _defaults$config$vars.data,
        vars = _defaults$config$vars.vars,
        others = _objectWithoutProperties(_defaults$config$vars, ["el", "data", "vars"]);

    var $el = typeof el === 'string' ? $(animSelector(scope, el)) : $(el);

    if (vars) {
      Object.entries(vars).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            key = _ref6[0],
            value = _ref6[1];

        $el.each(function () {
          this.style.setProperty(key, value);
        });
      });
    }

    if (data) {
      Object.entries(data).forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            key = _ref8[0],
            value = _ref8[1];

        $el.attr("data-".concat(key), value);
      });
    }

    if (others) {
      Object.entries(others).forEach(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            key = _ref10[0],
            value = _ref10[1];

        $el.css(key, value);
      });
    }

    return $el;
  });
}
/**
 * 判斷圖片是否載入完成
 */


function checkImgLoaded() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4000;
  return new Promise(function (resolve) {
    var unloaded = [];
    $('img').each(function () {
      var _this14 = this;

      var isLoaded = this.complete;

      if (!isLoaded) {
        unloaded.push(this.src);

        this.onload = function () {
          unloaded = unloaded.filter(function (url) {
            return url !== _this14.src;
          });

          if (unloaded.length === 0) {
            resolve();
          }
        };
      }
    });

    if (unloaded.length === 0) {
      resolve();
    } else {
      setTimeout(function () {
        resolve();
      }, delay);
    }
  });
}
