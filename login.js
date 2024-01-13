const refNumber=document.getElementById('ref-no')
const find=document.getElementById('find-btn')
const data=JSON.parse(localStorage.getItem('Ref'))
console.log(data)
find.addEventListener('click',function(){
    let alldata=new Array();
    alldata=JSON.parse(localStorage.getItem('Ref'))?JSON.parse(localStorage.getItem('Ref')):[]
    const data=alldata.filter((v)=>{
        return v.refNo==refNumber.value
    })
    if(data){
        console.log('Booking')
    }

})