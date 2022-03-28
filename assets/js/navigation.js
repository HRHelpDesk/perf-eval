
const goToCSVSection = ()=>{
    document.getElementById('startingSection').style.display = 'none';
    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('uploadCSVSection').style.display = 'block';
  }
  
  const goToInputSection = ()=>{
    document.getElementById('startingSection').style.display = 'none';
    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('inputNamesSection').style.display = 'block';
  
 
  }


const LoadPage = (event)=>{


  event.preventDefault();
    document.getElementById('render').innerHTML = pageRenderOne;

    document.getElementById('employeeUploadSection').style.display = 'none';
 
}

let routing = '';
const EPE = (event)=>{
  event.preventDefault();
  document.getElementById('senderSetup').style.display = 'block';

   document.getElementById('pickHub').style.display = 'none';

   routing = 'EPE';
   document.getElementById('evaluationType').innerHTML = '<b>EMPLOYEE PERFORMANCE EVALUATION</b>'
   console.log(routing)


}


const UE = (event)=>{
  document.getElementById('senderSetup').style.display = 'block';

   document.getElementById('pickHub').style.display = 'none';

   routing = 'UE';
   document.getElementById('evaluationType').innerHTML = '<b>UPWARD EVALUATION</b>'
   console.log(routing)


}


const PE360 = (event)=>{

  document.getElementById('senderSetup').style.display = 'block';

   document.getElementById('pickHub').style.display = 'none';

   routing = '360';
   document.getElementById('evaluationType').innerHTML = '<b>360-Degree Performance Evaluation</b>'
   console.log(routing)


}
const returnToPickHub = ()=>{
  window.scrollTo(0,0)
  document.getElementById('emailSetup').style.display = 'none';
  document.getElementById('senderSetup').style.display = 'none';
  document.getElementById('pickHub').style.display = 'block';
  document.getElementById('evaluationType').innerHTML = '<b></b>'
}

const returnToSenderSetup = ()=>{
  document.getElementById('emailSetup').style.display = 'none';

  document.getElementById('senderSetup').style.display = 'block';
}

const emailSetup = ()=>{
  window.scrollTo(0,0)
  if(localStorage.getItem('PE-Employee-List')){
    
  employeeArr =JSON.parse(localStorage.getItem('PE-Employee-List'))
  console.log(employeeArr)
  document.getElementById('employeeTable').innerHTML = ''
     employeeArr.map(i=>{
  document.getElementById('employeeTable').innerHTML += ` <tr>
  <th scope="row">${i.id}</th>
  <td>${i.fName}</td>
  <td>${i.lName}</td>
  <td>${i.email}<span class='delete-btn icon icon--trash--can' onclick='deleteEmployee("${i.id}")'>&nbsp &nbsp </span></td>
  </tr>`
  })

}
  document.getElementById('senderSetup').style.display = 'none';
  document.getElementById('epeHub').style.display = 'none';
  document.getElementById('pipHub').style.display = 'none';
  document.getElementById('360Hub').style.display = 'none';
  document.getElementById('emailSetup').style.display = 'block';

}

const LoadBuilder = ()=>{
  window.scrollTo(0,0)
  if(employeeArr.length < 1){
    alert("You haven't added anyone to send the evaluation to. Please add at least one person before moving on.")

} else {

if(routing === 'EPE'){
  document.getElementById('epeHub').style.display = 'block';
  document.getElementById('emailSetup').style.display = 'none';
  employeeObj = {
    reviewType: 'EPE',    
    employeeName:'',
    employeeId:'',
    jobTitle:'',
    department:'',
    reviewingSupervisor:'',
    reviewPeriod:'',
    periodSupervised:'',
    timeInPosition:'',
    questionsToSendArr:[],
    section4:null,
    dateCreated: date
}
console.log(employeeObj)
}

if(routing === 'PIP'){
  document.getElementById('pipHub').style.display = 'block';
  document.getElementById('emailSetup').style.display = 'none';
}

if(routing === 'UE'){
  document.getElementById('UEHub').style.display = 'block';
  document.getElementById('emailSetup').style.display = 'none';
  employeeObj = {
    reviewType: 'UE',
      employeeName:'',
      department:'',
      reviewPeriod:'',
      questionsToSendArr:[],
      additionalComments:'',
      dateCreated: date
  }
}

if(routing === '360'){
  document.getElementById('360Hub').style.display = 'block';
  document.getElementById('emailSetup').style.display = 'none';
  employeeObj = {
  reviewType: '360',
    employeeName:'',
    employeeId:'',
    department:'',
    reviewPeriod:'',
    questionsToSendArr:[],
    additionalComments:'',
    dateCreated: date
}

console.log(employeeObj)
}
}

}



const returnToStart =()=>{
  document.getElementById('senderSetup').style.display = 'none';
  document.getElementById('epeHub').style.display = 'none';
  document.getElementById('pickHub').style.display = 'block';
 
}

const epeStepOne =()=>{
  window.scrollTo(0,0)
  document.getElementById('epeStepOne').style.display = 'block';
  document.getElementById('epeStepTwo').style.display = 'none';
}

const epeStepTwo =()=>{
  window.scrollTo(0,0)
  document.getElementById('epeStepOne').style.display = 'none';
  document.getElementById('epeStepTwo').style.display = 'block';
  document.getElementById('epeStepThree').style.display = 'none';
}

const epeStepThree =()=>{
  window.scrollTo(0,0)
  document.getElementById('epeStepTwo').style.display = 'none';
  document.getElementById('epeStepThree').style.display = 'block';
  document.getElementById('epeStepFour').style.display = 'none';

  
}

const epeStepFour =()=>{
  window.scrollTo(0,0)
  document.getElementById('epeStepThree').style.display = 'none';
  document.getElementById('epeStepFour').style.display = 'block';
}





const PIP = ()=>{

  document.getElementById('senderSetup').style.display = 'block';

   document.getElementById('pickHub').style.display = 'none';
   document.getElementById('evaluationType').innerHTML = '<b>PERFORMANCE IMPROVEMENT PLAN</b>'

   routing = 'PIP';
   console.log(routing)
}
  


  


