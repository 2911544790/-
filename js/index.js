$(function() {
    window.addEventListener("selectstart", function(e) {
            e.preventDefault();
        })
        //初始化地址
    init();

    //初始化秒杀部分轮播图
    function init() {
        //从本地存储获取上次选择的地址 有则给其添加样式，无则默认为辽宁
        if (localStorage.getItem("address") !== null) {
            $(".province").html(localStorage.getItem("address"));
        } else {
            $(".province").html("辽宁");
        }

        if (localStorage.getItem("id") !== null) {
            $(".country ul li").eq(localStorage.getItem("id") - 1).children("a").css({
                "backgroundColor": "#C81623",
                "color": "white"
            });
        } else {
            $(".country ul li").eq(7).children("a").css({
                "backgroundColor": "#C81623",
                "color": "white"
            });
        }
    }

    $(".advertisement .cross").on("click", function() {
        $(".top").hide();
    });

    var t = setInterval(function() {
        if ($(".word-change").html() == "好物重逢价") {
            $(".word-change").html("家具双十二");
        } else {
            $(".word-change").html("好物重逢价");
        }

    }, 3000);
    //外国图标
    $(".foreign  span,.foreign-country span").each(function(i, e) {
        if (i <= 2 || i >= 5 && i <= 7) {
            $(e).css({
                "background": "url(images/flag.png) no-repeat " + i % 5 * -20 + "px 0 ",
                "display": "block",
                "width": "17px",
                "height": "12px",
                "vertical": "middle"
            });
        } else {
            $(e).css({
                "background": "url(images/flag.png) no-repeat " + i % 2 * -20 + "px -16px",
                "display": "block",
                "width": "17px",
                "height": "12px",
                "vertical": "middle"
            });
        }
    });


    $(".select-country").hover(function() {
        $(this).children("span").css("backgroundColor", "white");
        $(this).children(".country").toggle();
    }, function() {
        $(this).children("span").css("backgroundColor", "#E3E4E5");
        $(this).children(".country").toggle();
    });
    //改变地址
    $(".country li a").on("click", function() {
        $(this).css({
            "backgroundColor": "#C81623",
            "color": "white"
        });
        $(this).parent().siblings("li").children("a").css({
            "backgroundColor": "#fff",
            "color": "#666"
        });
        $(".province").html($(this).html());
        //本地存储地址
        localStorage.setItem("address", $(".province").html());
        localStorage.setItem("id", $(this).prop("id"));
    });
    $(".gat a").on("click", function() {
        $(".province").html($(this).html());
        $(this).addClass("style-red").siblings().removeClass("style-red");
    });

    $("#main").on("focus", function() {
        if ($(this).val() == "黄金手链") {
            $(this).val("");
        }
    });


    $("#main").on("blur", function() {
        if ($(this).val() == "") {
            $(this).val("黄金手链");
        }
    });
    //小li下滑
    $(".more").hover(function() {
        $(this).toggleClass("hover").find("section").toggle();
    });
    $(".code").hover(function() {
        $(".phone-box").toggle();
    });

    //service-list图片切换
    $(".service-list a").hover(function() {
        $(this).children(".icon-prev").toggle().siblings(".icon-hover").toggle();
    });

    $(".service-list ul li").each(function(i, e) {
        if (i < 3) {
            $(e).on("mouseenter", function() {
                $(".service").stop().slideDown();
            })
        }
    });
    $(".nav-tab li").hover(function() {
        $(this).siblings("li").children("section").hide();
        $(this).css("border-bottom", "2px solid red").children("section").show();

    }, function() {
        $(this).css("border-bottom", "");
    });
    $(".huafei .cross").on("click", function() {
        $(".service").stop().slideUp();
    });

    //若卷去窗口部分等于秒杀到顶部距离时，导航栏出现
    $(window).on("scroll", function(e) {
        if ($("html").scrollTop() >= $(".second-kill").offset().top) {
            $(".hide-top").stop().slideDown();
            $("aside").addClass("current").children(".backTop").fadeIn();
        } else {
            $(".hide-top").stop().slideUp();
            $("aside").removeClass("current").children(".backTop").fadeOut();
        }
    });

    //侧边栏事件
    $(".backTop").on("click", function() {
        $("html").animate({
            "scrollTop": "0"
        }, 500);
    });
    $(".jd-ms").on("click", function() {
        $("html").animate({
            "scrollTop": $(".second-kill").offset().top - 120
        }, 300);
    });
    $(".ts-yx").on("click", function() {
        $("html").animate({
            "scrollTop": $(".special-choose").offset().top - 120
        }, 300);
    });
    $(".pd-gc").on("click", function() {
        $("html").animate({
            "scrollTop": $(".ground").offset().top - 120
        }, 300);
    });
    $(".wn-tj").on("click", function() {
        $("html").animate({
            "scrollTop": $(".recommend").offset().top - 120
        }, 300);
    });
    $(window).on("scroll", function(e) {
        if ($("html").scrollTop() >= $(".recommend").offset().top - 121) {
            $("aside a").eq(3).addClass("style-red").siblings("a").removeClass("style-red");
        } else if ($("html").scrollTop() >= $(".ground").offset().top - 121) {
            $("aside a").eq(2).addClass("style-red").siblings("a").removeClass("style-red");
        } else if ($("html").scrollTop() >= $(".special-choose").offset().top - 121) {
            $("aside a").eq(1).addClass("style-red").siblings("a").removeClass("style-red");
        } else if ($("html").scrollTop() >= $(".second-kill").offset().top - 121) {
            $("aside a").eq(0).addClass("style-red").siblings("a").removeClass("style-red");
        }
    });
    //底部服务部分
    $(".footer-service li").each(function(i, e) {
        $(e).children("h5").css("background", "url(images/dkhs.png) no-repeat -" + i * 41 + "px -192px ");
    });
    $(".copyright-auth a").each(function(i, e) {
        $(e).css("background", "url(images/dkhs.png) no-repeat -205px -" + i * 37 + "px");
    });
    //优选部分
    $(".discount-content").each(function(i, e) {
        if (i == 0) {
            $(e).show();
        } else {
            $(e).hide();
        }
    });
    $(".hd li").on("mouseenter", function() {
        var index = $(this).index();
        $(".discount-content").eq(index).show().siblings(".discount-content").hide();
        $(this).children("a").css({
            "border-bottom": "2px solid red",
            "color": "red"
        });
        $(this).siblings("li").children("a").css({
            "border-bottom": "",
            "color": "#666"
        });
    });
    $(".li-two-top a").on("mouseenter", function() {
        $(this).addClass("active").siblings("a").removeClass("active");
        var index = $(this).index();
        $(".li-two-content ul li").eq(index).show().siblings("li").hide();
    });


    // 发现好货动画
    //动画定时器

    var timer = setInterval(timeOut, 20);
    $(".choose-contain-two").hover(function() {
        //鼠标移入清除定时器
        clearInterval(timer);
        $(".slide").show();
    }, function() {
        // 鼠标移出添加定时器
        // 添加前先清除 防止叠加
        clearInterval(timer);
        timer = setInterval(timeOut, 20);
        $(".slide").hide();
    });
    //动画的left值
    var left = 0;
    //定时器函数
    function timeOut() {
        left++;
        var slideWidth = $(".slide").width() - 60;
        $(".choose-contain-two ul").css("left", -left);
        $(".choose-contain-two .block").css("left", left * slideWidth / 2000);
        if (left >= 2000) {
            left = 0;
        }
    }
    //滑块事件
    $(".block").on("mousedown", function(e) {
        //获取鼠标和滑块初始位置
        var pageLeft = e.pageX;
        var blockLeft = $(this).position().left;
        //鼠标按下移动
        //绑定在window防止鼠标竖直方向移动
        $(window).on("mousemove", function(e) {
            //计算鼠标移动距离和滑块的位置
            var spaceX = e.pageX - pageLeft;
            var space = blockLeft + spaceX;
            var slideWidth = $(".slide").width() - 60;
            if (space < 0) {
                space = 0;
            } else if (space > slideWidth) {
                space = slideWidth;
            }
            //滑块随鼠标移动
            $(".block").css("left", space);
            //按比例计算出动画的移动距离
            left = space * 2000 / (slideWidth);
            $(".choose-contain-two ul").css("left", -left);

        });
        $(window).on("mouseup", function() {
            //鼠标释放注销事件
            $(window).off("mousemove");
            clearInterval(timer);
            timer = setInterval(timeOut, 20);
        });
    });

    //为你推荐 固定部分
    $(window).on("scroll", function(e) {
        if ($("html").scrollTop() >= $(".recommend  .recommend-tab").offset().top) {
            $(".recommend-fixed").stop().slideDown();
        } else {
            $(".recommend-fixed").stop().slideUp();
        }
    });
    //为你推荐 列表点击
    $(".recommend .tab  li").eq(0).addClass("selected");
    $(".recommend-fixed li").eq(0).addClass("selected");

    $(".recommend .tab  li").on("click", function() {
        $(this).eq(0).addClass("selected").siblings("li").removeClass("selected");
        //同步固定部分
        var index = $(this).index();
        $(".recommend-fixed li").eq(index).addClass("selected").siblings("li").removeClass("selected");
        //点击后跳到顶部
        $("html").animate({
            "scrollTop": $(".recommend").offset().top - 120
        }, 300);
        //点击列表，相应列表出现
        $(".recommend-content ol>li").eq(index).show().siblings("li").hide();
    });
    $(".recommend-fixed li").on("click", function() {
        $(this).eq(0).addClass("selected").siblings("li").removeClass("selected");
        var index = $(this).index();
        $(".recommend .tab  li").eq(index).addClass("selected").siblings("li").removeClass("selected");
        $("html").animate({
            "scrollTop": $(".recommend").offset().top - 120
        }, 300);
        $(".recommend-content ol>li").eq(index).show().siblings("li").hide();
    });






});