function search(){
    const searchbox=document.getElementById('location').value.toUpperCase()
    const hotelitems=document.getElementById('photos')
    const hotels=document.querySelectorAll('.hotel')
    const hotelName=document.getElementsByClassName('hotel-name')
    for(var i=0;i<hotelName.length;i++){
        let match=hotels[i].getElementsByClassName('hotel-name')[0]

        if(match){
            let textValue = match.innerHTML
            //console.log(textValue.toUpperCase().indexOf(searchbox))
            if(textValue.toUpperCase().indexOf(searchbox)>-1){
                hotels[i].style.display=""
            }
            else{
                hotels[i].style.display='none'
            }
        }
        
    }
}
let bookingBtn=document.getElementsByClassName('booking')
for(let i=0;i<bookingBtn.length;i++){
    bookingBtn[i].addEventListener('click',function(){
        localStorage.setItem('hotelName',document.getElementsByClassName('hotel-name')[i].innerHTML)
        localStorage.setItem('hotelPrice',document.getElementsByClassName('hotel-price')[i].innerHTML)
    })
}
