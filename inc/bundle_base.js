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

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//依序列下去，確保CSS產生順序
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);

	__webpack_require__(14)

	// 由頁面自行include
	//require('./web/inc/js/base.js');

	// customized datepicker
	__webpack_require__(26);

	// custom keyboard
	__webpack_require__(27);

	// calculator
	// require("./web/inc/js/ibt_calculator/ibt_calculator.js")

	// textAdjustsize
	//require("./web/inc/js/textAdjustSize/textAdjustSize.js");

	// old highchart
	//require("./web/inc/js/old_highchart.js");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./button/button.css": 15,
		"./checkbox/checkbox.css": 16,
		"./datatable/table.css": 17,
		"./datatable/table_rwd.css": 18,
		"./datepicker/datepicker.css": 19,
		"./from/from.css": 20,
		"./radio/radio.css": 21,
		"./rwd_menu/ib_mega_menu.css": 22,
		"./rwd_menu/mb_menu.css": 23,
		"./rwd_menu/mmenu.css": 24,
		"./switch/switch.css": 25
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 14;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	
	// 20221014 有套用 超人卡片的 js (僅備份,不使用)

	// $wrapper (*)     : the wrapper of datepicker input element
	// options          : options for bootstrap datepicker.
	//                     the only exception is that "modalType" is not for bootstrap.
	//                     it specifies the style of popup modal.
	//                     possible options are:
	//                       'noBtn_complex_panel'(default),
	//                       'withBtn_date_only_multiple',   'noBtn_date_only',
	//                       'withBtn_single_panel',         'noBtn_single_panel'.
	//                    NOTICE: in 'noBtn_complex_panel' mode, defaultViewDate option must be Date (not string or anything else).
	// $modal_parent    : the element that modal should be appended to. default: 'body'.
	var datepicker = function($wrapper, options, modal_parent) {
	    if ($wrapper.length == 0) return;
	    if (!options) options = {};
	    if (!modal_parent) modal_parent = 'body';

	    // set default options
	    options.language = options.language || "zh-TW";
	    options.width = options.width || "100%";
	    options.weekStart = options.weekStart || 0;
	    options.modalType = options.modalType || 'noBtn_complex_panel';
	    options.todayHighlight = options.todayHighlight || true;

	    // find targets and attributes
	    var $input = $wrapper.find('input');
	    if (!$input) console.error('datepicker sould be wrapped inside a link element (a).');
	    var input_name = $input.attr('name');
	    if (!input_name) console.error('datepicker input element must has a name.');
	    var modal_id = 'datepicker-modal-' + input_name;
	    var modal_title = $wrapper.attr('modal-title') || '';
	    if (!modal_title) console.warn('datepicker wrapper has no modal-title attribute. default title is ""');

	    // define modal template
	    var template1Front = "";
	    template1Front += "<div id='";
	    var template1 = "";
	    template1 += "' class=\"vi-modal\">";
	    template1 += "    <div class=\"vi-modal-backdrop\" data-dismiss=\"modal\"></div>";
	    template1 += "    <div class=\"super-card\">";
	    template1 += "        <div class=\"super-card-header\">";
	    template1 += "              <div class=\"super-card-header-lt\"></div>";
	    template1 += "              <div class=\"super-card-header-ct\">";
	    template1 += "                  <span class=\"super-card-title\">" + modal_title + "</span>";
	    template1 += "              <\/div>";
	    template1 += "              <div class=\"super-card-header-rt\">";
	    template1 += "                  <button class=\"vi-modal-close\" ontouchstart data-dismiss=\"modal\"></button>";
	    template1 += "              <\/div>";
	    template1 += "        <\/div>";
	    template1 += "        <div class=\"super-card-body\">";
	    template1 += "              <div class=\"vi-datepicker-panel\">";
	    template1 += "          <input class=\"hidden-date\" type=\"text\" style='display: none;'>";
	    template1 += "          <div class = \"ct\">";
	    template1 += "            <div class=\"date form_date\" data-date=\"\" data-date-format=\"yyyy MM dd \" data-link-field=\"dtp_input2\" data-link-format=\"yyyy-mm-dd\">";
	    template1 += "            <\/div>";
	    template1 += "          <\/div>";
	    template1 += "        <\/div>";
	    template1 += "        <div class=\"super-card-footer\">";
	    template1 += "              <div class=\"btn-group btn-group-justified\">";
	    template1 += "                  <a href=\"javascript:;\" class=\"btn btn-success cancel\" data-dismiss=\"modal\">取消<\/a>";
	    template1 += "                  <a href=\"javascript:;\" class=\"btn btn-success ok\" data-dismiss=\"modal\">確認<\/a>";
	    template1 += "              <\/div>";
	    template1 += "        <\/div>";
	    template1 += "        <\/div>";
	    template1 += "    <\/div><!-- \/.super-card -->";
	    template1 += "<\/div>";

	    var template2Front = "";
	    template2Front += "<div id='";
	    var template2 = "";
	    template2 += "' class=\"vi-modal vi-modal-datepicker\">";
	    template2 += "    <div class=\"vi-modal-backdrop\" data-dismiss=\"modal\"></div>";
	    template2 += "    <div class=\"super-card\">";
	    template2 += "        <div class=\"super-card-header\">";
	    template2 += "              <div class=\"super-card-header-lt\"></div>";
	    template2 += "              <div class=\"super-card-header-ct\">";
	    template2 += "                  <span class=\"super-card-title\">" + modal_title + "</span>";
	    template2 += "              <\/div>";
	    template2 += "        <\/div>";
	    template2 += "        <div class=\"super-card-body\">";
	    template2 += "              <div class=\"vi-datepicker-panel\">";
	    template2 += "                  <input class=\"hidden-date\" type=\"text\" style='display: none;'>";
	    template2 += "                  <div class = \"ct\">";
	    template2 += "                      <div class=\"date form_date\" data-date=\"\" data-date-format=\"yyyy MM dd \" data-link-field=\"dtp_input2\" data-link-format=\"yyyy-mm-dd\">";
	    template2 += "                      <\/div>";
	    template2 += "                  <\/div>";
	    template2 += "              <\/div>";
	    template2 += "        <\/div>";
	    template2 += "    <\/div><!-- \/.super-card -->";
	    template2 += "<\/div>";

	    var randomInt = Math.floor(Math.random() * 10000);

	    // 20171029: withBtn_divided_panel 已經被移除

	    // template4: 年月日選單
	    var template4Front = "";
	    template4Front += "<div id='";
	    var template4 = '';
	    template4 += "' class=\"vi-modal\">";
	    template4 += "    <div class=\"vi-modal-backdrop\" data-dismiss=\"modal\"></div>";
	    template4 += "    <div class=\"super-card\">";
	    template4 += "          <div class=\"super-card-header\">";
	    template4 += "              <div class=\"super-card-header-lt\"></div>";
	    template4 += "              <div class=\"super-card-header-ct\">";
	    template4 += "                  <span class=\"super-card-title\">" + modal_title + "</span>";
	    template4 += "              <\/div>";
	    template4 += "              <div class=\"super-card-header-rt\">";
	    template4 += "                  <button class=\"vi-modal-close\" ontouchstart data-dismiss=\"modal\"></button>";
	    template4 += "              <\/div>";
	    template4 += "          <\/div>";
	    template4 += "          <div class=\"super-card-body\">";
	    template4 += "              <div class=\"datepicker-complex-panel vi-datepicker-panel\">";
	    template4 += "                  <ul class=\"\" role=\"tablist\">";
	    template4 += "                     <li class=\"prev-year-btn\" style=\"display: none;\" ><i class=\"icon-expand_left\"></i><\/li>";
	    template4 += "                     <li class=\"prev-month-btn\" ><i class=\"icon-expand_left\"></i><\/li>";
	    template4 += "                     <li role=\"presentation\" class=\"input-group-btn\" >";
	    template4 += "                          <a class=\"y-link btn btn-default\" href=\"#" + randomInt + "-tab-y\" data-toggle=\"tab\">";
	    template4 += "                              <span class=\"val\"><\/span>";
	    template4 += "                              <i class=\"vi-icon vi-icon-xs vi-icon-triangle-down-g\"></i>";
	    template4 += "                          <\/a>";
	    template4 += "                      <\/li>";
	    template4 += "                       <li role=\"presentation\" class=\"input-group-btn\" >";
	    template4 += "                           <a class=\"m-link btn btn-default\" href=\"#" + randomInt + "-tab-m\" data-toggle=\"tab\">";
	    template4 += "                               <span class=\"val\"><\/span>";
	    template4 += "                               <i class=\"vi-icon vi-icon-xs vi-icon-triangle-down-g\"></i>";
	    template4 += "                           <\/a>";
	    template4 += "                      <\/li>";
	    template4 += "                      <li role=\"presentation\" class=\"input-group-btn\" style=\"display: none;\" >";
	    template4 += "                            <a class=\"d-link btn btn-default\" href=\"#" + randomInt + "-tab-d\" data-toggle=\"tab\">";
	    template4 += "                                <span class=\"val\"><\/span>";
	    template4 += "                                <i class=\"vi-icon vi-icon-xs vi-icon-triangle-down-g\"></i>";
	    template4 += "                            <\/a>";
	    template4 += "                      <\/li>";
	    template4 += "                      <li class=\"y-range-label\" style=\"display: none;\"><\/li>";
	    template4 += "                       <li class=\"next-year-btn\" style=\"display: none;\" ><i class=\"icon-expand_right\"></i><\/li>";
	    template4 += "                      <li class=\"next-month-btn\" ><i class=\"icon-expand_right\"></i><\/li>";
	    template4 += "                    <\/ul>";
	    template4 += "                     <div class=\"tab-content\">";
	    template4 += "                       <div class=\"tab-pane\" id=\"" + randomInt + "-tab-y\">";
	    template4 += "                           <div class=\"date_y_only form_date\" data-date=\"\" >";
	    template4 += "                           <\/div>";
	    template4 += "                       <\/div>";
	    template4 += "                      <div class=\"tab-pane\" id=\"" + randomInt + "-tab-m\">";
	    template4 += "                            <div class=\"date_m_only form_date\" data-date=\"\" >";
	    template4 += "                            <\/div>";
	    template4 += "                         <\/div>";
	    template4 += "                       <div class=\"tab-pane active\" id=\"" + randomInt + "-tab-d\">";
	    template4 += "                             <div class=\"date_d_only form_date\" data-date=\"\" >";
	    template4 += "                          <\/div>";
	    template4 += "                        <\/div>";
	    template4 += "                     <\/div>";
	    template4 += "                     ";
	    template4 += "              <\/div>";
	    template4 += "         <\/div>";
	    template4 += "     <\/div><!-- \/.super-card -->";
	    template4 += " <\/div>";


	    // template5: 日期選單 (單選)
	    var template5Front = "";
	    template5Front += "<div id='";
	    var template5 = "";
	    template5 += "' class=\"vi-modal\">";
	    template5 += "    <div class=\"vi-modal-backdrop\" data-dismiss=\"modal\"></div>";
	    template5 += "    <div class=\"super-card\">";
	    template5 += "          <div class=\"super-card-header\">";
	    template5 += "              <div class=\"super-card-header-lt\"></div>";
	    template5 += "              <div class=\"super-card-header-ct\">";
	    template5 += "                  <span class=\"super-card-title\">" + modal_title + "</span>";
	    template5 += "              <\/div>";
	    template5 += "              <div class=\"super-card-header-rt\">";
	    template5 += "                  <button class=\"vi-modal-close\" ontouchstart data-dismiss=\"modal\"></button>";
	    template5 += "              <\/div>";
	    template5 += "          <\/div>";
	    template5 += "          <div class=\"super-card-body\">";
	    template5 += "              <div class=\"datepicker-dateonly vi-datepicker-panel\">";
	    template5 += "                  <input class=\"hidden-date\" type=\"text\" style='display: none;'>";
	    template5 += "                  <div class = \"ct\">";
	    template5 += "                      <div class=\"date form_date\" data-date=\"\" data-date-format=\"yyyy MM dd \" data-link-field=\"dtp_input2\" data-link-format=\"yyyy-mm-dd\">";
	    template5 += "                      <\/div>";
	    template5 += "                  <\/div>";
	    template5 += "              <\/div>";
	    template5 += "        <\/div>";
	    template5 += "    <\/div><!-- \/.super-card -->";
	    template5 += "<\/div>";


	    // template6: 日期選單 (多選)
	    var template6Front = "";
	    template6Front += "<div id='";
	    var template6 = "";
	    template6 += "' class=\"vi-modal\">";
	    template6 += "    <div class=\"vi-modal-backdrop\" data-dismiss=\"modal\"></div>";
	    template6 += "    <div class=\"super-card\">";
	    template6 += "          <div class=\"super-card-header\">";
	    template6 += "              <div class=\"super-card-header-lt\"></div>";
	    template6 += "              <div class=\"super-card-header-ct\">";
	    template6 += "                  <span class=\"super-card-title\">" + modal_title + "</span>";
	    template6 += "              <\/div>";
	    template6 += "              <div class=\"super-card-header-rt\">";
	    template6 += "                  <button class=\"vi-modal-close\" ontouchstart data-dismiss=\"modal\"></button>";
	    template6 += "              <\/div>";
	    template6 += "        <\/div>";
	    template6 += "        <div class=\"super-card-body\">";
	    template6 += "              <div class=\"datepicker-dateonly vi-datepicker-panel\">";
	    template6 += "                  <ul class=\"row row-no-gutters padx_12\">";
	    template6 += "                      <li class=\"col-xs-6\">";
	    template6 += "                          <a class=\"checkAllBtn checkbox\">";
	    template6 += "                              <label class=\"form_choose\">";
	    template6 += "                                      <i class=\"txt\">全選</i>";
	    template6 += "                                      <input class=\"form_choose-input\" type=\"checkbox\">";
	    template6 += "                                      <span class=\"form_choose-img\"></span>";
	    template6 += "                              </label>";
	    template6 += "                          </a>";
	    template6 += "                      </li>";
	    template6 += "                      <li class=\"col-xs-6\">";
	    template6 += "                          <a class=\"unCheckAllBtn\"><i class=\"icon-trash\"></i>清除</a>";
	    template6 += "                      </li>";
	    template6 += "                  </ul>";
	    template6 += "                  ";
	    template6 += "                  <input class=\"hidden-date\" type=\"text\" style='display: none;'>";
	    template6 += "                  <div class = \"ct\">";
	    template6 += "                      <div class=\"date form_date\" data-date=\"\" data-date-format=\"yyyy MM dd \" data-link-field=\"dtp_input2\" data-link-format=\"yyyy-mm-dd\">";
	    template6 += "                      <\/div>";
	    template6 += "                  <\/div>";
	    template6 += "              <\/div>";
	    template6 += "        <\/div>";
	    template6 += "        <div class=\"super-card-footer\">";
	    template6 += "              <div class=\"vi-btn-group\">";
	    template6 += "                  <a href=\"javascript:;\" class=\"vi-btn vi-btn-secondary\" data-dismiss=\"modal\">取消<\/a>";
	    template6 += "                  <a href=\"javascript:;\" class=\"vi-btn vi-btn-primary\" data-dismiss=\"modal\">確認<\/a>";
	    template6 += "              <\/div>";
	    template6 += "        <\/div>";
	    template6 += "    <\/div><!-- \/.super-card -->";
	    template6 += "<\/div>";


	    var template7Front = "";
	    template7Front += "<div id='";
	    var template7 = "";
	    template7 += "' class=\"vi-modal\">";
	    template7 += "    <div class=\"vi-modal-backdrop\" data-dismiss=\"modal\"></div>";
	    template7 += "    <div class=\"super-card\">";
	    template7 += "          <div class=\"super-card-header\">";
	    template7 += "              <div class=\"super-card-header-lt\"></div>";
	    template7 += "              <div class=\"super-card-header-ct\">";
	    template7 += "                  <span class=\"super-card-title\">" + modal_title + "</span>";
	    template7 += "              <\/div>";
	    template7 += "              <div class=\"super-card-header-rt\">";
	    template7 += "                  <button class=\"vi-modal-close\" ontouchstart data-dismiss=\"modal\"></button>";
	    template7 += "              <\/div>";
	    template7 += "          <\/div>";
	    template7 += "          <div class=\"super-card-body\">";
	    template7 += "              <div class=\"datepicker-dateonly vi-datepicker-panel\">";
	    template7 += "                  ";
	    template7 += "                  <input class=\"hidden-date\" type=\"text\" style='display: none;'>";
	    template7 += "                  <div class = \"ct\">";
	    template7 += "                      <div class=\"date form_date\" data-date=\"\" data-date-format=\"yyyy MM dd \" data-link-field=\"dtp_input2\" data-link-format=\"yyyy-mm-dd\">";
	    template7 += "                      <\/div>";
	    template7 += "                  <\/div>";
	    template7 += "                  <p>已選擇1個扣款日期，每次扣款金額為新臺幣1,000元，預估每月扣款金額為新臺幣1,000元</p>";	
	    template7 += "              <\/div>";
	    template7 += "          <\/div>";
	    template7 += "          <div class=\"super-card-footer\">";
	    template7 += "              <div class=\"vi-btn-group\">";
	    template7 += "                  <a href=\"javascript:;\" class=\"vi-btn vi-btn-secondary\" data-dismiss=\"modal\">取消<\/a>";
	    template7 += "                  <a href=\"javascript:;\" class=\"vi-btn vi-btn-primary\" data-dismiss=\"modal\">確認<\/a>";
	    template7 += "              <\/div>";
	    template7 += "          <\/div>";
	    template7 += "    <\/div><!-- \/.super-card -->";
	    template7 += "<\/div>";

	    // helper function: convert Date object to yyyymmdd string 
	    Date.prototype.yyyymmdd = function() {
	        var mm = this.getMonth() + 1; // getMonth() is zero-based
	        var dd = this.getDate();

	        return [this.getFullYear(),
	            (mm > 9 ? '' : '0') + mm,
	            (dd > 9 ? '' : '0') + dd
	        ].join('/');
	    };
	    Date.prototype.yyyy = function() {
	        return this.getFullYear();
	    };
	    Date.prototype.mm = function() {
	        return this.getMonth() + 1;
	    };
	    Date.prototype.dd = function() {
	        return this.getDate();
	    };

	    /* bootstrap default datepicker with ok/cancell button below */
	    if (options.modalType == 'withBtn_single_panel') {
	        // create modal
	        var $modal = $(template1Front + modal_id + template1);
	        $modal.appendTo(modal_parent);


	        // setup bootstrap datepicker in modal
	        $temp_val_storage = $modal.find('.hidden-date');
	        $modal.find('.super-card-body .date').datepicker(options).on('changeDate', function(e) {
	            if (options.viewMode == 'years') { // select year mode
	                $temp_val_storage.val(e.date.yyyy());
	            } else { // default
	                $temp_val_storage.val(e.date.yyyymmdd());
	            }
	        });

	        // retrieve data in temporage value storage into real input element on close
	        $modal.find('.ok').click(function() {
	            $input.val($temp_val_storage.val());
	        });
	        /* bootstrap default datepicker (will close when date is picked) */
	    } else if (options.modalType == 'noBtn_single_panel') {
	        // create modal
	        var $modal = $(template2Front + modal_id + template2);
	        $modal.appendTo(modal_parent);


	        // setup bootstrap datepicker in modal
	        $modal.find('.super-card-body .date').datepicker(options).on('changeDate', function(e) {
	            // copy value on date changed
	            if (options.viewMode == 'years') { // select year mode
	                $input.val(e.date.yyyy());
	            } else { // default
	                $input.val(e.date.yyyymmdd());
	            }
	            // close immediately
	            // $modal.modal('hide');
	            hideModal($modal);
	        });
	        // 20171029: withBtn_divided_panel 已經被移除
	        /* divided into year/month/date three panels. users can choose each item independently */
	    } else if (options.modalType == 'noBtn_complex_panel') {

	        // create modal
	        var $modal = $(template4Front + modal_id + template4);
	        $modal.appendTo(modal_parent);


	        // setup bootstrap datepicker in modal
	        var $datepicker_y = $modal.find('.super-card-body .date_y_only');
	        var $datepicker_m = $modal.find('.super-card-body .date_m_only');
	        var $datepicker_d = $modal.find('.super-card-body .date_d_only');
	        var $y_link = $modal.find('.y-link');
	        var $y_link_label = $y_link.find('.val');
	        var $m_link = $modal.find('.m-link');
	        var $m_link_label = $m_link.find('.val');
	        var $d_link = $modal.find('.d-link');
	        var $d_link_label = $d_link.find('.val');
	        var $y_range_label = $modal.find('.y-range-label');
	        var $prev_year_btn = $modal.find('.prev-year-btn');
	        var $next_year_btn = $modal.find('.next-year-btn');
	        var $prev_month_btn = $modal.find('.prev-month-btn');
	        var $next_month_btn = $modal.find('.next-month-btn');
	        var cur_y, cur_m, cur_d;
	        var cur_view; // 紀錄檢視模式是年/月/日 (可能值:'y', 'm' ,d')

	        // update datepicker value
	        var changeDDoNotClose = false;

	        // 20171031:搬動程式順序
	        // UI 年/月/日選擇切換
	        function switchToY(e) {
	            $y_link.hide();
	            $m_link.hide();
	            $y_range_label.show();
	            if (!e) $y_link.trigger('click');
	            cur_view = 'y';
	            togglePrevNextButton(); // 統一此函數控制全部前後按鈕
	        }

	        function switchToM(e) {
	            $y_link.show();
	            $m_link.hide();
	            $y_range_label.hide();
	            if (!e) $m_link.trigger('click');
	            cur_view = 'm';
	            togglePrevNextButton(); // 統一此函數控制全部前後按鈕
	        }

	        function switchToD() {
	            $y_link.show();
	            $m_link.show();
	            $y_range_label.hide();
	            $d_link.trigger('click');
	            cur_view = 'd';
	            togglePrevNextButton(); // 統一此函數控制全部前後按鈕
	        }


	        // 統一控制 前/後 年/月份 按鈕的隱藏與顯示
	        var togglePrevNextButton = function() {
	                // 日期盤: 月份控制按鈕
	                if (cur_view == 'd') {
	                    $next_month_btn.show();
	                    $prev_month_btn.show();
	                    // 若即將超過時間範圍限制就隱藏按鈕
	                    var cur_ym = new Date(cur_y, cur_m - 1, 1);
	                    if (options.endDate && cur_ym.getTime() >= new Date(options.endDate).setDate(1)) {
	                        $next_month_btn.css({ opacity: 0 });
	                    } else {
	                        $next_month_btn.css({ opacity: 1 });
	                    }
	                    if (options.startDate && cur_ym.getTime() <= new Date(options.startDate).setDate(1)) {
	                        $prev_month_btn.css({ opacity: 0 });
	                    } else {
	                        $prev_month_btn.css({ opacity: 1 });
	                    }
	                } else {
	                    $next_month_btn.hide();
	                    $prev_month_btn.hide();
	                }
	                // 年分、月份盤：年分控制按鈕
	                if (cur_view == 'y' || cur_view == 'm') {
	                    $next_year_btn.show();
	                    $prev_year_btn.show();
	                    // 若即將超過時間範圍限制就隱藏按鈕
	                    if (options.endDate && cur_y >= options.endDate.yyyy()) {
	                        $next_year_btn.css({ opacity: 0 });
	                    } else {
	                        $next_year_btn.css({ opacity: 1 });
	                    }
	                    if (options.startDate && cur_y <= options.startDate.yyyy()) {
	                        $prev_year_btn.css({ opacity: 0 });
	                    } else {
	                        $prev_year_btn.css({ opacity: 1 });
	                    }
	                } else {
	                    $next_year_btn.hide();
	                    $prev_year_btn.hide();
	                }
	            }
	            // 確保日期落在endDate~startDate區間內
	        var ensureDateInEnabledRange = function(date) {
	            if (options.endDate && date.getTime() > options.endDate.getTime()) {
	                // 20171102: 當超過日期時，表示需強制設定cur_m與cur_d，因目前架構下，每個月曆
	                // 只會負責記錄自己所控制的尺度 (例如年份盤所選擇的日期只確保年份正
	                // 確，月分和日期則不一定符合使用者當前在月份與日期盤的選擇) 。如果
	                // 不強制設定，無法更新所有日曆。
	                cur_m = options.endDate.mm();
	                cur_d = options.endDate.dd();
	                return options.endDate;
	            }

	            if (options.startDate && date.getTime() < options.startDate.getTime()) {
	                cur_m = options.endDate.mm();
	                cur_d = options.endDate.dd();
	                return options.startDate;
	            }
	            return date;
	        }

	        function updateY(e) {
	            if (!e.date) {
	                e.date = new Date(cur_y, cur_m - 1, cur_d);
	            };
	            cur_y = e.date.yyyy();
	            $y_link_label.html(cur_y + '年'); // update tab

	            togglePrevNextButton();
	            switchToD(); // 只要更新年分自動切換至日期盤

	            // 向下更新月份盤
	            e.date.setDate(1); // 先將日期設為1，確保更動月份時日期不超過月份日期數
	            e.date.setMonth(cur_m - 1);
	            e.date.setDate(Math.min(cur_d, new Date(cur_y, cur_m - 1, 0).getDate())); // 確保日期不超過月份日期數
	            e.date = ensureDateInEnabledRange(e.date); // 確保日期在可選範圍內

	            $datepicker_m.datepicker('setDate', e.date);
	        }

	        function updateM(e) {
	            if (!e.date) {
	                e.date = new Date(cur_y, cur_m - 1, cur_d);

	            };
	            cur_m = e.date.mm();
	            $m_link_label.html(cur_m + '月'); // update tab

	            togglePrevNextButton();
	            switchToD(); // 只要更新年分自動切換至日期盤

	            // 向下更新日期盤
	            e.date.setDate(Math.min(cur_d, new Date(cur_y, cur_m, 0).getDate())); // 確保日期不超過月份日期數
	            e.date = ensureDateInEnabledRange(e.date); // 確保日期在可選範圍內

	            changeDDoNotClose = true;
	            $datepicker_d.datepicker('setDate', e.date);
	        }

	        function updateD(e) {
	            if (!e.date) {
	                e.date = new Date(cur_y, cur_m - 1, cur_d);
	            };
	            cur_d = e.date.dd();

	            $d_link.html(cur_d + '日'); // update tab
	            if (changeDDoNotClose) {
	                changeDDoNotClose = false;
	                return;
	            } else { // close dialog and save data
	                $input.val([cur_y, cur_m, cur_d].join('/'));
	                // $modal.modal('hide');
	                hideModal($modal);
	            }

	        }


	        // init bootstrap datepicker
	        options.minViewMode = 'years';
	        options.maxViewMode = 'decades';
	        $datepicker_y.datepicker(options).on('changeDate', updateY); //.on('changeDecade', decadeToggleBtnToggleContent); // decadeToggleBtnToggleContent已經被棄用
	        options.viewMode = options.minViewMode = options.maxViewMode = 'months';
	        $datepicker_m.datepicker(options).on('changeDate', updateM);
	        options.viewMode = options.minViewMode = options.maxViewMode = 'days';
	        $datepicker_d.datepicker(options).on('changeDate', updateD);


	        // 設定初始日期
	        {
	            var now = (options.defaultViewDate) ? options.defaultViewDate : new Date();
	            cur_y = now.yyyy();
	            cur_m = now.mm();
	            cur_d = now.dd();
	            $datepicker_y.datepicker('setDate', now);

	            switchToD(); // 初始化介面至日期盤
	        }


	        // update year panel label
	        var $datepicker_y_switch = $datepicker_y.find('.datepicker-years .datepicker-switch');

	        // update range label in the year panel
	        function update_range_label(content) {
	            $y_range_label.html(content.replace(/([0-9]+).?-([0-9]+).?/i, "$1年-$2年"));
	        }
	        $datepicker_y_switch.on("DOMSubtreeModified", function() {
	            update_range_label($(this).html());
	        });
	        update_range_label($datepicker_y_switch.html());

	        // register panel switch control
	        $y_link.click(switchToY);
	        $m_link.click(switchToM);
	        // 當更新年分與月份盤的時候，會自動切自日期盤

	        $prev_year_btn.click(function() {
	            if ($(this).css('opacity') == 0) return; // 隱藏狀態不做處理
	            var t = new Date(cur_y - 1, cur_m - 1, cur_d);
	            t = ensureDateInEnabledRange(t); // 確保日期在可選範圍內
	            // 儲存新日期
	            cur_y = t.yyyy();
	            cur_m = t.mm();
	            cur_d = t.dd();
	            $datepicker_y.datepicker('setDate', t);
	        })
	        $next_year_btn.click(function() {
	            if ($(this).css('opacity') == 0) return; // 隱藏狀態不做處理
	            var t = new Date(cur_y + 1, cur_m - 1, cur_d);
	            t = ensureDateInEnabledRange(t); // 確保日期在可選範圍內
	            // 儲存新日期
	            cur_y = t.yyyy();
	            cur_m = t.mm();
	            cur_d = t.dd();
	            $datepicker_y.datepicker('setDate', t);
	        })
	        $prev_month_btn.click(function() {
	            if ($(this).css('opacity') == 0) return; // 隱藏狀態不做處理
	            var newM = cur_m - 1;
	            var t = new Date(((newM <= 0) ? (cur_y - 1) : cur_y), ((newM <= 0) ? 12 : newM) - 1, 1);
	            t.setDate(Math.min(cur_d, 28)); // 恢復日期設定
	            t = ensureDateInEnabledRange(t); // 確保日期在可選範圍內
	            // 儲存新日期
	            cur_y = t.yyyy();
	            cur_m = t.mm();
	            cur_d = t.dd();


	            $datepicker_y.datepicker('setDate', t);
	        })
	        $next_month_btn.click(function() {
	            if ($(this).css('opacity') == 0) return; // 隱藏狀態不做處理
	            var newM = cur_m + 1;
	            var t = new Date(((newM > 12) ? (cur_y + 1) : cur_y), ((newM > 12) ? 1 : newM) - 1, 1);
	            t.setDate(Math.min(cur_d, 28)); // 恢復日期設定
	            t = ensureDateInEnabledRange(t); // 確保日期在可選範圍內
	            // 儲存新日期
	            cur_y = t.yyyy();
	            cur_m = t.mm();
	            cur_d = t.dd();

	            $datepicker_y.datepicker('setDate', t);
	        })

	        // $decadeToggleBtn.click(function(){
	        //     if($datepicker_y.find('.datepicker-decades').is(':visible')){
	        //         // zoom in to years level
	        //         $datepicker_y.find('.datepicker-decades .focused').trigger('click');
	        //     }else{
	        //         // zoom out to decade level
	        //         $datepicker_y.find('.datepicker-years .datepicker-switch').trigger('click');                   
	        //     }
	        //     decadeToggleBtnToggleContent();
	        // });
	        // $datepicker_y.find('.datepicker-decades').click(function(){
	        //     decadeToggleBtnToggleContent();
	        // });


	        // init tab content with current date
	        {
	            $y_link_label.html(cur_y + '年');
	            $m_link_label.html(cur_m + '月');
	            $d_link_label.html(cur_d + '日');
	            $input.val([cur_y, cur_m, cur_d].join('/'));
	        }


	    } else if (options.modalType == 'noBtn_date_only') {
	        // create modal
	        var $modal = $(template5Front + modal_id + template5);
	        $modal.appendTo(modal_parent);


	        // setup bootstrap datepicker in modal
	        options.defaultViewDate = new Date(2015, 2, 1);
	        $modal.find('.super-card-body .date').datepicker(options).on('changeDate', function(e) {
	                // copy value on date changed
	                $input.val(e.date.dd());
	                // close immediately
	                // $modal.modal('hide');
	                hideModal($modal);
	            }).datepicker('setDate', new Date(2017, 1, new Date().getDate()))
	            .datepicker('update');
	        /* divided into year/month/date three panels. users can choose each item independently */
	    } else if (options.modalType == 'withBtn_date_only_multiple') {
	        // create modal
	        var $modal = $(template6Front + modal_id + template6);
	        $modal.appendTo(modal_parent);


	        var $chooseAllBtnInput = $modal.find('.checkAllBtn input[type="checkbox"]');
	        var $unChooseAllBtn = $modal.find('.unCheckAllBtn');

	        // setup bootstrap datepicker in modal
	        options.multidate = true,
	            options.defaultViewDate = new Date(2015, 2, 1);
	        var tmpDates = '';
	        $modal.find('.super-card-body .date').datepicker(options).on('changeDate', function(e) {
	            // check how many date is choosen
	            if (e.dates.length == 0) {
	                $unChooseAllBtn.hide();
	            } else {
	                $unChooseAllBtn.show();
	            }
	            // whether is all check
	            if (e.dates.length == 28) {
	                $chooseAllBtnInput.prop('checked', true);
	            } else {
	                $chooseAllBtnInput.prop('checked', false);
	            }

	            // copy value on date changed
	            var dates = [];
	            for (var i = 0; i < e.dates.length; ++i) {
	                dates.push(e.dates[i].dd());
	            }
	            dates = dates.sort(function(a, b) {
	                return a - b
	            });
	            tmpDates = dates.join(', ');
	        });

	        // retrieve data in temporage value storage into real input element on close
	        $modal.find('.ok').click(function() {
	            $input.val(tmpDates);
	        });

	        // choose/unchoolse all
	        var allDates = [];
	        for (var i = 1; i <= 28; ++i) allDates.push(new Date(2015, 1, i));
	        var chooseAll = function(isChooseAll) {
	            return function() {
	                if (isChooseAll) {
	                    $modal.find('.super-card-body .date').datepicker('setDates', allDates);
	                } else {
	                    $modal.find('.super-card-body .date').datepicker('clearDates');
	                }
	            }
	        }

	        $modal.find('.checkAllBtn').click(function() {
	            if ($chooseAllBtnInput.is(':checked')) {
	                chooseAll(true)();
	            } else {
	                chooseAll(false)();
	            }
	        });
	        $unChooseAllBtn.click(chooseAll(false));
	        $unChooseAllBtn.hide(); // default is hidden


	        /* divided into year/month/date three panels. users can choose each item independently */
	    } else if (options.modalType == 'withBtn_date_only_multiple_n') {
	        // create modal
	        var $modal = $(template7Front + modal_id + template7);
	        $modal.appendTo(modal_parent);


	        var $chooseAllBtnInput = $modal.find('.checkAllBtn input[type="checkbox"]');
	        var $unChooseAllBtn = $modal.find('.unCheckAllBtn');

	        // setup bootstrap datepicker in modal
	        options.multidate = true,
	            options.defaultViewDate = new Date(2015, 2, 1);
	        var tmpDates = '';
	        $modal.find('.super-card-body .date').datepicker(options).on('changeDate', function(e) {
	            // check how many date is choosen
	            if (e.dates.length == 0) {
	                $unChooseAllBtn.hide();
	            } else {
	                $unChooseAllBtn.show();
	            }
	            // whether is all check
	            if (e.dates.length == 28) {
	                $chooseAllBtnInput.prop('checked', true);
	            } else {
	                $chooseAllBtnInput.prop('checked', false);
	            }

	            // copy value on date changed
	            var dates = [];
	            for (var i = 0; i < e.dates.length; ++i) {
	                dates.push(e.dates[i].dd());
	            }
	            dates = dates.sort(function(a, b) {
	                return a - b
	            });
	            tmpDates = dates.join(', ');
	        });

	        // retrieve data in temporage value storage into real input element on close
	        $modal.find('.ok').click(function() {
	            $input.val(tmpDates);
	        });

	        // choose/unchoolse all
	        var allDates = [];
	        for (var i = 1; i <= 28; ++i) allDates.push(new Date(2015, 1, i));
	        var chooseAll = function(isChooseAll) {
	            return function() {
	                if (isChooseAll) {
	                    $modal.find('.super-card-body .date').datepicker('setDates', allDates);
	                } else {
	                    $modal.find('.super-card-body .date').datepicker('clearDates');
	                }
	            }
	        }

	        $modal.find('.checkAllBtn').click(function() {
	            if ($chooseAllBtnInput.is(':checked')) {
	                chooseAll(true)();
	            } else {
	                chooseAll(false)();
	            }
	        });
	        $unChooseAllBtn.click(chooseAll(false));
	        $unChooseAllBtn.hide(); // default is hidden


	        /* divided into year/month/date three panels. users can choose each item independently */
	    } else { // invalid
	        console.error('invalid modalType.');
	        return -1;
	    }



	    // bind modal to wrapper
	    // $wrapper.attr('data-toggle', 'modal');
	    $wrapper.attr('data-modal', '#' + modal_id);

	    $('[data-modal]').on('click', function(){
	        // 重複同樣的命名只開啟最後一個
	        var $modal = $($(this).data('modal')+':not(".vi-modal-in")').last();
	        if ($modal.length <= 0) {
	            return;
	        }
	        // 如果開啟多層，popup的z-index要一直增加
	        if($('.vi-modal-in').length > 0 ){
	            var maxZIndex = $modal.css('z-index');
	            $('.vi-modal-in').each(function() {
	                var zIndex = $(this).css('z-index');
	                if(maxZIndex < zIndex){
	                    maxZIndex = zIndex;
	                }
	            });
	            $modal.css('z-index', ++maxZIndex);
	        }
	        // 防止背景可滑動
	        $('body').css('overflow','hidden');

	        // 開啟popup，使用css animation製作淡入效果
	        $modal.addClass('vi-modal-in');


	        // 點擊[data-dismiss="modal"]關閉modal
	        $modal.on('click', '[data-dismiss="modal"]', function(){
	            hideModal($modal);
	            return false;
	        });

	    });

	    function hideModal($modal) {
	        if ($modal.length <= 0) {
	            return;
	        }

	        //淡出效果，使用css animation製作
	        $modal.addClass('vi-modal-out');

	        // 200ms動畫結束後關閉popup
	        setTimeout(function(){
	            $modal.removeClass('vi-modal-in')
	            $modal.removeClass('vi-modal-out')
	            
	            // 拔掉z-index style
	            $modal.css('z-index','')

	            // popup全部關完後讓讓頁面可以scroll
	            if($('.vi-modal-in').length <= 0){
	                $('body').css('overflow','');
	            }
	        },200)

	        $modal.off('click', '[data-dismiss="modal"]');
	    }

	};

	window.datepicker = datepicker;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	/*** 20170822 建立虛擬鍵盤*/
	function buildCustomKeyboard($input, $customKeyboardDiv, opt) {
	    if (opt == undefined) {
	        opt = {};
	    }

	    // $customKeyboardDiv = $(keyboardDiv);

	    var lowerCaseRegex = /^[a-z]$/g;
	    var upperCaseRegex = /^[A-Z]$/g;

	    var alphaNumKeyboard = '<div class="customKeyboard" style="display:none;">' +
	        '   <ul class="cf">' +
	        '      <div class="finish" value="finish"> 完成 </div>' +
	        '   </ul>' +
	        '   <ul class="cf" id="key_numbers">' +
	        '       <li><a value="1" class="key c49"><span>1</span></a><a value="1" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="white">1</span></a></li>' +
	        '       <li><a value="2" class="key c50"><span>2</span></a><a value="2" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="white">2</span></a></li>' +
	        '       <li><a value="3" class="key c51"><span>3</span></a><a value="3" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="white">3</span></a></li>' +
	        '       <li><a value="4" class="key c52"><span>4</span></a><a value="4" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="white">4</span></a></li>' +
	        '       <li><a value="5" class="key c53"><span>5</span></a><a value="5" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="white">5</span></a></li>' +
	        '       <li><a value="6" class="key c54"><span>6</span></a><a value="6" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="white">6</span></a></li>' +
	        '       <li><a value="7" class="key c55"><span>7</span></a><a value="7" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="white">7</span></a></li>' +
	        '       <li><a value="8" class="key c56"><span>8</span></a><a value="8" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="white">8</span></a></li>' +
	        '       <li><a value="9" class="key c57"><span>9</span></a><a value="9" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="white">9</span></a></li>' +
	        '       <li><a value="0" class="key c48"><span>0</span></a><a value="0" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="white">0</span></a></li>' +
	        '   </ul>' +
	        '   <ul class="cf" id="key_qwerty">' +
	        '       <li><a value="Q" class="key c81"><span class="alpha">q</span></a><a value="Q" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">q</span></a></li>' +
	        '       <li><a value="W" class="key c87"><span class="alpha">w</span></a><a value="W" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">w</span></a></li>' +
	        '       <li><a value="E" class="key c69"><span class="alpha">e</span></a><a value="E" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">e</span></a></li>' +
	        '       <li><a value="R" class="key c82"><span class="alpha">r</span></a><a value="R" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">r</span></a></li>' +
	        '       <li><a value="T" class="key c84"><span class="alpha">t</span></a><a value="T" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">t</span></a></li>' +
	        '       <li><a value="Y" class="key c89"><span class="alpha">y</span></a><a value="Y" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">y</span></a></li>' +
	        '       <li><a value="U" class="key c85"><span class="alpha">u</span></a><a value="U" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">u</span></a></li>' +
	        '       <li><a value="I" class="key c73"><span class="alpha">i</span></a><a value="I" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">i</span></a></li>' +
	        '       <li><a value="O" class="key c79"><span class="alpha">o</span></a><a value="O" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">o</span></a></li>' +
	        '       <li><a value="P" class="key c80"><span class="alpha">p</span></a><a value="P" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">p</span></a></li>' +
	        '   </ul>' +
	        '   <ul class="cf" id="key_asdfg">' +
	        '       <li><a value="A" class="key c65"><span class="alpha">a</span></a><a value="A" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">a</span></a></li>' +
	        '       <li><a value="S" class="key c83"><span class="alpha">s</span></a><a value="S" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">s</span></a></li>' +
	        '       <li><a value="D" class="key c68"><span class="alpha">d</span></a><a value="D" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">d</span></a></li>' +
	        '       <li><a value="F" class="key c70"><span class="alpha">f</span></a><a value="F" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">f</span></a></li>' +
	        '       <li><a value="G" class="key c71"><span class="alpha">g</span></a><a value="G" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">g</span></a></li>' +
	        '       <li><a value="H" class="key c72"><span class="alpha">h</span></a><a value="H" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">h</span></a></li>' +
	        '       <li><a value="blank" class="key c72 hide"><span class="alpha"></span></a><a value="blank" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">h</span></a></li>' +
	        '       <li><a value="J" class="key c74"><span class="alpha">j</span></a><a value="J" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">j</span></a></li>' +
	        '       <li><a value="K" class="key c75"><span class="alpha">k</span></a><a value="K" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">k</span></a></li>' +
	        '       <li><a value="L" class="key c76"><span class="alpha">l</span></a><a value="L" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">l</span></a></li>' +

	        '   </ul>' +
	        '   <ul class="cf" id="key_zxcvb">' +
	        '       <li class="first"><a value="caps" class="key c20 grey caps"><span class="alpha"></span></a></li>' +
	        '       <li><a value="Z" class="key c90"><span class="alpha">z</span></a><a value="Z" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">z</span></a></li>' +
	        '       <li><a value="X" class="key c88"><span class="alpha">x</span></a><a value="X" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">x</span></a></li>' +
	        '       <li><a value="blank" class="key c72 hide"><span class="alpha"></span></a><a value="blank" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">h</span></a></li>' +
	        '       <li><a value="C" class="key c67"><span class="alpha">c</span></a><a value="C" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">c</span></a></li>' +
	        '       <li><a value="V" class="key c86"><span class="alpha">v</span></a><a value="V" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">v</span></a></li>' +
	        '       <li><a value="B" class="key c66"><span class="alpha">b</span></a><a value="B" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">b</span></a></li>' +
	        '       <li><a value="N" class="key c78"><span class="alpha">n</span></a><a value="N" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">n</span></a></li>' +
	        '       <li><a value="M" class="key c77"><span class="alpha">m</span></a><a value="M" class="key" style="position:absolute;top:-40px;display:none;background-color:#555"><span class="alpha white">m</span></a></li>' +
	        '       <li><a value="backspace" class="key c46 backspace grey"><span class="alpha">&lt;</span></a></li>' +

	        '   </ul>' +

	        '</div>';

	    var input_maxLength;
	    var toUpper = false;
	    var toLower = false;

	    var capsOn = true;

	    var animationId = undefined;

	    var $currPage = $("body");

	    var $customInput;
	    var $customInputOuterDiv;
	    var $customInputInnerDiv;
	    var $customInputFakeInputDiv;
	    var $mock_cursor = $("<div class='mock_cursor'> </div>");

	    var $customKeyboard = $(alphaNumKeyboard);

	    $customInput = $input;

	    $customInput.attr('readonly', true);

	    if (opt.fakeInput) {
	        $customInput.addClass('customInput');
	    }

	    $customInput.addClass('customInput_keyboard');

	    $customInput.wrap("<div class='customInputDiv'></div>");
	    input_maxLength = $customInput.attr('maxlength');

	    $customInputOuterDiv = $customInput.parent();
	    $customInputInnerDiv = $("<div class='customInput_innerDiv'></div>");
	    $customInputFakeInputDiv = $("<div class='customInputFakeInputDiv'></div>")

	    $customInputOuterDiv.append($customInputInnerDiv);
	    $customInputInnerDiv.append($customInputFakeInputDiv);

	    if (opt.fakeInput) {
	        $customInputInnerDiv.append($mock_cursor);
	    }

	    if (opt.inputType == "password") {
	        $customInputOuterDiv.addClass("customInputDiv_pw");
	    }

	    $customKeyboardDiv.append($customKeyboard);

	    capsOn = true;
	    if (opt.textTransform != undefined) {
	        if (opt.textTransform == 'upper') {
	            toUpper = true;
	            capsOn = true;
	        }

	        if (opt.textTransform == 'lower') {
	            toLower = true;
	            capsOn = false;
	        }
	    }

	    if (capsOn) {
	        $customKeyboard.addClass("customKeyboard_toUpper");
	    } else {
	        $customKeyboard.addClass("customKeyboard_toLower");
	    }

	    var textTrans = function(txt) {
	        if (capsOn) {
	            if (toLower) {
	                txt = txt.toLowerCase();
	            } else {
	                txt = txt.toUpperCase();
	            }
	        } else {
	            if (toUpper) {
	                txt = txt.toUpperCase();
	            } else {
	                txt = txt.toLowerCase();
	            }
	        }

	        return txt;
	    }

	    var updateFakeInput = function() {

	        if (opt.fakeInput !== true) {
	            return;
	        }

	        if (opt.inputType != "password") {
	            //log("update:" + inputVal);
	            $customInputFakeInputDiv.html(textTrans($customInput.val()));
	        } else {
	            var str = "";

	            for (var i = 0; i < $customInput.val().length; i++) {
	                str += '\u25CF';
	            }

	            $customInputFakeInputDiv.html(str);
	        }
	    }

	    var stopPropCallback = function(e) {
	        e.stopPropagation();
	    }

	    var unfocusCallback = function(e) {
	        var $this = $(this);

	        $this.off("customKeyboardUnfocus");

	        $customKeyboard.hide();

	        $currPage.off("click");

	        $customInput.removeClass("customInput_selected");

	        $customInputOuterDiv.removeClass("keyboardDiv_selected");

	        $customInput.trigger('blur');
	    }

	    var inputValChange = function() {
	        var currVal = $customInput.val();
	        $customInput.val('');
	        $customInput.trigger({ type: 'keydown', key: currVal });

	        updateFakeInput();
	    }

	    $customInput.change(function(e) {
	        inputValChange();
	    });

	    $customInputOuterDiv.on("click", function(e) {
	        var $this = $(this);

	        e.stopPropagation();

	        if (!$this.is(".keyboardDiv_selected")) {
	            $currPage.find('.keyboardDiv_selected').trigger("customKeyboardUnfocus");

	            setTimeout(function() {
	                $customKeyboard.show();
	            }, 400);


	            $customInputOuterDiv.addClass("keyboardDiv_selected");

	            $customInput.addClass("customInput_selected");

	            inputValChange();

	            $this.on("customKeyboardUnfocus", unfocusCallback);

	            $currPage.on("click", function(e) {
	                $(this).find('.keyboardDiv_selected').trigger("customKeyboardUnfocus");
	            });
	        }
	    });

	    $customKeyboard.on("click", stopPropCallback);
	    $customKeyboard.find('div').on("click", function(e) {
	        var $this = $(this);
	        var keyVal = $this.attr('value');
	        if (keyVal == "finish") {

	            $this.off("customKeyboardUnfocus");

	            $customKeyboard.hide();

	            $currPage.off("click");

	            $customInput.removeClass("customInput_selected");

	            $customInputOuterDiv.removeClass("keyboardDiv_selected");

	            $customInput.trigger('blur');
	        }
	    });
	    $customKeyboard.find('a').on("click", function(e) {
	        var $this = $(this);
	        var keyVal = $this.attr('value');

	        e.stopPropagation();

	        if (keyVal == "backspace") {
	            $customInput.trigger({ type: 'keydown', key: keyVal });

	            updateFakeInput();
	        } else if (keyVal == "done") {
	            $customInputOuterDiv.trigger('customKeyboardUnfocus');
	        } else if (keyVal == "caps") {
	            if (capsOn) {
	                $customKeyboard.removeClass("customKeyboard_toUpper");
	                $customKeyboard.addClass("customKeyboard_toLower");
	            } else {
	                $customKeyboard.removeClass("customKeyboard_toLower");
	                $customKeyboard.addClass("customKeyboard_toUpper");
	            }

	            capsOn = !capsOn;
	        } else {
	            /*if ($customInputInnerDiv.has(".mock_cursor").length == 0) {
	                $customInputInnerDiv.empty();
	                $mock_cursor.appendTo($customInputInnerDiv);
	            } else {                        
	                if (input_maxLength != undefined && $customInput.val().length >= input_maxLength) {
	                    //log("Reached max length: " + input_maxLength);
	                }                           
	            }*/

	            if (input_maxLength != undefined && $customInput.val().length >= input_maxLength) {
	                //log("Reached max length: " + input_maxLength);
	            } else {
	                keyVal = textTrans(keyVal);

	                if (opt.inputType == 'password') {

	                    if (animationId != undefined) {
	                        clearInterval(animationId);
	                        animationId = undefined;
	                        updateFakeInput();
	                    }

	                    $customInput.trigger({ type: 'keydown', key: keyVal });

	                    if (opt.fakeInput) {
	                        $mock_cursor.addClass("cursor_hidden");
	                        $customInputFakeInputDiv.append("<span class='animated fadeOut'>" + keyVal + "</span>");

	                        animationId = setTimeout(function() {
	                            $mock_cursor.removeClass("cursor_hidden");
	                            animationId = undefined;
	                            updateFakeInput();
	                        }, 700);
	                    }


	                } else {
	                    setTimeout(function() {
	                        $customInput.trigger({ type: 'keydown', key: keyVal });
	                        updateFakeInput();
	                    }, 0);

	                }
	            }
	        }

	        return false;
	    }).on('touchstart', function(evt) {
	        var $newObj = $(this).next();
	        setTimeout(function() {
	            $newObj.show();
	        })
	    }).on('touchend', function(evt) {
	        var $newObj = $(this).next();
	        setTimeout(function() {
	            $newObj.hide();
	        }, 200);
	    });

	    bililiteRange($input[0]);
	}


	window.buildCustomKeyboard = buildCustomKeyboard;

/***/ })
/******/ ]);