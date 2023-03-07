function addCss(fileName) {

    var head = document.head;
    var link = document.createElement("link");
  
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;
  
    head.appendChild(link);
}

$(window).ready(function () {

    addCss('../../inc/css/ctbc.css');
    addCss('../../../bundle_base_2023.css');
    
    // 20180507 登入頁內容樣式判斷：高度小於等於 598px
    // fontZoomIn：字級變大(20190909 移除)
    // fixedHeight：高度小於598px套用，縮小登入欄位間距及錯誤訊息不撐開高度，避免登入按鈕被上方內容蓋住(20190909 移除)
    function loginStyle() {
        var bodyHeight = window.innerHeight;
        if (bodyHeight <= 598) {
            $(".login-wrap").addClass('fixedHeight');
            $(".login-wrap").removeClass('fontZoomIn');
            $(".record_side .body-wrap").removeClass('fontZoomIn');
        } else {
            $(".login-wrap").addClass('fontZoomIn');
            $(".record_side .body-wrap").addClass('fontZoomIn');
            $(".login-wrap").removeClass('fixedHeight');
        };
    };

    loginStyle(); // 20190909 新首頁不使用

    // for prototype，解析度改變重新執行
    // 20190909 新首頁不使用
    $(window).resize(function () {
        loginStyle();
    });

    // 登入頁內容樣式判斷 END


    // 英文版樣式控制
    // $("body").addClass("en");

    // 20180108 選單引入slider function
    $(".record_side").load('../../html/nav_area.html');
    // $("#footer").load('../../html/footer.html');

    // datepicker
    $('.input-group.date').datepicker();

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    //網路連線不穩關閉按鈕 20180112
    $(".error-header a").click(function () {
        $(this).parent(".error-header").addClass("hide");
    });

    // Header 漢堡選單
    function closefnc() {
        $(".overlayer_menu").css({
            display: "none"
        });
        $("a.mb_hamburg_menu").addClass("open");
        $("div.record_side").addClass("close_frame");
        $("div.main_container").addClass("close_frame");
        $("div.main_container").removeClass('filter_blur');
    }
    $("a.mb_hamburg_menu").click(function () {
        $(this).addClass("open");
        $("div.record_side").removeClass("close_frame");
        $("div.main_container").toggleClass("close_frame");
        if ($("a.mb_hamburg_menu").hasClass('open')) {
            $("div.main_container").removeClass('filter_blur');
            $(".overlayer_menu").css({
                display: "none"
            });
        } else {
            $("div.main_container").addClass('filter_blur');
            $(".overlayer_menu").css({
                display: "block"
            });
        };
        $(".mb-nav-close").click(function () {
            closefnc(); // 關閉左側選單
            // alert("OK");
        });
    });

    // 20180108 slide效果包成function，方便其它頁面使用
    // function slider() {

    //     //.accordion-toggle.collapsed 為選單第一層
    //     $(".accordion-toggle.collapsed.slide").each(function(index) {
    //         $(this).on("click", function(e) {
    //             var nowHeight;

    //             const opened = document.querySelector(".accordion-toggle:not(.collapsed)"); //抓取已經打開的選單
    //             var elements = document.querySelectorAll(".accordion-toggle");
    //             elements = [].slice.call(elements);

    //             const nowIndex = elements.indexOf(this);
    //             const openedIndex = elements.indexOf(opened);

    //             if (opened && openedIndex < nowIndex) {
    //                 //如果有選單打開，nowHeight=本身離頁面頂端的高度-已打開選單的高度-100
    //                 nowHeight = this.parentNode.parentNode.offsetTop - (opened.parentNode.parentNode.clientHeight) - 100;
    //             } else {
    //                 //否則，nowHeight=本身離頁面頂端的高度-100
    //                 nowHeight = this.parentNode.parentNode.offsetTop - 100;
    //             }

    //             $(".main_container").animate({
    //                 scrollTop: nowHeight
    //             }, 'slow');

    //             // 20180108 新增scroll動態for 選單(原來的寫法不知道為何不吃)
    //             window.scroll({
    //                 top: nowHeight,
    //                 left: 0,
    //                 behavior: "smooth"
    //             });

    //         });
    //     });

    // }



    // var tUp = $(".helper.up"),
    //               Close = $(".helper.down"),
    //               Login = $(".login-form"),
    //               Help = $(".help-container");

    // $(".help-container").hide();
    // $(".help-closed").hide();

    // 快速預覽開啟
    $(".helper.up").click(function () {
        console.log("up");
        // $(".body-wrap").addClass("green").addClass("no-scroll");
        $(".body-wrap").addClass("green");
        $('.container_header').addClass('no-bg');
        // $('.foot-link').hide(); //20171130 (舊)快捷功能隱藏
        $('.login_bottom').hide(); //20190909 快捷功能隱藏
        //20190909 移除自己show/hide效果，已包在新的快捷功能內
        // $(this).addClass("fadeOutDown");
        // $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        //     $(this).removeClass("fadeOutDown");
        //     $(this).hide();
        //     console.log("hide");
        // });
        $(".login-form").addClass("fadeOutDown");
        $(".login-form").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
            $(".login-form").removeClass("fadeOutDown");
            $(".login-form").hide();
        });
        setTimeout(function () {
            $(".help-container").show().addClass("fadeInUp");
            $(".help-container").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
                $(".help-container").removeClass("fadeInUp");
            });
        }, 500);
        setTimeout(function () {
            $(".help-closed").show().addClass("bounceIn");
            $(".help-closed").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
                $(".help-closed").removeClass("bounceIn");
            });
        }, 500);
    });

    // 快速預覽關閉(回到登入)
    $(".help-closed .helper.down").click(function () {
        $('.container_header').removeClass('no-bg');
        $(".help-container").addClass("fadeOutDown");
        $(".help-container").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
            $(".help-container").removeClass("fadeOutDown");
            $(".help-container").hide();
        });
        $(".help-closed").hide();
        //  $(".help-closed").addClass("fadeOutDown");
        //  $(".help-closed").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(e) {
        //           $(".help-closed").removeClass("fadeOutDown");
        //           $(".help-closed").hide();
        // });
        setTimeout(function () {
            $(".body-wrap").removeClass("green");
            // $(".body-wrap").removeClass("green").removeClass("no-scroll");
            $(".login-form").show().addClass("fadeInUp");
            $(".login-form").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
                $(".login-form").removeClass("fadeInUp");
            });
        }, 500);
        setTimeout(function () {
            //20190909 移除自己show/hide效果，已包在新的快捷功能內
            // $(".helper.up").show().addClass("fadeInUp");
            // $(".helper.up").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
            //     $(".helper.up").removeClass("fadeInUp");
            // });
            // $(".foot-link").show(); //20171130 (舊)快捷功能出現
            $('.login_bottom').show(); //20190909 快捷功能出現
        }, 1000); //20171130 改為1秒，確保快捷功能在表單定位後才出現
    });

    // 解手機板一只查 小畢遮到輸入框問題(原生鍵盤)
    // $(".login-form input[type='text']").focus(function() {
    //     $(".helper").addClass("relative");
    // });
    // $(".login-form input[type='text']").blur(function() {
    //     if ($(".helper").hasClass("relative")) {
    //         $(".helper").removeClass("relative");
    //     }
    // });

    // var w_h = $(window).height();
    // $("body").css({'min-height': w_h - 55+"px"});

    // collapse btn
    // $('.collapse').on('shown.bs.collapse', function() {
    //     $(this).parent().find(".icon-expand").removeClass("icon-expand").addClass("icon-pack-up");
    // }).on('hidden.bs.collapse', function() {
    //     $(this).parent().find(".icon-pack-up").removeClass("icon-pack-up").addClass("icon-expand");
    // });
    // 20191024新增collapse btn 切換上下箭頭
    $('.collapse').on('shown.bs.collapse', function () {
        // collapse 內容展開時
        var collapseId = $(this).attr("id");
        var $collapseds = $(this).parent().find("[data-toggle=collapse]"); //因為階層關係可能取到不只一個

        // 每個檢查到底是要變換哪個collapsed
        $collapseds.each(function () {
            $collapsed = $(this);

            // bootsrap的collapsed會用href或是target指定要開合的對象
            var collapsedHref = $collapsed.attr("href");
            var collapsedTarget = $collapsed.data("target");

            // 如果開合的對象的id有在所選到的$collapsed中，就是我們要選的了
            if ("#" + collapseId === collapsedHref || collapsedTarget.indexof(collapseId) >= 0) {
                $collapsed.find(".icon-expand").first().removeClass("icon-expand").addClass("icon-pack-up");
            }
        });

        // $(this).parent().find(".icon-expand").first().removeClass("icon-expand").addClass("icon-pack-up");
    }).on('hidden.bs.collapse', function () {
        // collapse 內容關閉時
        var collapseId = $(this).attr("id");
        var $collapseds = $(this).parent().find("[data-toggle=collapse]"); //因為階層關係可能取到不只一個

        // 每個檢查到底是要變換哪個collapsed
        $collapseds.each(function () {
            $collapsed = $(this);

            // bootsrap的collapsed會用href或是target指定要開合的對象
            var collapsedHref = $collapsed.attr("href");
            var collapsedTarget = $collapsed.data("target");

            // 如果開合的對象的id有在所選到的$collapsed中，就是我們要選的了
            if ("#" + collapseId === collapsedHref || collapsedTarget.indexof(collapseId) >= 0) {
                $collapsed.find(".icon-pack-up").first().removeClass("icon-pack-up").addClass("icon-expand");
            }
        });
        // $(this).parent().find(".icon-pack-up").first().removeClass("icon-pack-up").addClass("icon-expand");
    });

    $(".owl-tab ul").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        startPosition: 0,
        items: 4,
        margin: 0,
        nav: false,
        navText: ["<i class='svg-ico-s svg-ico-prev'></i>", "<i class='svg-ico-s svg-ico-next'></i>"],
        dot: false
    });

    $(".owl-tab ul li a").click(function () {
        $("#my-tab-content .tab-pane").hide();
        $($(this).attr("href")).show();
        // $("#my-tab-content2 .tab-pane").css("display", "");
        // $("#my-tab-content3 .tab-pane").css("display", "");
        // $(window).scrollTop()
    });

    $('#switchPatternStyle').change(function () {
        var state = $(this).is(':checked');
        if (state) {
            $('#patternLock').removeClass('unlockSuccess');
            $('#patternLock').removeClass('unlockFail');
            $('#patternLock').addClass('transparent');
            $('#patternLock').removeClass('picIcon');
        } else {
            $('#patternLock').removeClass('unlockSuccess');
            $('#patternLock').removeClass('unlockFail');
            $('#patternLock').removeClass('transparent');
            $('#patternLock').removeClass('picIcon');
        }
    });



    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.container_header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > 0) {
            $('.container_header').css('background-color', '#107778');
            $('.container_header.login').css('background-color', '');
        }
        // Scroll Down
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (st > 501) {
                if ($('#fix-tabs').length > 0) {
                    $('.gotop').addClass("show");
                } else if ($('.js-goTop_newPosition').length > 0) {
                    $('.gotop').addClass("show_top160px");
                } else {
                    $('.gotop').addClass("show-s");
                }
            }
        } else {
            if (st < lastScrollTop && st < navbarHeight) {
                // Scroll Up
                if (st < 500) {
                    $('.container_header').css('background-color', '');
                    if ($('#fix-tabs').length > 0) {
                        $('.gotop').removeClass("show");
                    } else if ($('.js-goTop_newPosition').length > 0) {
                        $('.gotop').removeClass("show_top160px");
                    } else {
                        $('.gotop').removeClass("show-s");
                    }

                }
            }
        }

        lastScrollTop = st;


        $('.gotop').click(function () {
            $("html, body").animate({ scrollTop: 0 }, 500);
            return false;
        });
    }

    // /*************************************
    // 超人卡片
    // **************************************/

    // show modal
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

        // 開啟 popup 判斷內容是否要加上陰影，條款滑到底按鈕動態
        popupEvent($modal);


        // 點擊[data-dismiss="modal"]關閉modal
        $modal.on('click', '[data-dismiss="modal"]', function(){
            hideModal($modal);
            return false;
        });

    });

    function popupEvent(e) {
        const $popBody = e.find('.popup-body');
        const $popFooter = e.find('.popup-footer');
        const $goBottom = e.find('.vi-gobottom');

        const scrollHeight = $popBody.prop("scrollHeight") || 0;
        const divHeight = Math.round($popBody.height(), 0) || 0;

        if($popFooter) {
            if(scrollHeight > divHeight) {
                $popFooter.addClass('has-shadow');
            }

            $popBody.scroll(function() {
                let scrollY = $popBody.scrollTop() + divHeight + 20;
                if(scrollY > scrollHeight) {
                    $popFooter.removeClass('has-shadow');
                } else {
                    $popFooter.addClass('has-shadow');
                }
            });
        }

        if($goBottom) {
            const endPosition = scrollHeight - divHeight + 20;
            let i = 0;
			let int;
            $popBody.scroll(function() {
                let scrollY = $popBody.scrollTop() + divHeight + 20;
                if(scrollY > scrollHeight) {
                    $goBottom.addClass('dis-none');
                }
            });

            $goBottom.click(function() {
                int = setInterval(function() {
					$popBody.scrollTop(i);
					i += 10;
					if (i >= endPosition) clearInterval(int);
				}, 0);
            });
        }
        
    }
    

    // /*************************************
    // 新的 Header
    // **************************************/
    var newHeader = document.querySelectorAll('.vi-page-header, .vi-page-header-normal');
    var pageBody = document.querySelector('body');
    if(newHeader.length) {
        window.addEventListener('scroll', function() {
            var scrollDistance = window.pageYOffset;
            if(scrollDistance > 0) {
                pageBody.classList.add('vi-page-header-fix');
            } else {
                pageBody.classList.remove('vi-page-header-fix');
            }
        });

        // 檢查頁面是否已往上捲動
        if(window.pageYOffset > 0) {
            pageBody.classList.add('vi-page-header-fix');
        }
    }
	


    // /*************************************
    // 清單手勢刪除
    // **************************************/
    var listItems = document.querySelectorAll(".list-slider .js_slider_left");
    if(listItems.length) {

        listItems.forEach(function(item) {
            
            item.addEventListener("touchstart", e => {
                e.stopPropagation();

                var touchXStart = e.touches[0].clientX;
                var touchYStart = e.touches[0].clientY;

                var touchDistance = 0;
                var touchDistance_y = 0;

                function touchMove(e) {
                    touchDistance = e.touches[0].clientX - touchXStart;
                    touchDistance_y = Math.abs(e.touches[0].clientY - touchYStart);
                } 

                this.addEventListener("touchmove", touchMove);

                this.addEventListener("touchend", function () {
                    var btnItem = item.nextElementSibling;
                    var left = btnItem.clientWidth;

                    // console.log(touchDistance_y, 'touchDistance:', touchDistance)

                    // 打開選單
                    if(touchDistance_y < 40 && touchDistance < -10) {
                        listItems.forEach(function(otherItem) {

                            var otherBtnItem = otherItem.nextElementSibling;

                            otherItem.style.cssText = '';
                            otherItem.ontransitionend = function() {
                                otherBtnItem.classList.remove('slider-show');
                            }
                        })
                        
                        item.style.cssText = 'left: -' + left + 'px';
                        item.ontransitionstart = function() {
                            btnItem.classList.add('slider-show');
                        }
                        item.ontransitionend = function() {
                            btnItem.classList.add('slider-show');
                        }
                    }

                    // 關閉選單
                    if(touchDistance_y < 40 && touchDistance > 10) {
                        item.style.cssText = '';
                        item.ontransitionend = function() {
                            btnItem.classList.remove('slider-show');
                        }

                        touchDistance = 0;
                        touchDistance_y = 0;
                    }
                    
                    this.removeEventListener("touchmove", touchMove);
                }, {once: true});
            })  
        })
    }

    // 點擊已讀按鈕，關閉選單
    var readBtn = document.querySelectorAll('.js_demo_read_btn');
    if(readBtn) {
        readBtn.forEach(function(ele) {
            var listLeft = ele.parentNode.parentNode.querySelector('.js_slider_left');
            // console.log(listLeft)
            ele.addEventListener('click', function() {
                listLeft.style.cssText = '';
                listLeft.ontransitionend = function() {
                    ele.parentNode.classList.remove('slider-show');
                }
    
            })
        })
    }

    // /*************************************
    // 左右滑動 Tab 選單
    // **************************************/
    var navScroll = document.querySelectorAll('.nav-scroll .nav,.nav-scroll .vi-tab,.nav-scroll .vi-tab-pin');

    // navtab 滑動定位
    if(navScroll) {
        var scrollAmount = 0;
        var step = 10;
        navScroll.forEach(function(nav) {
            var navItem = nav.querySelectorAll('li');

            navItem.forEach(function(item) {
                item.addEventListener('click', function() {
                    // 每個tab需scroll的位置
                    var left = item.getBoundingClientRect().left - 40;

                    scrollAmount = 0;
                    var slideTimer = setInterval(function(){
                        if(left > 0) {
                            item.parentNode.scrollLeft += 10;
                            scrollAmount += step;
                            if(scrollAmount >= left){
                                window.clearInterval(slideTimer);
                            }
                        } else {
                            item.parentNode.scrollLeft -= 10;
                            scrollAmount -= step;
                            if(scrollAmount <= left){
                                window.clearInterval(slideTimer);
                            }
                        }
                        
                    }, 10);
                    
                })
            })
        })
    }

    // 20170825
    // ensure radio button be checked after its wrapper is clicked
    // $('.radio').click(function() {
    //     var $this_input = $(this).find('input');
    //     $('input[name="' + $this_input.attr('name') + '"]').attr('checked', false);
    //     $this_input.attr('checked', true);
    // });
    // 20170828 自訂外幣功能

    

    // /*************************************
    // toast
    // **************************************/
    
    var toastLink = document.querySelectorAll('.js_demo_toast');
    var toast = document.querySelector('.toast');

    var timer;

    function toastRemove() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            toast.classList.remove('show')
        },3000)
    }

    if(toastLink) {
        toastLink.forEach(function(link) {
            link.addEventListener('click', function() {
                toast.classList.add('show')
                toastRemove();
            })
        })
    }

    // /*************************************
    // 
    // **************************************/

    /* create selectableSortableCardList on .selectable-sortable-card-list automatically */
    $('.selectable-sortable-card-list').each(function (idx, element) {
        selectableSortableCardList($(element));
    });

    // 20170918 modal freeze background Page
    // $('.modal').on('shown.bs.modal', function (e) {
    //   $('html').addClass('freezePage'); 
    //   $('body').addClass('freezePage');
    // });
    // $('.modal').on('hidden.bs.modal', function (e) {
    //   $('html').removeClass('freezePage');
    //   $('body').removeClass('freezePage');
    // });

    // 20170828 modal背景關閉效果
    $(".modal-header .close").click(function () {
        $('.modal').modal('hide')
    })


    // 20170901 bootstrap-tagsinput
    $('.bootstrap-tagsinput input').trigger('keydown');


    $('.input-group.search-left.tags').click(function (params) {
        if ($('.bootstrap-tagsinput span').length == 0) {
            $('.bootstrap-tagsinput > input').focus();
        }
    })

    $(window).resize(function () {
        var input_maxwidth = $('.input-group.search-left.tags').width();
        // console.log(input_maxwidth);
        // $('.bootstrap-tagsinput').css('width', input_maxwidth - 30);
        if($('.input-group.search-left.tags')) {
            $('.bootstrap-tagsinput input').css('width', input_maxwidth - 30);
        }
    });



    var bootstrap_tagsinput_out_wrapper = $($('.bootstrap-tagsinput')[0]);

    function bootstrap_tagsinput_magic() {
        bootstrap_tagsinput_out_wrapper.css({ 'width': '0px' });
        var input_maxwidth = $('.input-group.search-left.tags').width() - 30;
        bootstrap_tagsinput_out_wrapper.css({
            'white-space': 'nowrap',
            'width': input_maxwidth.toString() + 'px',
            'overflow-x': 'scroll',
            'overflow-y': 'hidden'
        });

    }
    $(window).resize(bootstrap_tagsinput_magic);
    bootstrap_tagsinput_magic();




    $('.bootstrap-tagsinput input').tagsinput({
        maxChars: 10
    });
    $('.bootstrap-tagsinput .bootstrap-tagsinput').css({
        'max-width': 'initial',
        'min-width': '200px',
    });
    if ($('.bootstrap-tagsinput span').length == 0) {
        $('.bootstrap-tagsinput > input').attr('placeholder', '投資標的關鍵字或8碼標的代碼');
        var input_maxwidth = $('.input-group.search-left.tags').width() + 30;
        $('.bootstrap-tagsinput > input').css('width', input_maxwidth);
    }
    $('.bootstrap-tagsinput input').on('itemAdded', function (event) {
        $('.bootstrap-tagsinput > input').eq(0).attr('placeholder', '');
    });

    // remove callback

    $('.bootstrap-tagsinput').bind("DOMSubtreeModified", function () {

        if ($('.bootstrap-tagsinput span').length == 0) {
            var input_maxwidth = $('.input-group.search-left.tags').width() + 30;

            $('.bootstrap-tagsinput > input').attr('placeholder', '投資標的關鍵字或9碼標的代碼');
            $('.bootstrap-tagsinput input').css('width', input_maxwidth);
            // $('.input-group > .bootstrap-tagsinput').css('width',input_maxwidth );     
        } else {
            $('.input-group > .bootstrap-tagsinput input').css('width', 100);
        }
    });

    // 20171127 加入觀察清單效果
    $(".post-hot").click(function () {
        // toogle active 加入或移除觀察清單
        $(this).toggleClass("active");

        //pop:愛心動畫 加入清單才有
        if ($(this).hasClass("active")) {
            $(this).addClass("pop");

            // 清掉pop, 避免頁面重新進來時會再跑一次動畫
            setTimeout(function () {
                $(".post-hot").removeClass("pop");
            }, 1000);

        } else {
            // 確保pop被清掉 (反覆click時 pop來不及清掉)
            $(".post-hot").removeClass("pop");
        }
    });

    // 20170901 checkbox select all
    $('#select_all').click(function (event) {
        if (this.checked) {
            $(':checkbox').each(function () {
                this.checked = true;
            });
        } else {
            $(':checkbox').each(function () {
                this.checked = false;
            });
        }
    });



    // 日曆用
    // $('.date').datepicker({
    //       language: "zh-TW",                3
    //       width: "100%",
    //       weekStart: 0,
    //       // title: "開始時間"
    //   });



    // datepicker with range
    // datepicker($('#datepicker-default'), {startDate:'-3d', endDate:'+3d'}, '.main_container');
    // datepicker with special view mode
    // datepicker($(element), { viewMode: 'decade',startView: 'years', minView: 'days', viewSelect:'decade'});

    $('.datepicker-default, .datepicker-complexPanel').each(function (ind, element) {
        datepicker($(element), { modalType: 'noBtn_complex_panel' /*(default)*/ }, '.main_container');
    });
    $('.datepicker-dateOnlyMultiple').each(function (ind, element) {
        datepicker($(element), { modalType: 'withBtn_date_only_multiple' }, '.main_container');
    });
    $('.datepicker-dateOnlyMultiple_n').each(function (ind, element) {
        datepicker($(element), { modalType: 'withBtn_date_only_multiple_n' }, '.main_container');
    });
	
    $('.datepicker-dateOnly').each(function (ind, element) {
        datepicker($(element), { modalType: 'noBtn_date_only' }, '.main_container');
    });
    $('.datepicker-singlePanel').each(function (ind, element) {
        datepicker($(element), { modalType: 'withBtn_single_panel' }, '.main_container');
    });
    $('.datepicker-noBtn').each(function (ind, element) {
        datepicker($(element), { modalType: 'noBtn_single_panel' }, '.main_container');
    });






    // 臺幣活存明細 功能 20170821
    $(".otp-setting").hide();
    $(".search-icon").click(function () {
        $(".search-block").hide();
        $(".otp-setting").show();
    });
    $(".otp-search").click(function () {
        $(".otp-setting").hide();
        $(".search-block").show();
    });



    init_default_textAdjustSize();

    iosSwitchButtonSwipe();

    input_date_mingo();
    input_date_west();
    card_expired_date();
    card_no();
    showGotop();
    menuTabAnchor();

    clearInput();
    addAppStatusBG();
    listMaskCollapse();
	inputAutoHeight();

    sortSelect();
    hideModal();

    radialProgress();
	

});


/*
A sortable card list based on sortablejs.
Each item (li) will contain a checkbox, checked items will be sortable.
Checked/unchecked items will be grouped individually, and checked items will be on top.
DOM structure should follow the following example:

Example:
    <div class="">
        <ul class="card-list -forsort">
            <li class="active">
                <div class="checkbox">
                    <label class="form_choose">
                            <i class="txt"></i>
                            <input class="form_choose-input" type="checkbox">
                            <span class="form_choose-img"></span>
                        </label>
                </div>
            </li>
            ...
        </ul>
        <ul class="card-list not-for-sort">
            <li>
                <div class="checkbox">
                    <label class="form_choose">
                            <i class="txt"></i>
                            <input class="form_choose-input" type="checkbox">
                            <span class="form_choose-img"></span>
                        </label>
                </div>
            </li>
            ...
        </ul>
    </div>
*/
var selectableSortableCardList = function ($cardList) {
    var $forSortUl = $cardList.find(".for-sort");
    var $notForSortUl = $cardList.find(".not-for-sort");

    Sortable.create($forSortUl[0], {
        handle: ".drag_place",
        scroll: true,
        // Event when you move an item in the list or between lists
        onMove: function ( /**Event*/ evt, /**Event*/ originalEvent) {
            if (originalEvent.clientY + evt.draggedRect.height * 2 > window.innerHeight) {
                window.scrollBy(0, evt.draggedRect.height + 50);
            }
            console.log();
            $('.not-for-sort li .form_choose input').prop('checked', false);
        },
    });


    var changeStateFn = function () {
        var state = $(this).is(':checked');
        var $parentLi = $(this).parent().parent().parent("li");
        if (state) {
            $parentLi.addClass("active"); // .active: show draggable handle
            $($parentLi).appendTo($forSortUl);
        } else {
            $parentLi.removeClass("active");

            // recreate the element so that no old event listener will bother
            var $newElement = $($parentLi.get(0).outerHTML);
            $newElement.find('.form_choose input').prop('checked', false).change(changeStateFn);
            $parentLi.remove();

            $($newElement).prependTo($notForSortUl);

        }

    }

    $cardList.find(".for-sort li .form_choose input, .not-for-sort li .form_choose input").change(changeStateFn);

};

/*
    ios button format:

    <label for="ios_btn">
        <input id="ios_btn" type="checkbox" class="ios-switch bigswitch" data-swipe-range="parent">
        <div>
            <div></div>
        </div>
    </label>

    data-swipe-range can be:
        'parent-parent' : parent of parent element of the input element
        'parent'(default) : parent element of the input element
        jquery selecter: EX: #xxx .xxx

*/
function iosSwitchButtonSwipe() {
    $('.ios-switch').each(function () {
        var swipeRange = $(this).attr('data-swipe-range');

        var $detectRange;
        if (!swipeRange || swipeRange == 'parent') $detectRange = $(this).parent();
        else if (swipeRange == 'parent-parent') $detectRange = $(this).parent().parent();
        else $detectRange = $(swipeRange);

        var $input = $(this);
        var $button = $(this).next();

        function updateStatus(e) {
            var touch = e.originalEvent.changedTouches[0];
            var buttonMiddlePageX = $button.position().left + $button.width() / 2;
            var y = touch.pageY;
            if (touch.pageX > buttonMiddlePageX) {
                $input.prop('checked', true);
            } else {
                $input.prop('checked', false);
            }
        }

        var wasDragged = false;
        $detectRange.on('touchmove', function (e) {
            wasDragged = true;
            updateStatus(e);

        });
        $detectRange.on('touchend', function (e) {
            if (wasDragged) {
                updateStatus(e);
            }
            wasDragged = false;
        });

    })
}

// /*************************************
// 搜尋框清除按鈕
// **************************************/
function clearInput() {
    var inputGroup = document.querySelectorAll('.vi-search-group');

    inputGroup.forEach(function(group) {
        var inputField = group.querySelector('input');
        var clearBtn = group.getElementsByClassName('icon-input-delete')[0];

        if(inputField.value) {
            clearBtn.classList.add('is-show');
        }

        inputField.addEventListener('input', function() {
            if(this.value) {
                clearBtn.classList.add('is-show');
            } else {
                clearBtn.classList.remove('is-show');
            }
        })
        clearBtn.addEventListener('click', function() {
            inputField.value = '';
            this.classList.remove('is-show');
            this.blur();
        })
    })
}


function patternLock_fn() {
    var options = {
        matrix: [3, 3],
        delimiter: ',',
        radius: 28, // 20180102 radius設定較大的數字，增加感應區寬高
        margin: 12, // 20180102 margin設定較小的數字, margin是非感應區
        lineOnMove: false,
        onDraw: function (pattern) {
            // console.log(options);
            $('#patternLock').addClass('unlockFail');
            $('#patternLock').removeClass('unlockSuccess');
            // console.log("Pattern: " + pattern);
            setTimeout(function () {
                lock.reset();
                if (!$('#patternLock').hasClass('transparent')) {
                    $('#patternLock').addClass('unlockSuccess');

                }
                $('#patternLock').removeClass('unlockFail');

            }, 800);

        }
    }
    var lock = new PatternLock($("#patternLock"), options);
    $("#patternLock").addClass('unlockSuccess');
}

// 20170908 登入bar動態
function goprogress() {
    setTimeout(function () {
        $('.progress .bar').each(function () {
            var me = $(this);
            var perc = me.attr("data-percentage");
            //TODO: left and right text handling
            var current_perc = 0;
            var progress = setInterval(function () {
                if (current_perc >= perc) {
                    clearInterval(progress);
                } else {
                    current_perc += 3;
                    me.css('width', (current_perc) + '%');
                }
                me.text((current_perc) + '%');
            }, 50);
        });
    }, 50);
}

function activateButton() {
    $('.owl-tab .item').click(function () {
        $(this).parent().parent().find('.item').removeClass('on');
        $(this).addClass('on');
    })
}





/* text of elements with 'auto-text-size' class will be adjusted according to its text-width-vw-ratio
    and text-width-adjust-minlen attribute.
    
    param text-width-vw-ratio:
        text content width limit in vw.
        if text-width-vw-ratio is not set, the width of the element will be used as the limit of text 
            content width. In this case, the width of the element should not fit content automatically.
    param text-width-adjust-minlen:
        the minimun content length that text size adjustment can be performed.
        if content length is less than this value, no adjustment will be done to save resources.
        default: 5
    
        
    Example:
            <div class="auto-text-size" text-width-vw-ratio="0.3">text...</div>
            the total text width of the above element will not exceed 0.3 vw.
    
*/
function init_default_textAdjustSize() {
    var that = this;
    $('.auto-text-size').each(function (idx, element) {
        var vw = parseFloat($(element).attr('text-width-vw-ratio'));
        var adjustWhenLengthExceed = parseInt($(element).attr('text-width-adjust-minlen')) || 5;

        var widthLimitFunc;
        if (vw) {
            widthLimitFunc = function () {
                return $(window).width() * vw;
            };
        } else {
            widthLimitFunc = -1;
        }

        function doAdjust() {
            // 抓取內容字串 (支援input value與一般HTML content)
            var content = ($(element).is('input')) ? $(element).val() : $(element).html();
            if (content < adjustWhenLengthExceed) return;
            that.textAdjustSize($(element), widthLimitFunc, 6, true);
        }

        // 解決firefox會將inline css更動也視為DOMSubtreeModified導致無窮迴圈的問題
        var lastHTML = '';

        function checkHTMLModifiedAndDoAdjust() {
            if ($(element).html() != lastHTML) {
                lastHTML = $(element).html();
                doAdjust();
            }
        }


        // 綁定listener
        $(window).resize(doAdjust);
        $(element).bind("DOMSubtreeModified", checkHTMLModifiedAndDoAdjust); // 如果對象是div
        $(element).change(checkHTMLModifiedAndDoAdjust); // 如果對象是input
        doAdjust();
        // 若使用$(..).val(...)進行修改，必須接著進行$(..).trigger("change")，否則無法觸發listener
    });

}

function input_date_mingo() {
    if (window['mingo']) {
        var cleave = new Cleave('#mingo', {
            numericOnly: true,
            delimiter: '/',
            blocks: [3, 2, 2],
        });
    }
}

function input_date_west() {
    if (window['west']) {
        var cleave = new Cleave('#west', {
            numericOnly: true,
            delimiter: '/',
            blocks: [4, 2, 2],
        });
    }
}

function card_expired_date() {
    if ($('.card_expired_date input').length > 0) {
        var cleave = new Cleave('.card_expired_date input', {
            date: true,
            datePattern: ['m', 'y']
        });
    }
}


function card_no() {
    if ($('.card_no input').length > 0) {
        var cleave = new Cleave('.card_no input', {
            delimiter: ' - ',
            blocks: [4, 4, 4, 4]
        });
    }
}

//廣告輪播點點移動效果（使用owl-carousel套件）
// 2020-06-01更新：有選取對象的地方（除了owl-cover外）都加上父層“.allitem”

//改變點的尺寸
function owlDotSize(no, border) {
    $(".allitem .owl-dot:eq(" + no + ")").css({ "border": border + "px solid #fff" });
};

//控制點移動效果
function owlDotsMove(dotNum) {
    let dotIndexOld;    //前一個active的點的index
    let nextDotBorder;
    let prevDotBorder;
    let allItem=$('.allitem')

    allItem.on('change.owl.carousel', function () {
        dotIndexOld = $(".allitem .owl-dot.active").index();
    });

    allItem.on('changed.owl.carousel', function () {  //點移動
        let dotIndex = allItem.find(".owl-dot.active").index();
        nextDotBorder=allItem.find(".owl-dot:eq(" + (dotIndex+1) + ")").css("border-width") 
        prevDotBorder=allItem.find(".owl-dot:eq(" + (dotIndex-1) + ")").css("border-width") 
        owlDotSize(dotIndex, 0);//選到的點變回原size

        if (dotIndexOld < dotIndex) {   //按右邊箭頭
            if(nextDotBorder !== "0px" && dotIndex > 3){ 
                owlDotSize(dotIndex + 1, 0.6);
                owlDotSize(dotIndex + 2, 1.2);
                owlDotSize(dotIndex - 3, 0); //點變回原size
                owlDotSize(dotIndex - 4, 0.6); 
                owlDotSize(dotIndex - 5, 1.2);
                allItem.find(".owl-dots").animate({ right: (dotIndex - 3) * 12 + "px" }, 300);
            }
        } else {  //按左邊箭頭
            if(prevDotBorder !== "0px" && dotIndex < dotNum - 4){
                owlDotSize(dotIndex - 2, 1.2);
                owlDotSize(dotIndex - 1, 0.6);
                owlDotSize(dotIndex + 2, 0); //點變回原size
                owlDotSize(dotIndex + 3, 0); 
                owlDotSize(dotIndex + 4, 0.6); 
                allItem.find(".owl-dots").animate({ right: dotIndex  * 12 + "px" }, 300);
            }
        };

    });
}

//點點移動效果初始化設定
function owlInit() {
    let dotNum = $(".allitem .owl-dot").length;
    if (dotNum > 6) {
        if ($(".carousel_banner_in").length > 0) {
            $(`<div class="owl-cover owl-coverBefore"></div>
        <div class="owl-cover owl-coverAfter"></div>`).appendTo(".carousel_banner_in")
        } else if ($(".carousel_card_in").length > 0) {
            $(`<div class="owl-cover owl-coverBefore"></div>
        <div class="owl-cover owl-coverAfter"></div>`).appendTo(".carousel_card_in")
        }

        coverWidth = ($(document.body).width() - 72) / 2;  //只顯示6個點
        $(".owl-coverBefore").css("width", coverWidth -24 + "px");
        $(".owl-coverAfter").css("width", coverWidth  + "px");

        $(".allitem .owl-dots").css({ "width": dotNum * 12, "margin-left": coverWidth + "px" });

        owlDotSize(4, 0.6);  //點變小
        owlDotSize(5, 1.2);

        owlDotsMove(dotNum);   //點移動
    }
}


// /*************************************
// 小針 go to top
// **************************************/
function showGotop() {
    var gotop = document.querySelector('.vi-gotop');
    var pageBottom = document.querySelector('.vi-page-bottom');
    var pageBottomHeight;
    var i = 0;

    if(gotop) {
        // 回到頂端動態
        gotop.addEventListener('click', function() {
            i = window.scrollY;
            var int = setInterval(function() {
                if (i <= 0) {
                    clearInterval(int)
                    i = 0;
                    window.scrollTo(0, 0);
                    // document.body.style.cssText = ''
                } else {
                    window.scrollTo(0, i);
                    i -= 30;
                    // 加 overflow:hidden 阻止頁面橡皮筋效果，回到頂端再解除
                    // document.body.style.cssText = 'overflow: hidden;'
                };
            }, 0);
        })

        // 按鈕顯示
        if(window.scrollY >= window.innerHeight) {
            gotop.classList.add('vi-gotop-show');
        }

        window.addEventListener('scroll', function() {
            if(window.scrollY >= window.innerHeight) {
                gotop.classList.add('vi-gotop-show');
            } else {
                gotop.classList.remove('vi-gotop-show');
            }
        })

        gotopPosition(gotop);

    }
}
// 改變按鈕位置(獨立出來可讓頁面執行)
var gotopPosition = function(e) {
    
    let footerHeight = 0;
    const indexFooter = document.querySelector('#footer');
    const footer = document.querySelector('.vi-page-footer');

    if(indexFooter) {
        footerHeight = indexFooter.offsetHeight;
    }
    if(footer) {
        footerHeight = footer.offsetHeight;
    }
    
    var modalFixed = document.querySelector('.vi-modal-fixed-container');
    var plusHT = 0;
    if(modalFixed) {
        plusHT = Math.max(document.querySelector('.vi-modal-fixed .super-card').offsetHeight, 0);
    }

    e.style.bottom = footerHeight + plusHT + 24 + 'px';
}


// /*************************************
// scroll TAB
// **************************************/
function menuTabAnchor() {
    // 定錨至 tab on 位置
    var menuTab = document.querySelector('.menu-tab-scroll');
    if(menuTab) {
        // var left = item.getBoundingClientRect().left - 40;
        var activePosition = menuTab.querySelector('.on').offsetLeft - 40;
        console.log(activePosition, menuTab.querySelector('.on').offsetLeft)
        menuTab.scrollTo(activePosition, 0)
    }
}

// /*************************************
// status bar 加底圖
// **************************************/
function addAppStatusBG() {
    const statusBg = document.createElement('div');
    statusBg.classList.add('app-status-bg');

    const noHeader = document.querySelector('.ios-wrap .no-header');
    const indexHeader = document.querySelector('.vi-login-wrap');

    function statusBgShow() {
        window.addEventListener('scroll', function() {
            if(window.scrollY > 10) {
                statusBg.classList.add('is-show');
            } else {
                statusBg.classList.remove('is-show');
            }
        });
    }

    if(noHeader) {
        noHeader.appendChild(statusBg);
        statusBgShow();
    }
    if(indexHeader) {
        indexHeader.appendChild(statusBg);
        statusBgShow();
    }
}

// /*************************************
// 列表收合遮罩 (.js_collapse_mask)
// **************************************/
function listMaskCollapse() {
    const maskCollapse = document.querySelectorAll('.js_collapse_mask');

    if(maskCollapse) {
        maskCollapse.forEach(block => {
            const collapseLink = block.querySelector('.vi-icon-link');
            const collapseText = collapseLink.querySelector('.vi-label').dataset.collapsed;
            const expandText = collapseLink.querySelector('.vi-label').dataset.expand;

            const collapseContent = block.querySelector('.list-collapse-mask');

            // 初始樣式設定
            const isShow = collapseLink.dataset.show;

            if(isShow == 'false') {
                collapseContent.classList.remove('is-show');
                collapseContent.style.height = '';

                collapseLink.querySelector('.vi-label').innerHTML = collapseText;
            } else {
                collapseContent.classList.add('is-show');
                collapseContent.style.height = `${collapseContent.scrollHeight}px`;

                collapseLink.querySelector('.vi-label').innerHTML = expandText;
                collapseLink.querySelector('.vi-icon').classList.replace('icon-plus-g', 'icon-minus-g');
            }

            // 點擊按鈕切換展開收合樣式
            collapseLink.addEventListener('click', changeText);

            function changeText(e) {
                
                if(collapseContent.classList.contains('is-show')) {
                    collapseContent.classList.remove('is-show');
                    collapseContent.style.height = '';

                    collapseLink.querySelector('.vi-label').innerHTML = collapseText;
                    collapseLink.querySelector('.vi-icon').classList.replace('icon-minus-g', 'icon-plus-g');
                } else {
                    collapseContent.classList.add('is-show');
                    collapseContent.style.height = `${collapseContent.scrollHeight}px`;

                    collapseLink.querySelector('.vi-label').innerHTML = expandText;
                    collapseLink.querySelector('.vi-icon').classList.replace('icon-plus-g', 'icon-minus-g');
                }
            }

        });
    }   
}


// /*************************************
// 12RC input 輸入時長高
// **************************************/
function inputAutoHeight() {
	const formInputs = document.querySelectorAll('.auto-ht textarea');

	if(formInputs) {
		 formInputs.forEach(formInput => {
			formInput.addEventListener('input', function () {
				let _this = this;
				_this.style.height = 'auto';
				_this.style.height = `${_this.scrollHeight}px`;
			})
		 });
	}
}


function sortSelect() {
    // 排序選單 (.vi-sort-select)
    const sortSelect = document.querySelectorAll('.vi-sort-select');

    if(sortSelect) {
        sortSelect.forEach(sort => {

            const sortItem = sort.querySelectorAll('.vi-sort-item');
            const $sortModal = $(sort.closest('.vi-modal'));

            sortItem.forEach(item => {
                const label = item.querySelector('.vi-sort-state');

                let active = item.dataset.current;
                let state = 1;
        
                item.addEventListener('click', function() {

                    active = item.dataset.current;

                    sortItem.forEach(oldItem => {
                        if(oldItem.classList.contains('is-active')) {
                            oldItem.classList.remove('is-active');
                            oldItem.dataset.current = 'false';
                        }
                    });
        
                    this.classList.add('is-active');
                    this.dataset.current = 'true';

                    // 點擊變換升冪/降冪：條件需為目前已選擇項目，且有升冪/降冪
                    if(active == 'true' && this.classList.contains('is-active') && label) {
                        const words = label.querySelector('.vi-txt');
                        const icon = label.querySelector('.vi-icon');

                        if(state == 1) {
                            icon.style.transform = "rotate(0deg)";
                            words.innerText = words.dataset.sortcustom;
                            state = 2;
                        } else {
                            icon.style.transform = "rotate(0deg)";
                            words.innerText = words.dataset.sortdefault;
                            state = 1;
                        }
                    }

                    hideModal($sortModal);
                });
        
                
            });
            
        });
    }
    
}

// hide modal
function hideModal($modal) {
    if ($modal == undefined) {
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

// 智動GO 進度環
function radialProgress() {
    const radial = document.querySelectorAll('.js_radial_progress');

    if(radial) {
        radial.forEach(item => {

            const num = parseInt(item.dataset.num);
            let i = 0;
    
            if (num > 100) {
                item.querySelector('.vi-label span').innerText = '100%';
            } else {
                item.querySelector('.vi-label span').innerText = `${num}%`;
            }
    
            function fillAni(i) {

                let fill = Math.round((100 * i) / 360, 0);
                
                if (i <= 180) {
                    item.querySelector('.vi-shape').style.backgroundImage = `linear-gradient(${90+i}deg, transparent 50%, #d8dfe3 50%),linear-gradient(90deg, #d8dfe3 50%, transparent 50%)`;
                } else {
                    item.querySelector('.vi-shape').style.backgroundImage = `linear-gradient(${i-90}deg, transparent 50%, #9081A8 50%),linear-gradient(90deg, #d8dfe3 50%, transparent 50%)`;
                }

                // 填滿的動畫，每次加1
                if (fill < num && fill < 100) {
                    setTimeout(function () {
                        fillAni(++i)
                    }, 1);
                }

            }

            fillAni(i);

        });

    }
    
}