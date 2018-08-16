var Home = function() {
    this.init();
};

$.extend(Home.prototype, {
    init: function() {
        this.checkVideo();
        this.handleScroll();
        this.handleVideoPlay();
        this.handleSelect();
        var UA = navigator.userAgent,
            isAndroid = /android|adr/gi.test(UA),
            isIos = /iphone|ipod|ipad/gi.test(UA) && !isAndroid;
        if (!isAndroid && !isIos) {
            this.handleTab();
        }
        if (isAndroid || isIos) {
            this.handleMobileTab();

        }
        this.handleBackShow();
        this.download();
    },

    checkVideo: function() {
        if (!!document.createElement('video').canPlayType) {} else {
            $('.J-control-img li').find('img').show();
        }
    },

    handleVideoPlay: function() {
        var UA = navigator.userAgent,
            isAndroid = /android|adr/gi.test(UA),
            isIos = /iphone|ipod|ipad/gi.test(UA) && !isAndroid;
        if (isAndroid || isIos) {
            $('.J-control-img li').find('video').removeAttr('loop');
            $('.J-control-img li').find('video').removeAttr('autoplay');
            $('.J-control-img li').find('video').removeAttr('preload');
            // $('.J-control-img li').find('video').remove();
        }

    },

    handleScroll: function() {
        $(window).scroll(function() {
            var winTop = $(window).scrollTop();
            var leftWidth = $('.J-img').width();
            var rem = leftWidth / 15;
            if (winTop > 0) {
                if (leftWidth == 500 || leftWidth == 550) {
                    $('.J-beauty1').animate({ left: 0, opacity: 1 }, "slow");
                    $('.J-beauty2').animate({ top: 300, opacity: 1 }, "slow");
                } else {
                    $('.J-beauty1').animate({ left: 0, opacity: 1 }, "slow");
                    $('.J-beauty2').animate({ top: 9 * rem, opacity: 1 }, "slow");
                }

            }
        });
    },

    handleTab: function() {
        var self = this;
        $('.J-change').on('click', 'li', function() {
            var $this = $(this);
            var index = $(this).index()
            if (!$this.hasClass('active')) {
                $this.addClass('active').siblings().removeClass('active');
                $('.J-img').find('li').eq(index).addClass('active').siblings().removeClass('active');
                $('.J-dec').find('li').eq(index).addClass('active').siblings().removeClass('active');
                var leftWidth = $('.J-img').width();
                if (leftWidth == 500 || leftWidth == 550) {
                    if (index == 0) {
                        $('.J-filter1').animate({ left: -40, opacity: 0 }, "slow");
                        $(".J-filter2").animate({ left: -80, opacity: 0 }, "slow");
                        $(".J-filter3").animate({ left: -120, opacity: 0 }, "slow");
                        $('.J-video').animate({ top: 50, opacity: 0 }, "slow");
                        $('.J-beauty1').animate({ left: 0, opacity: 1 }, "slow");
                        $('.J-beauty2').animate({ top: 300, opacity: 1 }, "slow");
                    }
                    if (index == 1) {
                        $('.J-beauty1').animate({ left: -100, opacity: 0 }, "slow");
                        $('.J-beauty2').animate({ top: 400, opacity: 0 }, "slow");
                        $('.J-video').animate({ top: 50, opacity: 0 }, "slow");
                        $('.J-filter1').animate({ left: 0, opacity: 1 }, "slow");
                        setTimeout('$(".J-filter2").animate({left: 130,opacity:1 }, "slow")', 300);
                        setTimeout('$(".J-filter3").animate({left: 185 ,opacity:1}, "slow")', 700);
                    }
                    if (index == 2) {
                        $('.J-beauty1').animate({ left: -100, opacity: 0 }, "slow");
                        $('.J-beauty2').animate({ top: 400, opacity: 0 }, "slow");
                        $('.J-filter1').animate({ left: -40, opacity: 0 }, "slow");
                        $(".J-filter2").animate({ left: -80, opacity: 0 }, "slow");
                        $(".J-filter3").animate({ left: -120, opacity: 0 }, "slow");
                        $('.J-video').animate({ top: 0, opacity: 1 }, "slow");
                    }
                } else {
                    self.mobileTab(index,leftWidth);
                }
            }
        });
    },

    handleSelect: function() {
        $('.J-select').on('click', function() {
            var flag = $('.J-languge-list').hasClass('hide');
            if (flag) {
                $('.J-languge-list').removeClass('hide');
            } else {
                $('.J-languge-list').addClass('hide');
            }
        });

    },

    handleBackShow: function() {
        var UA = navigator.userAgent,
            isAndroid = /android|adr/gi.test(UA),
            isIos = /iphone|ipod|ipad/gi.test(UA) && !isAndroid;
        if (!isAndroid && !isIos) {
            $(document).scroll(function() {
                var top = $(document).scrollTop();
                if (top > 0) {
                    $('.J-back-top').css('display', 'block');

                } else {
                    $('.J-back-top').css('display', 'hide');
                }
            });
        }
    },

    download: function() {
        var isIOS = (/(iPhone|iPod|iOS)/i.test(navigator.userAgent));
        var btn = document.getElementById('J-download-btn');
        if (isIOS) {
            btn.href = 'https://app.appsflyer.com/id622434129?pid=bpwebsite';
        } else {
            btn.href = 'https://app.appsflyer.com/com.commsource.beautyplus?pid=bpwebsite';
        }
    },

    handleMobileTab: function() {
        var self = this;
        $(function() {
            function carousel() {
                var dataId = $(".J-change").find("li[class='active']").attr('data-id');
                if (dataId > 1) {
                    dataId = -1;
                }
                dataId++;
                $("#tab" + dataId).trigger('click');
            };
            setInterval(carousel, 4000);
            for (var i = 0; i < 3; i++) {
                $("#tab" + i).click(function() {
                    var index = $(this).index();
                    $(this).addClass('active').siblings("li").removeClass('active');
                    $('.J-img').find('li').eq(index).addClass('active').siblings().removeClass('active');
                    $('.J-dec').find('li').eq(index).addClass('active').siblings().removeClass('active');
                    var leftWidth = $('.J-img').width();
                    self.mobileTab(index,leftWidth);
                });
            }

        });
    },

    mobileTab: function(index, leftWidth) {
        var rem = leftWidth / 15;
        if (index == 0) {
            $('.J-filter1').animate({ left: -5 * rem, opacity: 0 }, "slow");
            $(".J-filter2").animate({ left: -3.9 * rem, opacity: 0 }, "slow");
            $(".J-filter3").animate({ left: -5.55 * rem, opacity: 0 }, "slow");
            $('.J-video').animate({ top: 5 * rem, opacity: 0 }, "slow");
            $('.J-beauty1').animate({ left: 0, opacity: 1 }, "slow");
            $('.J-beauty2').animate({ top: 9 * rem, opacity: 1 }, "slow");
        }
        if (index == 1) {
            $('.J-beauty1').animate({ left: -5 * rem, opacity: 0 }, "slow");
            $('.J-beauty2').animate({ top: 12 * rem, opacity: 0 }, "slow");
            $('.J-video').animate({ top: 5 * rem, opacity: 0 }, "slow");
            $('.J-filter1').animate({ left: 0, opacity: 1 }, "slow");
            setTimeout('$(".J-filter2").animate({left: ' + 3.9 * rem + ',opacity:1 }, "slow")', 300);
            setTimeout('$(".J-filter3").animate({left: ' + 5.55 * rem + ' ,opacity:1}, "slow")', 700);
        }
        if (index == 2) {
            $('.J-beauty1').animate({ left: -5 * rem, opacity: 0 }, "slow");
            $('.J-beauty2').animate({ top: 12 * rem, opacity: 0 }, "slow");
            $('.J-filter1').animate({ left: -5 * rem, opacity: 0 }, "slow");
            $(".J-filter2").animate({ left: -3.9 * rem, opacity: 0 }, "slow");
            $(".J-filter3").animate({ left: -5.55 * rem, opacity: 0 }, "slow");
            $('.J-video').animate({ top: 0, opacity: 1 }, "slow");
        }

    }

});

new Home();
