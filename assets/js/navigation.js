
const goToCSVSection = ()=>{
    document.getElementById('startingSection').style.display = 'none';
    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('uploadCSVSection').style.display = 'block';
  }
  
  const goToInputSection = ()=>{
    document.getElementById('startingSection').style.display = 'none';
    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('inputNamesSection').style.display = 'block';
  
     employeeArr =JSON.parse(localStorage.getItem('PE-Employee-List'))
  console.log(employeeArr)
     employeeArr.map(i=>{
  document.getElementById('employeeTable').innerHTML += ` <tr>
  <th scope="row">${i.id}</th>
  <td>${i.fName}</td>
  <td>${i.lName}</td>
  <td>${i.email}<span class='delete-btn' onclick='deleteEmployee("${i.id}")'>delete</span></td>
  </tr>`
  })
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
const returnToPickHub = ()=>{
  document.getElementById('emailSetup').style.display = 'none';

  document.getElementById('pickHub').style.display = 'block';
  document.getElementById('evaluationType').innerHTML = '<b></b>'
}

const returnToSenderSetup = ()=>{
  document.getElementById('emailSetup').style.display = 'none';

  document.getElementById('senderSetup').style.display = 'block';
}

const emailSetup = ()=>{
  document.getElementById('senderSetup').style.display = 'none';
  document.getElementById('epeHub').style.display = 'none';
  document.getElementById('pipHub').style.display = 'none';
  document.getElementById('emailSetup').style.display = 'block';

}

const LoadBuilder = ()=>{
if(routing === 'EPE'){
  document.getElementById('epeHub').style.display = 'block';
  document.getElementById('emailSetup').style.display = 'none';
}

if(routing === 'PIP'){
  document.getElementById('pipHub').style.display = 'block';
  document.getElementById('emailSetup').style.display = 'none';
}
}



const returnToStart =()=>{
  document.getElementById('epeHub').style.display = 'none';
  document.getElementById('pickHub').style.display = 'block';
 
}

const epeStepOne =()=>{
  document.getElementById('epeStepOne').style.display = 'block';
  document.getElementById('epeStepTwo').style.display = 'none';
}

const epeStepTwo =()=>{
  document.getElementById('epeStepOne').style.display = 'none';
  document.getElementById('epeStepTwo').style.display = 'block';
  document.getElementById('epeStepThree').style.display = 'none';
}

const epeStepThree =()=>{
  document.getElementById('epeStepTwo').style.display = 'none';
  document.getElementById('epeStepThree').style.display = 'block';
  document.getElementById('epeStepFour').style.display = 'none';

  
}

const epeStepFour =()=>{
  document.getElementById('epeStepThree').style.display = 'none';
  document.getElementById('epeStepFour').style.display = 'block';
}



const PE360 = (e)=>{
  e.preventDefault();
  console.log('PE360')
  document.getElementById('employeeUploadSection').style.display = 'none';
  document.getElementById('render').innerHTML = `<button onclick="LoadPage()">BACK</button><p>PE360</p>`
}

const PIP = ()=>{

  document.getElementById('senderSetup').style.display = 'block';

   document.getElementById('pickHub').style.display = 'none';
   document.getElementById('evaluationType').innerHTML = '<b>PERFORMANCE IMPROVEMENT PLAN</b>'

   routing = 'PIP';
   console.log(routing)
}
  

const UE = (e)=>{
  console.log('UE')
  document.getElementById('employeeUploadSection').style.display = 'none';
  document.getElementById('render').innerHTML = `<button onclick="LoadPage()">BACK</button><p>PIP</p>`

}
  


