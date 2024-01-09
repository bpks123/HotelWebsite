const submitbooking=document.getElementById('booking-btn')
const names=document.getElementById('name')
const genders=document.getElementsByClassName('gender')
const mobileNo=document.getElementById('number')
const address=document.getElementById('textarea')
const email=document.getElementById('email')
const mainheading=document.getElementById('heading')


var gender=''
function booking(){
    event.preventDefault()
    const nameOfPerson=names.value  
    const mobileNoOfPerson=mobileNo.value
    const addressOfPerson=address.value
    const email=document.getElementById('email')
    const aadhar=document.getElementById('aadhar')
    for(let i=0;i<3;i++){ 
        if(genders[i].checked){
            gender=genders[i].value
        }
    }
    confirmatinBooking()
}

function confirmatinBooking(){
    document.getElementById('cutomerName').innerText=names.value
    document.getElementById('customerGender').innerText=gender
    document.getElementById('customerMobile').innerText=mobileNo.value
    document.getElementById('customerAddress').innerHTML=address.value
    const confirmation=document.getElementById('details')

    confirmation.style.display='block'
    mainheading.style.display='none'

}