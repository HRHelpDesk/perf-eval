const ToStepOneUE = ()=>{
    window.scrollTo(0,0)
    document.getElementById('ueStepOne').style.display = 'block';
    document.getElementById('ueStepTwo').style.display = 'none';
    document.getElementById('ueStepThree').style.display = 'none';
    
}

const ToStepTwoUE = ()=>{
    window.scrollTo(0,0)
    document.getElementById('ueStepOne').style.display = 'none';
    document.getElementById('ueStepTwo').style.display = 'block';
    document.getElementById('ueStepThree').style.display = 'none';
   
}

const ToStepThreeUE = ()=>{
    window.scrollTo(0,0)
    document.getElementById('ueStepOne').style.display = 'none';
    document.getElementById('ueStepTwo').style.display = 'none';
    document.getElementById('ueStepThree').style.display = 'block';

}
