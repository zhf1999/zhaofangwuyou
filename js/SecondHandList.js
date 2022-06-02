
var show = document.getElementsByClassName('show')[0].children;
var hide = document.getElementsByClassName('hide')[0].children;
var nav = document.getElementsByTagName('nav')[0];
var box = document.getElementsByClassName('box')[0];
var span = document.getElementsByClassName('sanjiao');

for (var i = 0; i < show.length; i++) {
    show[i].setAttribute('index', i);
    touch.on(show[i], 'tap', function () {
        window.event ? window.event.cancelBubble = true : e.stopPropagation();
        var index = this.getAttribute('index');
        for (var j = 0; j < hide.length; j++) {
            hide[j].setAttribute('index', j);
            hide[j].style.display = 'none';
            hide[index].style.display = 'block';
            show[j].style.color = '';
            show[index].style.color = '#FF8A00';
            span[j].className = 'sanjiao';
            span[index].className = 'sanjiao Dsanjiao';
            nav.className = 'nav';
            box.id = 'box';
            touch.on(hide[j], 'tap', function () {
                var index2 = this.getAttribute('index');
                window.event ? window.event.cancelBubble = true : e.stopPropagation();
                hide[index2].style.display = 'block';
            })
        }
    })
}

touch.on(box,'tap',function(){
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    for (var k = 0; k < show.length; k++) {
        hide[k].style.display = 'none';
        nav.className = '';
        show[k].style.color = '';
        span[k].className = 'sanjiao';
        box.id = '';
    }
})


// for (var i = 0; i < show.length; i++) {
//     show[i].setAttribute('index', i);
//     show[i].onclick = function () {
//         window.event ? window.event.cancelBubble = true : e.stopPropagation();
//         var index = this.getAttribute('index');
//         for (var j = 0; j < hide.length; j++) {
//             hide[j].setAttribute('index', j);
//             hide[j].style.display = 'none';
//             hide[index].style.display = 'block';
//             show[j].style.color = '';
//             show[index].style.color = '#FF8A00';
//             span[j].className = 'sanjiao';
//             span[index].className = 'sanjiao Dsanjiao';
//             nav.className = 'nav';
//             box.id = 'box';
//             hide[j].onclick = function () {
//                 var index2 = this.getAttribute('index');
//                 window.event ? window.event.cancelBubble = true : e.stopPropagation();
//                 hide[index2].style.display = 'block';
//             }
//         }
//     }
// }
// box.onclick = function () {
//     window.event ? window.event.cancelBubble = true : e.stopPropagation();
//     for (var k = 0; k < show.length; k++) {
//         hide[k].style.display = 'none';
//         nav.className = '';
//         show[k].style.color = '';
//         span[k].className = 'sanjiao';
//         box.id = '';
//     }
// }