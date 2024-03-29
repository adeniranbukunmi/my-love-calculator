const input1 = document.getElementById('inputOne')
const input2 = document.getElementById('inputTwo')
const All =document.getElementById('showAll')

//console.log(loveCal + '%')



const checkMe =()=>{
    const loveCal = Math.round(Math.random()*100)
        console.log(loveCal, 'here')
        All.innerHTML=''

    if(input1.value == '' || input2.value==''){
        console.error('errrrooo!!!')
        All.innerHTML=` <p style="color:white;"> enter you and a lovers name or two lovers name  </p>`
    }else if(loveCal >=0 && loveCal <= 40){
        All.innerHTML=` <p style="color:white;">dear ${input1.value} and ${input2.value} your love percentage is ${loveCal+'%'} not compatible </p>`
    
    }else if(loveCal >=40 && loveCal <= 60){
        All.innerHTML=` <p style="color:white;">dear ${input1.value} and ${input2.value} your love percentage is ${loveCal+'%'} fairly compatible </p>`

    }else if(loveCal >=60 && loveCal <= 100){
        All.innerHTML=` <p style="color:white;">dear ${input1.value} and ${input2.value} your love percentage is ${loveCal+'%'}  compatible </p>`

    }

}
