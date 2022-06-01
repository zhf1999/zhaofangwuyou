



var show = document.getElementsByClassName('show')[0].children;
var hide = document.getElementsByClassName('hide')[0].children;
var nav = document.getElementsByTagName('nav')[0];
var box = document.getElementsByClassName('box')[0];
var span = document.getElementsByClassName('sanjiao');

// for(var i=0;i<show.length;i++){

//     show[i].onclick=function(){
//         console.log(show[i]);
//         window.event ? window.event.cancelBubble = true : e.stopPropagation();
//         for (var j = 0; j < show.length; j++) {
//             // hide[j].style.display = 'none';
//             // hide[0].style.display = 'block';
//             // show[j].style.color = '';
//             // show[0].style.color = '#FF8A00';
//             // span[j].className = 'sanjiao';
//             // span[0].className = 'sanjiao Dsanjiao';
//             // nav.className = 'nav';
//             // box.id = 'box';
//         }
//     }
// }

// show[0].onclick = function () {
//     window.event ? window.event.cancelBubble = true : e.stopPropagation();
//     for (var j = 0; j < show.length; j++) {
//         hide[j].style.display = 'none';
//         hide[0].style.display = 'block';
//         show[j].style.color = '';
//         show[0].style.color = '#FF8A00';
//         span[j].className = 'sanjiao';
//         span[0].className = 'sanjiao Dsanjiao';
//         nav.className = 'nav';
//         box.id = 'box';
//     }
// }
// show[1].onclick = function () {
//     window.event ? window.event.cancelBubble = true : e.stopPropagation();
//     for (var j = 0; j < show.length; j++) {
//         hide[j].style.display = 'none';
//         hide[1].style.display = 'block';
//         show[j].style.color = '';
//         show[1].style.color = '#FF8A00';
//         span[j].className = 'sanjiao';
//         span[1].className = 'sanjiao Dsanjiao';
//         nav.className = 'nav';
//         box.id = 'box';
//     }
// }
// show[2].onclick = function () {
//     window.event ? window.event.cancelBubble = true : e.stopPropagation();
//     for (var j = 0; j < show.length; j++) {
//         hide[j].style.display = 'none';
//         hide[2].style.display = 'block';
//         show[j].style.color = '';
//         show[2].style.color = '#FF8A00';
//         span[j].className = 'sanjiao';
//         span[2].className = 'sanjiao Dsanjiao';
//         nav.className = 'nav';
//         box.id = 'box';
//     }
// }
// show[3].onclick = function () {
//     window.event ? window.event.cancelBubble = true : e.stopPropagation();
//     for (var j = 0; j < show.length; j++) {
//         hide[j].style.display = 'none';
//         hide[3].style.display = 'block';
//         show[j].style.color = '';
//         show[3].style.color = '#FF8A00';
//         span[j].className = 'sanjiao';
//         span[3].className = 'sanjiao Dsanjiao';
//         nav.className = 'nav';
//         box.id = 'box';
//     }
// }





box.onclick = function () {
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    for (var i in hide) {
        hide[i].style.display = 'none';
        nav.className = '';
        show[i].style.color = '';
        span[i].className = 'sanjiao';
        box.id = '';
    }
}