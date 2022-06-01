



var show = document.getElementsByClassName('show')[0].children;
var hide = document.getElementsByClassName('hide')[0].children;
var nav = document.getElementsByTagName('nav')[0];
var box = document.getElementsByClassName('box')[0];
var span = document.getElementsByClassName('sanjiao');


show[0].onclick = function () {
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    for (var j = 0; j < show.length; j++) {
        hide[j].style.display = 'none';
        hide[0].style.display = 'block';
        show[j].style.color = '';
        show[0].style.color = '#FF8A00';
        span[j].className = 'sanjiao';
        span[0].className = 'sanjiao Dsanjiao';
        nav.className = 'nav';
        box.id = 'box';
    }
}
hide[0].onclick=function(){
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    hide[0].style.display = 'block';
}
show[1].onclick = function () {
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    for (var j = 0; j < show.length; j++) {
        hide[j].style.display = 'none';
        hide[1].style.display = 'block';
        show[j].style.color = '';
        show[1].style.color = '#FF8A00';
        span[j].className = 'sanjiao';
        span[1].className = 'sanjiao Dsanjiao';
        nav.className = 'nav';
        box.id = 'box';
    }
}
hide[1].onclick=function(){
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    hide[1].style.display = 'block';
}
show[2].onclick = function () {
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    for (var j = 0; j < show.length; j++) {
        hide[j].style.display = 'none';
        hide[2].style.display = 'block';
        show[j].style.color = '';
        show[2].style.color = '#FF8A00';
        span[j].className = 'sanjiao';
        span[2].className = 'sanjiao Dsanjiao';
        nav.className = 'nav';
        box.id = 'box';
    }
}
hide[2].onclick=function(){
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    hide[2].style.display = 'block';
}
show[3].onclick = function () {
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    for (var j = 0; j < show.length; j++) {
        hide[j].style.display = 'none';
        hide[3].style.display = 'block';
        show[j].style.color = '';
        show[3].style.color = '#FF8A00';
        span[j].className = 'sanjiao';
        span[3].className = 'sanjiao Dsanjiao';
        nav.className = 'nav';
        box.id = 'box';
    }
}
hide[3].onclick=function(){
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    hide[3].style.display = 'block';
}

box.onclick = function () {
    for (var i in hide) {
        hide[i].style.display = 'none';
        nav.className = '';
        show[i].style.color='';
        span[i].className='sanjiao';
        box.id = '';
    }
}

//touch.on(show[0],'tap',function(){
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
    // })
    // touch.on(hide[0],'tap',function(){
    //     window.event ? window.event.cancelBubble = true : e.stopPropagation();
    //     hide[0].style.display = 'block';
    // })
    // touch.on(show[1],'tap',function(){
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
    // })
    // touch.on(hide[1],'tap',function(){
    //     window.event ? window.event.cancelBubble = true : e.stopPropagation();
    //     hide[1].style.display = 'block';
    // })
    // touch.on(show[2],'tap',function(){
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
    // })
    // touch.on(hide[2],'tap',function(){
    //     window.event ? window.event.cancelBubble = true : e.stopPropagation();
    //     hide[2].style.display = 'block';
    // })
    // touch.on(show[3],'tap',function(){
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
    // })
    // touch.on(hide[3],'tap',function(){
    //     window.event ? window.event.cancelBubble = true : e.stopPropagation();
    //     hide[3].style.display = 'block';
    // })