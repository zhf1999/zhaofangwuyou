function setRem() {
    var rem = 375;
    var client_ = document.documentElement.clientWidth || document.body.clientWidth;

    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = client_ / rem * 10 + 'px';
}
window.onresize = setRem;