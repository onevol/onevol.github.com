/**
 * Created by dell on 2016/8/25.
 */
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
    if (scrollTop > 500) { //判断滚动条距离窗口顶部多远时显示出来，这里是100px
        document.getElementById("top_button").style.transform = "translate3d(0,0,0)";
        document.getElementById("top_button").style.width = "64px";
        document.getElementById("top_button").style.height = "64px";
    } else {
        document.getElementById("top_button").style.transform = "translate3d(12px,160px,0)";
        document.getElementById("top_button").style.width = "100px";
        document.getElementById("top_button").style.height = "100px";
    }
};