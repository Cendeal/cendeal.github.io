function showMenu() {
    const nav = document.getElementsByClassName("nav-menu")
    if (nav.length > 0) {
        for (let navElement of nav) {
            if (navElement.hidden) {
                navElement.hidden = false
                navElement.expend = false
                // navElement.style.marginTop='';
                // navElement.style.zIndex='';
                navElement.style.transform='scaleY(0)'
                navElement.style.position = ''
            } else {
                navElement.hidden = true
                navElement.expend = true
                navElement.style.transform='scaleY(1)'
                navElement.style.position = 'static'

            }
        }
    }
}

function resizeListen() {
    window.onresize = function () {
        document.querySelectorAll("*").forEach(item => {
            if (item.expend) {
                item.style.display = ""
            }
        })
    };
}

function scrollListen() {
    document.onscroll = function () {
        const top = document.getElementById('top')
        if (top) {
            if (window.scrollY > 0) {
                top.style.position = 'fixed'
            } else {
                top.style.position = ''

            }
        }

    }
}
function openType(type){
    switch (type) {
        case 'wechat':
            alert(type)
            break
        case 'github':
            window.open('https://github.com/Cendeal','__blank')
            break
        case 'gitee':
            window.open('https://gitee.com/Cendeal','__blank')
            break
        case 'email':
            window.open('mailto:1798062051@qq.com')
            break
    }
}
scrollListen()
resizeListen()