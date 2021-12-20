$(function() {
    init();


    function init() {
        setTime();
        set();
        setInterval(setTime, 1000);;
        setInterval(set, 1000);
    }
    //获取几点场的秒杀时间
    function targetTime(time) {
        if (time < 2) {
            return "2:00";
        } else if (time < 4) {
            return "4:00";
        } else if (time < 6) {
            return "6:00";
        } else if (time < 8) {
            return "8:00";
        } else if (time < 10) {
            return "10:00";
        } else if (time < 12) {
            return "12:00";
        } else if (time < 14) {
            return "14:00";
        } else if (time < 16) {
            return "16:00";
        } else if (time < 18) {
            return "18:00";
        } else if (time < 20) {
            return "20:00";
        } else if (time < 22) {
            return "22:00";
        } else {
            return "00:00";
        }
    }
    //返回当前时间
    function time() {
        var now = new Date();
        return [now.getFullYear(), parseInt(now.getMonth()) + 1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds()];
    }
    //设置几点场
    function setTime() {
        $(".time").html(targetTime(time()[3]));

    }
    //
    function set() {
        var targetHour = targetTime(time()[3]);
        var date = targetHour == "00:00" ? parseInt(time()[2]) + 1 : time()[2];
        //获取目标时间毫秒
        var target = +new Date("" + time()[0] + "-" + time()[1] + "-" + date + " " + targetHour);
        //获取当前时间毫秒
        var now = +new Date();
        var distance = (target - now) / 1000;

        var hour = parseInt(distance / 60 / 60 % 24);
        var minutes = parseInt(distance / 60 % 60);
        var second = parseInt(distance % 60);
        hour = hour >= 10 ? hour : "0" + hour;
        minutes = minutes >= 10 ? minutes : "0" + minutes;
        second = second >= 10 ? second : "0" + second;

        $(".hour").html(hour);
        $(".minutes").html(minutes);
        $(".second").html(second);

    }

})