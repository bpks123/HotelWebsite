const refNumber=document.getElementById('ref-no')
const find=document.getElementById('find-btn')
const data=JSON.parse(localStorage.getItem('Ref'))
const bookingConfirm=document.getElementById('display-booking-confirm')
const bookingNotConfirm=document.getElementById('display-not-confirm')

find.addEventListener('click',function(){
    let alldata=new Array();
    alldata=JSON.parse(localStorage.getItem('Ref'))?JSON.parse(localStorage.getItem('Ref')):[]
    const bookingData=alldata.filter((v)=>{
        return v.refNo==refNumber.value
    })
    console.log(bookingData)
    if(bookingData && bookingData.length>0){
        bookingConfirm.style.display='block'
        bookingNotConfirm.style.display='none'
        bookingDetails(bookingData[0])
    }
    else{
        bookingNotConfirm.style.display='block'
        bookingConfirm.style.display='none'
        document.getElementById('display-profile').style.display='none'
    }

})
function bookingDetails(booking){
    const profile=document.getElementById('display-profile')
    profile.innerHTML=''
    const div=document.createElement('div')
    div.innerHTML=`
    <button id="close-details" onclick="closeDisplay()">x</button>
    <h1>Hi ${booking.name}! your booking is confirmed</h1>
    <h2>Your booking details for Reference: ${booking.refNo}</h2>
    <div>Name : ${booking.name}</div>
    <div>Gender : ${booking.gender}</div>
    <div>Email: ${booking.email}</div>
    <div>Mobile No: ${booking.mobile}</div>
    <div>Address: ${booking.address}</div>
    <div>Aadhar No: ${booking.aadhar}</div>
    <div>checkIn-date: ${booking.dateIn}</div>
    <div>checkOut-date: ${booking.dateOut}</div>
    <div>No of Person: ${booking.person}</div>
    <div>No of Room:${booking.room}</div>
    <div>Room Type: ${booking.type}</div>
    `
    profile.appendChild(div)
}
function closeDisplay(){
    const profile=document.getElementById('display-profile')
    profile.style.display='none'
    bookingNotConfirm.style.display='none'
    bookingConfirm.style.display='none'
}
function showDetails(){
    document.getElementById('display-profile').style.display='block' 
}