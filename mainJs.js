const mainNotification=document.getElementById('nav-notification')
const notification=document.getElementById('notification')
let click=1
mainNotification.addEventListener('click',function(evnet){
    if(click===1){
        notification.style.display='block'
        click=2
    }
    else if(click===2){
        notification.style.display='none'
        click=1
    }
})