function mudouTamanho() {

    if(window.innerWidth >= 768) {
        menu.style.display = 'inline-block'
    } else {
        menu.style.display = 'none';
    }
}

function clickMenu() {
    
    if(menu.style.display == 'block') {

        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';
    }
}

