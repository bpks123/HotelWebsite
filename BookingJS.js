const submitbooking=document.getElementById('booking-btn')
const names=document.getElementById('name')
const genders=document.getElementsByClassName('gender')
const mobileNo=document.getElementById('number')
const address=document.getElementById('textarea')
const email=document.getElementById('email')
const mainheading=document.getElementById('heading')
submitbooking.addEventListener('click',booking)

var gender=''
function booking(){
    const nameOfPerson=names.value  
    const mobileNoOfPerson=mobileNo.value
    const addressOfPerson=address.value
    const email=document.getElementById('email')
    const aadhar=document.getElementById('aadhar')
    for(let i=0;i<3;i++){ 
        if(genders[i].checked===true)
        gender=genders[i].value
    }
    console.log(nameOfPerson)
    console.log(mobileNoOfPerson)
    console.log(addressOfPerson)
    console.log(email.value)
    console.log(gender)
    if(nameOfPerson.length>2 && gender.length>1 && mobileNoOfPerson.length===10 
        && addressOfPerson.length>1 && email.value.endsWith('@gmail.com')){
        
            confirmatinBooking()
    }
    else{
        alert('Please fill all the deatils')
    }
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