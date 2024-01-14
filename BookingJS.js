const submitbooking=document.getElementById('booking-btn')
const names=document.getElementById('name')
const genders=document.getElementsByClassName('gender')
const mobileNo=document.getElementById('number')
const address=document.getElementById('textarea')
const email=document.getElementById('email')
const mainheading=document.getElementById('heading')
const checkInDate=document.getElementById('checkIn-date')
const checkOutDate=document.getElementById('checkOut-date')
const aadhar=document.getElementById('aadhar')
const noOfPerson=document.getElementById('no-of-person')
const noOfRoom=document.getElementById('no-of-room')
const roomType=document.getElementById('room')
var gender=''
let bookingReference=referenceNumber()
function booking(){
    event.preventDefault()    
    for(let i=0;i<3;i++){ 
        if(genders[i].checked){
            gender=genders[i].value
        }
    }
    if(checkOutDate.value>=checkInDate.value){
        confirmatinBooking()
        let data=new Array();
        data=JSON.parse(localStorage.getItem('Ref'))?JSON.parse(localStorage.getItem('Ref')):[]
        data.push({
            "refNo":bookingReference,
            "name":names.value,
            "email":email.value,
            "gender":gender,
            "mobile":mobileNo.value,
            "address":address.value,
            "aadhar":aadhar.value,
            "dateIn":checkInDate.value,
            "dateOut":checkOutDate.value,
            "person":noOfPerson.value,
            "room":noOfRoom.value,
            "type":roomType.value,
            "hotelName":localStorage.getItem('hotelName'),
            "hotelPrice":localStorage.getItem('hotelPrice')
        })
        localStorage.setItem('Ref',JSON.stringify(data))
    }
    else{
        alert("Check out date must be next or same date")
    }
}

function referenceNumber(){
    const random=Math.floor(Math.random()*(999999-100000)+100000)
    return random
}
function confirmatinBooking(){
    document.getElementById('cutomerName').innerText=names.value
    document.getElementById('customerGender').innerText=gender
    document.getElementById('customerMobile').innerText=mobileNo.value
    document.getElementById('customerAddress').innerText=address.value
    document.getElementById('ref-number').innerText=`Your Booking Reference no is: ${bookingReference}`
    document.getElementById('customerConfirmation').innerText=`Your booking is confirmed in ${localStorage.getItem('hotelName')} at just Rs. ${localStorage.getItem('hotelPrice')} !!!`
    const confirmation=document.getElementById('details')

    confirmation.style.display='block'
    mainheading.style.display='none'

}